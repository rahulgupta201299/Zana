import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME as CartSliceName } from "@/Redux/Cart/Selectors";
import { CURRENCY_LIST, CURRENCY_SYMBOL } from "@/Constants/AppConstant";
import {
  ApplyCouponResType,
  CartDetailResType,
  CartItemDetail,
  GetCartDetailResType,
  RemoveCouponResType,
  T_CART_REDUCER,
  UpdateCartAddressResType,
} from "./Types";
import { SLICE_NAME } from "./Selectors";
import {
  applyCouponActions,
  cartModifyActions,
  getCartDetailActions,
  removeCouponActions,
  updateCartAddressActions,
} from "./Action";
import { selectedCurrencyActions } from "../Landing/Actions";

const INITIAL_CART_ADDRESS = {
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

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
    couponRemoved: false,
    currency: CURRENCY_LIST.INR,
    currencySymbol: CURRENCY_SYMBOL.INR,
  },
  cartAddress: {
    shippingAddress: INITIAL_CART_ADDRESS,
    billingAddress: INITIAL_CART_ADDRESS,
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
      state.cartDetail.totalAmount =
        subtotal +
        state.cartDetail.shippingCost -
        state.cartDetail.discountAmount;
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
        state.cartDetail = data;
        state.outOfStocks = unProcessedItems;
      },
    );
    builder.addCase(
      getCartDetailActions.success,
      (state, action: PayloadAction<GetCartDetailResType>) => {
        const data = action.payload;

        if (!data) return state;

        const {
          items = [],
          phoneNumber,
          subtotal = 0,
          paymentStatus = "",
          shippingCost = 0,
          taxAmount = 0,
          discountAmount = 0,
          totalAmount = 0,
          status = "",
          appliedCoupon = "",
          couponCode = "",
          currency = "",
          currencySymbol = "",
        } = data;
        state.cartDetail = {
          ...state.cartDetail,
          processedItems: items,
          unProcessedItems: [],
          subtotal,
          paymentStatus,
          shippingCost,
          taxAmount,
          discountAmount,
          totalAmount,
          status,
          appliedCoupon,
          couponCode,
          currency,
          currencySymbol,
        };
        state.outOfStocks = [];
        state.initialCartLoaded = true;
      },
    );
    builder.addCase(
      updateCartAddressActions.success,
      (state, action: PayloadAction<UpdateCartAddressResType>) => {
        const { shippingAddress, billingAddress } = action.payload;
        state.cartAddress.shippingAddress = shippingAddress;
        state.cartAddress.billingAddress = billingAddress;
      },
    );
    builder.addCase(
      removeCouponActions.success,
      (state, action: PayloadAction<RemoveCouponResType>) => {
        const {
          totalAmount = 0,
          discountAmount = 0,
          subtotal = 0,
          shippingCost = 0,
          taxAmount = 0,
          currency = "",
          currencySymbol = "",
        } = action.payload;

        state.cartDetail = {
          ...state.cartDetail,
          appliedCoupon: "",
          couponCode: "",
          discountAmount,
          totalAmount,
          subtotal,
          shippingCost,
          taxAmount,
          currency,
          currencySymbol,
        };
      },
    );
    builder.addCase(
      applyCouponActions.success,
      (state, action: PayloadAction<ApplyCouponResType>) => {
        const {
          couponCode = "",
          totalAmount = 0,
          discountAmount = 0,
          subtotal = 0,
          shippingCost = 0,
          taxAmount = 0,
          currency = "",
          currencySymbol = "",
        } = action.payload;

        state.cartDetail = {
          ...state.cartDetail,
          appliedCoupon: "",
          couponCode,
          discountAmount,
          totalAmount,
          subtotal,
          shippingCost,
          taxAmount,
          currency,
          currencySymbol,
        };
      },
    );
    builder.addCase(selectedCurrencyActions, (state) => {
      state.initialCartLoaded = false;
    });
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
