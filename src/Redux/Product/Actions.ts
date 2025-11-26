import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors"

export const bikeProductServiceName = `${SLICE_NAME}/bikeProduct`
export const bikeProductTraceActions = traceActionsCreator(bikeProductServiceName)

export const productDetailServiceName = `${SLICE_NAME}/productDetail`
export const productDetailTraceActions = traceActionsCreator(productDetailServiceName)

export const shopByBikeServiceName = `${SLICE_NAME}/shopByBike`
export const shopByBikeTraceActions = traceActionsCreator(shopByBikeServiceName)

export const categoryProductServiceName = `${SLICE_NAME}/categoryProduct`
export const categoryProductTraceActions = traceActionsCreator(categoryProductServiceName)

export const allProductServiceName = `${SLICE_NAME}/allProduct`
export const allProductTraceActions = traceActionsCreator(allProductServiceName)

export const productCategoryCountServiceName = `${SLICE_NAME}/productCategoryCount`
export const productCategoryCountTraceActions = traceActionsCreator(productCategoryCountServiceName)

export const searchServiceName = `${SLICE_NAME}/search`
export const searchTraceActions = traceActionsCreator(searchServiceName)