import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_ORDER_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { orderDetailByIdActions } from "./Action";
import { OrderDetailResponse } from "@/pages/OrderDetails/Types";

export const INITIAL_STATE: T_ORDER_REDUCER = {
  openOrderPopup: false,
  orderDetail: {
    _id: "",
    phoneNumber: "",
    emailId: null,
    items: [],
    shippingAddressSameAsBillingAddress: false,
    subtotal: 0,
    paymentStatus: "",
    shippingCost: 0,
    taxAmount: 0,
    discountAmount: 0,
    couponCode: "",
    appliedCoupon: "",
    totalAmount: 0,
    status: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    billingAddress: {
      fullName: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    shippingAddress: {
      fullName: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    paymentMethod: "",
    razorpayOrderId: "",
    orderDate: "",
    orderNumber: "",
    orderStatus: "",
    razorpayPaymentId: "",
    razorpaySignature: "",
    currency: "",
    currencySymbol: "",
  },
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
      orderDetailByIdActions.success,
      (state, action: PayloadAction<OrderDetailResponse>) => {
        state.orderDetail = action.payload;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { setOpenOrder } = slice.actions;

export default slice.reducer;
