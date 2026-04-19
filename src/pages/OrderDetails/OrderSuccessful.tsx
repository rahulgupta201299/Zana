import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  Button,
  Divider,
  Chip,
  Skeleton,
} from "@mui/material";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import OrderSuccessIllustration from "@/Assets/Images/OrderSuccess.svg";
import getOrderDetailServiceAction from "@/Redux/Order/Services/OrderDetail";
import { OrderDetailResponse } from "./Types";
import { statusColor } from "@/Utils/global";
import { getAddressLabel } from "@/Utils/StringUtils";
import { ROUTES } from "@/Constants/Routes";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { orderDetailByIdName } from "@/Redux/Order/Action";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [orderDetailByIdName]));

  const [orderData, setOrderData] = useState<OrderDetailResponse>(null);

  const { orderId = '' } = location.state || {}

  async function pageOps() {

    if (!orderId) {
      navigate(ROUTES.ORDER_LIST)
      return;
    }

    try {
      const response = await dispatch(getOrderDetailServiceAction(orderId)) as OrderDetailResponse;
      setOrderData(response);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  }

  function dateFormatter(date: string): string {
    const orderDate = new Date(date);

    const day = orderDate.getDate();
    const month = orderDate.toLocaleString('en-in', { month: 'long' });
    const year = orderDate.getFullYear();

    return `${day} ${month}' ${year}`;
  }

  function handleTrackOrder() {
    const path = generatePath(ROUTES.ORDER_DETAILS, { id: orderId })
    navigate(path)
  }

  function handleReturn() {
    navigate(ROUTES.PRODUCT_CATALOG)
  }

  useEffect(() => {
    pageOps();
  }, [])

  const { orderDate = '', orderNumber = '', razorpayPaymentId = '', paymentStatus = '', orderStatus = '', items = [], shippingAddress, currencySymbol } = orderData || {};

  return (
    <Box
      sx={{
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "1200px",
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          background: "linear-gradient(145deg, #0f172a, #020617)",
          color: "#fff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
        }}
      >
        {/* 🔹 LEFT SIDE (SVG + SUCCESS) */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRight: { md: "1px solid #1e293b" },
          }}
        >
          {/* SVG */}
          <Box
            component="img"
            src={OrderSuccessIllustration}
            alt="Order Success"
            sx={{
              width: { xs: 180, md: 220 },
              mb: 2,
            }}
          />

          <Typography fontSize={26} fontWeight="bold">
            Order Confirmed 🎉
          </Typography>

          <Typography sx={{ color: "#94a3b8", mt: 1 }}>
            Thank you for your purchase!
          </Typography>

          <Typography sx={{ color: "#94a3b8", mt: 1 }}>
            Order placed on{" "}
            <b style={{ color: "#fff" }}>{dateFormatter(orderDate)}</b>
          </Typography>
        </Box>

        {/* 🔹 RIGHT SIDE (DETAILS) */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
          }}
        >
          {/* Order Info */}
          <Box sx={{
            fontSize: 14,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
          >
            <Typography>
              Order Number: <b>{orderNumber ? orderNumber : <Skeleton variant="text" width="30%" height={25} sx={{ bgcolor: "grey.500", display: "inline-block" }} />}</b>
            </Typography>
            {
              razorpayPaymentId && (
                <Typography>
                  Payment ID: <b>{razorpayPaymentId ? razorpayPaymentId : <Skeleton variant="text" width="30%" height={25} sx={{ bgcolor: "grey.500", display: "inline-block" }} />}</b>
                </Typography>
              )
            }
            <Typography>
              Order Status:{" "}
              {orderStatus ? (
                <Chip
                  label={orderStatus}
                  sx={{
                    backgroundColor: statusColor(orderStatus),
                    color: "#022C22",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                />
              ) : (
                <Skeleton
                  variant="rounded"
                  width={100}
                  height={28}
                  sx={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    bgcolor: "grey.500",
                    borderRadius: "16px", // matches chip shape
                  }}
                />
              )}
            </Typography>
            <Typography>
              Payment Status:{" "}
              {paymentStatus ? (
                <Chip
                  label={paymentStatus}
                  sx={{
                    backgroundColor: statusColor(paymentStatus),
                    color: "#022C22",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                />
              ) : (
                <Skeleton
                  variant="rounded"
                  width={100}
                  height={28}
                  sx={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    bgcolor: "grey.500",
                    borderRadius: "16px", // matches chip shape
                  }}
                />
              )}
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "#1e293b", my: 3 }} />

          {/* Items */}
          <Typography mb={2} fontWeight="bold">
            🛍️ Items You Bought
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {isLoading && (
              Array.from({ length: 3 }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  width="100%"
                  height={60}
                  sx={{
                    bgcolor: "#1e293b",
                    borderRadius: 2,
                  }}
                />
              ))
            )}
            {!isLoading && items.map((it) => {

              const { product: { imageUrl = '', name = '', _id = '' } = {}, quantity = 0, price = 0 } = it

              return (
                <Box
                  key={_id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#020617",
                  }}
                >
                  <Box
                    component="img"
                    src={imageUrl}
                    alt={name}
                    sx={{ width: 50, height: 50, borderRadius: 2 }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: 1.5,
                    }}
                  >
                    <Box>
                      <Typography fontWeight="500">{it.product.name}</Typography>
                      <Typography sx={{ color: "#94a3b8", fontSize: 13 }}>
                        Qty: {quantity}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: "bold", marginY: 'auto', whiteSpace: 'nowrap' }}>
                      {currencySymbol} {price}
                    </Typography>
                  </Box>
                </Box>
              )
            })}
          </Box>

          {/* Address */}
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ color: "#94a3b8", fontSize: 13 }}>
              Shipping to
            </Typography>
            <Typography fontWeight="bold">{getAddressLabel(shippingAddress)}</Typography>
          </Box>

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 4,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={handleTrackOrder}
              sx={{
                py: 1.2,
                background:
                  "linear-gradient(to right, #22c55e, #16a34a)",
                "&:hover": {
                  background:
                    "linear-gradient(to right, #16a34a, #15803d)",
                },
              }}
            >
              Track your order
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={handleReturn}
              sx={{
                py: 1.2,
                backgroundColor: "#1e293b",
                color: "#cbd5f5",
                "&:hover": {
                  backgroundColor: "#334155",
                },
              }}
            >
              Return to shopping
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default OrderConfirmation;