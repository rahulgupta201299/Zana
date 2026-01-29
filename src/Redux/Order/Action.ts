import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors"

export const cartCheckOutServiceName = `${SLICE_NAME}/cartCheckOut`
export const cartCheckoutActions = traceActionsCreator(cartCheckOutServiceName)

export const orderDetailName = `${SLICE_NAME}/orderDetailName`
export const orderDetailActions = traceActionsCreator(orderDetailName)

export const createPaymentOrderName = `${SLICE_NAME}/createPaymentOrder`
export const createPaymentOrdeActions = traceActionsCreator(createPaymentOrderName)

export const verifyPaymentOrderName = `${SLICE_NAME}/verifyPaymentOrder`
export const verifyPaymentOrdeActions = traceActionsCreator(verifyPaymentOrderName)