export type T_ORDER_REDUCER = {
  openOrderPopup: boolean
  newOrderPlaced: VerifyPaymentOrderResType
};

export type CreatePaymentOrderReqType = {
  phoneNumber: string;
};

export type CreatePaymentOrderResType = {
  orderId: string;
  amount: number;
  currency: string;
  key: string;
  cartId: string;
};

export type VerifyPaymentOrderReqType = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  cartId: string;
};

export type VerifyPaymentOrderResType = {
  orderId: string;
  orderNumber: string;
  paymentId: string;
  orderStatus: string;
};
