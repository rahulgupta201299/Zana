import { createAction } from "@reduxjs/toolkit";
import traceActionsCreator from "../traceActionsCreator"
import { SLICE_NAME } from "./Selectors";
import { GeolocationType, IpLocationCurrencyType, BikeSpecificResponse, ApiUniversalData } from "./Types";

export const newArrivalsName = `${SLICE_NAME}/newArrivals`
export const newArrivalsActions = traceActionsCreator(newArrivalsName)

export const garageFavoriteName = `${SLICE_NAME}/garageFavorite`
export const garageFavoriteActions = traceActionsCreator(garageFavoriteName)

export const bikeSpecificName = `${SLICE_NAME}/bikeSpecific`
export const bikeSpecificActions = traceActionsCreator<BikeSpecificResponse[]>(bikeSpecificName)

export const universalName = `${SLICE_NAME}/universal`
export const universalActions = traceActionsCreator<ApiUniversalData[]>(universalName)


export const currencyListName = `${SLICE_NAME}/currencyList`
export const currencyListActions = traceActionsCreator(currencyListName)

export const selectedCurrencyName = 'api/selectedCurrency'
export const selectedCurrencyActions = createAction<string>(
  `${selectedCurrencyName}/UPDATE`
)

export const initialLoadingName = 'app/initialLoading'
export const initialLoadingActions = createAction<boolean>(
  `${initialLoadingName}/setInitialLoading`
)

export const geoLocationName = `${SLICE_NAME}/geoLocation`
export const geoLocationActions = traceActionsCreator<GeolocationType>(geoLocationName)

export const ipLocationCurrencyName = `${SLICE_NAME}/ipLocationCurrency`
export const ipLocationCurrencyActions = traceActionsCreator<IpLocationCurrencyType>(ipLocationCurrencyName)