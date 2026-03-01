import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import getWishListServiceAction from "@/Redux/Auth/Services/Wishlist";
import removeWishlistServiceAction, {
  REMOVE_WISHLIST,
} from "@/Redux/Auth/Services/RemoveWishlist";
import { getProfileDetails, WishListProducts } from "@/Redux/Auth/Selectors";
import {
  isServiceLoading,
} from "@/Redux/ServiceTracker/Selectors";
import { removeWishlistName, wishlistName } from "@/Redux/Auth/Actions";
import WishlistCardSkeleton from "@/components/Skeleton/WishlistSkeleton";
import { useSnackbar } from "notistack";
import Loading from "@/components/Loading";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import { useNavigate } from "react-router";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import useCart from "@/hooks/useCart";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import { CartDetailResType } from "@/Redux/Cart/Types";
import { cartModifyServiceName } from "@/Redux/Cart/Action";

const Wishlist = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const { getQuantity } = useCart();

  const actions = useMemo(
    () => ({
      fetchWishlist: () => dispatch(getWishListServiceAction()),
      removeFromWishlist: (data: REMOVE_WISHLIST) =>
        dispatch(removeWishlistServiceAction(data)),
    }),
    [dispatch],
  );
  const wishList = useSelector(WishListProducts);
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [wishlistName]),
  );
  const isRemovingFromWishlist = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [removeWishlistName]),
  );
  const isMovingToCart = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [cartModifyServiceName]),
  );

  const profileDetails = useSelector((state: any) => getProfileDetails(state));

  const getWishList = async () => {
    actions.fetchWishlist();
  };

  const handleRemoveFromWishlist = async (productId: string) => {
    const { phoneNumber = '' } = profileDetails;
    const requestData: REMOVE_WISHLIST = {
      phoneNumber,
      productIds: [productId],
    };
    try {
      await actions.removeFromWishlist(requestData);
      enqueueSnackbar({
        message: "Product removed from wishlist successfully.",
        variant: "success",
      });
    } catch (error: any) {
      enqueueSnackbar({
        message: "Failed to remove from wishlist.",
        variant: "error",
      });
    }
  };

  function handleProductClick(productCategory: string, productName: string, productId: string) {
    const category = replaceSpacesWithHiphen(productCategory)
    const name = replaceSpacesWithHiphen(productName)

    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${name}/${productId}`);
  }

  async function handleMoveToBag(e: React.MouseEvent<HTMLButtonElement>, productId: string) {
    e.stopPropagation();

    const { phoneNumber = '' } = profileDetails;
    const quantityInCart = getQuantity(productId);

    const items = [{
      productId,
      quantity: quantityInCart + 1,
    }]

    try {
      const response = await dispatch(cartModifyServiceAction({
        phoneNumber,
        items
      })) as CartDetailResType

      const { unProcessedItems = [] } = response || {};

      if (unProcessedItems.length) throw new Error();

      enqueueSnackbar({
        message: "Product moved to bag successfully.",
        variant: "success",
      });

      await handleRemoveFromWishlist(productId);
    } catch (error: any) {
      enqueueSnackbar({
        message: "Failed to move item to bag.",
        variant: "error",
      });
    }
  }

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#2a2a2a",
      }}
    >
      <Box
        sx={{
          py: { xs: "16px", md: "24px" },
          px: { xs: "16px", md: "24px" },
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            align="center"
            sx={{
              color: "#fff",
              fontSize: { xs: "2.25rem", md: "3.75rem" },
              fontWeight: 700,
            }}
          >
            Wishlist
          </Typography>
        </Container>
      </Box>
      {(isRemovingFromWishlist || isMovingToCart) && <Loading />}
      <Container
        sx={{
          py: { xs: "32px", md: "64px" },
          px: { xs: "16px", md: "24px" },
        }}
        maxWidth="lg"
      >
        <Grid container spacing={3}>
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
              <WishlistCardSkeleton key={index} />
            ))
            : wishList.map((product) => {
              const { _id = '', name = '', imageUrl = '', quantityAvailable = 0, price = 0, category = '', currencySymbol='' } = product;

              const quantityInCart = getQuantity(_id);

              return (
                <Grid key={_id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
                  <Card
                    sx={{
                      position: "relative",
                      bgcolor: "rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      overflow: "visible",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        borderColor:
                          quantityAvailable === 0 ? "" : "#facc15",
                      },

                      "&:hover .remove-btn": {
                        opacity: 1,
                        transform: "scale(1)",
                      },
                    }}
                  >
                    <IconButton
                      className="remove-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFromWishlist(_id);
                      }}
                      sx={{
                        position: "absolute",
                        top: -10,
                        right: "-10px",
                        bgcolor: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        width: "32px",
                        height: "32px",
                        opacity: 0,
                        transform: "scale(0.8)",
                        transition: "all 0.2s ease",
                        zIndex: 2,

                        "&:hover": {
                          bgcolor: "#facc15",
                          color: "#000",
                        },
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>

                    <Box
                      sx={{
                        position: "relative",
                        bgcolor: "#fff",
                        p: "16px",
                        height: { xs: 192, md: 256 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px 12px 0 0",
                      }}
                      onClick={() => handleProductClick(category, name, _id)}
                    >
                      <Box
                        component="img"
                        src={imageUrl}
                        alt="product"
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                          borderRadius: "12px 12px 0 0",
                          transition: "transform 0.3s ease",
                          filter:
                            quantityAvailable === 0
                              ? "grayscale(100%)"
                              : "none",
                          opacity: quantityAvailable === 0 ? 0.6 : 1,
                        }}
                      />
                      {quantityAvailable === 0 && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 12,
                            left: "50%",
                            transform: "translateX(-50%)",
                            bgcolor: "#fff",
                            px: 2,
                            py: 0.5,
                            borderRadius: "4px",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            color: "#ff5722",
                            letterSpacing: "0.5px",
                            zIndex: 2,
                          }}
                        >
                          OUT OF STOCK
                        </Box>
                      )}
                    </Box>

                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        p: { xs: "8px", md: "12px" },
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onClick={() => handleProductClick(category, name, _id)}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#fff",
                          fontWeight: 500,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          "&:hover": {
                            color: "#facc15",
                          },
                        }}
                      >
                        {name}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#facc15",
                          fontSize: { xs: "1rem", md: "1.25rem" },
                          fontWeight: 600,
                          alignSelf: "flex-end",
                        }}
                      >
                        {`${currencySymbol || '₹'} ${price}`}
                      </Typography>
                    </CardContent>

                    <Button
                      disabled={quantityAvailable === 0 || quantityAvailable <= quantityInCart}
                      sx={{
                        width: "calc(100% - 48px)",
                        height: "48px",
                        borderRadius: "8px",
                        m: "24px",
                        bgcolor: "#fff",
                        color: "#000",
                        fontWeight: 700,
                      }}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleMoveToBag(e, _id)}
                    >
                      Move to Bag
                    </Button>
                  </Card>
                </Grid>
              )
            })}
        </Grid>
        {wishList.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >

            <Typography
              sx={{
                color: "rgba(251, 241, 241, 0.5)",
                mb: '8px'
              }}
              variant='h5'
            >
              No items in your wishlist
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "1.125rem",
                mb: '24px'
              }}
            >
              Discover products you love and save them here for later.
            </Typography>

            <Button
              sx={{
                px: 3,
                py: 1.5,
                bgcolor: "#facc15",
                color: "#000",
                borderRadius: "8px",
                fontWeight: 500,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#eab308",
                },
              }}
              onClick={() => navigate(ROUTES.PRODUCT_CATALOG)}
            >
              View All Products
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Wishlist;
