import { useEffect, useMemo, useState } from "react";
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
  FormControl,
  Select,
  Radio,
  Divider,
  RadioGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import PaymentImg from "@/Assets/Images/Payment.svg";
import { Minus, Plus } from "lucide-react";
import { displayRazorpay } from "./Utils";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { useSnackbar } from "notistack";
import { paymentOptions, PaymentTypeEnum } from "./Constant";
import Loading from "@/components/Loading";
import useCart from "@/hooks/useCart";
import { cartAddressDetails, cartDetailSelector } from "@/Redux/Cart/Selectors";
import { isdCodeDetails } from "@/Redux/Auth/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import updateCartAddressServiceAction from "@/Redux/Cart/Services/UpdateCartAddressService";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { cartModifyServiceName, updateCartAddressServiceName } from "@/Redux/Cart/Action";
import { createPaymentOrderName, verifyPaymentOrderName } from "@/Redux/Order/Action";

interface CheckoutFormValues {
  shippingCountry: string;
  email: string;
  shippingFirstName: string;
  shippingLastName: string;
  shippingAddress: string;
  shippingApartment: string;
  shippingCity: string;
  shippingState: string;
  shippingPincode: string;
  shippingPhone: string;

  saveInfo: boolean;
  sameAsDelivery: boolean;

  billingCountry: string;
  billingFirstName: string;
  billingLastName: string;
  billingAddress: string;
  billingApartment: string;
  billingCity: string;
  billingState: string;
  billingPincode: string;
  billingPhone: string;
}

