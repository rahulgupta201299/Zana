import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Pagination,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { Heart, ShoppingCart, X } from "lucide-react";
import { ALL_CATEGORY } from "@/Constants/AppConstant";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import {
  PaginationType,
  ProductCatalogDetailsType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import { ROUTES } from "@/Constants/Routes";
import CategoryProductService from "@/Redux/Product/Services/CategoryProductService";
import AllProductService from "@/Redux/Product/Services/AllProductService";
import CategorySkeleton from "@/components/Skeleton/CategorySkeleton";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
import { productCategorySelector } from "@/Redux/Product/Selectors";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  allProductServiceName,
  categoryProductServiceName,
  filterProductServiceName,
} from "@/Redux/Product/Actions";
import useCart from "@/hooks/useCart";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import { useSnackbar } from "notistack";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { getSelectedCurrency } from "@/Redux/Landing/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import { encodedGeneratedPath } from "@/Utils/global";
import { ProductModalType } from "./Constant";
import ProductFilter from "./ProductFilter";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import ProductSection from "@/components/ProductSection";

const ProductCatalogPage = ({ isDesktop }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { category: initialCategory = "" } = location.state || {};

  const { enqueueSnackbar } = useSnackbar();
  const { incrementToCart, getQuantity } = useCart();

  const productCategory = useSelector(productCategorySelector);
  const currency = useSelector(getSelectedCurrency);
  const isProductCategoryLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      categoryProductServiceName,
      filterProductServiceName,
      allProductServiceName,
    ]),
  );

  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [subCategory, setSubCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<
    ShopByProductDetailsType[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [wishlistMap, setWishlistMap] = useState<Record<string, boolean>>({});
  const [modalType, setModalType] = useState<string | null>(null);

  const loginDetails = useSelector(getLoginDetails);
  const dispatch = useDispatch<TAppDispatch>();
  // const selectedCurrency = useSelector(getSelectedCurrency);

  const LIMIT_PER_PAGE = 12;

  function handleProductClick(
    productCategory: string,
    productItem: string,
    productId: string,
  ) {
    const path = encodedGeneratedPath(ROUTES.PRODUCT_DETAIL, {
      productCategory,
      productItem,
      productId,
    });

    navigate(path);
  }

  async function handleCategoryService(type: string, page = 1, skip = false) {
    const { phoneNumber = "" } = loginDetails;

    if (type === selectedCategory && page === currentPage && !skip) return;

    try {
      setFilteredProducts([]);
      setSelectedCategory(type);

      const action =
        type === ALL_CATEGORY
          ? AllProductService({
              page,
              limit: LIMIT_PER_PAGE,
              phoneNumber,
            })
          : CategoryProductService({
              category: type,
              queryParams: {
                page,
                limit: LIMIT_PER_PAGE,
                phoneNumber,
              },
            });

      const { data, pagination } = (await dispatch(
        action,
      )) as ProductCatalogDetailsType;

      setFilteredProducts(data);
      setNumberOfPages(pagination.totalPages);
      setCurrentPage(pagination.currentPage);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleWishList(product: ShopByProductDetailsType) {
    const { _id: productId, isWishlist } = product;
    const { phoneNumber = "" } = loginDetails;

    const currentValue = wishlistMap[productId] ?? isWishlist;
    if (!phoneNumber) {
      enqueueSnackbar({
        message: "Login required to save products to your wishlist.",
        variant: "info",
      });
      dispatch(setOpenSignupPopup(true));
      return;
    }
    setWishlistMap((prev) => ({
      ...prev,
      [productId]: !currentValue,
    }));

    try {
      const action = currentValue
        ? removeWishlistServiceAction({
            phoneNumber,
            productIds: [productId],
          })
        : addWishListServiceAction({
            phoneNumber,
            productIds: [productId],
          });

      const result = await dispatch(action);

      if (result) {
        enqueueSnackbar({
          message: currentValue ? "Removed from wishlist" : "Added to wishlist",
          variant: currentValue ? "info" : "success",
        });
      }
    } catch (error) {
      setWishlistMap((prev) => ({
        ...prev,
        [productId]: currentValue,
      }));
    }
  }

  const categoryDetails = useMemo(() => {
    if (productCategory.length === 0) return [];

    const totalCategoryCount = productCategory.reduce(
      (acc, curr) => acc + curr.count,
      0,
    );
    return [
      { name: ALL_CATEGORY, count: totalCategoryCount, icon: "" },
      ...productCategory,
    ];
  }, [productCategory.length]);

  async function pageOps() {
    if (filteredProducts.length && initialCategory === selectedCategory) return;
    try {
      await handleCategoryService(initialCategory || ALL_CATEGORY, 1, true);
    } catch (error: any) {
      console.error(error);
    }
  }

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: ShopByProductDetailsType,
    productId: string,
    quantityAvailable: number,
  ) {
    e.stopPropagation();
    incrementToCart(product, productId, quantityAvailable, {
      navigateTo: ROUTES.CART,
    });
  }

  useEffect(() => {
    pageOps();
  }, [currency, initialCategory]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Hero Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            PRODUCT CATALOG
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8">
            Explore {categoryDetails?.[0]?.count || 0} premium motorcycle
            accessories
          </p>

          <ProductSection
            type="catalog"
            products={filteredProducts}
            categoriesWithCount={categoryDetails}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => handleCategoryService(cat)}
            onChangeFilterProducts={(data, pagination) => {
              setFilteredProducts(data);
              if (pagination) {
                setCurrentPage(pagination.currentPage);
                setNumberOfPages(pagination.totalPages);
              }
            }}
            onClearFilter={() =>            
              handleCategoryService(selectedCategory, currentPage, true)
            }
            isLoading={isProductCategoryLoading}
            page={currentPage}
            totalPages={numberOfPages}
            onPageChange={(p) => {
              setCurrentPage(p);
              handleCategoryService(selectedCategory, p);
            }}
          />

          {/* <Box
            sx={{
              display: "flex",
              gap: 1.5,
              overflowX: "auto",
              px: 1,
              py: 1,
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categoryDetails.map((category, ind) => {
              const { name, count } = category;
              const categoryName = name.toLowerCase();

              return (
                <Button
                  key={ind}
                  onClick={() => handleCategoryService(categoryName)}
                  sx={{
                    flexShrink: 0,
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    fontWeight: 500,
                    borderRadius: "8px",
                    px: 2,
                    py: 1,
                    bgcolor:
                      selectedCategory === categoryName
                        ? "#facc15"
                        : "rgba(255,255,255,0.1)",
                    color: selectedCategory === categoryName ? "#000" : "#fff",
                    "&:hover": {
                      bgcolor:
                        selectedCategory === categoryName
                          ? "#facc15"
                          : "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  {categoryName === ALL_CATEGORY
                    ? "All Products"
                    : categoryName}{" "}
                  ({count})
                </Button>
              );
            })}

            {categoryDetails.length === 0 && isProductCategoryLoading && (
              <CategorySkeleton />
            )}
          </Box> */}
        </div>
      </div>

      {/* <Box
        sx={{
          py: {
            md: 6,
            xs: 2,
          },
          px: {
            md: 6,
            xs: 4
          }
        }}
      >

        <Box
          sx={{
            display: {
              md: 'none !important',
              xs: 'flex'
            },
            justifyContent: 'flex-end',
            mb: 4,
          }}>
          <Button
            sx={{
              backgroundColor: "transparent",
              border: "1px solid #FACC15",
              color: "#FACC15",
              fontWeight: 800,
              px: 2.5, // 20px
              py: 1,   // 8px
              borderRadius: "8px",
              textTransform: "none",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#FACC15",
                color: "#000",
                border: "1px solid #FACC15",
              },
            }}
            onClick={() => setModalType(ProductModalType.APPLY_FILTERS)}
          >
            Apply Filters
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          {/* SIDEBAR */}
      {/* <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
            lg: "block",
          },
          flexBasis: {
            lg: "25%",
            md: "30%",
          },
          maxWidth: {
            lg: "25%",
            md: "30%",
          },
          width: "100%",
          position: "sticky",
          top: 20,
        }}
      >
        {isDesktop && (
          <ProductFilter
            page={currentPage}
            category={selectedCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            onChangeFilterProducts={(
              data: ShopByProductDetailsType[],
              pagination?: PaginationType,
            ) => {
              setFilteredProducts(data);
              pagination?.currentPage && setCurrentPage(pagination.currentPage);
              pagination?.totalPages && setNumberOfPages(pagination.totalPages);
            }}
            clearFilter={() => {
              subCategory &&
                handleCategoryService(selectedCategory, currentPage, true);
            }}
          />
        )}
      </Box> */}

      {/* CONTENT */}
      {/* <Box
        sx={{
          flexGrow: 1, // 👈 takes remaining width
          flex: 1,
        }}
      >
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => {
            const {
              _id,
              category,
              name,
              imageUrl,
              quantityAvailable,
              isBikeSpecific,
              price,
              currencySymbol,
              isComingSoon,
            } = product;

            const quantityAddedInCart = getQuantity(_id);
            const isDisabled = quantityAddedInCart >= quantityAvailable;

            return (
              <div
                key={_id}
                onClick={() => handleProductClick(category, name, _id)}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
              >
                {/* Product Image */}
                {/* <div className="relative bg-white p-4 md:p-6 h-48 md:h-64 flex items-center justify-center">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) =>
                      (e.currentTarget.src = BikePlaceholderImage)
                    }
                    style={{
                      filter:
                        quantityAvailable === 0 ? "grayscale(100%)" : "none",
                      opacity: quantityAvailable === 0 ? 0.6 : 1,
                    }}
                  />
                  {isBikeSpecific && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  {!isBikeSpecific && (
                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      UNIVERSAL
                    </div>
                  )}
                  {quantityAvailable === 0 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="bg-white px-4 py-1 rounded text-[13px] font-semibold text-orange-500 shadow-sm">
                        {isComingSoon ? "COMING SOON" : "OUT OF STOCK"}
                      </div>
                    </div>
                  )}
                </div> */}

                {/* Product Info */}
                {/* <div className="p-3 md:p-4">
                  <div className="mb-1">
                    <span className="text-xs text-yellow-400 font-medium">
                      {category}
                    </span>
                  </div>
                  <h3 className="text-white text-sm md:text-lg font-bold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 text-lg md:text-xl font-bold">
                      {currencySymbol} {price?.toLocaleString()}
                    </span>
                    <div className="flex gap-1 md:gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWishList(product);
                        }}
                        className={` p-1.5 md:p-2 rounded-lg transition-all duration-200
                            ${
                              (wishlistMap[product._id] ?? product.isWishlist)
                                ? "bg-yellow-400 text-black"
                                : "bg-white/10 text-white hover:bg-yellow-400 hover:text-black"
                            }
   `}
                      >
                        <Heart size={14} className="md:w-4 md:h-4" />
                      </button>
                      <div className="relative inline-flex">
                        <button
                          onClick={(e: MouseEvent<HTMLButtonElement>) =>
                            handleAddToCart(e, product, _id, quantityAvailable)
                          }
                          style={{
                            cursor: isDisabled ? "not-allowed" : "pointer",
                            opacity: isDisabled ? 0.7 : 1,
                          }}
                          className="p-1.5 md:p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all"
                        >
                          <ShoppingCart size={14} className="md:w-4 md:h-4" />
                        </button>
                        {quantityAddedInCart > 0 && (
                          <span
                            className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-[5px]
                                bg-red-600 text-white text-[11px] font-bold
                                rounded-full flex items-center justify-center
                                leading-none shadow-md"
                          >
                            {quantityAddedInCart}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* </div>
            );
          })} */}

          {/* {filteredProducts.length === 0 && isProductCategoryLoading && (
            <ProductSkeleton />
          )} */}
        {/* </div>
        {filteredProducts.length === 0 && !isProductCategoryLoading && (
          <div className="text-center py-16">
            <p className="text-white/50 text-lg mb-4">
              No products found in this category
            </p>
            <button
              onClick={() => handleCategoryService(ALL_CATEGORY)}
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              View All Products
            </button>
          </div>
        )} */}

        {/* <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Pagination
            count={numberOfPages}
            page={currentPage}
            siblingCount={1}
            boundaryCount={0}
            onChange={(_, page) => {
              setCurrentPage(page);
              !subCategory && handleCategoryService(selectedCategory, page);
            }}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
                fontSize: "1.25rem",
                fontWeight: "bold",
              },
              "& .Mui-selected": {
                color: "#3B82F6",
                backgroundColor: "transparent",
              },
              "& .MuiPaginationItem-root:hover": {
                color: "yellow",
                backgroundColor: "transparent",
              },
              "& .Mui-disabled": {
                color: "#f9f8f8ff",
              },
            }}
          />
        </Box>
      </Box> */} 
      {/* </Box> */}
      {/* </Box> */}

      {/* {
        !isDesktop && (
          <Dialog
            open={modalType === ProductModalType.APPLY_FILTERS}
            onClose={() => setModalType(null)}
            fullWidth
            maxWidth="sm"
            keepMounted
          >
            <DialogContent sx={{ p: 0, position: "relative" }}>

              {/* Close Button */}
      {/* <IconButton
                onClick={() => setModalType(null)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              >
                <X />
              </IconButton> */}

      {/* Filter Component */}
      {/* <ProductFilter
                page={currentPage}
                category={selectedCategory}
                subCategory={subCategory}
                setSubCategory={setSubCategory}
                onChangeFilterProducts={(data: ShopByProductDetailsType[], pagination?: PaginationType) => {
                  setFilteredProducts(data)
                  setModalType(null)
                  pagination?.currentPage && setCurrentPage(pagination.currentPage)
                  pagination?.totalPages && setNumberOfPages(pagination.totalPages)
                }}
                clearFilter={() => {
                  subCategory && handleCategoryService(selectedCategory, currentPage, true)
                  setModalType(null)
                }}
              />
            </DialogContent>
          </Dialog> */}
      {/* ) */}
      {/* } */}
    </div>
  );
};

export default withDeviceDetails(ProductCatalogPage);
