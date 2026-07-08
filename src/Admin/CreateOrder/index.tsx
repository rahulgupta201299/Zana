import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { TAppDispatch } from "@/Configurations/AppStore";
import { ROUTES } from "@/Constants/Routes";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import updateCartAddressServiceAction from "@/Redux/Cart/Services/UpdateCartAddressService";
import updatePaymentServiceAction from "@/Redux/Cart/Services/UpdatePaymentService";
import createPaymentOrderServiceAction from "@/Redux/Order/Services/CreatePaymentOrder";
import createCodOrderServiceAction from "@/Redux/Order/Services/CreateCodOrder";
import currencyListServiceAction from "@/Redux/Landing/Services/CurrencyList";
import { selectedCurrencyActions } from "@/Redux/Landing/Actions";
import { getCurrencyList, getSelectedCurrency } from "@/Redux/Landing/Selectors";
import type {
  CreateCodOrderResType,
  CreatePaymentOrderResType,
} from "@/Redux/Order/Types";
import { PaymentTypeEnum } from "@/pages/Checkout/Constant";
import { COUNTRY_INDIA, CURRENCY_LIST } from "@/Constants/AppConstant";
import CartOrderEditor, {
  type CartOrderEditorCart,
  type CartOrderEditorSavePayload,
} from "../Components/CartOrderEditor";
import IsdCodeAutocomplete from "../Components/IsdCodeAutocomplete";
import {
  AdminIsdCode,
  getAdminIsdCodes,
} from "../Configurations/AdminIsdCodeApi";
import type { UpdatePaymentResType } from "@/Redux/Cart/Types";

const DEFAULT_ISD_CODE = "+91";
const INR_OUTSIDE_INDIA_ERROR = "INR currency is only supported for India orders.";

type PaymentTotals = Pick<
  UpdatePaymentResType,
  | "subtotal"
  | "totalAmount"
  | "discountAmount"
  | "shippingCost"
  | "taxAmount"
  | "codCharges"
  | "currency"
  | "currencySymbol"
>;

function normalizeIsdCode(isd: string): string {
  const trimmed = isd.trim();
  if (!trimmed) return DEFAULT_ISD_CODE;
  return trimmed.startsWith("+") ? trimmed : `+${trimmed}`;
}

function buildPhoneNumber(isdCode: string, phoneNumber: string): string {
  const phone = phoneNumber.trim();
  if (!phone) return "";
  return `${normalizeIsdCode(isdCode)}-${phone}`;
}

function orderDisplay(response: CreatePaymentOrderResType | CreateCodOrderResType): string {
  const orderNumber = response.orderNumber?.trim();
  const orderId = response.orderId?.trim();
  return orderNumber || orderId || "Order created";
}

function isIndiaCountry(country = ""): boolean {
  return country.trim().toLowerCase() === COUNTRY_INDIA.toLowerCase();
}

