import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Form, Formik } from "formik";
import type { ReactNode } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import type { TAppDispatch } from "@/Configurations/AppStore";
import { getCurrencyList, getSelectedCurrency } from "@/Redux/Landing/Selectors";
import { selectedCurrencyActions } from "@/Redux/Landing/Actions";
import SearchService from "@/Redux/Product/Services/SearchService";
import type {
  SearchDataProductsType,
  SearchResponseType,
} from "@/Redux/Product/Types";
import type {
  CartAddressType,
  CartModifyReqType,
  UpdateCartAddressReqType,
} from "@/Redux/Cart/Types";
import { COUNTRY_INDIA } from "@/Constants/AppConstant";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import type {
  AdminActiveCartLineItem,
  AdminActiveCartRecord,
} from "../Configurations/ActiveCartApi";
import type { AdminIsdCode } from "../Configurations/AdminIsdCodeApi";

const DEFAULT_COUNTRY = COUNTRY_INDIA;
const DEFAULT_ISD_CODE = "+91";

export type CartOrderEditorCart = Pick<
  AdminActiveCartRecord,
  | "phoneNumber"
  | "emailId"
  | "items"
  | "currency"
  | "currencySymbol"
  | "shippingAddress"
  | "billingAddress"
  | "shippingAddressSameAsBillingAddress"
  | "couponCode"
  | "appliedCoupon"
  | "paymentMethod"
>;


