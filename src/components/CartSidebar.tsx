import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { X, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TAppDispatch } from "@/Configurations/AppStore";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import { cartDetailSelector, openCartSelector } from "@/Redux/Cart/Selectors";
import useCart from "@/hooks/useCart";
import { ROUTES } from "@/Constants/Routes";

interface CartSidebarProps {
  variant?: "drawer" | "checkout";
}

const CartSidebar = ({
  variant = "drawer",
}: CartSidebarProps) => {
  const navigate = useNavigate();

  const cartDetail = useSelector(cartDetailSelector);
  const isOpenCart = useSelector(openCartSelector)

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const dispatch = useDispatch<TAppDispatch>()

  const { getTotalQuantity, incrementToCart, decrementToCart, removeItemToCart } = useCart()

  const { subtotal, discountAmount: discount, totalAmount: total, processedItems = [] } = cartDetail;

  const totalItems = getTotalQuantity()

  function onClose() {
    dispatch(setOpenCart(false))
  }


  const CartContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          p: { xs: 2, md: 3 },
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography fontWeight={700} fontSize={{ xs: 22, md: 28 }}>
            Cart
          </Typography>
          <Typography sx={{ color: "white", opacity: 0.6, mt: 0.5 }}>
            {totalItems} {totalItems === 1 ? "PRODUCT" : "PRODUCTS"}
          </Typography>
        </Box>

        {variant === "drawer" && (
          <IconButton
            onClick={onClose}
            sx={{ color: "white", "&:hover": { color: "yellow" } }}
          >
            <X size={26} />
          </IconButton>
        )}
      </Box>


      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {processedItems.length === 0 ? (
          <Box sx={{ textAlign: "center", opacity: 0.5, mt: 10 }}>
            <Typography>Your cart is empty</Typography>
            <Typography sx={{ opacity: 0.6, mt: 1 }}>
              Add products to get started
            </Typography>
          </Box>
        ) : (
          processedItems.map((item) => {
            const { product, quantity = 0, price = 0 } = item;
            const { _id: productId = '', imageUrl = '', name = '', shortDescription = '' } = product || {}

            return (
              <Box
                key={item.product._id}
                onClick={() => setActiveItem(productId)}
                sx={{
                  border: "2px solid",
                  borderColor:
                    activeItem === item.product._id ? "yellow" : "transparent",
                  bgcolor: "rgba(255,255,255,0.05)",
                  borderRadius: 2,
                  transition: "0.2s",
                  p: 2,
                  display: "flex",
                  gap: 2,
                }}
              >

                <Box
                  sx={{
                    width: { xs: 80, md: 110 },
                    height: { xs: 80, md: 110 },
                    bgcolor: "white",
                    borderRadius: 2,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: 8,
                    }}
                  />
                </Box>


                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      fontWeight="bold"
                      fontSize={{ xs: 16, md: 18 }}
                      sx={{ mb: 0.5 }}
                    >
                      {name}
                    </Typography>
                    <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
                      {shortDescription || "Premium motorcycle accessory"}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mt: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >

                    <Typography
                      color="yellow"
                      fontWeight={700}
                      fontSize={{ xs: 18, md: 22 }}
                    >
                      ₹ {price.toLocaleString()}
                    </Typography>


                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "rgba(255,255,255,0.1)",
                        borderRadius: 2,
                      }}
                    >
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          decrementToCart(productId, { saveToDb: true })
                        }}
                        sx={{
                          color: "white",
                          "&:hover": { color: "yellow" },
                        }}
                      >
                        <Minus size={18} />
                      </IconButton>

                      <Typography sx={{ width: 30, textAlign: "center" }}>
                        {quantity}
                      </Typography>

                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          incrementToCart(product, item.product._id, item.product.quantityAvailable, { saveToDb: true })
                        }}
                        sx={{
                          color: "white",
                          "&:hover": { color: "yellow" },
                        }}
                      >
                        <Plus size={18} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          })
        )}
      </Box>


      {processedItems.length > 0 && (
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            p: { xs: 2, md: 3 },
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              borderColor: "white",
              color: "white",
              mb: "32px",
              py: "16px",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { bgcolor: "white", color: "black" },
            }}
            onClick={() => {
              onClose?.();
              navigate("/product-catalog");
            }}
          >
            + Add more products
          </Button>


          <Box
            sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
          >
            <Typography sx={{ opacity: 0.7 }}>Subtotal</Typography>
            <Typography fontWeight={600}>
              ₹ {subtotal.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Box>


          {discount > 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "lightgreen",
                mb: 1,
              }}
            >
              <Typography>Discount (10%)</Typography>
              <Typography>
                - ₹{" "}
                {discount.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </Typography>
            </Box>
          )}


          {subtotal > 8000 && subtotal <= 10000 && (
            <Box
              sx={{
                bgcolor: "rgba(255,255,0,0.1)",
                border: "1px solid rgba(255,255,0,0.3)",
                p: 1.5,
                borderRadius: 1,
                textAlign: "center",
                mb: 2,
              }}
            >
              <Typography sx={{ color: "yellow", fontSize: 12 }}>
                Add ₹ {(10000 - subtotal).toLocaleString()} more to get 10%
                discount!
              </Typography>
            </Box>
          )}


          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              pt: 2,
            }}
          >
            <Box>
              <Typography sx={{ opacity: 0.6, fontSize: 12 }}>
                Total Cart Value
              </Typography>
              <Typography fontWeight={700} fontSize={18}>
                Total
              </Typography>
            </Box>

            <Typography
              color="yellow"
              fontWeight={800}
              fontSize={32}
            >
              ₹{" "}
              {total.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Box>

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 2,
              bgcolor: "white",
              color: "black",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: 18,
            }}
            onClick={() => {
              onClose?.();
              navigate(ROUTES.CHECKOUT);
            }}
          >
            CHECKOUT
          </Button>
        </Box>
      )}
    </Box>
  );


  if (variant === "checkout") {
    return (
      <Box
        sx={{
          width: { xs: "100%", md: 500, lg: 560 },
          bgcolor: "#1a1a1a",
          color: "white",
          height: "100%",
          position: "sticky",
          top: 0,
          borderLeft: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {CartContent}
      </Box>
    );
  }


  return (
    <Drawer
      anchor="right"
      open={isOpenCart}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: { backgroundColor: "rgba(0,0,0,0.5)" },
        },
        paper: {
          sx: {
            width: { xs: "100%", md: 500, lg: 560 },
            bgcolor: "#1a1a1a",
            color: "white",
          },
        },
      }}
    >
      {CartContent}
    </Drawer>
  );
};

export default CartSidebar;
