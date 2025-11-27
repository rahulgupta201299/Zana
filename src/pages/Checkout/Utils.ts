import { loadScript } from "@/Utils/razorpay";
import axios from "axios";
import Razorpay from "razorpay"

 export async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    handler()
    // creating a new order
    // const result = await axios.post("http://localhost:5000/payment/orders");

    // if (!result) {
    //     alert("Server error. Are you online?");
    //     return;
    // }
    const fakeOrderId = "order_" + Math.random().toString(36).substring(2, 18);


    // Getting the order details back
    // const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_RkTm7yBhES8XAi", // Enter the Key ID generated from the Dashboard
        amount: 500,
        currency: "INR",
        name: "Soumya Corp.",
        description: "Test Transaction",
        image: '../../Assets/Icons/Zana.png',
        order_id: fakeOrderId,
        handler,
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
}

export  async function handler() {
    const instance = new Razorpay({
      key_id: 'rzp_test_RkTm7yBhES8XAi',
      key_secret: 'T2slGR8LFtKURg7YU93SZAuL',
    });
  
    const order = await instance.orders.create({
      amount: 100,
      currency: "INR",
      receipt: "rcpt_1",
    });
  
    console.log(order)
  }