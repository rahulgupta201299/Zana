import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import {SLICE_NAME as CartSliceName} from "@/Redux/Cart/Selectors";
import { CartDetailResType, T_CART_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { cartModifyActions, getCartDetailActions } from "./Action";

export const INITIAL_STATE: T_CART_REDUCER = {
  cartDetail: {
    _id: "",
    items: [],
    subtotal: 0,
    paymentStatus: "",
    shippingCost: 0,
    taxAmount: 0,
    discountAmount: 0,
    totalAmount: 0,
    status: "",
  },
  isOpenCart: false,
};

const cartPersistConfig = {
  key: CartSliceName,
  storage,
  whitelist: ["cartDetail"],
};

const sliceOptions: CreateSliceOptions<T_CART_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setOpenCart(state, action: PayloadAction<boolean>) {
      state.isOpenCart = action.payload;
    },
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_CART_REDUCER>): void => {
    builder.addCase(
      cartModifyActions.success,
      (state, action: PayloadAction<CartDetailResType>) => {
        const { phoneNumber, ...rest } = action.payload;
        state.cartDetail = rest;
      },
    );
    builder.addCase(
      getCartDetailActions.success,
      (state, action: PayloadAction<CartDetailResType>) => {
        const { phoneNumber, ...rest } = action.payload;
        state.cartDetail = rest;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetLanding, setOpenCart } = slice.actions;

export default persistReducer(cartPersistConfig, slice.reducer);
