import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { Heart, ShoppingCart } from "lucide-react";
import { ALL_CATEGORY } from "@/Constants/AppConstant";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import {
  ProductCatalogDetailsType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import CategoryProductService from "@/Redux/Product/Services/CategoryProductService";
import AllProductService from "@/Redux/Product/Services/AllProductService";
import CategorySkeleton from "@/components/Skeleton/CategorySkeleton";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
import { productCategorySelector } from "@/Redux/Product/Selectors";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  allProductServiceName,
  categoryProductServiceName,
} from "@/Redux/Product/Actions";
import useCart from "@/hooks/useCart";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import { useSnackbar } from "notistack";

const ProductCatalogPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state;
  const initialCategory = state?.category?.toLowerCase() || "";
  const { enqueueSnackbar } = useSnackbar();
  const { incrementToCart, getQuantity } = useCart();

  const productCategory = useSelector(productCategorySelector);
  const isProductCategoryLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      categoryProductServiceName,
      allProductServiceName,
    ]),
  );

  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState<
    ShopByProductDetailsType[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [wishlistMap, setWishlistMap] = useState<Record<string, boolean>>({});
  const LIMIT_PER_PAGE = 12;

  const dispatch = useDispatch<TAppDispatch>();

  function handleProductClick(
    productCategory: string,
    productName: string,
    productId: string,
  ) {
    const category = replaceSpacesWithHiphen(productCategory);
    const name = replaceSpacesWithHiphen(productName);

    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${name}/${productId}`);
  }

  async function handleCategoryService(type: string, page = 1) {
    if (type === selectedCategory && page === currentPage) return;

    try {
      setFilteredProducts([]);
      setSelectedCategory(type);

      const action =
        type === ALL_CATEGORY
          ? AllProductService({ page, limit: LIMIT_PER_PAGE })
          : CategoryProductService({
            category: type,
            queryParams: { page, limit: LIMIT_PER_PAGE },
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

  async function handleWishList(productId: string) {
    //TODO: Replace phone number with logged in user's phone number &  Wishlist for logged in users only
    const isCurrentlyWishlisted = wishlistMap[productId];
    setWishlistMap((prev) => ({
      ...prev,
      [productId]: !isCurrentlyWishlisted,
    }));

    try {
      const action = isCurrentlyWishlisted
        ? removeWishlistServiceAction({
          phoneNumber: "7632000876",
          productId,
        })
        : addWishListServiceAction({
          phoneNumber: "7632000876",
          productId,
        });

      const result = await dispatch(action);
      if (result) {
        enqueueSnackbar(
          isCurrentlyWishlisted
            ? "Product removed from wishlist"
            : "Product added to wishlist",
          {
            variant: isCurrentlyWishlisted ? "info" : "success",
            anchorOrigin: { vertical: "top", horizontal: "right" },
            autoHideDuration: 2000,
          },
        );
      }
    } catch (error) {
      setWishlistMap((prev) => ({
        ...prev,
        [productId]: isCurrentlyWishlisted,
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
    try {
      await handleCategoryService(initialCategory || ALL_CATEGORY);
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
    incrementToCart(product, productId, quantityAvailable, { navigateTo: ROUTES.CART });
  }

  useEffect(() => {
    pageOps();
  }, []);

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

          <Box
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

            {categoryDetails.length === 0 && <CategorySkeleton />}
          </Box>
        </div>
      </div>

      <div className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => {
              const {
                _id,
                category,
                name,
                imageUrl,
                quantityAvailable,
                isBikeSpecific,
                price,
              } = product;

              const quantityAddedInCart = getQuantity(_id)
              const isDisabled = quantityAddedInCart >= quantityAvailable

              return (
                <div
                  key={_id}
                  onClick={() => handleProductClick(category, name, _id)}
                  className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
                >
                  {/* Product Image */}
                  <div className="relative bg-white p-4 md:p-6 h-48 md:h-64 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) =>
                        (e.currentTarget.src = BikePlaceholderImage)
                      }
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
                  </div>

                  {/* Product Info */}
                  <div className="p-3 md:p-4">
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
                        ₹ {price.toLocaleString()}
                      </span>
                      <div className="flex gap-1 md:gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWishList(product._id);
                          }}
                          className={` p-1.5 md:p-2 rounded-lg transition-all duration-200
                            ${wishlistMap[product._id]
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
                            style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.7 : 1 }}
                            className="p-1.5 md:p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all"
                          >
                            <ShoppingCart size={14} className="md:w-4 md:h-4" />
                          </button>
                          {quantityAddedInCart > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-[5px]
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
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && isProductCategoryLoading && (
            <ProductSkeleton gridSize="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" />
          )}

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
          )}
          <Box
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
                handleCategoryService(selectedCategory, page);
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
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogPage;
