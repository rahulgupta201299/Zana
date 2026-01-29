import AppStore from "@/Configurations/AppStore";
import { RAZORPAY_TEST_API_KEY } from "@/Configurations/env";
import createPaymentOrderServiceAction from "@/Redux/Order/Services/CreatePaymentOrder";
import { CreatePaymentOrderResType } from "@/Redux/Order/Types";
import { loadScript } from "@/Utils/razorpay";

export async function displayRazorpay() {

  const dispatch = AppStore.dispatch;
  const state = AppStore.getState();
  const phoneNumber = state.auth.login.phoneNumber;

  const loaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!loaded) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const response = await dispatch(createPaymentOrderServiceAction({ phoneNumber })) as CreatePaymentOrderResType
  const { orderId, amount, currency, cartId } = response

  const options = {
    key: RAZORPAY_TEST_API_KEY,
    amount,
    currency,
    name: "Test Payment",
    order_id: orderId,

    handler: (response: any) => {
      console.log("Success", response);
      cleanupUI();
    },

    modal: {
      ondismiss: function () {
        console.log("Modal dismissed");
        cleanupUI();
      },
    },
  };

  const rzp = new (window as any).Razorpay(options);

  // 100% guaranteed callback on failure
  rzp.on("payment.failed", function (response: any) {
    console.log("Payment failed", response);
    cleanupUI();
    alert("Payment failed");
  });

  rzp.open();

  // Razorpay locks scroll → manually unlock after timeout fallback
  setTimeout(() => {
    cleanupUI()
  }, 3000);
}

function cleanupUI() {
  document.body.style.overflow = "auto";
  document.body.style.pointerEvents = "auto";
  document.querySelectorAll(".razorpay-container").forEach(el => el.remove());
}
