import { useEffect, useMemo, useState } from "react";
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
  Stack,
  FormHelperText,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import PaymentImg from "@/Assets/Images/Payment.svg";
import { Minus, Plus } from "lucide-react";
import { displayRazorpay, validatePhone } from "./Utils";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { useSnackbar } from "notistack";
import { COUNTRY_MAPPER, paymentOptions, PaymentTypeEnum } from "./Constant";
import Loading from "@/components/Loading";
import useCart from "@/hooks/useCart";
import { cartAddressDetails, cartDetailSelector } from "@/Redux/Cart/Selectors";
import { getLoginDetails, getProfileDetails, isdCodeDetails } from "@/Redux/Auth/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import updateCartAddressServiceAction from "@/Redux/Cart/Services/UpdateCartAddressService";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { cartModifyServiceName, updateCartAddressServiceName, updatePaymentMethodServiceName } from "@/Redux/Cart/Action";
import { createPaymentOrderName, verifyPaymentOrderName } from "@/Redux/Order/Action";
import DisplayCouponCTA from "@/components/DisplayCouponCTA";
import updateProfileDetailServiceAction from "@/Redux/Auth/Services/UpdateProfileDetails";
import addProfileDetailServiceAction from "@/Redux/Auth/Services/AddProfileDetails";
import updatePaymentServiceAction from "@/Redux/Cart/Services/UpdatePaymentService";
import { UpdatePaymentResType } from "@/Redux/Cart/Types";

interface CheckoutFormValues {
  shippingCountry: string;
  emailId: string;
  shippingFirstName: string;
  shippingLastName: string;
  shippingAddress: string;
  shippingApartment: string;
  shippingCity: string;
  shippingState: string;
  shippingPincode: string;
  shippingPhone: string;

  saveInfo: boolean;
  shippingAddressSameAsBillingAddress: boolean;

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

type PaymentMethodType = {
  subtotal: number;
  totalAmount: number;
  discountAmount: number;
  shippingCost: number;
  taxAmount: number;
  codCharges: number;
  advanceAmount: number;
}

export default function CheckoutPage() {
  const { decrementToCart, incrementToCart, validateCart, getQuantity } = useCart();

  const cartDetail = useSelector(cartDetailSelector)
  const isdCode = useSelector(isdCodeDetails)
  const cartAddressSelector = useSelector(cartAddressDetails)
  const profileDetails = useSelector(getProfileDetails);
  const loginDetails = useSelector(getLoginDetails);

  const {
    shippingAddress: shippingAddressSelector,
    billingAddress: billingAddressSelector,
    shippingAddressSameAsBillingAddress,
    emailId: cartEmailId,
  } = cartAddressSelector

  const isLoading = useSelector<TAppStore, boolean>((state) => isServiceLoading(state, [
    cartModifyServiceName, updateCartAddressServiceName, createPaymentOrderName, verifyPaymentOrderName, updatePaymentMethodServiceName
  ]));

  const isCartLoading = useSelector<TAppStore, boolean>((state) => isServiceLoading(state, [cartModifyServiceName]))

  const {
    subtotal: cartSubtotal = 0,
    totalAmount: cartTotalAmount = 0,
    discountAmount: cartDiscountAmount = 0,
    shippingCost: cartShippingCost = 0,
    taxAmount: cartTaxAmount = 0,
    codCharges: cartCodCharges = 0,
    processedItems = [],
    couponCode = 0,
    currencySymbol = '',
    currency = '',
  } = cartDetail;

  const [paymentType, setPaymentType] = useState(null);
  const [shippingIsdCode, setShippingIsdCode] = useState<string>('')
  const [billingIsdCode, setBillingIsdCode] = useState<string>('')
  const [paymentMethodDetails, setPaymentMethodDetails] = useState<PaymentMethodType>({
    subtotal: cartSubtotal,
    totalAmount: cartTotalAmount,
    discountAmount: cartDiscountAmount,
    shippingCost: cartShippingCost,
    taxAmount: cartTaxAmount,
    codCharges: cartCodCharges,
    advanceAmount: 0
  });

  const { subtotal, totalAmount, discountAmount, shippingCost, taxAmount, codCharges, advanceAmount } = paymentMethodDetails;

  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar } = useSnackbar();

