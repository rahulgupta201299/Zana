import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { orderName } from "@/Redux/Order/Action";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import getOrderListServiceAction from "@/Redux/Order/Services/GetOrderList";
import { OrderDetailResponse, OrderListType } from "./Types";
import { getTotalQuantity, statusColor } from "@/Utils/global";

import { OrderListSkeleton } from "@/components/Skeleton/OrderList";
import { ROUTES } from "@/Constants/Routes";
import Loading from "@/components/Loading";

const OrderList = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const observerTriggerRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [orderList, setOrderList] = useState<OrderDetailResponse[]>([]);

  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [orderName]),
  );
  const currency = useSelector<TAppStore, string>(state => state.landing.selectedCurrency)

  const fetchOrderList = async (page: number) => {
    if (!hasMore) return;
    
    try {
      const { orders = [], pagination: { hasNextPage, currentPage } } = await dispatch(getOrderListServiceAction({ page, limit: 10 })) as OrderListType;

      setOrderList((prev) => [...prev, ...orders]);
      setHasMore(hasNextPage);
      setCurrentPage(currentPage);
    } catch (error) {
      console.error("Failed to fetch order List:", error);
    }
  };

  useEffect(() => {
    fetchOrderList(1);
  }, [currency]);

  useEffect(() => {
    if (!observerTriggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchOrderList(currentPage + 1);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      },
    );

    observer.observe(observerTriggerRef.current);

    return () => observer.disconnect();
  }, [orderList.length, currency]);

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
      {isLoading && orderList.length === 0 && <OrderListSkeleton />}
      {isLoading && orderList.length > 0 && <Loading />}
      {orderList.length > 0 && (
        <>
          <Stack spacing={2} sx={{ p: { xs: 2, md: 4 } }}>
            {orderList.map((order) => {
              const firstItem = order.items?.[0];
              const product = firstItem?.product;

              return (
                <Box
                  key={order._id}
                  ref={observerTriggerRef}
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
                          backgroundColor: statusColor(order?.orderStatus),
                          color: "#022C22",
                          textTransform: "capitalize",
                        }}
                      >
                        {order?.orderStatus}
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
                      {`${order.currencySymbol}${order.totalAmount?.toLocaleString(
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

          {/* View More Trigger (Intersection Observer Target) */}
          {hasMore && (
            <Box
              ref={observerTriggerRef}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 4,
                px: 2,
              }}
            >
              {isLoading && (
                <Typography sx={{ color: "grey.500" }}>
                  Loading more orders...
                </Typography>
              )}
            </Box>
          )}
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
