import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "auth";

// just for ref
// export const getAuthSelector = createSelector(
//   (state: TAppStore) => state[SLICE_NAME].,
//   data => data
// )

export const getLoginDetails = createSelector(
  (state: TAppStore) => state[SLICE_NAME].login,
  (login) => login
);

export const getProfileDetails = createSelector(
  (state: TAppStore) => state[SLICE_NAME].profileDetails,
  (profileDetails) => profileDetails
);

export const WishListProducts = createSelector(
  (state: TAppStore) => state[SLICE_NAME].wishlist,
  (wishlist) => wishlist
);

export const isdCodeDetails = createSelector(
  (state: TAppStore) => state[SLICE_NAME].isdCode,
  data => data
)

export const listOfBikes = createSelector(
  (state: TAppStore) => state[SLICE_NAME].bikeList,
  data => data
)


