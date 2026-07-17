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
  bikeSpecificActions,
  universalActions,
  currencyListActions,
  garageFavoriteActions,
  geoLocationActions,
  ipLocationCurrencyActions,
  initialLoadingActions,
  newArrivalsActions,
  selectedCurrencyActions,
} from "./Actions";
import { CurrencyType, GeolocationType, IpLocationCurrencyType, T_LANDING_REDUCER, BikeSpecificResponse, ApiUniversalData } from "./Types";
import { SLICE_NAME as LandingSliceName } from "./Selectors";
import { ShopByProductDetailsType } from "../Product/Types";

export const INITIAL_STATE: T_LANDING_REDUCER = {
  garageFavoriteList: [],
  newArrivalsList: [],
  currencyList: [],
  selectedCurrency: CURRENCY_LIST.INR,
  initialLoading: false,
  bikeSpecificList: [],
  universalList: [],
};

const LandingPersistConfig = {
  key: LandingSliceName,
  storage,
  whitelist: ["selectedCurrency"],
};

const sliceOptions: CreateSliceOptions<T_LANDING_REDUCER> = {
  name: LandingSliceName,
  initialState: INITIAL_STATE,
  reducers: {
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_LANDING_REDUCER>) => {
    builder.addCase(
      bikeSpecificActions.success,
      (state, action: PayloadAction<BikeSpecificResponse[]>) => {
        state.bikeSpecificList = action.payload;
      },
    );
    builder.addCase(
      universalActions.success,
      (state, action: PayloadAction<ApiUniversalData[]>) => {
        state.universalList = action.payload;
      },
    );
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
    builder.addCase(
      initialLoadingActions,
      (state, action: PayloadAction<boolean>) => {
        state.initialLoading = action.payload;
      },
    );
     builder.addCase(
      geoLocationActions.success,
      (state, action: PayloadAction<GeolocationType>) => {
        console.log("GeoLocation Success Action Payload:", action.payload);
        state.selectedCurrency = action.payload?.currencyDetails?.code 
      },
    );
    builder.addCase(
      ipLocationCurrencyActions.success,
      (state, action: PayloadAction<IpLocationCurrencyType>) => {
        state.selectedCurrency = action.payload?.currencyDetails?.code;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { setInitialLoading, resetLanding } = slice.actions;

export default persistReducer(LandingPersistConfig, slice.reducer);
