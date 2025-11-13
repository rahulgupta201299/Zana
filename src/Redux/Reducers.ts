import type { ReducersMapObject } from "redux";
import { combineReducers } from "redux";

import ServiceTrackerReducer from "@/Redux/ServiceTracker/Reducer";
import { SLICE_NAME as ServiceTrackerSliceName } from "@/Redux/ServiceTracker/Selectors";
import type { T_SERVICE_TRACKER_REDUCER } from "@/Redux/ServiceTracker/Types";

import AuthReducer from "@/Redux/Auth/Reducer";
import { SLICE_NAME as AuthSliceName } from "@/Redux/Auth/Selectors";
import type { T_AUTH_REDUCER } from "@/Redux/Auth/Types";

export type TReducers = {
  [ServiceTrackerSliceName]: T_SERVICE_TRACKER_REDUCER;
  [AuthSliceName]: T_AUTH_REDUCER;
};

const reducers: ReducersMapObject<TReducers> = {
  [ServiceTrackerSliceName]: ServiceTrackerReducer,
  [AuthSliceName]: AuthReducer,
};

export default combineReducers<ReducersMapObject<TReducers>>(reducers);

export const persistedReducers: (keyof TReducers)[] = [];
