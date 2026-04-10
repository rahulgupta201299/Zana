import {
  Order,
  orderDetailResponse,
  OrderListType,
} from "@/pages/OrderDetails/Types";

export type T_ORDER_REDUCER = {
  openOrderPopup: boolean;
  newOrderPlaced: VerifyPaymentOrderResType;
  orderDetail: orderDetailResponse;
  orderList: OrderListType;
};

export type CreatePaymentOrderReqType = {
  phoneNumber: string;
};

export interface CreateOrderType {
  orderId: string;
  orderNumber: string;
  paymentMethod: string;
  displayAmount: number;
  displayCurrency: string;
  currencySymbol: string;
  cartId: string;
  status: string;
  message: string;
}

export interface CreateCodOrderResType extends CreateOrderType {
  paymentMethod: string;
  message: string;
}

export interface CreatePaymentOrderResType extends CreateOrderType {
  key: string;
  amount: number;
  razorpayOrderId: string;
  currency: string;
  name: string;
}

export type VerifyPaymentOrderReqType = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  orderId: string;
  currency: string;
};

export type VerifyPaymentOrderResType = {
  orderId: string;
  orderNumber: string;
  paymentId: string;
  orderStatus: string;
};