function formatPaymentAmount(symbol: string, value: number): string {
  return `${symbol}${Number(value || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function AdminCreateOrder() {
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const currencies = useSelector(getCurrencyList);
  const selectedCurrency = useSelector(getSelectedCurrency);
  const [isdCodes, setIsdCodes] = useState<AdminIsdCode[]>([]);
  const [isdCode, setIsdCode] = useState(DEFAULT_ISD_CODE);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMode, setPaymentMode] = useState<PaymentTypeEnum>(
    PaymentTypeEnum.RAZORPAY,
  );
  const [saving, setSaving] = useState(false);
  const [shippingCountry, setShippingCountry] = useState(COUNTRY_INDIA);
  const [paymentTotals, setPaymentTotals] = useState<PaymentTotals | null>(null);
  const [paymentUpdating, setPaymentUpdating] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<
    CreatePaymentOrderResType | CreateCodOrderResType | null
  >(null);

  useEffect(() => {
    let active = true;
    getAdminIsdCodes()
      .then((codes) => {
        if (!active) return;
        setIsdCodes(codes);
        const india = codes.find(
          (code) => normalizeIsdCode(code.isd) === DEFAULT_ISD_CODE,
        );
        if (india) {
          setIsdCode(normalizeIsdCode(india.isd));
        }
      })
      .catch(() => {
        if (active) setIsdCodes([]);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!currencies.length) {
      void dispatch(currencyListServiceAction());
    }
  }, [currencies.length, dispatch]);

  useEffect(() => {
    if (
      paymentMode === PaymentTypeEnum.COD &&
      (!isIndiaCountry(shippingCountry) || selectedCurrency !== CURRENCY_LIST.INR)
    ) {
      setPaymentMode(PaymentTypeEnum.RAZORPAY);
    }
  }, [paymentMode, shippingCountry, selectedCurrency]);

  const fullPhoneNumber = buildPhoneNumber(isdCode, phoneNumber);
  const currencyOptions = currencies.length
    ? currencies
    : [{ code: selectedCurrency, name: selectedCurrency, symbol: selectedCurrency, exchangeRate: 1 }];
  const selectedCurrencySymbol =
    currencyOptions.find((currency) => currency.code === selectedCurrency)?.symbol || "";
  const draftCart = useMemo<CartOrderEditorCart | null>(() => {
    if (!fullPhoneNumber) return null;
    return {
      phoneNumber: fullPhoneNumber,
      emailId: "",
      items: [],
      currency: selectedCurrency,
      currencySymbol: selectedCurrencySymbol,
      shippingAddress: null,
      billingAddress: null,
      shippingAddressSameAsBillingAddress: true,
    };
  }, [fullPhoneNumber, selectedCurrency, selectedCurrencySymbol]);

  function handleCurrencyChange(currency: any) {
    dispatch(selectedCurrencyActions(currency));
    setPaymentTotals(null);
    if (currency !== CURRENCY_LIST.INR && paymentMode === PaymentTypeEnum.COD) {
      setPaymentMode(PaymentTypeEnum.RAZORPAY);
    }
  }

  async function recalculatePayment(method: PaymentTypeEnum) {
    if (!fullPhoneNumber || !paymentTotals) return;

    setPaymentUpdating(true);
    try {
      const totals = (await dispatch(
        updatePaymentServiceAction({
          phoneNumber: fullPhoneNumber,
          method,
          currency: selectedCurrency,
        }),
      )) as UpdatePaymentResType;
      setPaymentTotals(totals);
    } catch (error: any) {
      const { message = "Failed to update payment calculation." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setPaymentUpdating(false);
    }
  }

  function handlePaymentModeChange(method: PaymentTypeEnum) {
    setPaymentMode(method);
    void recalculatePayment(method);
  }

  async function handleCalculatePaymentSummary(
    payload: CartOrderEditorSavePayload,
  ) {
    if (payload.cart.items.length === 0) {
      enqueueSnackbar("Add at least one product before calculating summary.", {
        variant: "warning",
      });
      return;
    }

    if (selectedCurrency === CURRENCY_LIST.INR && !isIndiaCountry(shippingCountry)) {
      enqueueSnackbar(INR_OUTSIDE_INDIA_ERROR, { variant: "warning" });
      return;
    }

    setPaymentUpdating(true);
    try {
      await dispatch(cartModifyServiceAction(payload.cart));
      await dispatch(updateCartAddressServiceAction(payload.address));
      const totals = (await dispatch(
        updatePaymentServiceAction({
          phoneNumber: fullPhoneNumber,
          method: paymentMode,
          currency: selectedCurrency,
        }),
      )) as UpdatePaymentResType;
      setPaymentTotals(totals);
      enqueueSnackbar("Payment summary updated.", { variant: "success" });
    } catch (error: any) {
      const { message = "Failed to update payment summary." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setPaymentUpdating(false);
    }
  }

  function resetForm() {
    setPhoneNumber("");
    setPaymentMode(PaymentTypeEnum.RAZORPAY);
    setShippingCountry(COUNTRY_INDIA);
    setPaymentTotals(null);
    setCreatedOrder(null);
  }

  const paymentSummary = (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
        Payment summary
      </Typography>
      {paymentTotals ? (
        <Stack spacing={0.75}>
          {[
            ["Subtotal", paymentTotals.subtotal],
            ["Shipping charges", paymentTotals.shippingCost],
            ["Tax", paymentTotals.taxAmount],
            ["Discount", -paymentTotals.discountAmount],
            ["COD charges", paymentTotals.codCharges],
          ].map(([label, value]) => (
            <Stack key={label} direction="row" justifyContent="space-between">
              <Typography variant="body2">{label}</Typography>
              <Typography variant="body2">
                {formatPaymentAmount(paymentTotals.currencySymbol, Number(value))}
              </Typography>
            </Stack>
          ))}
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ borderTop: "1px solid #e2e8f0", pt: 1, mt: 0.5 }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Total payable
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {formatPaymentAmount(
                paymentTotals.currencySymbol,
                paymentTotals.totalAmount,
              )}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Add products and delivery details, then update the payment summary to
          calculate shipping, tax, COD charges, and total payable.
        </Typography>
      )}
    </Paper>
  );

  const handleCreateOrder = async (payload: CartOrderEditorSavePayload) => {
    if (payload.cart.items.length === 0) {
      enqueueSnackbar("Add at least one product before creating an order.", {
        variant: "warning",
      });
      return;
    }

    if (selectedCurrency === CURRENCY_LIST.INR && !isIndiaCountry(shippingCountry)) {
      enqueueSnackbar(INR_OUTSIDE_INDIA_ERROR, { variant: "warning" });
      return;
    }

    setSaving(true);
    try {
      await dispatch(cartModifyServiceAction(payload.cart));
      await dispatch(updateCartAddressServiceAction(payload.address));
      const totals = (await dispatch(
        updatePaymentServiceAction({
          phoneNumber: fullPhoneNumber,
          method: paymentMode,
          currency: selectedCurrency,
        }),
      )) as UpdatePaymentResType;
      setPaymentTotals(totals);
      const response =
        paymentMode === PaymentTypeEnum.COD
          ? ((await dispatch(
              createCodOrderServiceAction({ phoneNumber: fullPhoneNumber }),
            )) as CreateCodOrderResType)
          : ((await dispatch(
              createPaymentOrderServiceAction({ phoneNumber: fullPhoneNumber }),
            )) as CreatePaymentOrderResType);

      setCreatedOrder(response);
      enqueueSnackbar(`${orderDisplay(response)} created.`, {
        variant: "success",
      });
      resetForm();
      navigate(ROUTES.ADMIN_ORDER_LIST);
    } catch (error: any) {
      const { message = "Failed to create order." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", color: "#111827" }}
      >
        Create Order
      </Typography>

      <Paper sx={{ p: 2.5, borderRadius: 2, maxWidth: 760 }}>
        <Stack spacing={2.5}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <IsdCodeAutocomplete
              id="create-order-isd-code"
              options={isdCodes}
              value={isdCode}
              onChange={setIsdCode}
            />
            <TextField
              label="Phone number"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
                setPaymentTotals(null);
              }}
              size="small"
              fullWidth
            />
          </Stack>

          <FormControl>
            <FormLabel>Payment mode</FormLabel>
            <RadioGroup
              row
              value={paymentMode}
              onChange={(event) =>
                handlePaymentModeChange(event.target.value as PaymentTypeEnum)
              }
            >
              <FormControlLabel
                value={PaymentTypeEnum.RAZORPAY}
                control={<Radio disabled={paymentUpdating || saving} />}
                label="Online"
              />
              {isIndiaCountry(shippingCountry) && selectedCurrency === CURRENCY_LIST.INR && (
                <FormControlLabel
                  value={PaymentTypeEnum.COD}
                  control={<Radio disabled={paymentUpdating || saving} />}
                  label="COD"
                />
              )}
            </RadioGroup>
          </FormControl>

          <FormControl size="small" sx={{ maxWidth: 260 }}>
            <InputLabel id="create-order-currency">Currency</InputLabel>
            <Select
              labelId="create-order-currency"
              label="Currency"
              value={selectedCurrency}
              onChange={(event) => handleCurrencyChange(event.target.value)}
            >
              {currencyOptions.map((currency) => (
                <MenuItem key={currency.code} value={currency.code}>
                  {currency.code} ({currency.symbol})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedCurrency === CURRENCY_LIST.INR && !isIndiaCountry(shippingCountry) && (
            <Alert severity="warning">{INR_OUTSIDE_INDIA_ERROR}</Alert>
          )}

          {createdOrder && (
            <Alert severity="success">
              Created {orderDisplay(createdOrder)}
            </Alert>
          )}
   
            <CartOrderEditor
              cart={draftCart}
              countryOptions={isdCodes}
              saving={saving}
              onSave={handleCreateOrder}
              submitLabel="Create order"
              onShippingCountryChange={setShippingCountry}
              footer={paymentSummary}
              onCalculatePaymentSummary={handleCalculatePaymentSummary}
              calculatingPaymentSummary={paymentUpdating}
            />
          
        </Stack>
      </Paper>
    </Box>
  );
}
