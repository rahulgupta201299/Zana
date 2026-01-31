export enum PaymentTypeEnum {
  COD = "COD",
  RAZORPAY = "RAZORPAY",
  PHONE_PE = "PHONE_PE",
}

export const paymentOptions = [
  {
    value: PaymentTypeEnum.RAZORPAY,
    label: "Razorpay Secure (UPI, Cards, Wallets, Net Banking)",
    showRazorpayInfo: true,
  },
  // {
  //   value: PaymentTypeEnum.PHONE_PE,
  //   label: "PhonePe Payment Gateway (UPI, Cards & Net Banking)",
  // },
  {
    value: PaymentTypeEnum.COD,
    label: "COD (Cash On Delivery)",
  },
];
