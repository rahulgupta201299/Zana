
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ALL_CATEGORY } from "@/Constants/AppConstant";
import { ROUTES } from "@/Constants/Routes";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  allProductServiceName,
  bikeProductServiceName,
  categoryProductServiceName,
  filterProductServiceName,
  productCategoryCountServiceName,
  shopByBikeServiceName,
} from "@/Redux/Product/Actions";
import {
  PaginationType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import { encodedGeneratedPath } from "@/Utils/global";
import useCart from "@/hooks/useCart";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/pages/ProductCatalog/ProductFilter";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
import CategorySkeleton from "@/components/Skeleton/CategorySkeleton";
import Products from "./Product";

const FILTER_MODAL = "APPLY_FILTERS";

type Props = {

  type: "bike" | "catalog";
  products: ShopByProductDetailsType[];
  categoriesWithCount: { name: string; count: number }[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onChangeFilterProducts: (
    data: ShopByProductDetailsType[],
    pagination?: PaginationType,
  ) => void;
  onClearFilter: () => void;
  isLoading?: boolean;
  modelId?: string;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function ProductSection({
  type,
  products,
  categoriesWithCount,
  selectedCategory,
  onSelectCategory,
  onChangeFilterProducts,
  onClearFilter,
  isLoading,
  modelId,
  page = 1,
  totalPages = 0,
  onPageChange,
}: Props) {
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { incrementToCart, getQuantity } = useCart();
  const loginDetails = useSelector(getLoginDetails);

  const isProductLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      bikeProductServiceName,
      shopByBikeServiceName,
      productCategoryCountServiceName,
      categoryProductServiceName,
      allProductServiceName,
      filterProductServiceName,
    ]),
  );

  const [wishlistMap, setWishlistMap] = useState<Record<string, boolean>>({});
  const [subCategory, setSubCategory] = useState<string>("");
  const [modalType, setModalType] = useState<string | null>(null);

  function handleProductClick(
    productCategory: string,
    productItem: string,
    productId: string,
  ) {
    navigate(
      encodedGeneratedPath(ROUTES.PRODUCT_DETAIL, {
        productCategory,
        productItem,
        productId,
      }),
    );
  }

  async function handleWishList(
    e: React.MouseEvent,
    product: ShopByProductDetailsType,
  ) {
    e.stopPropagation();
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

    setWishlistMap((prev) => ({ ...prev, [productId]: !currentValue }));

    try {
      const action = currentValue
        ? removeWishlistServiceAction({ phoneNumber, productIds: [productId] })
        : addWishListServiceAction({ phoneNumber, productIds: [productId] });

      const result = await dispatch(action);
      if (result) {
        enqueueSnackbar({
          message: currentValue ? "Removed from wishlist" : "Added to wishlist",
          variant: currentValue ? "info" : "success",
        });
      }
    } catch {
      setWishlistMap((prev) => ({ ...prev, [productId]: currentValue }));
    }
  }

  function handleAddToCart(
    e: React.MouseEvent,
    product: ShopByProductDetailsType,
  ) {
    e.stopPropagation();
    const { _id, quantityAvailable } = product;
    incrementToCart(product, _id, quantityAvailable, {
      navigateTo: ROUTES.CART,
    });
  }

  const showPagination = type === "catalog" && totalPages > 1;

  return (
    <>
      {/* Category Pills */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
          px: 1,
          pb: "32px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categoriesWithCount.map((category, ind) => {
          const { name, count } = category;
          const categoryName = name.toLowerCase();

          return (
            <Button
              key={ind}
              onClick={() => {
                setSubCategory("");
                onSelectCategory(categoryName);
              }}
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
              {categoryName === ALL_CATEGORY ? "All Products" : categoryName} (
              {count})
            </Button>
          );
        })}

        {categoriesWithCount.length === 0 && isLoading && <CategorySkeleton />}
      </Box>

      {/* Mobile Filter Button */}
      <div className="lg:hidden flex justify-end mb-4">
        <Button
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #FACC15",
            color: "#FACC15",
            fontWeight: 800,
            px: 2.5,
            py: 1,
            borderRadius: "8px",
            textTransform: "none",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#FACC15",
              color: "#000",
              border: "1px solid #FACC15",
            },
          }}
          onClick={() => setModalType(FILTER_MODAL)}
        >
          Apply Filters
        </Button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 hidden lg:block self-start sticky top-5">
          <ProductFilter
            type={type}
            modelId={modelId}
            page={page}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            category={selectedCategory}
            onChangeFilterProducts={onChangeFilterProducts}
            clearFilter={() => {    
              onClearFilter();
               setSubCategory("");
            }}
          />
        </div>

        <div className="lg:col-span-3">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {products.map((product) => (
              <Grid size={{ xs: 6, md: 4, sm: 4 }} key={product._id}>
                <Products
                  product={product}
                  quantityAddedInCart={getQuantity(product._id)}
                  isWishlisted={wishlistMap[product._id] ?? product.isWishlist}
                  onProductClick={() =>
                    handleProductClick(
                      product.category,
                      product.name,
                      product._id,
                    )
                  }
                  onAddToCart={(e) => handleAddToCart(e, product)}
                  onWishList={(e) => handleWishList(e, product)}
                />
              </Grid>
            ))}
          </Grid>

          {/* Loading */}
          {products.length === 0 && isProductLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <ProductSkeleton />
            </div>
          )}

          {/* Empty */}
          {products.length === 0 && !isProductLoading && (
            <Box textAlign="center" py={8}>
              <Typography color="rgba(255,255,255,0.5)" mb={2}>
                No products found in this category
              </Typography>
              <Button
                variant="contained"
                color="warning"
                onClick={() => onSelectCategory(ALL_CATEGORY)}
              >
                View All Products
              </Button>
            </Box>
          )}

          {/* Pagination — catalog only */}
          {showPagination && (
            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={totalPages}
                page={page}
                siblingCount={1}
                boundaryCount={0}
                onChange={(_, p) => onPageChange?.(p)}
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
                  "& .Mui-disabled": { color: "#f9f8f8ff" },
                }}
              />
            </Box>
          )}
        </div>
      </div>

      {/* Mobile Modal */}
      {modalType === FILTER_MODAL && (
        <Dialog
          open={true}
          onClose={() => setModalType(null)}
          fullWidth
          maxWidth="sm"
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
              },
            },
          }}
        >
          <DialogContent sx={{ p: 0, position: "relative" }}>
            <IconButton
              onClick={() => setModalType(null)}
              sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
            >
              <X />
            </IconButton>
            <ProductFilter
              type={type}
              modelId={modelId}
              page={page}
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              category={selectedCategory}
              onChangeFilterProducts={(data, pagination) => {
                setModalType(null);
                onChangeFilterProducts(data, pagination);
              }}
              clearFilter={() => {
                setModalType(null);
                setSubCategory("");
                onClearFilter();
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
