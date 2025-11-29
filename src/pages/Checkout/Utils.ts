import { RAZORPAY_TEST_API_KEY } from "@/Configurations/env";
import { loadScript } from "@/Utils/razorpay";

export async function displayRazorpay() {

  const loaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!loaded) {
    alert("Razorpay SDK failed to load");
    return;
  }

  // Fake order ID for demo
  const fakeOrderId = "order_" + Math.random().toString(36).substring(2, 18);

  const options = {
    key: RAZORPAY_TEST_API_KEY,
    amount: 500,
    currency: "INR",
    name: "Test Payment",
    order_id: fakeOrderId,

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
