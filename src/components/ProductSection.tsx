import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Chip,
  Tooltip,
} from "@mui/material";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import ProductSkeleton from "./Skeleton/ProductSkeleton";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import useCart from "@/hooks/useCart";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  bikeProductServiceName,
  productCategoryCountServiceName,
  shopByBikeServiceName,
} from "@/Redux/Product/Actions";
import { ALL_CATEGORY } from "@/Constants/AppConstant";
import { Heart, ShoppingCart } from "lucide-react";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import { useSnackbar } from "notistack";
import { getProfileDetails } from "@/Redux/Auth/Selectors";
import { useState } from "react";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
type Props = {
  filteredBikeProducts: any[];
  setSelectedCategory: (cat: string) => void;
};

const ProductsSection = ({
  filteredBikeProducts,
  setSelectedCategory,
}: Props) => {
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      bikeProductServiceName,
      shopByBikeServiceName,
      productCategoryCountServiceName,
    ]),
  );
  const dispatch = useDispatch<TAppDispatch>();
  const profileDetails = useSelector(getProfileDetails);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { incrementToCart, getQuantity } = useCart();

  //This whole logic will change after Be changes///
  const [wishlistMap, setWishlistMap] = useState<Record<string, boolean>>({});

  function handleProductClick(
    productCategory: string,
    productSubCategory: string,
    productId: string,
  ) {
    const category = replaceSpacesWithHiphen(productCategory);
    const subCategory = replaceSpacesWithHiphen(productSubCategory);
    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${subCategory}/${productId}`);
  }

  async function handleWishList(product: ShopByProductDetailsType) {
    const { _id: productId, isWishlist } = product;
    const { phoneNumber = "" } = profileDetails;
    const currentValue = wishlistMap[productId] ?? isWishlist;
    if(!phoneNumber){
           enqueueSnackbar({
              message:  "Login required to save products to your wishlist.",
              variant: "info",
            });
          dispatch(setOpenSignupPopup(true));
          return
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

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {filteredBikeProducts.map((product) => {
          const {
            _id,
            category,
            name,
            shortDescription,
            imageUrl,
            isBikeSpecific,
            price,
            currencySymbol,
            quantityAvailable,
          } = product;

          const quantityAddedInCart = getQuantity(_id);
          const isDisabled = quantityAddedInCart >= quantityAvailable;

          return (
            <Grid size={{ xs: 6, md: 3, sm: 4 }} key={product._id}>
              <Card
                onClick={() => handleProductClick(category, name, _id)}
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  bgcolor: "rgba(255,255,255,0.05)",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "#facc15",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    p: 3,
                    height: 260,
                    bgcolor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={imageUrl}
                    alt={name}
                    onError={(e: any) =>
                      (e.currentTarget.src = BikePlaceholderImage)
                    }
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      transition: "transform 0.3s",
                      ".MuiCard-root:hover &": {
                        transform: "scale(1.1)",
                      },
                      filter:
                        quantityAvailable === 0 ? "grayscale(100%)" : "none",
                      opacity: quantityAvailable === 0 ? 0.6 : 1,
                    }}
                  />
                  {quantityAvailable === 0 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 0,
                        right: 0,
                        minWidth:'150px',
                        width: "150px", 
                        display:'flex',
                        alignSelf:'center',
                        margin: "0 auto",
                        bgcolor: "#fff",
                        px: 2,
                        py: 0.5,
                        borderRadius: "4px",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "#ff5722",
                        letterSpacing: "0.5px",
                        zIndex: 2,
                      }}
                    >
                      OUT OF STOCK
                    </Box>
                  )}

                  {isBikeSpecific && (
                    <Chip
                      label="FEATURED"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "#facc15",
                        color: "black",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        borderRadius: "999px",
                        px: 1,
                      }}
                    />
                  )}

                  {!isBikeSpecific && (
                    <Chip
                      label="UNIVERSAL"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        bgcolor: "primary.main",
                        color: "white",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        borderRadius: "999px",
                        px: 1,
                      }}
                    />
                  )}
                </Box>

                {/* Content */}
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography variant="caption" color="#facc15">
                    {category}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      mb: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "#facc15",
                      },
                    }}
                  >
                    {name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {shortDescription}
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#facc15",
                        fontWeight: "bold",
                      }}
                    >
                      {currencySymbol || "₹"} {price.toLocaleString()}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "8px",
                      }}
                    >
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWishList(product);
                        }}
                        sx={{
                          width: { xs: 28, md: 36 },
                          height: { xs: 28, md: 36 },
                          borderRadius: 2,
                          color:
                            (wishlistMap[product._id] ?? product.isWishlist)
                              ? "black"
                              : "white",
                          bgcolor:
                            (wishlistMap[product._id] ?? product.isWishlist)
                              ? "#FACC15"
                              : "rgba(255,255,255,0.1)",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: "#FACC15",
                            color: "black",
                          },
                        }}
                      >
                        <Heart size={14} className="md:w-4 md:h-4" />
                      </IconButton>
                      <Box position="relative">
                        <Tooltip
                          title="Out of stock"
                          arrow
                          disableHoverListener={!isDisabled}
                        >
                          <span>
                            <IconButton
                              onClick={(e) => {
                                if (isDisabled) return;
                                e.stopPropagation();
                                incrementToCart(
                                  product,
                                  _id,
                                  quantityAvailable,
                                  {
                                    navigateTo: ROUTES.CART,
                                  },
                                );
                              }}
                              sx={{
                                width: { xs: 28, md: 36 },
                                height: { xs: 28, md: 36 },
                                borderRadius: 2,

                                bgcolor: "#facc15",
                                color: "black",

                                cursor: isDisabled ? "not-allowed" : "pointer",
                                opacity: isDisabled ? 0.5 : 1,
                                pointerEvents: "auto",

                                transition: "all 0.2s",

                                "&:hover": {
                                  bgcolor: isDisabled ? "#facc15" : "#EAB308",
                                },
                              }}
                            >
                              <ShoppingCart fontSize="small" />
                            </IconButton>
                          </span>
                        </Tooltip>

                        {quantityAddedInCart > 0 && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: -4,
                              right: -4,
                              minWidth: 18,
                              height: 18,
                              px: "5px",
                              bgcolor: "error.main",
                              color: "white",
                              fontSize: 11,
                              fontWeight: "bold",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              lineHeight: 1,
                            }}
                          >
                            {quantityAddedInCart}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* ================= Loading ================= */}
      {filteredBikeProducts.length === 0 && isLoading && (
        <ProductSkeleton gridSize="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6" />
      )}

      {/* ================= Empty ================= */}
      {filteredBikeProducts.length === 0 && !isLoading && (
        <Box textAlign="center" py={8}>
          <Typography color="rgba(255,255,255,0.5)" mb={2}>
            No products found in this category
          </Typography>
          <Button
            variant="contained"
            color="warning"
            onClick={() => setSelectedCategory(ALL_CATEGORY)}
          >
            View All Products
          </Button>
        </Box>
      )}
    </>
  );
};

export default ProductsSection;
