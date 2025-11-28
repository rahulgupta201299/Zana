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

;
