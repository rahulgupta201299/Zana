import { Order, orderDetailResponse, OrderListType } from "@/pages/OrderDetails/Types";

export type T_ORDER_REDUCER = {
  openOrderPopup: boolean;
  newOrderPlaced: VerifyPaymentOrderResType;
  orderDetail: orderDetailResponse ;
  orderList: OrderListType;
};

export type CreatePaymentOrderReqType = {
  phoneNumber: string;
};

export type CreatePaymentOrderResType = {
  orderId: string;
  amount: number;
  currency: string;
  cartId: string;
  displayAmount: number;
  displayCurrency: string;
  currencySymbol: string;
  name: string;
};

export type VerifyPaymentOrderReqType = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  cartId: string;
  currency: string;
};

export type VerifyPaymentOrderResType = {
  orderId: string;
  orderNumber: string;
  paymentId: string;
  orderStatus: string;
};