export type CartOrderEditorSavePayload = {
  address: UpdateCartAddressReqType;
  cart: CartModifyReqType;
  hasCartChanges: boolean;
  salesPersonName: string;
  paymentType: "razorpay" | "upi";
  paymentStatus: "partial_paid" | "paid";
  advancePaid: number;
  adminCapturedPaymentId: string;
  couponCode: string | null;
  orderItems: {
    product: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[];
  paymentMethod?: "online" | "cod";
  currency?: string;
};

type CartOrderDraftItem = {
  productId: string;
  quantity: number;
  name: string;
  shortDescription?: string;
  imageUrl?: string;
  price?: number;
  currencySymbol?: string;
  productCode?: string;
};

type CartOrderFormValues = {
  emailId: string;
  shippingCountry: string;
  shippingFirstName: string;
  shippingLastName: string;
  shippingAddress: string;
  shippingApartment: string;
  shippingCity: string;
  shippingState: string;
  shippingPincode: string;
  shippingPhone: string;
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
  salesPersonName: string;
  paymentType: "razorpay" | "upi";
  paymentStatus: "partial_paid" | "paid";
  advancePaid: number;
  adminCapturedPaymentId: string;
  couponCode: string;
  paymentMethod: "online" | "cod";
  currency: string;
};

function isIndiaCountry(country = ""): boolean {
  return country.trim().toLowerCase() === COUNTRY_INDIA.toLowerCase();
}

function splitName(fullName = "") {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const lastName = parts.length > 1 ? parts.pop() ?? "" : "";
  return {
    firstName: parts.join(" "),
    lastName,
  };
}

function stripIsd(phone = ""): string {
  const parts = phone.split("-");
  return parts.length > 1 ? parts.slice(1).join("-") : phone;
}

function getCountryIsd(country: string, countryOptions: AdminIsdCode[]): string {
  return (
    countryOptions.find(
      (option) => option.name.toLowerCase() === country.toLowerCase(),
    )?.isd || DEFAULT_ISD_CODE
  );
}

function validatePhoneForCountry(countryKey: keyof CartOrderFormValues) {
  return function (this: Yup.TestContext, value?: string) {
    const country = String(this.parent[countryKey] ?? "");

    if (!value) {
      return this.createError({ message: "Phone number is required" });
    }

    const cleaned = value.replace(/[\s-]/g, "");

    if (isIndiaCountry(country)) {
      if (cleaned.length !== 10) {
        return this.createError({
          message: "Indian phone number must be exactly 10 digits",
        });
      }

      if (!/^[6-9]\d{9}$/.test(cleaned)) {
        return this.createError({
          message: "Indian number must start with 6-9",
        });
      }

      return true;
    }

    const digitsOnly = cleaned.replace(/^\+/, "");

    if (digitsOnly.length < 8 || digitsOnly.length > 15) {
      return this.createError({
        message: "Phone number must be between 8 and 15 digits",
      });
    }

    if (!/^\+?[1-9]\d{7,14}$/.test(cleaned)) {
      return this.createError({
        message: "Enter a valid international phone number",
      });
    }

    return true;
  };
}

function postalCodeSchema(countryKey: keyof CartOrderFormValues, requiredMessage: string) {
  return Yup.string()
    .test("postalCode", "Enter a valid postal code", function (value) {
      const country = String(this.parent[countryKey] ?? "");
      if (isIndiaCountry(country)) {
        return /^[1-9][0-9]{5}$/.test(value || "");
      }

      const hyphenCount = (value || "").split("").filter((ch) => ch === "-").length;
      return /^[a-zA-Z0-9-]{1,9}$/.test(value || "") && hyphenCount <= 1;
    })
    .required(requiredMessage);
}

function isSameAddressValue(value: unknown): boolean {
  return Array.isArray(value) ? Boolean(value[0]) : Boolean(value);
}

const schema = Yup.object({
  emailId: Yup.string()
    .email("Invalid emailId format")
    .required("Email Id is required")
    .test("emailId", "Invalid email format", (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value || ""),
    ),
  shippingCountry: Yup.string().required("Country is required"),
  shippingPhone: Yup.string()
    .required("Phone number is required")
    .test("shippingPhone", validatePhoneForCountry("shippingCountry")),
  shippingFirstName: Yup.string().required("First name is required"),
  shippingLastName: Yup.string().required("Last name is required"),
  shippingAddress: Yup.string().required("Address is required"),
  shippingApartment: Yup.string(),
  shippingCity: Yup.string().required("City is required"),
  shippingState: Yup.string().required("State is required"),
  shippingPincode: postalCodeSchema("shippingCountry", "Pincode is required"),
  shippingAddressSameAsBillingAddress: Yup.boolean(),
  billingCountry: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) => (same ? fieldSchema : fieldSchema.required("Country is required")),
  ),
  billingFirstName: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same ? fieldSchema : fieldSchema.required("Billing first name is required"),
  ),
  billingLastName: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same ? fieldSchema : fieldSchema.required("Billing last name is required"),
  ),
  billingAddress: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same ? fieldSchema : fieldSchema.required("Billing address is required"),
  ),
  billingApartment: Yup.string(),
  billingCity: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same ? fieldSchema : fieldSchema.required("Billing city is required"),
  ),
  billingState: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same ? fieldSchema : fieldSchema.required("Billing state is required"),
  ),
  billingPincode: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same
        ? fieldSchema
        : postalCodeSchema("billingCountry", "Billing pincode is required"),
  ),
  billingPhone: Yup.string().when(
    "shippingAddressSameAsBillingAddress",
    (same, fieldSchema) =>
      same
        ? fieldSchema.notRequired()
        : fieldSchema
            .required("Billing phone number is required")
            .test("billingPhone", validatePhoneForCountry("billingCountry")),
  ),
  salesPersonName: Yup.string(),
  paymentType: Yup.string().oneOf(["razorpay", "upi"], "Invalid payment type").required("Payment type is required"),
  paymentStatus: Yup.string().oneOf(["partial_paid", "paid"], "Invalid payment status").required("Payment status is required"),
  advancePaid: Yup.number().min(0, "Advance paid cannot be negative").required("Advance paid is required"),
  adminCapturedPaymentId: Yup.string(),
  couponCode: Yup.string().nullable(),
  paymentMethod: Yup.string().oneOf(["online", "cod"], "Invalid payment method").required("Payment method is required"),
  currency: Yup.string().required("Currency is required"),
});

function productDisplayName(item: AdminActiveCartLineItem): string {
  const p = item.product ?? null;
  if (p == null) return "Product unavailable";
  if (typeof p.name === "string" && p.name.trim()) return p.name;
  const bikeName = p["Bike model name"];
  if (typeof bikeName === "string" && bikeName.trim()) return bikeName;
  return "Unknown Product";
}

