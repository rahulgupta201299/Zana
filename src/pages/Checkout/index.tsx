import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Grid,
  Box,
  TextField,
  Typography,
  Paper,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Radio,
  Divider,
  RadioGroup,
  IconButton,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import PaymentImg from "@/Assets/Images/Payment.svg";
import { Minus, Plus } from "lucide-react";
import { displayRazorpay } from "./Utils";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import cartCheckoutServiceAction from "@/Redux/Cart/Services/CartModifyService";
import getIsdListServiceAction from "@/Redux/Auth/Services/GetIsdCodes";
import { useSnackbar } from "notistack";
import { paymentOptions, PaymentTypeEnum } from "./Constant";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
// import { cartCheckOutServiceName } from "@/Redux/Cart/Action";
import Loading from "@/components/Loading";
import { ROUTES } from "@/Constants/Routes";
import useCart from "@/hooks/useCart";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import ProductRecommendation from "./ProductRecommendation";

export default function CheckoutPage() {
  const { decrementToCart, incrementToCart, clearCart } = useCart();
  const navigate = useNavigate();

  const phoneNumber = useSelector<TAppStore, string>(
    (state) => state.auth.login.phoneNumber
  );
  const cartDetail = useSelector(cartDetailSelector)

  // TODO
  const isLoading = false // useSelector<TAppStore, boolean>((state) => isServiceLoading(state, [cartCheckOutServiceName]));

  const [countries, setCountries] = useState([]);
  const [paymentType, setPaymentType] = useState(PaymentTypeEnum.COD);

  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { subtotal, totalAmount: total, discountAmount: discount, processedItems = [] } = cartDetail

  const actions = useMemo(
    () => ({
      saveCartDetails: (state: any) =>
        dispatch(cartCheckoutServiceAction(state)),
      getCountryList: () => dispatch(getIsdListServiceAction()),
    }),
    [dispatch]
  );

  const listOfCountry = async () => {
    const result = await actions.getCountryList();
    setCountries(result);
  };

  useEffect(() => {
    listOfCountry();
  }, []);

  const CheckoutSchema = Yup.object({
    shippingCountry: Yup.string().required("Country is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email Id is required")
      .test("email", "Invalid email format", (value) => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
          return true;
        else return false;
      }),
    phone: Yup.string().required("Phone Number is required"),
    // TODO once BE is fixed with double + issue
    // .test("phone", "Please enter valid 10 digit Phone Number", (value) => {
    //   if (/^[6-9]\d{9}$/.test(value)) return true;
    //   else return false;
    // }),

    shippingFirstName: Yup.string().required("First name is required"),
    shippingLastName: Yup.string().required("Last name is required"),
    shippingAddress: Yup.string().required("Address is required"),
    shippingApartment: Yup.string(), // TODO .required("Address is required"),
    shippingCity: Yup.string().required("City is required"),
    shippingState: Yup.string().required("State is required"),
    shippingPincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Enter a valid 6-digit pincode")
      .required("Pincode is required"),

    saveInfo: Yup.boolean(),
    sameAsDelivery: Yup.boolean(),
    billingCountry: Yup.string().when("sameAsDelivery", (same, schema) =>
      same ? schema : schema.required("Country is required")
    ),
    billingFirstName: Yup.string().when("sameAsDelivery", (same, schema) =>
      same ? schema : schema.required("Billing first name is required")
    ),

    billingLastName: Yup.string().when("sameAsDelivery", (same, schema) =>
      same ? schema : schema.required("Billing last name is required")
    ),

    billingAddress: Yup.string().when("sameAsDelivery", (same, schema) =>
      same ? schema : schema.required("Billing address is required")
    ),

    billingApartment: Yup.string(),

    billingCity: Yup.string().when("sameAsDelivery", (same, schema) =>
      same ? schema : schema.required("Billing city is required")
    ),

    billingState: Yup.string().when("sameAsDelivery", (same, schema) =>
      same ? schema : schema.required("Billing state is required")
    ),

    billingPincode: Yup.string().when("sameAsDelivery", (same, schema) =>
      same
        ? schema
        : schema
          .matches(/^[0-9]{6}$/, "Enter a valid 6-digit pincode")
          .required("Billing pincode is required")
    ),
    billingPhone: Yup.string().when("sameAsDelivery", (same, schema) =>
      same
        ? schema
        : schema
          .required("Billing phone number is required")
    ),
  });

  // TODO change the API contract completely
  const handleSubmit = async (values) => {
    if (paymentType !== PaymentTypeEnum.COD) {
      displayRazorpay();
      return;
    }
    const mappedItems = processedItems.map((item) => ({
      productId: item.product._id,
      quantity: item.quantity,
    }));
    const body = {
      phoneNumber: phoneNumber,
      items: mappedItems,
      shippingAddress: {
        fullName: `${values.shippingFirstName} ${values.shippingLastName}`,
        addressLine1: values.shippingAddress,
        addressLine2: values.shippingApartment,
        city: values.shippingCity,
        state: values.shippingState,
        phone: values.phone,
        postalCode: values.shippingPincode,
        country: values.shippingCountry,
      },

      billingAddress: values.sameAsDelivery
        ? {
          fullName: `${values.shippingFirstName} ${values.shippingLastName}`,
          addressLine1: values.shippingAddress,
          addressLine2: values.shippingApartment,
          city: values.shippingCity,
          state: values.shippingState,
          postalCode: values.shippingPincode,
          country: values.shippingCountry,
          phone: values.phone
        }
        : {
          fullName: `${values.billingFirstName} ${values.billingLastName}`,
          addressLine1: values.billingAddress,
          addressLine2: values.billingApartment,
          city: values.billingCity,
          state: values.billingState,
          postalCode: values.billingPincode,
          country: values.billingCountry,
          phone: values.billingPhone
        },
    };

    try {
      await actions.saveCartDetails(body);
      enqueueSnackbar("Order Placed successfully!", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 3000,
      });
      clearCart();
      navigate(ROUTES.ORDER_DETAILS);
    } catch (err) {
      if (err.response?.status === 400)
        enqueueSnackbar(err.response?.data?.error, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      {isLoading && <Loading />}
      <Grid container spacing={4}>
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{
            order: { md: 1, xs: 2 },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: "32px 20px",
              backgroundColor: "white",
              color: "#232323",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: "16px", fontWeight: "bold", color: "#202020" }}
            >
              Contact
            </Typography>

            <Formik
              enableReinitialize
              validateOnMount
              initialValues={{
                shippingCountry: "",
                email: "",
                shippingFirstName: "",
                shippingLastName: "",
                shippingAddress: "",
                shippingApartment: "",
                shippingCity: "",
                shippingState: "",
                shippingPincode: "",
                phone: "",
                saveInfo: true,
                billingFirstName: "",
                billingLastName: "",
                billingAddress: "",
                billingApartment: "",
                billingCity: "",
                billingState: "",
                billingPincode: "",
                billingPhone: "",
                sameAsDelivery: true,
              }}
              validationSchema={CheckoutSchema}
              onSubmit={handleSubmit}
            >
              {({
                handleChange,
                values,
                handleBlur,
                errors,
                touched,
                handleSubmit,
                setFieldValue,
                isValid,
              }) => {
                return (
                  <Form>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={getFieldErrorState({ errors, touched }, "email")}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "email"
                        )}
                        slotProps={{
                          input: {
                            sx: {
                              backgroundColor: "#fff",
                              color: "#000",
                              borderRadius: "10px",
                            },
                          },
                          inputLabel: {
                            sx: {
                              color: "#000",
                            },
                          },
                        }}
                      />

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#202020" }}
                      >
                        Delivery
                      </Typography>
                      <FormControl fullWidth>
                        <Select
                          name="shippingCountry"
                          // label='Country/Region'
                          value={values.shippingCountry}
                          onChange={handleChange}
                          displayEmpty
                          IconComponent={() => null}
                          sx={{
                            p: 0,
                            borderRadius: "10px",
                          }}
                          renderValue={() => (
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "#1D1D1D",
                                }}
                              >
                                Country/Region
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "20px",
                                  fontWeight: 400,
                                  color: "#1D1D1D",
                                }}
                              >
                                {values.shippingCountry === "india"
                                  ? "India"
                                  : values.shippingCountry}
                              </Typography>
                            </Box>
                          )}
                        >
                          {countries.map((c) => (
                            <MenuItem
                              key={c.isd}
                              value={c.name}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>{c.name}</span>
                            </MenuItem>
                          ))}
                        </Select>
                        {/* </Box> */}
                      </FormControl>

                      <Grid container spacing={2}>
                        <Grid size={6}>
                          <TextField
                            fullWidth
                            name="shippingFirstName"
                            label="First Name"
                            value={values.shippingFirstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={getFieldErrorState(
                              { errors, touched },
                              "shippingFirstName"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "shippingFirstName"
                            )}
                            slotProps={{
                              input: {
                                sx: {
                                  backgroundColor: "#fff",
                                  color: "#000",
                                  borderRadius: "10px",
                                },
                              },
                              inputLabel: {
                                sx: {
                                  color: "#000",
                                },
                              },
                            }}
                          />
                        </Grid>

                        <Grid size={6}>
                          <TextField
                            fullWidth
                            name="shippingLastName"
                            label="Last Name"
                            value={values.shippingLastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={getFieldErrorState(
                              { errors, touched },
                              "shippingLastName"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "shippingLastName"
                            )}
                            slotProps={{
                              input: {
                                sx: {
                                  backgroundColor: "#fff",
                                  color: "#000",
                                  borderRadius: "10px",
                                },
                              },
                              inputLabel: {
                                sx: {
                                  color: "#000",
                                },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>

                      <TextField
                        fullWidth
                        name="shippingAddress"
                        label="Address"
                        value={values.shippingAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={getFieldErrorState(
                          { errors, touched },
                          "shippingAddress"
                        )}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "shippingAddress"
                        )}
                        slotProps={{
                          input: {
                            sx: {
                              backgroundColor: "#fff",
                              color: "#000",
                              borderRadius: "10px",
                            },
                          },
                          inputLabel: {
                            sx: {
                              color: "#000",
                            },
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        name="shippingApartment"
                        label="Apartment, suite, ect (optional)"
                        value={values.shippingApartment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={getFieldErrorState(
                          { errors, touched },
                          "shippingApartment"
                        )}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "shippingApartment"
                        )}
                        slotProps={{
                          input: {
                            sx: {
                              backgroundColor: "#fff",
                              color: "#000",
                              borderRadius: "10px",
                            },
                          },
                          inputLabel: {
                            sx: {
                              color: "#000",
                            },
                          },
                        }}
                      />

                      <Grid container spacing={2}>
                        <Grid size={4}>
                          <TextField
                            fullWidth
                            name="shippingCity"
                            label="City"
                            value={values.shippingCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={getFieldErrorState(
                              { errors, touched },
                              "shippingCity"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "shippingCity"
                            )}
                            slotProps={{
                              input: {
                                sx: {
                                  backgroundColor: "#fff",
                                  color: "#000",
                                  borderRadius: "10px",
                                },
                              },
                              inputLabel: {
                                sx: {
                                  color: "#000",
                                },
                              },
                            }}
                          />
                        </Grid>

                        <Grid size={4}>
                          <TextField
                            fullWidth
                            name="shippingState"
                            label="State"
                            value={values.shippingState}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={getFieldErrorState(
                              { errors, touched },
                              "shippingState"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "shippingState"
                            )}
                            slotProps={{
                              input: {
                                sx: {
                                  backgroundColor: "#fff",
                                  color: "#000",
                                  borderRadius: "10px",
                                },
                              },
                              inputLabel: {
                                sx: {
                                  color: "#000",
                                },
                              },
                            }}
                          />
                        </Grid>

                        <Grid size={4}>
                          <TextField
                            fullWidth
                            name="shippingPincode"
                            label="Pin code"
                            value={values.shippingPincode}
                            onChange={(e) => {
                              if (e.target.value.match(/[^0-9]/)) return;
                              handleChange(e);
                            }}
                            onBlur={handleBlur}
                            error={getFieldErrorState(
                              { errors, touched },
                              "shippingPincode"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "shippingPincode"
                            )}
                            slotProps={{
                              input: {
                                sx: {
                                  backgroundColor: "#fff",
                                  color: "#000",
                                  borderRadius: "10px",
                                },
                              },
                              inputLabel: {
                                sx: {
                                  color: "#000",
                                },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>

                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone"
                        value={values.phone}
                        // disabled={true}
                        onChange={(e) => {
                          if (e.target.value.match(/[^0-9]/)) return;
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        error={getFieldErrorState({ errors, touched }, "phone")}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "phone"
                        )}
                        slotProps={{
                          input: {
                            sx: {
                              backgroundColor: "#fff",
                              color: "#000",
                              borderRadius: "10px",
                            },
                            inputProps: { maxLength: 10 },
                          },
                          inputLabel: {
                            sx: {
                              color: "#000",
                            },
                          },
                        }}
                      />

                      <FormControlLabel
                        control={
                          <Radio
                            name="saveInfo"
                            checked={values.saveInfo}
                            onChange={(e) =>
                              setFieldValue("saveInfo", e.target.checked)
                            }
                            sx={{ transform: "scale(0.6)" }}
                          />
                        }
                        label="Save this information for next time"
                      />

                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            mb: "24px",
                            color: "#202020",
                          }}
                        >
                          Shipping method
                        </Typography>

                        <Box
                          sx={{
                            backgroundColor: "#232323",
                            color: "#fff",
                            px: "20px",
                            py: "24px",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}
                        >
                          Enter your shipping address to view available shipping
                          methods.
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          border: "2px solid #1F1F1F",
                          borderRadius: "8px",
                          mt: "24px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <RadioGroup value={paymentType}>
                          {paymentOptions.map((option, index) => {
                            const {
                              value,
                              label,
                              showRazorpayInfo = false,
                            } = option;
                            return (
                              <Box key={value}>
                                <FormControlLabel
                                  value={value}
                                  control={
                                    <Radio sx={{ transform: "scale(0.8)" }} />
                                  }
                                  sx={{ alignItems: "center", p: "16px" }}
                                  label={
                                    <Typography
                                      sx={{
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        color: "#202020",
                                      }}
                                    >
                                      {label}
                                    </Typography>
                                  }
                                  onClick={() => setPaymentType(value)}
                                />

                                {/* Divider after each option except last */}
                                {index !== paymentOptions.length - 1 && (
                                  <Divider sx={{ borderColor: "#1F1F1F" }} />
                                )}

                                {/* Razorpay Extra Section */}
                                {showRazorpayInfo && (
                                  <>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        py: "24px",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={PaymentImg}
                                        alt="payment preview"
                                        style={{ opacity: 0.8 }}
                                      />

                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          color: "#202020",
                                          mb: 2,
                                          textAlign: "center",
                                        }}
                                      >
                                        After clicking “Pay now”, you will be
                                        redirected to Razorpay Secure to
                                        complete your purchase.
                                      </Typography>
                                    </Box>

                                    <Divider sx={{ borderColor: "#1F1F1F" }} />
                                  </>
                                )}
                              </Box>
                            );
                          })}
                        </RadioGroup>
                      </Box>
                      <Box>
                        <Box>
                          <FormControlLabel
                            name="sameAsDelivery"
                            control={
                              <Checkbox
                                checked={values.sameAsDelivery}
                                onChange={(e) =>
                                  setFieldValue(
                                    "sameAsDelivery",
                                    e.target.checked
                                  )
                                }
                                sx={{ color: "black" }}
                              />
                            }
                            label={
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  color: "#202020",
                                }}
                              >
                                Billing address is same as delivery address
                              </Typography>
                            }
                          />

                          {!values?.sameAsDelivery && (
                            <Box sx={{ mt: "32px" }}>
                              <Grid container spacing={2}>
                                <FormControl fullWidth>
                                  <Select
                                    name="billingCountry"
                                    // label='Country/Region'
                                    value={values.billingCountry}
                                    onChange={handleChange}
                                    displayEmpty
                                    IconComponent={() => null}
                                    sx={{
                                      p: 0,
                                      borderRadius: "10px",
                                    }}
                                    renderValue={() => (
                                      <Box>
                                        <Typography
                                          sx={{
                                            fontSize: "14px",
                                            color: "#1D1D1D",
                                          }}
                                        >
                                          Country/Region
                                        </Typography>
                                        <Typography
                                          sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            color: "#1D1D1D",
                                          }}
                                        >
                                          {values.billingCountry === "india"
                                            ? "India"
                                            : values.billingCountry}
                                        </Typography>
                                      </Box>
                                    )}
                                  >
                                    {countries.map((c) => (
                                      <MenuItem
                                        key={c.isd}
                                        value={c.name}
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <span>{c.name}</span>
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {/* </Box> */}
                                </FormControl>
                                <Grid size={6}>
                                  <TextField
                                    fullWidth
                                    name="billingFirstName"
                                    label="First Name"
                                    value={values.billingFirstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={getFieldErrorState(
                                      { errors, touched },
                                      "billingFirstName"
                                    )}
                                    helperText={getHelperOrErrorText(
                                      { errors, touched },
                                      "billingFirstName"
                                    )}
                                    slotProps={{
                                      input: {
                                        sx: {
                                          backgroundColor: "#fff",
                                          color: "#000",
                                          borderRadius: "10px",
                                        },
                                      },
                                      inputLabel: { sx: { color: "#000" } },
                                    }}
                                  />
                                </Grid>

                                <Grid size={6}>
                                  <TextField
                                    fullWidth
                                    name="billingLastName"
                                    label="Last Name"
                                    value={values.billingLastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={getFieldErrorState(
                                      { errors, touched },
                                      "billingLastName"
                                    )}
                                    helperText={getHelperOrErrorText(
                                      { errors, touched },
                                      "billingLastName"
                                    )}
                                    slotProps={{
                                      input: {
                                        sx: {
                                          backgroundColor: "#fff",
                                          color: "#000",
                                          borderRadius: "10px",
                                        },
                                      },
                                      inputLabel: { sx: { color: "#000" } },
                                    }}
                                  />
                                </Grid>
                              </Grid>

                              {/* Address */}
                              <Box sx={{ mt: 2 }}>
                                <TextField
                                  fullWidth
                                  name="billingAddress"
                                  label="Address"
                                  value={values.billingAddress}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={getFieldErrorState(
                                    { errors, touched },
                                    "billingAddress"
                                  )}
                                  helperText={getHelperOrErrorText(
                                    { errors, touched },
                                    "billingAddress"
                                  )}
                                  slotProps={{
                                    input: {
                                      sx: {
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        borderRadius: "10px",
                                      },
                                    },
                                    inputLabel: { sx: { color: "#000" } },
                                  }}
                                />
                              </Box>

                              <Box sx={{ mt: 2 }}>
                                <TextField
                                  fullWidth
                                  name="billingApartment"
                                  label="Apartment, suite, etc (optional)"
                                  value={values.billingApartment}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={getFieldErrorState(
                                    { errors, touched },
                                    "billingApartment"
                                  )}
                                  helperText={getHelperOrErrorText(
                                    { errors, touched },
                                    "billingApartment"
                                  )}
                                  slotProps={{
                                    input: {
                                      sx: {
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        borderRadius: "10px",
                                      },
                                    },
                                    inputLabel: { sx: { color: "#000" } },
                                  }}
                                />
                              </Box>

                              {/* City / State / Zip */}
                              <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid size={4}>
                                  <TextField
                                    fullWidth
                                    name="billingCity"
                                    label="City"
                                    value={values.billingCity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={getFieldErrorState(
                                      { errors, touched },
                                      "billingCity"
                                    )}
                                    helperText={getHelperOrErrorText(
                                      { errors, touched },
                                      "billingCity"
                                    )}
                                    slotProps={{
                                      input: {
                                        sx: {
                                          backgroundColor: "#fff",
                                          color: "#000",
                                          borderRadius: "10px",
                                        },
                                      },
                                      inputLabel: { sx: { color: "#000" } },
                                    }}
                                  />
                                </Grid>

                                <Grid size={4}>
                                  <TextField
                                    fullWidth
                                    name="billingState"
                                    label="State"
                                    value={values.billingState}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={getFieldErrorState(
                                      { errors, touched },
                                      "billingState"
                                    )}
                                    helperText={getHelperOrErrorText(
                                      { errors, touched },
                                      "billingState"
                                    )}
                                    slotProps={{
                                      input: {
                                        sx: {
                                          backgroundColor: "#fff",
                                          color: "#000",
                                          borderRadius: "10px",
                                        },
                                      },
                                      inputLabel: { sx: { color: "#000" } },
                                    }}
                                  />
                                </Grid>

                                <Grid size={4}>
                                  <TextField
                                    fullWidth
                                    name="billingPincode"
                                    label="Pin code"
                                    value={values.billingPincode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={getFieldErrorState(
                                      { errors, touched },
                                      "billingPincode"
                                    )}
                                    helperText={getHelperOrErrorText(
                                      { errors, touched },
                                      "billingPincode"
                                    )}
                                    slotProps={{
                                      input: {
                                        sx: {
                                          backgroundColor: "#fff",
                                          color: "#000",
                                          borderRadius: "10px",
                                        },
                                      },
                                      inputLabel: { sx: { color: "#000" } },
                                    }}
                                  />
                                </Grid>
                              </Grid>
                              <TextField
                                fullWidth
                                name="billingPhone"
                                label="Phone"
                                value={values.billingPhone}
                                sx={{
                                  mt: '16px'
                                }}
                                onChange={(e) => {
                                  if (e.target.value.match(/[^0-9]/)) return;
                                  handleChange(e);
                                }}
                                onBlur={handleBlur}
                                error={getFieldErrorState(
                                  { errors, touched },
                                  "billingPhone"
                                )}
                                helperText={getHelperOrErrorText(
                                  { errors, touched },
                                  "billingPhone"
                                )}
                                slotProps={{
                                  input: {
                                    sx: {
                                      backgroundColor: "#fff",
                                      color: "#000",
                                      borderRadius: "10px",
                                    },
                                    inputProps: { maxLength: 10 },
                                  },

                                  inputLabel: {
                                    sx: {
                                      color: "#000",
                                    },
                                  },
                                }}
                              />
                            </Box>
                          )}
                        </Box>
                      </Box>
                      <Button
                        fullWidth
                        type="submit"
                        disabled={!isValid}
                        variant="outlined"
                        size="large"
                        sx={{
                          backgroundColor: !isValid ? "#00000033" : "black",
                          opacity: 1,
                          color: !isValid ? "black" : "white",
                          mb: "32px",
                          py: "16px",
                          borderRadius: "10px",
                          textTransform: "none",
                        }}
                      >
                        {PaymentTypeEnum.COD === paymentType
                          ? "Place Order"
                          : "Pay Now"}
                      </Button>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Paper>
        </Grid>

        {/* RIGHT SIDE CART */}
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {processedItems.map((item) => {
              const { product, quantity = 0, price = 0, totalPrice = 0 } = item;
              const { _id: productId = '', imageUrl = '', name = '', shortDescription = '', quantityAvailable = 0 } = product || {}

              return (
                <Box
                  key={productId}
                  sx={{
                    color: "#FFFFFF",
                    borderRadius: "10px",
                    transition: "0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 80, md: 110 },
                      height: { xs: 80, md: 110 },
                      bgcolor: "#FFFFFF",
                      borderRadius: "10px",
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
                      gap: "16px",
                    }}
                  >
                    <Box>
                      <Typography fontWeight="900" fontSize={{ xs: 16, md: 18 }}>
                        {name}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        color="#FFFFFF"
                        fontWeight={300}
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
                            incrementToCart(product, productId, quantityAvailable, { saveToDb: true })
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
            })}
          </Box>
          {discount > 0 && (
            <>
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3 mt-6">
                <p className="text-green-400 text-sm text-center">
                  🎉 You saved ₹{" "}
                  {discount.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                  !
                </p>
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                  color: "#4ade80",
                  mt: 3,
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
            </>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "16px",
              color: "#F5F4F4",
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography fontWeight={600}>
              ₹{" "}
              {subtotal.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "16px",
              color: "#F5F4F4",
            }}
          >
            <Typography>Shipping</Typography>
            <Typography fontWeight={600}>{0}</Typography>
          </Box>

          {subtotal > 8000 && subtotal <= 10000 && (
            <Box
              sx={{
                bgcolor: "rgba(255,255,0,0.1)",
                color: "#F5F4F4",
                border: "1px solid rgba(255,255,0,0.3)",
                p: 1.5,
                mt: 3,
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
              color: "#F5F4F4",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              pt: 2,
            }}
          >
            <Box>
              <Typography fontWeight={700} fontSize={18}>
                Total
              </Typography>
              <Typography fontWeight={700} fontSize={12}>
                Including Rs 100.00 in taxes
              </Typography>
            </Box>
            <Typography color="#F5F4F4" fontWeight={500} fontSize={32}>
              ₹{" "}
              {total.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Box>

          {/* <ProductRecommendation /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
