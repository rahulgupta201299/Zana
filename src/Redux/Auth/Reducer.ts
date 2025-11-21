import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_AUTH_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
// import { updateLoginStatusActions } from "./Actions";

export const INITIAL_STATE: T_AUTH_REDUCER = {
  isLoggedIn: false,
  login: {
    phoneNumber: "",
  },
};

const sliceOptions: CreateSliceOptions<T_AUTH_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetAuth: () => INITIAL_STATE,
  },
  // extraReducers: (builder: ActionReducerMapBuilder<T_AUTH_REDUCER>): void => {
  //   builder.addCase(updateLoginStatusActions, (state, { payload }: any) => {
  //     console.log(payload, "hello");
  //     return {
  //       ...state,
  //       isLoggedIn: true,
  //       login: {
  //         ...state.login,
  //         phoneNumber: payload.phoneNumber,
  //       },
  //     };
  //   });
  // },
};

const slice = createSlice(sliceOptions);

export const { resetAuth } = slice.actions;

export default slice.reducer;
