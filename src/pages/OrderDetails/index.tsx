import React, { useEffect, useMemo } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  Chip,
  Collapse,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { orderDetailByIdName } from "@/Redux/Order/Action";

import { format } from "date-fns";
import getOrderDetailServiceAction from "@/Redux/Order/Services/OrderDetail";

import { statusColor } from "@/Utils/global";
import { useParams } from "react-router-dom";
import OrderDetailsSkeleton from "@/components/Skeleton/OrderDetailSkeleton";
import {
  InvoiceDownloadButton,
  InvoicePreviewButton,
} from "@/components/InvoicePdf";

import { OrderTracker } from "./OrderTracker";
import { OrderDetailResponse } from "./Types";

const Row = ({ label, value }) => (
  <Stack direction="row" justifyContent="space-between">
    <Typography color="grey.400">{label}</Typography>
    <Typography>{value?.toLocaleString("en-IN")}</Typography>
  </Stack>
);

const AddressBlock = ({ title, address }) => (
  <Box sx={{ flex: 1 }}>
    <Typography fontWeight={600} mb={1}>
      {title}
    </Typography>

    <Typography>{address?.fullName}</Typography>
    <Typography color="grey.400">{address?.phone}</Typography>
    <Typography color="grey.400">{address?.addressLine1}</Typography>
    <Typography color="grey.400">
      {address?.city}, {address?.state}
    </Typography>
    <Typography color="grey.400">
      {address?.postalCode}, {address?.country}
    </Typography>
  </Box>
);

const OrderDetails = () => {
  const params = useParams();
  const { id = "" } = params;

  const [showTracker, setShowTracker] = React.useState(false);

  const dispatch = useDispatch<TAppDispatch>();

  const [order, setOrder] = React.useState<OrderDetailResponse>(null);

  const isDetailsLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [orderDetailByIdName]),
  );
  const currency = useSelector<TAppStore, string>(
    (state) => state.landing.selectedCurrency,
  );

  const fetchOrderDetails = async (id: string) => {
    try {
      const result = await dispatch(getOrderDetailServiceAction(id)) as OrderDetailResponse;
      setOrder(result);
      return result;
    } catch (error) {
      console.error("Failed to fetch order details:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (id) {
      fetchOrderDetails(id);
    }
  }, [id, currency]);

  const { items = [], taxAmount = 0, discountAmount = 0, codCharges = 0, advancePaid = 0, shippingCost = 0, shippingAddress = {}, billingAddress = {}, subtotal = 0, totalAmount = 0, currencySymbol = '', logisticsAWBNumber = null } = order || {}

  return isDetailsLoading ? (
    <OrderDetailsSkeleton />
  ) : (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#111",
        color: "white",
        p: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <Stack spacing={1} mb={4}>
          <Typography fontSize={{ xs: 22, md: 28 }} fontWeight={700}>
            Order Details
          </Typography>

          <Typography fontSize={16} color="grey.400">
            {order?.orderNumber}
          </Typography>

          <Typography variant="body2" color="grey.500">
            {order?.orderDate
              ? format(new Date(order?.orderDate), "d MMM yyyy, hh:mm a")
              : ""}
          </Typography>
        </Stack>

        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          spacing={4}
          mb={4}
        >
          <Chip
            label={order?.orderStatus?.split("_")?.join(" ") || ""}
            sx={{
              backgroundColor: statusColor(order?.orderStatus),
              color: "#022C22",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          />

          <Typography
            fontWeight={700}
            color={statusColor(order?.paymentStatus)}
          >
            {order?.paymentStatus?.toUpperCase()?.split("_").join(" ")}
          </Typography>
        </Stack>

        <Typography variant="h6" mb={2}>
          Items Ordered
        </Typography>

        <Stack spacing={3}>
          {items.map((item) => (
            <Box
              key={item.product._id}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "80px 1fr",
                  md: "100px 1fr 120px 120px",
                },
                gap: 2,
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                bgcolor: "#1a1a1a",
              }}
            >
              <Box
                component="img"
                src={item.product.imageUrl}
                sx={{
                  width: { xs: 80, md: 100 },
                  height: { xs: 80, md: 100 },
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <Box>
                <Typography variant="subtitle1" fontWeight={400}>
                  {item.product.productCode}
                </Typography>
                <Typography fontWeight={600}>{item.product.name}</Typography>
                <Typography variant="body2" color="grey.400">
                  {item.product.shortDescription}
                </Typography>
              </Box>

              <Typography textAlign={{ xs: "left", md: "center" }}>
                Qty: {item.quantity}
              </Typography>

              <Typography
                textAlign={{ xs: "right", md: "center" }}
                fontWeight={600}
              >
                {currencySymbol}{" "}
                {item.totalPrice.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Box sx={{ maxWidth: 400, ml: "auto" }}>
          <Stack spacing={1}>
            <Row
              label="Subtotal"
              value={`${currencySymbol} ${subtotal?.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`}
            />
            {
              discountAmount > 0 && (
                <Row
                  label="Discount"
                  value={`- ${currencySymbol} ${discountAmount?.toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}`}
                />
              )
            }
            {
              codCharges > 0 && (
                <Row
                  label="COD Charges"
                  value={`${currencySymbol} ${codCharges?.toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}`}
                />
              )
            }
            <Row
              label="Shipping"
              value={`${currencySymbol} ${shippingCost?.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`}
            />
            <Row
              label="Tax"
              value={`${currencySymbol} ${taxAmount?.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`}
            />

            <Divider sx={{ borderColor: "grey.700", my: 1 }} />

            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700}>Total</Typography>
              <Typography fontWeight={700}>
                {currencySymbol}{" "}
                {totalAmount?.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </Typography>
            </Stack>
            {
              advancePaid > 0 && (
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={700}>Advance Paid</Typography>
                  <Typography color="#22C55E" fontWeight={700}>
                    {currencySymbol}{" "}
                    {advancePaid?.toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </Typography>
                </Stack>
              )
            }

            <Divider sx={{ borderColor: "grey.700", my: 1 }} />

            {
              advancePaid > 0 && (
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={700}>Remaining Amount</Typography>
                  <Typography color="#FACC15" fontWeight={700}>
                    {currencySymbol}{" "}
                    {(totalAmount - advancePaid)?.toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </Typography>
                </Stack>
              )
            }
          </Stack>
        </Box>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <AddressBlock
            title="Shipping Address"
            address={shippingAddress}
          />
          <AddressBlock
            title="Billing Address"
            address={billingAddress}
          />
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={6}>
          {logisticsAWBNumber && (
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                color: "white",
                borderColor: "white",
              }}
              onClick={() => setShowTracker((prev) => !prev)}
            >
              TRACK ORDER
            </Button>
          )}
          {/* <InvoicePreviewButton data={order}/> */}
          <InvoiceDownloadButton data={order} />
        </Stack>
        <Collapse in={showTracker} unmountOnExit>
          <Box
            mt={4}
            sx={{
              borderRadius: 2,
              bgcolor: "#1a1a1a",
            }}
          >
            <OrderTracker orderId={order?._id} />
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default OrderDetails;
