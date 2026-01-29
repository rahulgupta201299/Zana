import type {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { SLICE_NAME as AuthSliceName } from "@/Redux/Auth/Selectors";
import storage from "redux-persist/lib/storage";
import { IsdCodeType, T_AUTH_REDUCER } from "./Types";
import { SLICE_NAME } from "./Selectors";
import {
  addProfileDetailsActions,
  getIsdCodeActions,
  removeWishlistActions,
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

const cartPersistConfig = {
  key: AuthSliceName,
  storage,
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

    builder.addCase(removeWishlistActions.success, (state, { payload }: any) => {
      console.log("REMOVE WISHLIST PAYLOAD", payload);
      state.wishlist = payload?.data?.products || [];
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

export default persistReducer(cartPersistConfig, slice.reducer);
