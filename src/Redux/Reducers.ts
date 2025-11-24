import type { ReducersMapObject } from "redux";
import { combineReducers } from "redux";

import ServiceTrackerReducer from "@/Redux/ServiceTracker/Reducer";
import { SLICE_NAME as ServiceTrackerSliceName } from "@/Redux/ServiceTracker/Selectors";
import type { T_SERVICE_TRACKER_REDUCER } from "@/Redux/ServiceTracker/Types";

import AuthReducer from "@/Redux/Auth/Reducer";
import { SLICE_NAME as AuthSliceName } from "@/Redux/Auth/Selectors";
import type { T_AUTH_REDUCER } from "@/Redux/Auth/Types";

import LandingReducer from "@/Redux/Landing/Reducer";
import { SLICE_NAME as LandingSliceName } from "@/Redux/Landing/Selectors";
import type { T_LANDING_REDUCER } from "@/Redux/Landing/Types";

import ProductReducer from "@/Redux/Product/Reducer";
import { SLICE_NAME as ProductSliceName } from "@/Redux/Product/Selectors";
import type { T_PRODUCT_REDUCER } from "@/Redux/Product/Types";

export type TReducers = {
  [ServiceTrackerSliceName]: T_SERVICE_TRACKER_REDUCER;
  [AuthSliceName]: T_AUTH_REDUCER;
  [LandingSliceName]: T_LANDING_REDUCER;
  [ProductSliceName]: T_PRODUCT_REDUCER;
};

const reducers: ReducersMapObject<TReducers> = {
  [ServiceTrackerSliceName]: ServiceTrackerReducer,
  [AuthSliceName]: AuthReducer,
  [LandingSliceName]: LandingReducer,
  [ProductSliceName]: ProductReducer,
};

export default combineReducers<ReducersMapObject<TReducers>>(reducers);

export const persistedReducers: (keyof TReducers)[] = [];
