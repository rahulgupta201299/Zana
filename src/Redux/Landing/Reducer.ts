import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CURRENCY_LIST } from "@/Constants/AppConstant";
import {
  currencyListActions,
  garageFavoriteActions,
  newArrivalsActions,
  selectedCurrencyActions,
} from "./Actions";
import { CurrencyType, T_LANDING_REDUCER } from "./Types";
import { SLICE_NAME as LandingSliceName } from "./Selectors";
import { ShopByProductDetailsType } from "../Product/Types";

export const INITIAL_STATE: T_LANDING_REDUCER = {
  garageFavoriteList: [],
  newArrivalsList: [],
  currencyList: [],
  selectedCurrency: CURRENCY_LIST.INR,
};

const LandingPersistConfig = {
  key: LandingSliceName,
  storage,
  whitelist: ["selectedCurrency", "currencyList"],
};

const sliceOptions: CreateSliceOptions<T_LANDING_REDUCER> = {
  name: LandingSliceName,
  initialState: INITIAL_STATE,
  reducers: {
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_LANDING_REDUCER>) => {
    builder.addCase(
      garageFavoriteActions.success,
      (state, action: PayloadAction<ShopByProductDetailsType[]>) => {
        state.garageFavoriteList = action.payload;
      },
    );
    builder.addCase(
      newArrivalsActions.success,
      (state, action: PayloadAction<ShopByProductDetailsType[]>) => {
        state.newArrivalsList = action.payload;
      },
    );
    builder.addCase(
      currencyListActions.success,
      (state, action: PayloadAction<CurrencyType[]>) => {
        state.currencyList = action.payload;
      },
    );
    builder.addCase(
      selectedCurrencyActions,
      (state, action: PayloadAction<string>) => {
        state.selectedCurrency = action.payload;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default persistReducer(LandingPersistConfig, slice.reducer);
