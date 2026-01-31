import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_ORDER_REDUCER, VerifyPaymentOrderResType } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { verifyPaymentOrdeActions } from "./Action";

export const INITIAL_STATE: T_ORDER_REDUCER = {
  openOrderPopup: false,
  newOrderPlaced: {
    orderId: '',
    orderNumber: '',
    orderStatus: '',
    paymentId: ''
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
  },
};

const slice = createSlice(sliceOptions);

export const { setOpenOrder } = slice.actions;

export default slice.reducer;
