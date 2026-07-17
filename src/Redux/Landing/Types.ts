import { ShopByProductDetailsType } from "../Product/Types";

export type CurrencyType = {
  code: string
  name: string
  symbol: string
  exchangeRate: number
}

export type CountryCurrencyDetailsType = {
  code: string;
  name: string;
  symbol: string;
};

export interface GeolocationType {
  countryCode: string;
  countryName: string;
  currency: string;
  currencyDetails: CountryCurrencyDetailsType;
};

export interface IpLocationCurrencyType extends GeolocationType {
  ip: string;
};

export type CatalogueItem = {
  category: string;
  subCategory: string;
  description: string;
};

export type ApiBikeSpecificData = {
  brand: string;
  brandName: string;
  model: string;
  modelName: string;
  imageUrl: string;
  catalogue: CatalogueItem[];
};

export type ApiUniversalData = {
  productName: string;
  imageUrl: string;
  catalogue: CatalogueItem[];
};

export type BikeSpecificResponse = {
  brand: string;
  brandName: string;
  model: string;
  modelName: string;
  imageUrl: string;
  catalogue: CatalogueItem[];
};

export type T_LANDING_REDUCER = {
  garageFavoriteList: ShopByProductDetailsType[];
  newArrivalsList: ShopByProductDetailsType[];
  currencyList: CurrencyType[];
  selectedCurrency: string;
  initialLoading: boolean;
  bikeSpecificList: ApiBikeSpecificData[];
  universalList: ApiUniversalData[];
};
