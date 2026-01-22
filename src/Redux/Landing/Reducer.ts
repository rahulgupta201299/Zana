import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_LANDING_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { garageFavoriteActions, newArrivalsActions } from "./Actions";
import { ShopByProductDetailsType } from "../Product/Types";

export const INITIAL_STATE: T_LANDING_REDUCER = {
  garageFavoriteList: [],
  newArrivalsList: [],
};

const sliceOptions: CreateSliceOptions<T_LANDING_REDUCER> = {
  name: SLICE_NAME,
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
  },
};

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default slice.reducer;