function getLineItemProductId(item: AdminActiveCartLineItem): string {
  const product = item.product;
  if (product && typeof product === "object" && typeof product._id === "string") {
    return product._id;
  }

  const itemWithProductId = item as AdminActiveCartLineItem & {
    productId?: string | { _id?: string };
  };
  if (typeof itemWithProductId.productId === "string") return itemWithProductId.productId;
  if (
    itemWithProductId.productId &&
    typeof itemWithProductId.productId === "object" &&
    typeof itemWithProductId.productId._id === "string"
  ) {
    return itemWithProductId.productId._id;
  }

  return "";
}

function productImageUrl(item: AdminActiveCartLineItem): string | undefined {
  const product = item.product;
  if (!product) return undefined;
  if (typeof product.imageUrl === "string" && product.imageUrl.trim()) {
    return product.imageUrl;
  }
  return product.images?.find((u) => typeof u === "string" && u.trim());
}

function buildDraftItems(cart: CartOrderEditorCart | null): CartOrderDraftItem[] {
  return (cart?.items ?? [])
    .map((lineItem): CartOrderDraftItem | null => {
      const productId = getLineItemProductId(lineItem);
      if (!productId) return null;
      return {
        productId,
        quantity: lineItem.quantity ?? 0,
        name: productDisplayName(lineItem),
        shortDescription: lineItem.product?.shortDescription,
        imageUrl: productImageUrl(lineItem),
        price: lineItem.price,
        currencySymbol: lineItem.currencySymbol ?? cart?.currencySymbol,
        productCode: lineItem.product?.productCode,
      };
    })
    .filter((item): item is CartOrderDraftItem => item != null);
}

function toProductDraftItem(product: SearchDataProductsType): CartOrderDraftItem {
  return {
    productId: product._id,
    quantity: 1,
    name: product.name,
    shortDescription: product.shortDescription,
    imageUrl: product.imageUrl,
    price: product.price,
    currencySymbol: product.currencySymbol,
  };
}

function areCartItemsEqual(
  first: CartModifyReqType["items"],
  second: CartModifyReqType["items"],
): boolean {
  if (first.length !== second.length) return false;
  return first.every((item, index) => {
    const next = second[index];
    return item.productId === next.productId && item.quantity === next.quantity;
  });
}

function initialValuesFromCart(
  cart: CartOrderEditorCart | null,
  countryOptions: AdminIsdCode[],
): CartOrderFormValues {
  const shipping = cart?.shippingAddress ?? null;
  const billing = cart?.billingAddress ?? null;
  const shippingName = splitName(shipping?.fullName);
  const billingName = splitName(billing?.fullName);
  const shippingCountry = shipping?.country || DEFAULT_COUNTRY;
  const billingCountry = billing?.country || shippingCountry;
  const sameAsBilling =
    cart?.shippingAddressSameAsBillingAddress ?? !billing?.addressLine1;
  const fallbackPhone = stripIsd(cart?.phoneNumber ?? "");

  return {
    emailId: cart?.emailId ?? "",
    shippingCountry,
    shippingFirstName: shippingName.firstName,
    shippingLastName: shippingName.lastName,
    shippingAddress: shipping?.addressLine1 ?? "",
    shippingApartment: shipping?.addressLine2 ?? "",
    shippingCity: shipping?.city ?? "",
    shippingState: shipping?.state ?? "",
    shippingPincode: shipping?.postalCode ?? "",
    shippingPhone: stripIsd(shipping?.phone ?? "") || fallbackPhone,
    shippingAddressSameAsBillingAddress: sameAsBilling,
    billingCountry,
    billingFirstName: billingName.firstName || shippingName.firstName,
    billingLastName: billingName.lastName || shippingName.lastName,
    billingAddress: billing?.addressLine1 ?? shipping?.addressLine1 ?? "",
    billingApartment: billing?.addressLine2 ?? shipping?.addressLine2 ?? "",
    billingCity: billing?.city ?? shipping?.city ?? "",
    billingState: billing?.state ?? shipping?.state ?? "",
    billingPincode: billing?.postalCode ?? shipping?.postalCode ?? "",
    billingPhone:
      stripIsd(billing?.phone ?? "") || stripIsd(shipping?.phone ?? "") || fallbackPhone,
    salesPersonName: "",
    paymentType: "razorpay",
    paymentStatus: "paid",
    advancePaid: 0,
    adminCapturedPaymentId: "",
    couponCode: cart?.couponCode || cart?.appliedCoupon || "",
    paymentMethod: (cart?.paymentMethod as any) || "online",
    currency: cart?.currency || "INR",
  };
}

