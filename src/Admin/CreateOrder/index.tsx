import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import type { TAppDispatch } from "@/Configurations/AppStore";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import updateCartAddressServiceAction from "@/Redux/Cart/Services/UpdateCartAddressService";
import createPaymentOrderServiceAction from "@/Redux/Order/Services/CreatePaymentOrder";
import createCodOrderServiceAction from "@/Redux/Order/Services/CreateCodOrder";
import type {
  CreateCodOrderResType,
  CreatePaymentOrderResType,
} from "@/Redux/Order/Types";
import { PaymentTypeEnum } from "@/pages/Checkout/Constant";
import { COUNTRY_INDIA } from "@/Constants/AppConstant";
import CartOrderEditor, {
  type CartOrderEditorCart,
  type CartOrderEditorSavePayload,
} from "../Components/CartOrderEditor";
import IsdCodeAutocomplete from "../Components/IsdCodeAutocomplete";
import {
  AdminIsdCode,
  getAdminIsdCodes,
} from "../Configurations/AdminIsdCodeApi";

const DEFAULT_ISD_CODE = "+91";

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

export default function AdminCreateOrder() {
  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const [isdCodes, setIsdCodes] = useState<AdminIsdCode[]>([]);
  const [isdCode, setIsdCode] = useState(DEFAULT_ISD_CODE);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMode, setPaymentMode] = useState<PaymentTypeEnum>(
    PaymentTypeEnum.RAZORPAY,
  );
  const [saving, setSaving] = useState(false);
  const [shippingCountry, setShippingCountry] = useState(COUNTRY_INDIA);
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
    if (paymentMode === PaymentTypeEnum.COD && !isIndiaCountry(shippingCountry)) {
      setPaymentMode(PaymentTypeEnum.RAZORPAY);
    }
  }, [paymentMode, shippingCountry]);

  const fullPhoneNumber = buildPhoneNumber(isdCode, phoneNumber);
  const draftCart = useMemo<CartOrderEditorCart | null>(() => {
    if (!fullPhoneNumber) return null;
    return {
      phoneNumber: fullPhoneNumber,
      emailId: "",
      items: [],
      currencySymbol: "",
      shippingAddress: null,
      billingAddress: null,
      shippingAddressSameAsBillingAddress: true,
    };
  }, [fullPhoneNumber]);

  const handleCreateOrder = async (payload: CartOrderEditorSavePayload) => {
    if (payload.cart.items.length === 0) {
      enqueueSnackbar("Add at least one product before creating an order.", {
        variant: "warning",
      });
      return;
    }

    setSaving(true);
    try {
      await dispatch(cartModifyServiceAction(payload.cart));
      await dispatch(updateCartAddressServiceAction(payload.address));
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
              onChange={(event) => setPhoneNumber(event.target.value)}
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
                setPaymentMode(event.target.value as PaymentTypeEnum)
              }
            >
              <FormControlLabel
                value={PaymentTypeEnum.RAZORPAY}
                control={<Radio />}
                label="Online"
              />
              {isIndiaCountry(shippingCountry) && (
                <FormControlLabel
                  value={PaymentTypeEnum.COD}
                  control={<Radio />}
                  label="COD"
                />
              )}
            </RadioGroup>
          </FormControl>

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
            />
          
        </Stack>
      </Paper>
    </Box>
  );
}
