import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME as CartSliceName } from "@/Redux/Cart/Selectors";
import { CartDetailResType, CartItemDetail, GetCartDetailResType, T_CART_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { cartModifyActions, getCartDetailActions } from "./Action";

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
  outOfStocks: [],
  initialCartLoaded: false,
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
    setProcessedCart(state, action: PayloadAction<CartItemDetail[]>) {
      const productList = action.payload
      state.cartDetail.processedItems = productList;
      state.cartDetail.unProcessedItems = []
      state.cartDetail.totalAmount = productList.reduce((acc, curr) => acc + curr.totalPrice, 0)
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
          ...rest
        };
        state.outOfStocks = [];
        state.initialCartLoaded = true;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetCart, setOpenCart, setProcessedCart, clearOutofStockItems } = slice.actions;

export default persistReducer(cartPersistConfig, slice.reducer);