function TextInput(props: {
  name: keyof CartOrderFormValues;
  label: string;
  values: CartOrderFormValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  errors: Record<string, unknown>;
  touched: Record<string, unknown>;
  type?: string;
  maxLength?: number;
  startAdornment?: string;
  disabled?: boolean;
}) {
  const {
    name,
    label,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    type,
    maxLength,
    startAdornment,
    disabled,
  } = props;

  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      type={type}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
      error={getFieldErrorState({ errors, touched }, name)}
      helperText={getHelperOrErrorText({ errors, touched }, name)}
      size="small"
      InputProps={
        startAdornment
          ? {
              startAdornment: (
                <InputAdornment position="start">{startAdornment}</InputAdornment>
              ),
            }
          : undefined
      }
      inputProps={maxLength ? { maxLength } : undefined}
    />
  );
}

export default function CartOrderEditor(props: {
  cart: CartOrderEditorCart | null;
  countryOptions: AdminIsdCode[];
  saving: boolean;
  onSave: (payload: CartOrderEditorSavePayload) => Promise<void>;
  submitLabel?: string;
  onCancel?: () => void;
  onShippingCountryChange?: (country: string) => void;
  footer?: ReactNode;
  onCalculatePaymentSummary?: (payload: CartOrderEditorSavePayload) => Promise<void>;
  calculatingPaymentSummary?: boolean;
  calculatePaymentSummaryLabel?: string;
  onCartItemsChange?: (items: CartModifyReqType["items"]) => Promise<void>;
  disablePhoneFields?: boolean;
  showPaymentMethodAndCurrency?: boolean;
  onPaymentMethodChange?: (method: "online" | "cod") => void;
  onCurrencyChange?: (currency: string) => void;
}) {
  const {
    cart,
    countryOptions,
    saving,
    onSave,
    submitLabel = "Save",
    onCancel,
    onShippingCountryChange,
    footer,
    onCalculatePaymentSummary,
    calculatingPaymentSummary = false,
    calculatePaymentSummaryLabel = "Update payment summary",
    onCartItemsChange,
    disablePhoneFields = false,
    showPaymentMethodAndCurrency = true,
    onPaymentMethodChange,
    onCurrencyChange,
  } = props;
  const dispatch = useDispatch<TAppDispatch>();
  const currencyOptions = useSelector(getCurrencyList);
  const selectedCurrency = useSelector(getSelectedCurrency);
  const [draftItems, setDraftItems] = useState<CartOrderDraftItem[]>([]);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<SearchDataProductsType[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    if (cart?.currency) {
      dispatch(selectedCurrencyActions(cart.currency));
    }
  }, [cart?.currency, dispatch]);

  const normalizedCountries = useMemo(() => {
    const hasIndia = countryOptions.some((option) => isIndiaCountry(option.name));
    return hasIndia ? countryOptions : [{ code: "IN", isd: DEFAULT_ISD_CODE, name: DEFAULT_COUNTRY }, ...countryOptions];
  }, [countryOptions]);

  const initialItems = useMemo(() => buildDraftItems(cart), [cart]);
  const hasUnavailableLines = (cart?.items ?? []).some(
    (lineItem) => !getLineItemProductId(lineItem),
  );

  useEffect(() => {
    setDraftItems(buildDraftItems(cart));
    setQuery("");
    setProducts([]);
    setLoadingProducts(false);
  }, [cart]);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setProducts([]);
      setLoadingProducts(false);
      return;
    }

    let active = true;
    setLoadingProducts(true);
    const timer = window.setTimeout(() => {
      dispatch(SearchService({ query: trimmedQuery, page: 1, limit: 8 }))
        .then((response) => {
          if (!active) return;
          const { data = [] } = response as SearchResponseType;
          setProducts(Array.isArray(data) ? data : []);
        })
        .catch(() => {
          if (active) setProducts([]);
        })
        .finally(() => {
          if (active) setLoadingProducts(false);
        });
    }, 400);

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [dispatch, query, selectedCurrency]);

  const phoneNumber = (cart?.phoneNumber ?? "").trim();
  const cartItems = draftItems
    .filter((item) => item.quantity > 0)
    .map((item) => ({ productId: item.productId, quantity: item.quantity }));
  const initialCartItems = initialItems
    .filter((item) => item.quantity > 0)
    .map((item) => ({ productId: item.productId, quantity: item.quantity }));
  const hasCartChanges = !areCartItemsEqual(initialCartItems, cartItems);

  const updateDraftQuantity = (productId: string, nextQuantity: number) => {
    setDraftItems((current) => {
      const nextDraft = current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, nextQuantity) }
            : item,
        )
        .filter((item) => item.quantity > 0);
      
      const activeItems = nextDraft.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      }));

      const removedItems = initialItems
        .filter((initItem) => !nextDraft.some((draftItem) => draftItem.productId === initItem.productId))
        .map((initItem) => ({
          productId: initItem.productId,
          quantity: 0,
        }));

      const updatedItems = [...activeItems, ...removedItems];
      onCartItemsChange?.(updatedItems);
      return nextDraft;
    });
  };

  const addProductToDraft = (product: SearchDataProductsType) => {
    if (hasUnavailableLines) return;
    setDraftItems((current) => {
      let nextDraft = [];
      const existing = current.find((item) => item.productId === product._id);
      if (existing) {
        nextDraft = current.map((item) =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        nextDraft = [...current, toProductDraftItem(product)];
      }

      const activeItems = nextDraft.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      }));

      const removedItems = initialItems
        .filter((initItem) => !nextDraft.some((draftItem) => draftItem.productId === initItem.productId))
        .map((initItem) => ({
          productId: initItem.productId,
          quantity: 0,
        }));

      const updatedItems = [...activeItems, ...removedItems];
      onCartItemsChange?.(updatedItems);
      return nextDraft;
    });
    setQuery("");
    setProducts([]);
    setLoadingProducts(false);
  };

  const formInitialValues = useMemo(
    () => initialValuesFromCart(cart, normalizedCountries),
    [cart, normalizedCountries],
  );

  function buildSavePayload(values: CartOrderFormValues): CartOrderEditorSavePayload {
    const shippingIsd = getCountryIsd(values.shippingCountry, normalizedCountries);
    const billingIsd = getCountryIsd(values.billingCountry, normalizedCountries);
    const shippingAddress: CartAddressType = {
      fullName: `${values.shippingFirstName} ${values.shippingLastName}`.trim(),
      phone: `${shippingIsd}-${values.shippingPhone}`,
      addressLine1: values.shippingAddress,
      addressLine2: values.shippingApartment,
      city: values.shippingCity,
      state: values.shippingState,
      postalCode: values.shippingPincode,
      country: values.shippingCountry,
    };
    const billingAddress: CartAddressType = values.shippingAddressSameAsBillingAddress
      ? shippingAddress
      : {
          fullName: `${values.billingFirstName} ${values.billingLastName}`.trim(),
          phone: `${billingIsd}-${values.billingPhone}`,
          addressLine1: values.billingAddress,
          addressLine2: values.billingApartment,
          city: values.billingCity,
          state: values.billingState,
          postalCode: values.billingPincode,
          country: values.billingCountry,
        };

    return {
      address: {
        phoneNumber,
        emailId: values.emailId.trim(),
        shippingAddress,
        billingAddress,
        shippingAddressSameAsBillingAddress:
          values.shippingAddressSameAsBillingAddress,
      },
      cart: {
        phoneNumber,
        items: (() => {
          const activeItems = draftItems
            .filter((item) => item.quantity > 0)
            .map((item) => ({ productId: item.productId, quantity: item.quantity }));
          const removedItems = initialItems
            .filter((initItem) => !draftItems.some((draftItem) => draftItem.productId === initItem.productId && draftItem.quantity > 0))
            .map((initItem) => ({ productId: initItem.productId, quantity: 0 }));
          return [...activeItems, ...removedItems];
        })(),
      },
      hasCartChanges,
      salesPersonName: (values.salesPersonName || "").trim(),
      paymentType: values.paymentType,
      paymentStatus: values.paymentStatus,
      advancePaid: Number(values.advancePaid || 0),
      adminCapturedPaymentId: (values.adminCapturedPaymentId || "").trim(),
      couponCode: (values.couponCode || "").trim() || null,
      orderItems: draftItems.map((item) => {
        const price = item.price || 0;
        return {
          product: item.productId,
          quantity: item.quantity,
          price,
          totalPrice: price * item.quantity,
        };
      }),
      paymentMethod: values.paymentMethod,
      currency: values.currency,
    };
  }

  return (
    <Formik
      enableReinitialize
      initialValues={formInitialValues}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
      onSubmit={async (values) => {
        await onSave(buildSavePayload(values));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setValues,
        setFieldValue,
        setFieldTouched,
        isValid,
      }) => {
        const shippingIsd = getCountryIsd(values.shippingCountry, normalizedCountries);
        const billingIsd = getCountryIsd(values.billingCountry, normalizedCountries);
        const submitDisabled =
          saving ||
          !phoneNumber ||
          !isValid ||
          (hasCartChanges && hasUnavailableLines);

        return (
          <Form style={{ position: "relative" }}>
            {(saving || calculatingPaymentSummary) && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  zIndex: 10,
                }}
              >
                <CircularProgress size={30} sx={{ position: "sticky", top: "45vh" }} />
              </Box>
            )}
            <Stack spacing={2.5}>
              {!phoneNumber && (
                <Alert severity="warning">
                  This cart needs a phone number before details can be saved.
                </Alert>
              )}
              {hasUnavailableLines && (
                <Alert severity="warning">
                  This cart has unavailable product lines. Address details can still
                  be saved, but product changes are disabled until those lines are
                  resolved.
                </Alert>
              )}

              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
                  Cart items
                </Typography>
                <Stack spacing={1}>
                  {draftItems.length === 0 ? (
                    <Typography color="text.secondary">No products added.</Typography>
                  ) : (
                    draftItems.map((item) => (
                      <Box
                        key={item.productId}
                        sx={{
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
                          gap: 1.5,
                          alignItems: "center",
                          border: "1px solid #e2e8f0",
                          borderRadius: 1,
                          p: 1,
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 1.5, minWidth: 0 }}>
                          <Box
                            component={item.imageUrl ? "img" : "div"}
                            src={item.imageUrl}
                            alt={item.name}
                            sx={{
                              width: 56,
                              height: 56,
                              objectFit: "cover",
                              borderRadius: 1,
                              bgcolor: "action.hover",
                              flexShrink: 0,
                            }}
                          />
                          <Box sx={{ minWidth: 0 }}>
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                              {item.name}
                            </Typography>
                            {item.productCode && (
                              <Typography variant="caption" color="text.secondary">
                                {item.productCode}
                              </Typography>
                            )}
                            <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 700 }}>
                              {item.currencySymbol}
                              {(item.price ?? 0).toLocaleString("en-IN", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </Typography>
                          </Box>
                        </Box>
                        <Stack direction="row" alignItems="center" spacing={0.75}>
                          <Tooltip title="Decrease" enterDelay={300}>
                            <span>
                              <IconButton
                                size="small"
                                aria-label="Decrease item quantity"
                                disabled={saving}
                                onClick={() =>
                                  updateDraftQuantity(item.productId, item.quantity - 1)
                                }
                              >
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Typography variant="body2" sx={{ width: 28, textAlign: "center" }}>
                            {item.quantity}
                          </Typography>
                          <Tooltip title="Increase" enterDelay={300}>
                            <span>
                              <IconButton
                                size="small"
                                aria-label="Increase item quantity"
                                disabled={saving}
                                onClick={() =>
                                  updateDraftQuantity(item.productId, item.quantity + 1)
                                }
                              >
                                <AddIcon fontSize="small" />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Tooltip title="Remove item" enterDelay={300}>
                            <span>
                              <IconButton
                                size="small"
                                color="error"
                                aria-label="Remove item from cart"
                                disabled={saving}
                                onClick={() => updateDraftQuantity(item.productId, 0)}
                              >
                                <DeleteOutlineIcon fontSize="small" />
                              </IconButton>
                            </span>
                          </Tooltip>
                        </Stack>
                      </Box>
                    ))
                  )}
                </Stack>
              </Box>

              <Box>
                <TextField
                  label="Search products"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  size="small"
                  fullWidth
                  disabled={saving || hasUnavailableLines}
                />
                <Box sx={{ mt: 1.25 }}>
                  {loadingProducts ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
                      <CircularProgress size={24} />
                    </Box>
                  ) : products.length === 0 ? (
                    <Typography color="text.secondary" sx={{ py: 1 }}>
                      {query.trim() ? "No products found." : "Search by product name."}
                    </Typography>
                  ) : (
                    <Stack spacing={1}>
                      {products.map((product) => (
                        <Button
                          key={product._id}
                          color="inherit"
                          disabled={saving || hasUnavailableLines}
                          onClick={() => addProductToDraft(product)}
                          sx={{
                            justifyContent: "flex-start",
                            textAlign: "left",
                            border: "1px solid #e2e8f0",
                            borderRadius: 1,
                            p: 1,
                            textTransform: "none",
                          }}
                        >
                          <Box sx={{ display: "flex", gap: 1.5, width: "100%" }}>
                            <Box
                              component="img"
                              src={product.imageUrl}
                              alt={product.name}
                              sx={{
                                width: 56,
                                height: 56,
                                objectFit: "cover",
                                borderRadius: 1,
                                bgcolor: "action.hover",
                                flexShrink: 0,
                              }}
                            />
                            <Box sx={{ minWidth: 0, flex: 1 }}>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 700, color: "text.primary" }}
                              >
                                {product.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {product.shortDescription || "No description"}
                              </Typography>
                            </Box>
                          </Box>
                        </Button>
                      ))}
                    </Stack>
                  )}
                </Box>
              </Box>

              <Divider />

              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Delivery
              </Typography>
              <TextInput
                name="emailId"
                label="Email"
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <FormControl
                fullWidth
                error={Boolean(errors.shippingCountry && touched.shippingCountry)}
                size="small"
              >
                <Select
                  name="shippingCountry"
                  value={values.shippingCountry}
                  onChange={(event) => {
                    const countryName = event.target.value;
                    setValues(
                      {
                        ...values,
                        shippingCountry: countryName,
                        shippingPincode: "",
                        shippingCity: "",
                        shippingState: "",
                      },
                      true,
                    );
                    setFieldTouched("shippingCountry", true, false);
                    onShippingCountryChange?.(countryName);
                  }}
                  onBlur={handleBlur}
                  displayEmpty
                >
                  {normalizedCountries.map((country) => (
                    <MenuItem key={`${country.code}-${country.name}`} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                {Boolean(errors.shippingCountry && touched.shippingCountry) && (
                  <FormHelperText>
                    {getHelperOrErrorText({ errors, touched }, "shippingCountry")}
                  </FormHelperText>
                )}
              </FormControl>
              <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                <TextInput name="shippingFirstName" label="First name" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                <TextInput name="shippingLastName" label="Last name" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
              </Box>
              <TextInput name="shippingAddress" label="Address" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
              <TextInput name="shippingApartment" label="Apartment, suite, etc." values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
              <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" } }}>
                <TextInput name="shippingPincode" label="Pincode" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} maxLength={isIndiaCountry(values.shippingCountry) ? 6 : 9} />
                <TextInput name="shippingCity" label="City" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                <TextInput name="shippingState" label="State" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
              </Box>
              <TextInput name="shippingPhone" label="Phone" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} maxLength={isIndiaCountry(values.shippingCountry) ? 10 : 15} startAdornment={shippingIsd} disabled={disablePhoneFields} />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.shippingAddressSameAsBillingAddress}
                    onChange={(event) => {
                      const checked = event.target.checked;
                      setValues({
                        ...values,
                        shippingAddressSameAsBillingAddress: checked,
                        billingCountry: values.shippingCountry,
                        billingFirstName: values.shippingFirstName,
                        billingLastName: values.shippingLastName,
                        billingAddress: values.shippingAddress,
                        billingApartment: values.shippingApartment,
                        billingCity: values.shippingCity,
                        billingState: values.shippingState,
                        billingPincode: values.shippingPincode,
                        billingPhone: values.shippingPhone,
                      });
                    }}
                  />
                }
                label="Billing address is same as delivery address"
              />

              {!values.shippingAddressSameAsBillingAddress && (
                <Stack spacing={1.5}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Billing address
                  </Typography>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.billingCountry && touched.billingCountry)}
                    size="small"
                  >
                    <Select
                      name="billingCountry"
                      value={values.billingCountry}
                      onChange={(event) => {
                        setFieldValue("billingCountry", event.target.value, true);
                        setFieldTouched("billingCountry", true);
                      }}
                      onBlur={handleBlur}
                    >
                      {normalizedCountries.map((country) => (
                        <MenuItem key={`${country.code}-${country.name}`} value={country.name}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {Boolean(errors.billingCountry && touched.billingCountry) && (
                      <FormHelperText>
                        {getHelperOrErrorText({ errors, touched }, "billingCountry")}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                    <TextInput name="billingFirstName" label="First name" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                    <TextInput name="billingLastName" label="Last name" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                  </Box>
                  <TextInput name="billingAddress" label="Address" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                  <TextInput name="billingApartment" label="Apartment, suite, etc." values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                  <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" } }}>
                    <TextInput name="billingPincode" label="Pincode" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} maxLength={isIndiaCountry(values.billingCountry) ? 6 : 9} />
                    <TextInput name="billingCity" label="City" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                    <TextInput name="billingState" label="State" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
                  </Box>
                  <TextInput name="billingPhone" label="Phone" values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} maxLength={isIndiaCountry(values.billingCountry) ? 10 : 15} startAdornment={billingIsd} disabled={disablePhoneFields} />
                </Stack>
              )}

              <Divider />

              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Admin & Payment Details
              </Typography>

              <TextInput
                name="salesPersonName"
                label="Sales Person Name"
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              {showPaymentMethodAndCurrency && (
                <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="payment-method-label">Payment Method</InputLabel>
                    <Select
                      labelId="payment-method-label"
                      name="paymentMethod"
                      label="Payment Method"
                      value={values.paymentMethod}
                      onChange={(event) => {
                        handleChange(event);
                        onPaymentMethodChange?.(event.target.value as any);
                      }}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="online">Online</MenuItem>
                      <MenuItem value="cod">COD</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel id="editor-currency-label">Currency</InputLabel>
                    <Select
                      labelId="editor-currency-label"
                      name="currency"
                      label="Currency"
                      value={values.currency}
                      onChange={(event) => {
                        handleChange(event);
                        dispatch(selectedCurrencyActions(event.target.value));
                        onCurrencyChange?.(event.target.value);
                      }}
                      onBlur={handleBlur}
                    >
                      {currencyOptions.map((currency) => (
                        <MenuItem key={currency.code} value={currency.code}>
                          {currency.code} ({currency.symbol})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              )}

              <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="payment-type-label">Payment Type</InputLabel>
                  <Select
                    labelId="payment-type-label"
                    name="paymentType"
                    label="Payment Type"
                    value={values.paymentType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="razorpay">Razorpay</MenuItem>
                    <MenuItem value="upi">UPI</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel id="payment-status-label">Payment Status</InputLabel>
                  <Select
                    labelId="payment-status-label"
                    name="paymentStatus"
                    label="Payment Status"
                    value={values.paymentStatus}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="partial_paid">Partial Paid</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                <TextField
                  fullWidth
                  name="advancePaid"
                  label="Advance Paid"
                  type="number"
                  value={values.advancePaid}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getFieldErrorState({ errors, touched }, "advancePaid")}
                  helperText={getHelperOrErrorText({ errors, touched }, "advancePaid")}
                  size="small"
                />

                <TextInput
                  name="adminCapturedPaymentId"
                  label="Admin Captured Payment ID"
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              </Box>

              <TextInput
                name="couponCode"
                label="Coupon Code (Optional)"
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              {footer}

              <Stack direction="row" spacing={1.5} justifyContent="flex-end" flexWrap="wrap" useFlexGap>
                {onCancel && (
                  <Button onClick={onCancel} disabled={saving} color="inherit">
                    Cancel
                  </Button>
                )}
                {onCalculatePaymentSummary && (
                  <Button
                    type="button"
                    variant="outlined"
                    disabled={submitDisabled || calculatingPaymentSummary}
                    startIcon={
                      calculatingPaymentSummary ? (
                        <CircularProgress size={16} />
                      ) : undefined
                    }
                    onClick={() =>
                      void onCalculatePaymentSummary(buildSavePayload(values))
                    }
                  >
                    {calculatePaymentSummaryLabel}
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={submitDisabled}
                  startIcon={saving ? <CircularProgress size={16} /> : undefined}
                >
                  {submitLabel}
                </Button>
              </Stack>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}
