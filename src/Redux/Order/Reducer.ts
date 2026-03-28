import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_ORDER_REDUCER, VerifyPaymentOrderResType } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { orderActions,  orderDetailByIdActions, verifyPaymentOrdeActions } from "./Action";
import { orderDetailResponse, OrderListType } from "@/pages/OrderDetails/Types";
import getOrderListServiceAction from "./Services/GetOrderList";

export const INITIAL_STATE: T_ORDER_REDUCER = {
  openOrderPopup: false,
  newOrderPlaced: {
    orderId: '',
    orderNumber: '',
    orderStatus: '',
    paymentId: ''
  },
  orderDetail:{
  _id: '',
  phoneNumber: '',
  emailId: null,
  items: [],
  shippingAddressSameAsBillingAddress: false,
  subtotal: 0,
  paymentStatus: '',
  shippingCost: 0,
  taxAmount: 0,
  discountAmount: 0,
  couponCode: '',
  appliedCoupon: '',
  totalAmount: 0,
  status: '',
  createdAt: '',
  updatedAt: '',
  __v: 0,
  billingAddress: {
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  shippingAddress: {
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  paymentMethod: '',
  razorpayOrderId: '',
  orderDate: '',
  orderNumber: '',
  orderStatus: '',
  razorpayPaymentId: '',
  razorpaySignature: '',
},
orderList:{
  orders: [],
  pagination: {
    currentPage: 1,
    totalPages: 0,
    totalOrders: 0,
    hasNextPage: false,
    hasPrevPage: false,
  }
}
};

const sliceOptions: CreateSliceOptions<T_ORDER_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setOpenOrder(state, action: PayloadAction<boolean>) {
      state.openOrderPopup = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_ORDER_REDUCER>): void => {
    builder.addCase(
      verifyPaymentOrdeActions.success,
      (state, action: PayloadAction<VerifyPaymentOrderResType>) => {
        state.newOrderPlaced = action.payload;
      },
    );
     builder.addCase(
      orderDetailByIdActions.success,
      (state, action: PayloadAction<orderDetailResponse>) => {
        state.orderDetail = action.payload;
      },
    );
     builder.addCase(
      orderActions.success,
      (state, action: PayloadAction<OrderListType>) => {
        state.orderList = action.payload;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { setOpenOrder } = slice.actions;

export default slice.reducer;
