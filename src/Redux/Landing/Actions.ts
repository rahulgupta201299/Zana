import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors";

export const newArrivalsName = `${SLICE_NAME}/newArrivals`
export const newArrivalsActions = traceActionsCreator(newArrivalsName)

export const garageFavoriteName = `${SLICE_NAME}/garageFavorite`
export const garageFavoriteActions = traceActionsCreator(garageFavoriteName)