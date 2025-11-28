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
};

const sliceOptions: CreateSliceOptions<T_CART_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_CART_REDUCER>): void => {},
};

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default slice.reducer;
