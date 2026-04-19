import AppStore from "@/Configurations/AppStore";
import { clearCart } from "@/Redux/Cart/Reducer";
import clearCartServiceAction from "@/Redux/Cart/Services/ClearCartService";
import createPaymentOrderServiceAction from "@/Redux/Order/Services/CreatePaymentOrder";
import verifyPaymentOrderServiceAction from "@/Redux/Order/Services/VerifyPaymentOrder";
import {
  CreatePaymentOrderResType,
  VerifyPaymentOrderReqType,
  VerifyPaymentOrderResType,
} from "@/Redux/Order/Types";
import { loadScript } from "@/Utils/razorpay";
import { enqueueSnackbar } from "notistack";
import { COUNTRY_MAPPER } from "./Constant";
import { ROUTES } from "@/Constants/Routes";
import { getHistory } from "@/Configurations/Routing/AppRouter";

export async function handleClearCart() {
  const dispatch = AppStore.dispatch;
  const state = AppStore.getState();
  const phoneNumber = state.auth.login.phoneNumber;
  //@ts-ignore
   dispatch(clearCart());
  await dispatch(clearCartServiceAction({ phoneNumber }));

  
 
}

export async function verifyPayment(data: VerifyPaymentOrderReqType) {
  const dispatch = AppStore.dispatch;
  const router = getHistory()

  try {
    const { orderId = '' } = await dispatch(verifyPaymentOrderServiceAction(data)) as VerifyPaymentOrderResType;

    router.navigate(ROUTES.ORDER_SUCCESSFUL, { state: { orderId } });
  } catch (error: any) {
    const { message = "" } = error;
    enqueueSnackbar({
      variant: "error",
      message,
    });
    return;
  }

  handleClearCart();
}

export async function displayRazorpay() {
  const dispatch = AppStore.dispatch;
  const state = AppStore.getState();
  const phoneNumber = state.auth.login.phoneNumber;

  if (!phoneNumber) return;

  const loaded = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js",
  );

  if (!loaded) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const response = (await dispatch(
    createPaymentOrderServiceAction({ phoneNumber }),
  )) as CreatePaymentOrderResType;
  const { orderId, amount, currency, razorpayOrderId, name, key } = response;

  const options = {
    key,
    amount,
    currency,
    name,
    order_id: razorpayOrderId,

    handler: (response: any) => {
      const {
        razorpay_order_id = "",
        razorpay_payment_id = "",
        razorpay_signature = "",
      } = response;
      const data = {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        currency,
        orderId,
      };
      verifyPayment(data);
    },

    modal: {
      ondismiss: function () {
        console.log("Modal dismissed");
      },
      onerror: function (error: any) {
        console.log("onerror", error);
        const { message = "" } = error;
        enqueueSnackbar({
          variant: "error",
          message,
        });
      },
    },
  };

  const rzp = new (window as any).Razorpay(options);

  // 100% guaranteed callback on failure
  rzp.on("payment.failed", function (response: any) {
    console.log("Payment failed", response);
    enqueueSnackbar({
      variant: "error",
      message: "Payment Failed",
    });
  });

  rzp.open();
}

export const validatePhone = (countryKey: string) =>
  function (value) {
    const country = this.parent[countryKey];

    if (!value) {
      return this.createError({ message: "Phone number is required" });
    }

    const cleaned = value.replace(/[\s-]/g, "");

    if (country?.toUpperCase() === COUNTRY_MAPPER.INDIA) {
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
