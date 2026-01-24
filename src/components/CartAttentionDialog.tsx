import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useCart from "@/hooks/useCart";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";

export default function CartAttentionDialog() {

  const cartDetails = useSelector(cartDetailSelector)
  const { cartLoading } = useCart()

  return (
    <Dialog open={false} maxWidth="sm" fullWidth>
      {/* Header */}
      {cartLoading && <Loading />}
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <WarningAmberIcon color="warning" />
            <Typography fontWeight={600}>
              Some items need your attention
            </Typography>
          </Box>

          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <Divider />

      {/* Body */}
      <DialogContent>
        <Stack spacing={3} mt={1}>
          {/* OUT OF STOCK ITEM */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid #eee"
            borderRadius={2}
            p={2}
          >
            <Box>
              <Typography fontWeight={600}>Zana 26T Bike</Typography>
              <Typography
                variant="body2"
                color="error"
                display="flex"
                alignItems="center"
                gap={0.5}
                mt={0.5}
              >
                ❌ Out of stock
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="error"
              startIcon={<RemoveCircleOutlineIcon />}
            >
              Remove
            </Button>
          </Box>

          {/* LIMITED STOCK ITEM */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid #eee"
            borderRadius={2}
            p={2}
          >
            <Box>
              <Typography fontWeight={600}>ZPro Helmet</Typography>
              <Typography
                variant="body2"
                color="warning.main"
                display="flex"
                alignItems="center"
                gap={0.5}
                mt={0.5}
              >
                ⚠️ Only 2 left
              </Typography>
            </Box>

            {/* Quantity Controller */}
            <Box
              display="flex"
              alignItems="center"
              border="1px solid #ddd"
              borderRadius={2}
            >
              <Button size="small">−</Button>
              <Typography px={2} fontWeight={600}>
                2
              </Typography>
              <Button size="small">+</Button>
            </Box>
          </Box>
        </Stack>
      </DialogContent>

      <Divider />

      {/* Footer */}
      <DialogActions sx={{ p: 2 }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Update cart</Button>
      </DialogActions>
    </Dialog>
  );
}
