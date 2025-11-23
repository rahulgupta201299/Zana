import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors"

export const bikeProductServiceName = `${SLICE_NAME}/bikeProduct`
export const bikeProductTraceActions = traceActionsCreator(bikeProductServiceName)