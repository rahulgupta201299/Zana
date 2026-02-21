import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { outOfStockDetails } from "@/Redux/Cart/Selectors";
import { useMemo } from "react";
import { OutOfStockDetail } from "@/Redux/Cart/Types";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { clearOutofStockItems } from "@/Redux/Cart/Reducer";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import { getProfileDetails } from "@/Redux/Auth/Selectors";
import { ROUTES } from "@/Constants/Routes";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { addWishlistName } from "@/Redux/Auth/Actions";
import Loading from "./Loading";

type ItemCardType = {
  productDetail: OutOfStockDetail
  isAvailable: boolean
}

function ItemCard(props: ItemCardType) {
  const { productDetail, isAvailable } = props;

  const { availableQuantity, quantity: unavailableQuantity, product } = productDetail
  const { imageUrl = '', name = '' } = product

  return (
    <Box
      sx={{
        bgcolor: "#181818",
        border: "1px solid #1f1f1f",
        borderRadius: 2,
        p: 2,
        mb: 2,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          src={imageUrl}
          alt={name}
          sx={{
            width: 70,
            height: 70,
            borderRadius: 1.5,
            objectFit: "cover",
          }}
        />

        <Box flex={1}>
          <Typography fontWeight={600}>{name}</Typography>

          {!isAvailable ? (
            <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
              <WarningAmberRoundedIcon sx={{ fontSize: 18, color: "#f59e0b" }} />
              <Typography color="#f59e0b" fontSize={13}>
                {unavailableQuantity} not added — out of stock
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
              <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#22c55e" }} />
              <Typography color="#22c55e" fontSize={13}>
                {availableQuantity}/{availableQuantity + unavailableQuantity} added
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </Box>
  );
}


export default function CartAttentionDialog() {

  const outOfStock = useSelector(outOfStockDetails)
  const profileDetails = useSelector(getProfileDetails)
  const isLoading = useSelector<TAppStore, boolean>((state) => isServiceLoading(state, [addWishlistName]));

  const dispatch = useDispatch<TAppDispatch>()
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const unavailableStockCount = useMemo(() => {
    return outOfStock.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [outOfStock.length])

  const availableStockCount = useMemo(() => {
    return outOfStock.reduce((acc, curr) => acc + curr.availableQuantity, 0)
  }, [outOfStock.length])

  function handleClose() {
    // @ts-ignore
    dispatch(clearOutofStockItems())
  }

  async function handleMoveToWishlist() {
    const { phoneNumber = '' } = profileDetails;
    const productIds = outOfStock.map(item => item.product._id);
    try {
      await dispatch(addWishListServiceAction({
        phoneNumber,
        productIds
      }))
      navigate(ROUTES.WISHLIST)
      handleClose();
    } catch (error: any) {
      enqueueSnackbar({
        message: "Failed to move items to wishlist",
        variant: "error",
      })
    }
  }

  return (
    <Dialog
      open={true}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#121212",
          color: "#fff",
          borderRadius: 3,
          border: '1px solid #ccc'
        },
      }}
    >
      {isLoading && <Loading />}
      <DialogTitle>
        <Stack direction="row" alignItems="center" spacing={1}>
          <WarningAmberRoundedIcon sx={{ color: "#f59e0b" }} />
          <Box flex={1}>
            <Typography fontWeight={700}>
              Limited availability — adjustments needed
            </Typography>
            <Typography variant="body2" color="grey.400">
              Only {availableStockCount} out of {availableStockCount + unavailableStockCount} requested items were added
            </Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#aaa" }} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Typography fontWeight={600} mb={1}>
          Available Items
        </Typography>

        {
          outOfStock.map(product => (
            <ItemCard key={product.product._id} productDetail={product} isAvailable={true} />
          ))
        }

        <Divider sx={{ my: 3, borderColor: "#1f1f1f" }} />

        <Typography fontWeight={600} mb={1}>
          Unavailable Items
        </Typography>

        {
          outOfStock.map(product => (
            <ItemCard key={product.product._id} productDetail={product} isAvailable={false} />
          ))
        }

      </DialogContent>

      <DialogActions
        sx={{ p: 2, width: '90%', display: 'flex', justifyContent: 'center', margin: 'auto', gap: '10px' }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#2563eb",
            borderRadius: 2,
            py: 1.2,
            fontWeight: 600,
            ":hover": { bgcolor: "#1d4ed8" },
          }}
          onClick={handleMoveToWishlist}
        >
          Move To Wishlist
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: 'gray',
            borderRadius: 2,
            py: 1.2,
            fontWeight: 600,
            ":hover": { opacity: 0.5 },
          }}
          onClick={handleClose}
        >
          Continue Shopping
        </Button>
      </DialogActions>
    </Dialog>
  );
}
