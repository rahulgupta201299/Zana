import { createAction } from "@reduxjs/toolkit";
import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors";

export const newArrivalsName = `${SLICE_NAME}/newArrivals`
export const newArrivalsActions = traceActionsCreator(newArrivalsName)

export const garageFavoriteName = `${SLICE_NAME}/garageFavorite`
export const garageFavoriteActions = traceActionsCreator(garageFavoriteName)

export const currencyListName = `${SLICE_NAME}/currencyList`
export const currencyListActions = traceActionsCreator(currencyListName)

export const selectedCurrencyName = 'api/selectedCurrency'
export const selectedCurrencyActions = createAction(
  `${selectedCurrencyName}/UPDATE`
)