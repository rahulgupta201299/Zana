import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_LANDING_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";

export const INITIAL_STATE: T_LANDING_REDUCER = {
	menu: {
		shopByBike: []
	}
}

const sliceOptions: CreateSliceOptions<T_LANDING_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetLanding: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_LANDING_REDUCER>): void => {
    
  },
};

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default slice.reducer;
