import React, { useEffect, useMemo } from "react";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { TReducers } from "@/Redux/Reducers";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import { orderDetailName } from "@/Redux/Order/Action";
import Loading from "@/components/Loading";
import { addDays, format } from "date-fns";

const OrderDetails = () => {
  const dispatch = useDispatch<TAppDispatch>();
  // const actions = useMemo(
  //   () => ({
  //     getOrderDetails: (state) => dispatch(orderDetailServiceAction(state)),
  //   }),
  //   [dispatch]
  // );
  const phoneNumber = useSelector<TAppStore, string>(
    (state) => state.auth.login.phoneNumber
  );
  const orderList = []
  const isDetailsLoading = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, orderDetailName) === "LOADING"
  );

  // const fetchOrderDetails = async () => {
  //   const result = await actions.getOrderDetails(phoneNumber);
  //   console.log(result);
  // };
  // useEffect(() => {
  //   fetchOrderDetails();
  // }, []);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#111",
        color: "white",
        p: "48px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isDetailsLoading && <Loading />}
      {orderList && orderList.map((order) => (
        <Box sx={{ width: "100%", maxWidth: 900 }}>
          <Stack direction="row" spacing={2} mb={3}>
            <Typography variant="h5" sx={{ flex: 1 }}>
              Items Ordered
            </Typography>
            <Typography variant="h5" sx={{ width: 120, textAlign: "center" }}>
              Quantity
            </Typography>
            <Typography variant="h5" sx={{ width: 120, textAlign: "center" }}>
              Price
            </Typography>
          </Stack>

          {order?.items?.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              mb={4}
              alignItems="center"
            >
              <Box
                component="img"
                src={item?.product?.imageUrl}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px", flex:1 }}
              >
                <Typography fontWeight={600}>{item?.product?.name}</Typography>
                <Typography
                  variant="body2"
                  color="grey.400"
                  sx={{ flex:1 }}
                >
                  {item?.product?.shortDescription}
                </Typography>
              </Box>

              <Typography sx={{ width: 120, textAlign: "center" }}>
                {item?.quantity}
              </Typography>

              <Typography sx={{ width: 120, textAlign: "center" }}>
                {item?.price}
              </Typography>
            </Stack>
          ))}

          <Divider sx={{ my: 3, borderColor: "grey.700" }} />

          <Typography fontWeight={700} mb={1}>
            ORDER STATUS:
          </Typography>
          <Typography variant="h5" fontWeight={800} color="success.main" mb={1}>
            {order?.orderStatus?.toUpperCase()}
          </Typography>
          {/* <Typography mb={4}>Expected Delivery By 1</Typography> */}

          <Typography>{`ORDER NO.: ${order?.orderNumber} `}</Typography>
          <Typography mb={4}>
            SHIPPING DATE: {format(addDays(new Date(), 2), "d MMM, yyyy")}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={6}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                color: "white",
                borderColor: "white",
              }}
            >
              TRACK ORDER
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                color: "white",
                borderColor: "white",
              }}
            >
              VIEW ORDER
            </Button>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default OrderDetails;
