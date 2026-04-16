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

import { decodeParams, statusColor } from "@/Utils/global";
import { useParams } from "react-router-dom";
import OrderDetailsSkeleton from "@/components/Skeleton/OrderDetailSkeleton";
import {
  InvoiceDownloadButton,
  InvoicePreviewButton,
} from "@/components/InvoicePdf";
import { OrderTracker } from "./OrderTracker";

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
  const [showTracker, setShowTracker] = React.useState(false);
  const { id = "" } = decodeParams(params);
  const dispatch = useDispatch<TAppDispatch>();
  const actions = useMemo(
    () => ({
      getOrderDetails: (state) => dispatch(getOrderDetailServiceAction(state)),
    }),
    [dispatch],
  );

  const [order, setOrder] = React.useState(null);

  const isDetailsLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [orderDetailByIdName]),
  );
  const currency = useSelector<TAppStore, string>(
    (state) => state.landing.selectedCurrency,
  );

  const fetchOrderDetails = async (id: string) => {
    try {
      const result = await actions.getOrderDetails(id);
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
            label={order?.orderStatus || ""}
            sx={{
              backgroundColor: statusColor(order?.orderStatus),
              color: "#022C22",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          />

          <Typography
            fontWeight={700}
            color={order?.paymentStatus === "paid" ? "#ffff" : "error.main"}
          >
            {order?.paymentStatus?.toUpperCase()}
          </Typography>
        </Stack>

        <Typography variant="h6" mb={2}>
          Items Ordered
        </Typography>

        <Stack spacing={3}>
          {order?.items?.map((item) => (
            <Box
              key={item._id}
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
                src={item?.product?.imageUrl}
                sx={{
                  width: { xs: 80, md: 100 },
                  height: { xs: 80, md: 100 },
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <Box>
                <Typography variant="subtitle1" fontWeight={400}>
                  {item?.product?.productCode}
                </Typography>
                <Typography fontWeight={600}>{item?.product?.name}</Typography>
                <Typography variant="body2" color="grey.400">
                  {item?.product?.shortDescription}
                </Typography>
              </Box>

              <Typography textAlign={{ xs: "left", md: "center" }}>
                Qty: {item?.quantity}
              </Typography>

              <Typography
                textAlign={{ xs: "right", md: "center" }}
                fontWeight={600}
              >
                {item?.currencySymbol}
                {item?.totalPrice?.toLocaleString("en-IN")}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Box sx={{ maxWidth: 400, ml: "auto" }}>
          <Stack spacing={1}>
            <Row
              label="Subtotal"
              value={`${order?.currencySymbol}${order?.subtotal}`}
            />
            <Row
              label="Discount"
              value={`-${order?.currencySymbol}${order?.discountAmount}`}
            />
            <Row
              label="Shipping"
              value={`${order?.currencySymbol}${order?.shippingCost}`}
            />
            <Row
              label="Tax"
              value={`${order?.currencySymbol}${order?.taxAmount}`}
            />

            <Divider sx={{ borderColor: "grey.700", my: 1 }} />

            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700}>Total</Typography>
              <Typography fontWeight={700}>
                {order?.currencySymbol}
                {order?.totalAmount?.toLocaleString("en-IN")}
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <AddressBlock
            title="Shipping Address"
            address={order?.shippingAddress}
          />
          <AddressBlock
            title="Billing Address"
            address={order?.billingAddress}
          />
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={6}>
         {order?.logisticsAWBNumber && <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1,
              color: "white",
              borderColor: "white",
            }}
             onClick={() => setShowTracker(prev => !prev)}
          >
            TRACK ORDER
          </Button>
}
          {/* <InvoicePreviewButton data={order}/> */}
          <InvoiceDownloadButton data={order} />
        </Stack>
        <Collapse in={showTracker}>
          <Box
            mt={4}
        
            sx={{
              borderRadius: 2,
              bgcolor: "#1a1a1a",
            }}
          >
            <OrderTracker
      
              orderId={order?._id}
            />
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default OrderDetails;
