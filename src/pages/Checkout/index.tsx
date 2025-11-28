import React, { useEffect, useMemo, useState } from "react";
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
import { useCartContext } from "@/Context/CartProvider";
import { Minus, Plus } from "lucide-react";
import { displayRazorpay } from "./Utils";
import { useDispatch } from "react-redux";
import { TAppDispatch } from "@/Configurations/AppStore";
import cartCheckoutServiceAction from "@/Redux/Cart/Services/Checkout";
import getIsdListServiceAction from "@/Redux/Auth/Services/GetIsdCodes";
import {  useSnackbar } from 'notistack';
export default function CheckoutPage() {
  const { cartItems, updateQuantity, removeItem } = useCartContext();
  const [countries, setCountries] = useState([]);
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const discount = subtotal > 10000 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
    phone: Yup.string()
      .required("Phone Number is required")
      .test("phone", "Please enter valid 10 digit Phone Number", (value) => {
        if (/^[6-9]\d{9}$/.test(value)) return true;
        else return false;
      }),

    shippingFirstName: Yup.string().required("First name is required"),
    shippingLastName: Yup.string().required("Last name is required"),
    shippingAddress: Yup.string().required("Address is required"),
    shippingApartment: Yup.string().required("Address is required"),
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
  });

  const handleSubmit = async (values) => {
    const body = {
      phoneNumber: values.phone,
      items: cartItems,
  
      shippingAddress: {
        fullName: `${values.shippingFirstName} ${values.shippingLastName}`,
        addressLine1: values.shippingAddress,
        addressLine2: values.shippingApartment,
        city: values.shippingCity,
        state: values.shippingState,
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
          }
        : {
            fullName: `${values.billingFirstName} ${values.billingLastName}`,
            addressLine1: values.billingAddress,
            addressLine2: values.billingApartment,
            city: values.billingCity,
            state: values.billingState,
            postalCode: values.billingPincode,
            country: values.billingCountry,
          },
    };
  
    try {
      const result = await actions.saveCartDetails(body);
      enqueueSnackbar('Cart details saved successfully!', {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      })
  
    } catch (err) {
      if(err.response?.status === 400)
      enqueueSnackbar( err.response?.data?.error, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
    }
  };
  

  return (
    <Container sx={{ py: 6 }}>
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
              }) => (
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
                      <RadioGroup defaultValue="razorpay">
                        <FormControlLabel
                          value="razorpay"
                          control={<Radio sx={{ transform: "scale(0.8)" }} />}
                          sx={{
                            alignItems: "center",
                            p: "16px",
                          }}
                          label={
                            <Box>
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  color: "#202020",
                                }}
                              >
                                Razorpay Secure (UPI, Cards, Wallets, Net
                                Banking)
                              </Typography>
                            </Box>
                          }
                        />

                        <Divider sx={{ borderColor: "#1F1F1F" }} />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            py: "24px",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <img
                              src="/uploads/payment.svg"
                              alt="payment preview"
                              style={{ opacity: 0.8 }}
                            />
                          </Box>

                          <Typography
                            sx={{
                              fontSize: "14px",
                              color: "#202020",
                              mb: 2,
                              textAlign: "center",
                            }}
                          >
                            After clicking “Pay now”, you will be redirected to
                            Razorpay Secure to complete your purchase.
                          </Typography>
                        </Box>

                        <Divider sx={{ borderColor: "#1F1F1F" }} />

                        {/* PhonePe Option */}
                        <FormControlLabel
                          value="phonepe"
                          control={<Radio sx={{ transform: "scale(0.8)" }} />}
                          sx={{
                            alignItems: "center",
                            p: "16px",
                          }}
                          label={
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize: "16px",
                                color: "#202020",
                              }}
                            >
                              PhonePe Payment Gateway (UPI, Cards & Net Banking)
                            </Typography>
                          }
                        />
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
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Button
                      fullWidth
                      type="submit"
                      // onClick={displayRazorpay}
                      variant="outlined"
                      size="large"
                      sx={{
                        backgroundColor: "Black",
                        color: "white",
                        mb: "32px",
                        py: "16px",
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                    >
                      Pay Now
                    </Button>
                  </Box>
                </Form>
              )}
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
            {cartItems.map((item) => (
              <Box
                key={item.id}
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
                    src={item.image}
                    alt={item.name}
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
                      {item.name}
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
                      ₹ {item.price.toLocaleString()}
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
                          item.quantity > 1
                            ? updateQuantity(item.id, item.quantity - 1)
                            : removeItem(item.id);
                        }}
                        sx={{
                          color: "white",
                          "&:hover": { color: "yellow" },
                        }}
                      >
                        <Minus size={18} />
                      </IconButton>

                      <Typography sx={{ width: 30, textAlign: "center" }}>
                        {item.quantity}
                      </Typography>

                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(item.id, item.quantity + 1);
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
            ))}
          </Box>
          {discount > 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
                color: "#F5F4F4",
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
        </Grid>
      </Grid>
    </Container>
  );
}
