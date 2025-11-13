import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_AUTH_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";

export const INITIAL_STATE: T_AUTH_REDUCER = {};

const sliceOptions: CreateSliceOptions<T_AUTH_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetAuth: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_AUTH_REDUCER>): void => {
    // just for ref
    // builder.addCase(
    //   ssoValidateTraceActions.success,
    //   (state, action: PayloadAction<any>) => {
    //     state.draft = action.payload
    //   }
    // )
  },
};

const slice = createSlice(sliceOptions);

export const { resetAuth } = slice.actions;

export default slice.reducer;
