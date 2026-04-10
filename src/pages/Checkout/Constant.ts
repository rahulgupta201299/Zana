export enum PaymentTypeEnum {
  COD = "COD",
  RAZORPAY = "RAZORPAY",
}

export const paymentOptions = [
  {
    value: PaymentTypeEnum.RAZORPAY,
    label: "Razorpay Secure (UPI, Cards, Wallets, Net Banking)",
    showRazorpayInfo: true,
  },
  {
    value: PaymentTypeEnum.COD,
    label: "COD (Cash On Delivery)",
  },
];

export enum COUNTRY_MAPPER {
  INDIA = "INDIA"
}