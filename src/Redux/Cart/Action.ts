import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors"

export const cartModifyServiceName = `${SLICE_NAME}/cartModify`
export const cartModifyActions = traceActionsCreator(cartModifyServiceName)

export const getCartDetailServiceName = `${SLICE_NAME}/cartDetail`
export const getCartDetailActions = traceActionsCreator(getCartDetailServiceName)

export const updateCartAddressServiceName = `${SLICE_NAME}/updateCartAddress`
export const updateCartAddressActions = traceActionsCreator(updateCartAddressServiceName)