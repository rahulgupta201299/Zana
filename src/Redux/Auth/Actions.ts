import { SLICE_NAME } from "./Selectors";

import traceActionsCreator from "@/Redux/traceActionsCreator";

export const signInServiceName = `${SLICE_NAME}/login`;
export const signInTraceActions = traceActionsCreator(signInServiceName);
