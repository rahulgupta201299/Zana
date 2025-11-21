import { createAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./Selectors";

import traceActionsCreator from "@/Redux/traceActionsCreator";

export const signInServiceName = `${SLICE_NAME}/login`;
export const signInTraceActions = traceActionsCreator(signInServiceName);

export const updateLoginStatus = 'api/updateLOgin'
export const updateLoginStatusActions = createAction(
  `${updateLoginStatus}/UPDATE`
)