  function performOps() {
    if (!loginDetails.phoneNumber) dispatch(setOpenSignupPopup(true))
  }

  useEffect(() => {
    if (isCartLoading) return;

    if (paymentType) {
      handlePaymentOptionChange(paymentType)
      return;
    }

    if (codCharges) {
      handlePaymentOptionChange(PaymentTypeEnum.COD)
      return;
    }
  }, [cartDiscountAmount, isCartLoading])

  // syncing with cart everytime before set-payment-method api call
  useEffect(() => {
    setPaymentMethodDetails({
      subtotal: cartSubtotal,
      totalAmount: cartTotalAmount,
      discountAmount: cartDiscountAmount,
      shippingCost: cartShippingCost,
      taxAmount: cartTaxAmount,
      codCharges: cartCodCharges,
      advanceAmount: 0
    })
  }, [cartSubtotal, isCartLoading])

  useEffect(() => {
    performOps()
  }, []);

  const CheckoutSchema = Yup.object({
    emailId: Yup.string()
      .email("Invalid emailId format")
      .required("Email Id is required")
      .test("emailId", "Invalid email format", (value) => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
          return true;
        else return false;
      }),
    shippingCountry: Yup.string().required("Country is required"),
    shippingPhone: Yup.string()
      .required("Phone number is required")
      .test("shippingPhone", validatePhone("shippingCountry")),

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
    shippingAddressSameAsBillingAddress: Yup.boolean(),
    billingCountry: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same ? schema : schema.required("Country is required")
    ),
    billingFirstName: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same ? schema : schema.required("Billing first name is required")
    ),

    billingLastName: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same ? schema : schema.required("Billing last name is required")
    ),

    billingAddress: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same ? schema : schema.required("Billing address is required")
    ),

    billingApartment: Yup.string(),

    billingCity: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same ? schema : schema.required("Billing city is required")
    ),

    billingState: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same ? schema : schema.required("Billing state is required")
    ),

    billingPincode: Yup.string().when("shippingAddressSameAsBillingAddress", (same, schema) =>
      same
        ? schema
        : schema
          .matches(/^[0-9]{6}$/, "Enter a valid 6-digit pincode")
          .required("Billing pincode is required")
    ),
    billingPhone: Yup.string().when(
      "shippingAddressSameAsBillingAddress",
      (same, schema) =>
        same
          ? schema.notRequired()
          : schema
            .required("Billing phone number is required")
            .test("billingPhone", validatePhone("billingCountry"))
    )
  });

  // TODO change the API contract completely
  async function handleSubmit(values: CheckoutFormValues) {

    const {
      shippingCountry = "",
      emailId = "",
      shippingFirstName = "",
      shippingLastName = "",
      shippingAddress = "",
      shippingApartment = "",
      shippingCity = "",
      shippingState = "",
      shippingPincode = "",
      shippingPhone = "",

      saveInfo = true,
      shippingAddressSameAsBillingAddress = false,

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
      phone: `${shippingIsdCode}-${shippingPhone}`,
      addressLine1: shippingAddress,
      addressLine2: shippingApartment,
      city: shippingCity,
      state: shippingState,
      postalCode: shippingPincode,
      country: shippingCountry,
    }

    const billingAddressData = {
      fullName: `${billingFirstName} ${billingLastName}`,
      phone: `${billingIsdCode}-${billingPhone}`,
      addressLine1: billingAddress,
      addressLine2: billingApartment,
      city: billingCity,
      state: billingState,
      postalCode: billingPincode,
      country: billingCountry,
    }

    const { phoneNumber = '' } = loginDetails

    if (!phoneNumber || !processedItems.length || !paymentType) return;

    const shouldUpdate =
      !profileDetails.emailId ||
      !profileDetails.firstName ||
      !profileDetails.lastName ||
      !profileDetails.addressLine1 ||
      !profileDetails.city ||
      !profileDetails.state ||
      !profileDetails.postalCode ||
      !profileDetails.country

    if (shouldUpdate) {
      const isd = profileDetails.isdCode;
      const payload = {
        ...profileDetails,
        phoneNumber: phoneNumber,
        isdCode: isd,
        ...(!profileDetails.emailId && { emailId }),
        ...(!profileDetails.firstName && { firstName: shippingFirstName }),
        ...(!profileDetails.lastName && { lastName: shippingLastName }),

        ...(!profileDetails.addressLine1 && { addressLine1: shippingAddress }),
        ...(!profileDetails.addressLine2 && { addressLine2: shippingApartment }),
        ...(!profileDetails.city && { city: shippingCity }),
        ...(!profileDetails.state && { state: shippingState }),
        ...(!profileDetails.postalCode && { postalCode: shippingPincode }),
        ...(!profileDetails.country && { country: shippingCountry }),
      }

      await dispatch(
        (profileDetails._id
          ? updateProfileDetailServiceAction
          : addProfileDetailServiceAction)(payload)
      )
    }

    try {
      await validateCart(processedItems);

      await dispatch(updateCartAddressServiceAction({
        phoneNumber,
        emailId,
        shippingAddressSameAsBillingAddress,
        shippingAddress: shippingAddressData,
        billingAddress: shippingAddressSameAsBillingAddress ? shippingAddressData : billingAddressData
      }))

      displayRazorpay(paymentType);

      // if (paymentType === PaymentTypeEnum.COD) {
      //   const { orderId = '' } = await dispatch(createCodOrderServiceAction({ phoneNumber })) as CreateCodOrderResType
      //   navigate(ROUTES.ORDER_SUCCESSFUL, { state: { orderId } });
      //   handleClearCart();
      //   return;
      // }

      // if (paymentType === PaymentTypeEnum.RAZORPAY) {
      //   displayRazorpay(paymentType);
      //   return;
      // }

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

  async function handlePaymentOptionChange(method: PaymentTypeEnum) {
    const { phoneNumber = '' } = loginDetails

    setPaymentType(method)

    try {
      const { discountAmount, subtotal, totalAmount, shippingCost, taxAmount, advanceAmount, codCharges } = await dispatch(updatePaymentServiceAction({ method, phoneNumber, currency })) as UpdatePaymentResType;
      setPaymentMethodDetails({ subtotal, totalAmount, discountAmount, shippingCost, taxAmount, advanceAmount, codCharges })
    } catch (error) {
      const { message = '' } = error
      enqueueSnackbar({
        variant: "error",
        message
      });
      setPaymentType(paymentType)
    }
  }

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
                emailId: cartEmailId || profileDetails.emailId || "",
                shippingCountry: shippingAddressSelector.country || profileDetails.country || "",
                shippingFirstName: shippingFirstName || profileDetails.firstName || "",
                shippingLastName: shippingLastName || profileDetails.lastName || "",
                shippingAddress: shippingAddressSelector.addressLine1 || profileDetails.addressLine1 || "",
                shippingApartment: shippingAddressSelector.addressLine2 || profileDetails.addressLine2 || "",
                shippingCity: shippingAddressSelector.city || profileDetails.city || "",
                shippingState: shippingAddressSelector.state || profileDetails.state || "",
                shippingPincode: shippingAddressSelector.postalCode || profileDetails.postalCode || "",
                shippingPhone: shippingAddressSelector.phone || profileDetails.phoneNumber || "",
                saveInfo: true,
                billingCountry: billingAddressSelector.country,
                billingFirstName: billingFirstName,
                billingLastName: billingLastName,
                billingAddress: billingAddressSelector.addressLine1,
                billingApartment: billingAddressSelector.addressLine2,
                billingCity: billingAddressSelector.city,
                billingState: billingAddressSelector.state,
                billingPincode: billingAddressSelector.postalCode,
                billingPhone: billingAddressSelector.phone || profileDetails.phoneNumber || "",
                shippingAddressSameAsBillingAddress,
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
                setValues,
                setFieldValue,
                setFieldTouched,
                isValid,
              }) => {

                console.log("Errors 11112222", errors);

                useEffect(() => {
                  const { shippingCountry, billingCountry } = values

                  const shippingIsdCode = isdCode.find(c => c.name.toLowerCase() === shippingCountry.toLowerCase())?.isd || ''
                  const billingIsdCode = isdCode.find(c => c.name.toLowerCase() === billingCountry.toLowerCase())?.isd || ''

                  setShippingIsdCode(shippingIsdCode)
                  setBillingIsdCode(billingIsdCode)
                }, [isdCode.length, values.shippingPhone, values.billingPhone, values.shippingAddressSameAsBillingAddress])

                function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
                  const { checked } = e.target;

                  const {
                    shippingCountry,
                    shippingFirstName,
                    shippingLastName,
                    shippingAddress,
                    shippingApartment,
                    shippingCity,
                    shippingState,
                    shippingPincode,
                    shippingPhone,
                  } = values;

                  setValues({
                    ...values,
                    shippingAddressSameAsBillingAddress: checked,
                    billingCountry: shippingCountry,
                    billingFirstName: shippingFirstName,
                    billingLastName: shippingLastName,
                    billingAddress: shippingAddress,
                    billingApartment: shippingApartment,
                    billingCity: shippingCity,
                    billingState: shippingState,
                    billingPincode: shippingPincode,
                    billingPhone: shippingPhone,
                  });
                }

                const isSubmitDisabled = !isValid || !processedItems.length || !paymentType

                return (
                  <Form>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <Stack
                        gap='2px'
                      >
                        <TextField
                          fullWidth
                          name="emailId"
                          label="Email"
                          value={values.emailId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={getFieldErrorState({ errors, touched }, "emailId")}
                          helperText={getHelperOrErrorText(
                            { errors, touched },
                            "emailId"
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
                        {/* Note: check verification of email and conditionally render this text */}
                        {/* <Typography
                          variant='caption'
                          color='#202020'
                          sx={{
                            ml: '4px',
                          }}
                        >
                          Verify your email address from your profile settings.
                        </Typography> */}
                      </Stack>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#202020" }}
                      >
                        Delivery
                      </Typography>
                      <FormControl
                        fullWidth
                        error={Boolean(errors.shippingCountry && touched.shippingCountry)}
                      >
                        <Select
                          name="shippingCountry"
                          value={values.shippingCountry}
                          onChange={(e) => {
                            const countryName = e.target.value as string;

                            countryName.toUpperCase() !== COUNTRY_MAPPER.INDIA && handlePaymentOptionChange(PaymentTypeEnum.RAZORPAY)

                            const isd = isdCode.find(c => c.name.toLowerCase() === countryName.toLowerCase())?.isd || ''

                            setShippingIsdCode(isd)
                            setFieldValue("shippingCountry", countryName, true);
                            setFieldTouched("shippingCountry", true);
                          }}
                          onBlur={handleBlur}
                          displayEmpty
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
                        {Boolean(errors.shippingCountry && touched.shippingCountry) && (
                          <FormHelperText>
                            {getHelperOrErrorText({ errors, touched }, "shippingCountry")}
                          </FormHelperText>
                        )}
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

                            if (value === PaymentTypeEnum.COD && values.shippingCountry.toUpperCase() !== COUNTRY_MAPPER.INDIA) return null;

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
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.preventDefault()
                                    handlePaymentOptionChange(value)
                                  }}
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
                            name="shippingAddressSameAsBillingAddress"
                            control={
                              <Checkbox
                                checked={values.shippingAddressSameAsBillingAddress}
                                onChange={handleCheckboxChange}
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

                          {!values.shippingAddressSameAsBillingAddress && (
                            <Box sx={{ mt: "32px" }}>
                              <Grid container spacing={2}>
                                <FormControl
                                  fullWidth
                                  error={Boolean(errors.billingCountry && touched.billingCountry)}
                                >
                                  <Select
                                    name="billingCountry"
                                    value={values.billingCountry}
                                    onChange={(e) => {
                                      const countryName = e.target.value as string;
                                      const isd = isdCode.find(c => c.name.toLowerCase() === countryName.toLowerCase())?.isd || ''

                                      setBillingIsdCode(isd)
                                      setFieldValue("billingCountry", countryName, true);
                                      setFieldTouched("billingCountry", true);
                                    }}
                                    onBlur={handleBlur}
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
                                  {Boolean(errors.billingCountry && touched.billingCountry) && (
                                    <FormHelperText>
                                      {getHelperOrErrorText({ errors, touched }, "billingCountry")}
                                    </FormHelperText>
                                  )}
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
              const { product, quantity = 0, price = 0, totalPrice = 0, currencySymbol = '' } = item;
              const { _id: productId = '', imageUrl = '', name = '', shortDescription = '', quantityAvailable = 0 } = product || {}

              const productQuantity = getQuantity(productId)
              const isPlusDisabled = productQuantity >= quantityAvailable;

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
                        {currencySymbol} {price}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderRadius: 2,
                        }}
                        onClick={e => e.stopPropagation()}
                      >
                        <IconButton
                          onClick={() => decrementToCart(productId)}
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
                          onClick={() => incrementToCart(product, productId, quantityAvailable)}
                          sx={{
                            color: "white",
                            "&:hover": { color: "yellow" },
                            "&.Mui-disabled": { color: "gray" },
                          }}
                          disabled={isPlusDisabled}
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
                  🎉 You saved {currencySymbol} {discountAmount}!
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
                  - {currencySymbol} {discountAmount?.toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </Typography>
              </Box>
            </>
          )}

          <Box mt={discountAmount > 0 ? 4 : 0}>
            <DisplayCouponCTA />
          </Box>

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
              {currencySymbol} {subtotal?.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </Typography>
          </Box>
          {
            codCharges > 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "16px",
                  color: "#F5F4F4",
                }}
              >
                <Typography>COD Charges</Typography>
                <Typography fontWeight={600}>{currencySymbol} {codCharges?.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}</Typography>
              </Box>
            )
          }
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "16px",
              color: "#F5F4F4",
            }}
          >
            <Typography>Shipping</Typography>
            <Typography fontWeight={600}>{currencySymbol} {shippingCost?.toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "16px",
              color: "#F5F4F4",
            }}
          >
            <Typography>Tax Amount</Typography>
            <Typography fontWeight={600}>{currencySymbol} {taxAmount?.toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}</Typography>
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
                Including {currencySymbol} {taxAmount?.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })} in taxes
              </Typography>
            </Box>
            <Typography color="#F5F4F4" fontWeight={500} fontSize={32}>
              {currencySymbol} {totalAmount?.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </Typography>
          </Box>

          {
            advanceAmount > 0 && (
              <>
                {/* Advance Payment Row */}
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
                  <Typography fontWeight={700} fontSize={18}>
                    Advance Payment (Online)
                  </Typography>

                  <Typography fontWeight={500} fontSize={28} color="#22C55E">
                    {currencySymbol} {advanceAmount?.toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </Typography>
                </Box>

                {/* Info Card */}
                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  px={2.5}
                  py={1.8}
                  borderRadius="12px"
                  sx={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "linear-gradient(90deg, #1a1a1a, #111)",
                  }}
                >
                  {/* Icon */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={34}
                    height={34}
                    borderRadius="50%"
                    sx={{
                      backgroundColor: "rgba(59,130,246,0.15)",
                    }}
                  >
                    <InfoOutlinedIcon sx={{ color: "#3B82F6", fontSize: 18 }} />
                  </Box>

                  {/* Text */}
                  <Typography fontSize={14} sx={{ color: "rgba(255,255,255,0.7)" }}>
                    Pay remaining{" "}
                    <Box component="span" sx={{ color: "#3B82F6", fontWeight: 600 }}>
                      {currencySymbol} {(totalAmount - advanceAmount)?.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </Box>{" "}
                    at the time of delivery.
                  </Typography>
                </Box>
              </>
            )
          }
        </Grid>
      </Grid>
    </Container>
  );
}
