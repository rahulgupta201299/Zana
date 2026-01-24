export type T_ORDER_REDUCER = {
  orderDetails: Array<any>;
  shippingAddress: ShippingAddressType;
  billingAddress: BillingAddressType;
};

export type ShippingAddressType = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type BillingAddressType = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
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
