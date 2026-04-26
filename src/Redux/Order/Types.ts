import { OrderDetailResponse } from "@/pages/OrderDetails/Types";

export type T_ORDER_REDUCER = {
  openOrderPopup: boolean;
  orderDetail: OrderDetailResponse;
};

export type CreatePaymentOrderReqType = {
  phoneNumber: string;
};

export interface CreateOrderType {
  key: string;
  amount: number;
  razorpayOrderId: string;
  currency: string;
  name: string;
  orderId: string;
  orderNumber: string;
  displayAmount: number;
  displayCurrency: string;
  currencySymbol: string;
  cartId: string;
  status: string;
  message: string;
}

export interface CreateCodOrderResType extends CreateOrderType {
  paymentMethod: string;
  displayTotalAmount: number;
}

export interface CreatePaymentOrderResType extends CreateOrderType {}

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
  orderDate: string;
  totalAmount: number;
  displayCurrency: string;
  currencySymbol: string;
};
