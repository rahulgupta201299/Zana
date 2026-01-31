import AppStore from "@/Configurations/AppStore";
import { RAZORPAY_TEST_API_KEY } from "@/Configurations/env";
import { resetCart } from "@/Redux/Cart/Reducer";
import { setOpenOrder } from "@/Redux/Order/Reducer";
import createPaymentOrderServiceAction from "@/Redux/Order/Services/CreatePaymentOrder";
import verifyPaymentOrderServiceAction from "@/Redux/Order/Services/VerifyPaymentOrder";
import { CreatePaymentOrderResType, VerifyPaymentOrderReqType } from "@/Redux/Order/Types";
import { loadScript } from "@/Utils/razorpay";
import { enqueueSnackbar } from "notistack";

export async function verifyPayment(data: VerifyPaymentOrderReqType) {
  const dispatch = AppStore.dispatch;

  try {
    await dispatch(verifyPaymentOrderServiceAction(data));
    dispatch(setOpenOrder(true))
    dispatch(resetCart)
  } catch (error: any) {
    const { message = '' } = error
    enqueueSnackbar({
      variant: 'error',
      message
    })
  }
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
  const { orderId, amount, currency, cartId } = response;

  const options = {
    key: RAZORPAY_TEST_API_KEY,
    amount,
    currency,
    name: "Test Payment", // TODO name
    order_id: orderId,

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
        cartId,
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