export default function CheckoutPage() {
  const { decrementToCart, incrementToCart, validateCart, clearCart } = useCart();

  const phoneNumber = useSelector<TAppStore, string>(
    (state) => state.auth.login.phoneNumber
  );
  const cartDetail = useSelector(cartDetailSelector)
  const isdCode = useSelector(isdCodeDetails)
  const cartAddressSelector = useSelector(cartAddressDetails)
  const {
    shippingAddress: shippingAddressSelector,
    billingAddress: billingAddressSelector
  } = cartAddressSelector

  const isLoading = useSelector<TAppStore, boolean>((state) => isServiceLoading(state, [
    cartModifyServiceName, updateCartAddressServiceName, createPaymentOrderName, verifyPaymentOrderName
  ]));

  const [paymentType, setPaymentType] = useState(PaymentTypeEnum.RAZORPAY);
  const [shippingIsdCode, setShippingIsdCode] = useState<string>('')
  const [billingIsdCode, setBillingIsdCode] = useState<string>('')

  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar } = useSnackbar();

  const { subtotal = 0, totalAmount = 0, discountAmount = 0, processedItems = [], couponCode = '', shippingCost = 0, taxAmount = 0 } = cartDetail

  function performOps() {
    if (!phoneNumber) dispatch(setOpenSignupPopup(true))
  }

  useEffect(() => {
    const shippingIsdCode = isdCode.find(c => c.name === shippingAddressSelector.country)?.isd || ''
    const billingIsdCode = isdCode.find(c => c.name === billingAddressSelector.country)?.isd || ''
    setShippingIsdCode(shippingIsdCode)
    setBillingIsdCode(billingIsdCode)
  }, [isdCode.length])

  useEffect(() => {
    performOps()
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
    shippingPhone: Yup.string().required("Phone Number is required")
      .test("shippingPhone", "Please enter valid 10 digit Phone Number", (value) => {
        if (/^[6-9]\d{9}$/.test(value)) return true;
        else return false;
      }),

    shippingFirstName: Yup.string().required("First name is required"),
    shippingLastName: Yup.string().required("Last name is required"),
    shippingAddress: Yup.string().required("Address is required"),
    shippingApartment: Yup.string(),
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
          .test("billingPhone", "Please enter valid 10 digit Phone Number", (value) => {
            if (/^[6-9]\d{9}$/.test(value)) return true;
            else return false;
          }),
    ),
  });

  // TODO change the API contract completely
  async function handleSubmit(values: CheckoutFormValues) {

    const {
      shippingCountry = "",
      email = "",
      shippingFirstName = "",
      shippingLastName = "",
      shippingAddress = "",
      shippingApartment = "",
      shippingCity = "",
      shippingState = "",
      shippingPincode = "",
      shippingPhone = "",

      saveInfo = true,
      sameAsDelivery = true,

      billingCountry = "",
      billingFirstName = "",
      billingLastName = "",
      billingAddress = "",
      billingApartment = "",
      billingCity = "",
      billingState = "",
      billingPincode = "",
      billingPhone = "",
    } = values;

    const shippingAddressData = {
      fullName: `${shippingFirstName} ${shippingLastName}`,
      phone: shippingPhone,
      addressLine1: shippingAddress,
      addressLine2: shippingApartment,
      city: shippingCity,
      state: shippingState,
      postalCode: shippingPincode,
      country: shippingCountry,
    }

    const billingAddressData = {
      fullName: `${billingFirstName} ${billingLastName}`,
      phone: billingPhone,
      addressLine1: billingAddress,
      addressLine2: billingApartment,
      city: billingCity,
      state: billingState,
      postalCode: billingPincode,
      country: billingCountry,
    }

    if (!phoneNumber || !processedItems.length) return;

    try {
      await validateCart(processedItems);

      await dispatch(updateCartAddressServiceAction({
        phoneNumber,
        shippingAddress: shippingAddressData,
        billingAddress: sameAsDelivery ? shippingAddressData : billingAddressData
      }))

      if (paymentType !== PaymentTypeEnum.COD) {
        displayRazorpay();
        return;
      }

    } catch (error: any) {
      const { message = '' } = error
      enqueueSnackbar({
        variant: "error",
        message
      });
    }
  }

  const { shippingFirstName, shippingLastName, billingFirstName, billingLastName } = useMemo(() => {
    const shippingSplitName = shippingAddressSelector.fullName.split(' ').filter(Boolean);
    const shippingLastName = shippingSplitName.pop() || ""
    const shippingFirstName = shippingSplitName.join(' ').trim();

    const billingSplitName = billingAddressSelector.fullName.split(' ').filter(Boolean);
    const billingLastName = billingSplitName.pop() || ""
    const billingFirstName = billingSplitName.join(' ').trim();

    return { shippingFirstName, shippingLastName, billingFirstName, billingLastName }
  }, [shippingAddressSelector.fullName, billingAddressSelector.fullName])

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

            <Formik<CheckoutFormValues>
              enableReinitialize
              validateOnMount
              initialValues={{
                email: "",
                shippingCountry: shippingAddressSelector.country,
                shippingFirstName: shippingFirstName,
                shippingLastName: shippingLastName,
                shippingAddress: shippingAddressSelector.addressLine1,
                shippingApartment: shippingAddressSelector.addressLine2,
                shippingCity: shippingAddressSelector.city,
                shippingState: shippingAddressSelector.state,
                shippingPincode: shippingAddressSelector.postalCode,
                shippingPhone: shippingAddressSelector.phone,
                saveInfo: true,
                billingCountry: billingAddressSelector.country,
                billingFirstName: billingFirstName,
                billingLastName: billingLastName,
                billingAddress: billingAddressSelector.addressLine1,
                billingApartment: billingAddressSelector.addressLine2,
                billingCity: billingAddressSelector.city,
                billingState: billingAddressSelector.state,
                billingPincode: billingAddressSelector.postalCode,
                billingPhone: billingAddressSelector.phone,
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
                setFieldValue,
                setFieldTouched,
                isValid,
              }) => {

                const isSubmitDisabled = !isValid || !processedItems.length

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
                          value={values.shippingCountry}
                          onChange={(e) => {
                            const countryName = e.target.value as string;

                            const selected = isdCode.find(
                              (c) => c.name === countryName
                            );

                            setFieldValue("shippingCountry", countryName, true);
                            setFieldTouched("shippingCountry", true);

                            if (selected) {
                              setShippingIsdCode(selected.isd);
                            }
                          }}
                          displayEmpty
                          IconComponent={() => null}
                          sx={{ p: 0, borderRadius: "10px" }}
                          renderValue={(value) => (
                            <Box>
                              <Typography sx={{ fontSize: "14px", color: "#1D1D1D" }}>
                                Country/Region
                              </Typography>
                              <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                                {value || "Select country"}
                              </Typography>
                            </Box>
                          )}
                        >
                          {isdCode.map((c) => (
                            <MenuItem
                              key={c.name}
                              value={c.name}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                justifyContent: "space-between",
                              }}
                            >
                              {c.name}
                            </MenuItem>
                          ))}
                        </Select>
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
                        name="shippingPhone"
                        label="Phone"
                        value={values.shippingPhone}
                        onChange={(e) => {
                          if (e.target.value.match(/[^0-9]/)) return;
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        error={getFieldErrorState({ errors, touched }, "shippingPhone")}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "shippingPhone"
                        )}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Typography
                                sx={{
                                  px: 1,
                                  borderRight: "1px solid #ccc",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                }}
                              >
                                {shippingIsdCode || "+"}
                              </Typography>
                            </InputAdornment>
                          ),
                        }}
                        inputProps={{ maxLength: 10 }}
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

                          {!values.sameAsDelivery && (
                            <Box sx={{ mt: "32px" }}>
                              <Grid container spacing={2}>
                                <FormControl fullWidth>
                                  <Select
                                    name="billingCountry"
                                    value={values.billingCountry}
                                    onChange={(e) => {
                                      const countryName = e.target.value as string;

                                      const selected = isdCode.find(
                                        (c) => c.name === countryName
                                      );

                                      setFieldValue("billingCountry", countryName, true);
                                      setFieldTouched("billingCountry", true);

                                      if (selected) {
                                        setBillingIsdCode(selected.isd);
                                      }
                                    }}
                                    displayEmpty
                                    IconComponent={() => null}
                                    sx={{ p: 0, borderRadius: "10px" }}
                                    renderValue={(value) => (
                                      <Box>
                                        <Typography sx={{ fontSize: "14px", color: "#1D1D1D" }}>
                                          Country/Region
                                        </Typography>
                                        <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                                          {value || "Select country"}
                                        </Typography>
                                      </Box>
                                    )}
                                  >
                                    {isdCode.map((c) => (
                                      <MenuItem
                                        key={c.name}
                                        value={c.name}
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        {c.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
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
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Typography
                                        sx={{
                                          px: 1,
                                          borderRight: "1px solid #ccc",
                                          fontSize: "14px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        {billingIsdCode || "+"}
                                      </Typography>
                                    </InputAdornment>
                                  ),
                                }}
                                inputProps={{ maxLength: 10 }}
                              />
                            </Box>
                          )}
                        </Box>
                      </Box>
                      <Button
                        fullWidth
                        type="submit"
                        disabled={isSubmitDisabled}
                        variant="outlined"
                        size="large"
                        sx={{
                          backgroundColor: isSubmitDisabled ? "#00000033" : "black",
                          opacity: 1,
                          color: isSubmitDisabled ? "black" : "white",
                          mb: "32px",
                          py: "16px",
                          borderRadius: "10px",
                          textTransform: "none",
                        }}
                      >
                        Place Order
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
                        ₹ {price}
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
                            decrementToCart(productId)
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
                            incrementToCart(product, productId, quantityAvailable)
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
          {discountAmount > 0 && (
            <>
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3 mt-6">
                <p className="text-green-400 text-sm text-center">
                  🎉 You saved ₹ {discountAmount}!
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
                <Typography>Discount ({couponCode})</Typography>
                <Typography>
                  - ₹ {discountAmount}
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
              ₹ {subtotal}
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
            <Typography fontWeight={600}>{shippingCost}</Typography>
          </Box>

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
                Including {"Rs"} {taxAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} in taxes
              </Typography>
            </Box>
            <Typography color="#F5F4F4" fontWeight={500} fontSize={32}>
              ₹ {totalAmount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
