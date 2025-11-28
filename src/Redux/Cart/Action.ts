import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors"

export const cartCheckOutServiceName = `${SLICE_NAME}/bikeProduct`
export const cartCheckoutActions = traceActionsCreator(cartCheckOutServiceName)