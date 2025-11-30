import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_ORDER_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { orderDetailActions } from "./Action";

export const INITIAL_STATE: T_ORDER_REDUCER = {
  orderDetails: [],
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
};

const sliceOptions: CreateSliceOptions<T_ORDER_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<T_ORDER_REDUCER>): void => {
    builder.addCase(
      orderDetailActions.success,
      (state, action: PayloadAction<any>) => {
        state.orderDetails = action.payload;
      }
    );
  },
};

const slice = createSlice(sliceOptions);

export const { } = slice.actions;

export default slice.reducer;
