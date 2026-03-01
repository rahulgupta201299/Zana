import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "landing";

export const getGarageFavorite = createSelector(
    (state: TAppStore) => state[SLICE_NAME].garageFavoriteList,
    (garageFavoriteList) => garageFavoriteList
  );

  export const getNewArrivalsList = createSelector(
    (state: TAppStore) => state[SLICE_NAME].newArrivalsList,
    (newArrivalsList) => newArrivalsList
  );

  export const getCurrencyList = createSelector(
    (state:TAppStore) => state[SLICE_NAME].currencyList,
    (currencyList) => currencyList
  ) 


  export const getSelectedCurrency = createSelector(
    (state:TAppStore) => state[SLICE_NAME].selectedCurrency,
    (selectedCurrency) => selectedCurrency
  ) 

