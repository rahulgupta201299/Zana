import { ShopByProductDetailsType } from "../Product/Types";



export type currencyType = {
  code: string
  name: string
  symbol: string
}

export type T_LANDING_REDUCER = {
  garageFavoriteList: ShopByProductDetailsType[];
  newArrivalsList: ShopByProductDetailsType[];
  currencyList: currencyType[],
  selectedCurrency: string
};

