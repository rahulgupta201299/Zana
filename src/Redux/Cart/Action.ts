import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors"

export const cartModifyServiceName = `${SLICE_NAME}/cartModify`
export const cartModifyActions = traceActionsCreator(cartModifyServiceName)

export const getCartDetailServiceName = `${SLICE_NAME}/cartDetail`
export const getCartDetailActions = traceActionsCreator(getCartDetailServiceName)

export const updateCartAddressServiceName = `${SLICE_NAME}/updateCartAddress`
export const updateCartAddressActions = traceActionsCreator(updateCartAddressServiceName)

export const getCouponServiceName = `${SLICE_NAME}/getCoupon`
export const getCouponActions = traceActionsCreator(getCouponServiceName)

export const allCouponServiceName = `${SLICE_NAME}/allCoupon`
export const allCouponActions = traceActionsCreator(allCouponServiceName)

export const applyCouponServiceName = `${SLICE_NAME}/applyCoupon`
export const applyCouponActions = traceActionsCreator(applyCouponServiceName)

export const removeCouponServiceName = `${SLICE_NAME}/removeCoupon`
export const removeCouponActions = traceActionsCreator(removeCouponServiceName)