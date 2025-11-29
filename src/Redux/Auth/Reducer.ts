import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_AUTH_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { addProfileDetailsActions, updateLoginStatusActions, verifyOtpActions } from "./Actions";
// import { updateLoginStatusActions } from "./Actions";

export const INITIAL_STATE: T_AUTH_REDUCER = {
  login: {
    phoneNumber: "",
    verified:false
  },
  profileDetails:{
    _id: "",
    firstName: "",
    lastName: "",
    isdCode: "",
    phoneNumber: "",
    emailId: "",
    address: "",
    notifyOffers: false,
    bikeOwnedByCustomer: [],
    createdAt: "",
    __v: 0
  }
};

const sliceOptions: CreateSliceOptions<T_AUTH_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetAuth: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_AUTH_REDUCER>): void => {
    builder.addCase(updateLoginStatusActions, (state, { payload }: any) => {
      return {
        ...state,
        isLoggedIn: true,
        login: {
          ...state.login,
          phoneNumber: payload,
        },
      };
    });
    builder.addCase(
      verifyOtpActions.success,
      (state, { payload }: any) => {
        state.login=payload
        state.profileDetails = payload.profile || {
          phoneNumber: payload.phoneNumber,
          ...state.profileDetails,
        };
      }
    );
    builder.addCase(
      addProfileDetailsActions.success,
      (state, { payload }: any) => {
        state.profileDetails=payload
      }
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetAuth } = slice.actions;

export default slice.reducer;
