import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_PRODUCT_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { bikes } from "@/pages/BikeDetail/Constant";

export const INITIAL_STATE: T_PRODUCT_REDUCER = {
	menu: {
		shopByBike: bikes
	}
}

const sliceOptions: CreateSliceOptions<T_PRODUCT_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_PRODUCT_REDUCER>): void => {
    
  },
};

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default slice.reducer;
