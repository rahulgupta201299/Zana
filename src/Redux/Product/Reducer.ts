import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ProductCatergoryCountType, ShopByBikeType, T_PRODUCT_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { productCategoryCountTraceActions, shopByBikeTraceActions, zProBikeTraceActions } from "./Actions";

export const INITIAL_STATE: T_PRODUCT_REDUCER = {
  menu: {
    shopByBike: [],
    productCategory: [],
    zProBikes: [],
  },
};

const sliceOptions: CreateSliceOptions<T_PRODUCT_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (
    builder: ActionReducerMapBuilder<T_PRODUCT_REDUCER>
  ): void => {
    builder.addCase(
      shopByBikeTraceActions.success,
      (state, action: PayloadAction<ShopByBikeType[]>) => {
        state.menu.shopByBike = action.payload;
      }
    );
    builder.addCase(
      zProBikeTraceActions.success,
      (state, action: PayloadAction<ShopByBikeType[]>) => {
        state.menu.zProBikes = action.payload;
      }
    );
    builder.addCase(
      productCategoryCountTraceActions.success,
      (state, action: PayloadAction<ProductCatergoryCountType[]>) => {
        state.menu.productCategory = action.payload;
      }
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default slice.reducer;
