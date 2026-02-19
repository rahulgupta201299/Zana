import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME as CartSliceName } from "@/Redux/Cart/Selectors";
import {
  CartDetailResType,
  CartItemDetail,
  GetCartDetailResType,
  T_CART_REDUCER,
  UpdateCartAddressResType,
} from "./Types";
import { SLICE_NAME } from "./Selectors";
import { cartModifyActions, getCartDetailActions, updateCartAddressActions } from "./Action";

export const INITIAL_STATE: T_CART_REDUCER = {
  cartDetail: {
    _id: "",
    processedItems: [],
    unProcessedItems: [],
    subtotal: 0,
    paymentStatus: "",
    shippingCost: 0,
    taxAmount: 0,
    discountAmount: 0,
    totalAmount: 0,
    status: "",
    appliedCoupon: "",
    couponCode: "",
  },
  cartAddress: {
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
  },
  outOfStocks: [],
  initialCartLoaded: false,
  isOpenCart: false,
  isOpenCouponDialog: false,
};

const cartPersistConfig = {
  key: CartSliceName,
  storage,
  whitelist: ["cartDetail", "cartAddress"],
};

const sliceOptions: CreateSliceOptions<T_CART_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setOpenCart(state, action: PayloadAction<boolean>) {
      state.isOpenCart = action.payload;
    },
    setOpenCouponDialog(state, action: PayloadAction<boolean>) {
      state.isOpenCouponDialog = action.payload;
    },
    setProcessedCart(state, action: PayloadAction<CartItemDetail[]>) {
      const productList = action.payload;
      state.cartDetail.processedItems = productList;
      state.cartDetail.unProcessedItems = [];
      const subtotal = productList.reduce(
        (acc, curr) => acc + curr.totalPrice,
        0,
      );
      state.cartDetail.subtotal = subtotal;
      state.cartDetail.totalAmount = subtotal + state.cartDetail.shippingCost - state.cartDetail.discountAmount;
    },
    clearOutofStockItems(state) {
      state.outOfStocks = [];
    },
    resetCart: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_CART_REDUCER>): void => {
    builder.addCase(
      cartModifyActions.success,
      (state, action: PayloadAction<CartDetailResType>) => {
        const data = action.payload;
        if (!data) return state;

        const { unProcessedItems = [] } = data;
        state.cartDetail = action.payload;
        state.outOfStocks = unProcessedItems;
      },
    );
    builder.addCase(
      getCartDetailActions.success,
      (state, action: PayloadAction<GetCartDetailResType>) => {
        const data = action.payload;
        if (!data) return state;

        const { items = [], phoneNumber, ...rest } = data;
        state.cartDetail = {
          processedItems: items,
          unProcessedItems: [],
          ...rest,
        };
        state.outOfStocks = [];
        state.initialCartLoaded = true;
      },
    );
    builder.addCase(updateCartAddressActions.success, (state, action: PayloadAction<UpdateCartAddressResType>) => {
      const { shippingAddress, billingAddress } = action.payload
      state.cartAddress.shippingAddress = shippingAddress;
      state.cartAddress.billingAddress = billingAddress;
    })
  },
};

const slice = createSlice(sliceOptions);

export const {
  resetCart,
  setOpenCart,
  setOpenCouponDialog,
  setProcessedCart,
  clearOutofStockItems,
} = slice.actions;

export default persistReducer(cartPersistConfig, slice.reducer);
