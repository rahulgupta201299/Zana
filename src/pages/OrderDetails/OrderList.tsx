import React, { useEffect, useMemo } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { orderName } from "@/Redux/Order/Action";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import getOrderListServiceAction from "@/Redux/Order/Services/GetOrderList";
import { Order, orderDetailResponse, OrderListType } from "./Types";
import { useNavigate } from "react-router";
import { getTotalQuantity } from "@/Utils/global";

import { OrderListSkeleton } from "@/components/Skeleton/OrderList";
import { ROUTES } from "@/Constants/Routes";

const OrderList = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const actions = useMemo(
    () => ({
      getOrderList: () => dispatch(getOrderListServiceAction()),
    }),
    [dispatch],
  );
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [orderName]),
  );
  const orders = useSelector<TAppStore, OrderListType>(
    (state) => state.order.orderList,
  );
  const { orders: orderList } = orders;

  const fetchOrderList = async () => {
    try {
      const result = await actions.getOrderList();
    } catch (error) {
      console.error("Failed to fetch order List:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchOrderList();
  }, []);

  const onViewDetails = (order) => {
    // Implement navigation to order details page
    console.log("View details for order:", order);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#2a2a2a" }}>
      <Box
        sx={{
          py: { xs: 2, md: 3 },
          px: { xs: 2, md: 3 },
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            align="center"
            sx={{
              color: "#fff",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            My Orders
          </Typography>
        </Container>
      </Box>
      {isLoading ? (
        <OrderListSkeleton />
      ) : (
        <>
          <Stack spacing={2} sx={{ p: { xs: 2, md: 4 } }}>
            {orderList.map((order) => {
              const firstItem = order.items?.[0];
              const product = firstItem?.product;

              return (
                <Box
                  key={order._id}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "grey.900",
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "64px 1fr",
                      md: "64px 1fr auto",
                    },
                    gridTemplateRows: {
                      xs: "auto auto",
                      md: "auto",
                    },
                    gap: 2,
                    alignItems: "center",
                    color: "#fff",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "grey.800",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      overflow: "hidden",
                      bgcolor: "grey.800",
                      border: "1px solid rgba(255,255,255,0.08)",
                      flexShrink: 0,
                    }}
                  >
                    {product?.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={order.orderNumber}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          color: "grey.500",
                        }}
                      >
                        IMG
                      </Box>
                    )}
                  </Box>

                  {/* Info */}
                  <Box sx={{ minWidth: 0 }}>
                    {/* Header row */}
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography fontWeight={700} fontSize={16} noWrap>
                        {order.orderNumber}
                      </Typography>

                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.3,
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 500,
                          bgcolor: "rgba(244, 248, 244, 0.15)",
                          color: "#4caf50",
                          textTransform: "capitalize",
                        }}
                      >
                        {order.orderStatus}
                      </Box>
                    </Stack>

                    {/* Product */}
                    <Typography variant="body2" sx={{ mt: 0.5 }} noWrap>
                      {product?.name || "Product"}
                    </Typography>

                    {order.items.length > 1 && (
                      <Typography variant="caption" color="grey.500">
                        + {order.items.length - 1} more items
                      </Typography>
                    )}

                    {/* Meta */}
                    <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                      <Typography variant="caption" color="grey.400">
                        Qty: {getTotalQuantity(order.items)}
                      </Typography>

                      <Typography variant="caption" color="grey.600">
                        •
                      </Typography>

                      <Typography variant="caption" color="grey.400">
                        {new Date(order.orderDate).toLocaleDateString("en-IN")}
                      </Typography>
                    </Stack>
                  </Box>

                  {/* Right section */}
                  <Box
                    sx={{
                      gridColumn: { xs: "1 / -1", md: "auto" },
                      gridRow: { xs: 2, md: "auto" },
                      display: "flex",
                      flexDirection: { xs: "row", md: "column" },
                      gap: "16px",
                      alignItems: { xs: "center", md: "flex-end" },
                      justifyContent: "space-between",
                      mt: { xs: 1, md: 0 },
                      pt: { xs: 1, md: 0 },
                      borderTop: {
                        xs: "1px solid rgba(255,255,255,0.08)",
                        md: "none",
                      },
                    }}
                  >
                    <Typography fontWeight={700} fontSize={18}>
                      {`${order.currencySymbol}${order.totalAmount.toLocaleString(
                        "en-IN",
                      )}`}
                    </Typography>
                    <Button
                      onClick={() =>
                        navigate(
                          `${ROUTES.ORDER_DETAILS.replace(":id", order._id)}`,
                        )
                      }
                      size='small'
                      type="submit"
                      sx={{
                        position: "relative",
                        color: "white",
                        border: "2px solid white",
                        px: "16px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        background: "transparent",
                        zIndex: 1,

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          borderBottom: "0px solid white",
                          borderLeft: "0px solid transparent",
                          transition:
                            "border-bottom-width 0.35s ease, border-left-width 0.35s ease",
                          zIndex: -1,
                          pointerEvents: "none",
                        },
                        "&:hover::after": {
                          borderBottomWidth: "300px",
                          borderLeftWidth: "300px",
                        },
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                     View Details
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </>
      )}
      {!isLoading && orderList.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              color: "rgba(251, 241, 241, 0.5)",
              mb: "8px",
            }}
            variant="h5"
          >
            {" "}
            No orders yet
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default OrderList;
