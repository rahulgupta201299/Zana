import { ShopByProductDetailsType } from "../Product/Types";

export type CurrencyType = {
  code: string
  name: string
  symbol: string
  exchangeRate: number
}

export type T_LANDING_REDUCER = {
  garageFavoriteList: ShopByProductDetailsType[];
  newArrivalsList: ShopByProductDetailsType[];
  currencyList: CurrencyType[],
  selectedCurrency: string,
  initialLoading: boolean,
};