import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { T_AUTH_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import { addProfileDetailsActions, verifyOtpActions, wishlistActions } from "./Actions";

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
  },
  wishlist: [],
};

const sliceOptions: CreateSliceOptions<T_AUTH_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetAuth: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_AUTH_REDUCER>): void => {
    builder.addCase(
      verifyOtpActions.success,
      (state, { payload }: any) => {
        state.login=payload
        state.profileDetails = payload.profile || {
          ...state.profileDetails,
          phoneNumber: payload.phoneNumber,
        };
      }
    );
    builder.addCase(
      addProfileDetailsActions.success,
      (state, { payload }: any) => {
        state.profileDetails=payload
      }
    );
      builder.addCase(
      wishlistActions.success,
      (state, { payload }: any) => {
        state.wishlist = payload?.products || []
      }
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetAuth } = slice.actions;

export default slice.reducer;
