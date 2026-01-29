import { useMemo } from "react";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import { cartDetailSelector, outOfStockDetails } from "@/Redux/Cart/Selectors";

export default function CartAttentionDialog() {
  const cartDetails = useSelector(cartDetailSelector);
  const outOfStock = useSelector(outOfStockDetails);

  const { processedItems = [] } = cartDetails;

  const data = useMemo(() => {

  }, [outOfStock.length])

  const isOpen = false;

  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth>
      {/* Header */}
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
          {/* OUT OF STOCK */}
          {outOfStock.map((item) => (
            <Box
              key={item.product._id}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              border="1px solid #eee"
              borderRadius={2}
              p={2}
            >
              <Box>
                <img src={item.product.imageUrl} />
              </Box>
              <Box>
                <Typography fontWeight={600}>
                  {item.product.name}
                </Typography>

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
            </Box>
          ))}

          {/* LIMITED STOCK */}
          {processedItems
            // .filter((item: any) => item.available && item.available < item.quantity)
            .map((item: any) => (
              <Box
                key={item._id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border="1px solid #eee"
                borderRadius={2}
                p={2}
              >
                <Box>
                  <Typography fontWeight={600}>
                    {item.product?.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="warning.main"
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                    mt={0.5}
                  >
                    ⚠️ Only {item.available} left
                  </Typography>
                </Box>

                {/* Quantity controller */}
                <Box
                  display="flex"
                  alignItems="center"
                  border="1px solid #ddd"
                  borderRadius={2}
                  overflow="hidden"
                >
                  <IconButton size="small">
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography px={2} fontWeight={600}>
                    {item.quantity}
                  </Typography>

                  <IconButton
                    size="small"
                    disabled={item.quantity >= item.available}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            ))}
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
