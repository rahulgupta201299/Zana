import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IsdCodeType, T_AUTH_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import {
  addProfileDetailsActions,
  getIsdCodeActions,
  verifyOtpActions,
  wishlistActions,
} from "./Actions";

export const INITIAL_STATE: T_AUTH_REDUCER = {
  login: {
    phoneNumber: "",
    verified: false,
  },
  profileDetails: {
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
    __v: 0,
  },
  wishlist: [],
  isdCode: [],
};

const sliceOptions: CreateSliceOptions<T_AUTH_REDUCER> = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetAuth: () => INITIAL_STATE,
  },
  extraReducers: (builder: ActionReducerMapBuilder<T_AUTH_REDUCER>): void => {
    builder.addCase(verifyOtpActions.success, (state, { payload }: any) => {
      state.login = payload;
      state.profileDetails = payload.profile || {
        ...state.profileDetails,
        phoneNumber: payload.phoneNumber,
      };
    });
    builder.addCase(
      addProfileDetailsActions.success,
      (state, { payload }: any) => {
        state.profileDetails = payload;
      },
    );
    builder.addCase(wishlistActions.success, (state, { payload }: any) => {
      state.wishlist = payload?.products || [];
    });
    builder.addCase(
      getIsdCodeActions.success,
      (state, action: PayloadAction<IsdCodeType[]>) => {
        state.isdCode = action.payload;
      },
    );
  },
};

const slice = createSlice(sliceOptions);

export const { resetAuth } = slice.actions;

export default slice.reducer;
