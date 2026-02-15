import { BikeCategoryEnum } from "@/Constants/AppConstant";

export type T_PRODUCT_REDUCER = {
  menu: {
    shopByBike: ShopByBikeType[];
    zProBikes: ShopByBikeType[];
    productCategory: ProductCatergoryCountType[];
  };
};

export type QueryParamShopByBikeType = {
  category: BikeCategoryEnum;
};

export type ShopByProductDetailsType = {
  _id: string;
  brand: string;
  model: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  categoryIcon: string;
  price: number;
  imageUrl: string;
  images: string[];
  quantityAvailable: number;
  specifications: string;
  shippingAndReturn: string;
  isBikeSpecific: boolean;
  isNewArrival: boolean;
  isGarageFavorite: boolean;
  isWishlist: boolean
};

export type ShopByBikeModelsType = {
  _id: string;
  name: string;
  brand: string;
  description: string;
  type: string;
  imageUrl: string;
  brandName: string;
};

export type ShopByBikeType = {
  _id: string;
  name: string;
  description: string;
  models: ShopByBikeModelsType[];
};

export type QueryParamsType = {
  page?: number;
  limit?: number;
  phoneNumber?: string
};

export type CategoryProductReqType = {
  category: string;
  queryParams?: QueryParamsType;
};

export type PaginationType = {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  productsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: null;
  prevPage: null;
};

export type ProductCatalogDetailsType = {
  data: ShopByProductDetailsType[];
  pagination: PaginationType;
};

export type ProductCatergoryCountType = {
  count: number;
  name: string;
  icon: string;
};

export interface SearchRequestType extends QueryParamsType {
  query: string;
}

export type SearchDataProductsType = {
  _id: string;
  name: string;
  category: string;
  shortDescription: string;
  price: number;
  imageUrl: string;
};

export type SearchResponseType = {
  data: [];
  pagination: PaginationType;
};
