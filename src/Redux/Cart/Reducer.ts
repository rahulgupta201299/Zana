import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_CART_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";

export const INITIAL_STATE: T_CART_REDUCER = {
  userId: "",
  items: [],
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
  isOpenCart: false,
};

const sliceOptions: CreateSliceOptions<T_CART_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setOpenCart(state, action: PayloadAction<boolean>) {
      state.isOpenCart = action.payload
    },
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_CART_REDUCER>): void => {},
};

const slice = createSlice(sliceOptions);

export const { resetLanding, setOpenCart } = slice.actions;

export default slice.reducer;
