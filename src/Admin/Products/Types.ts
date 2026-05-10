import { PhotoRole } from "./Constant";

export type CompatibleBrand = {
  brand: string;
  models: string[];
};

export type ProductPhoto = {
  id: string;
  label?: string;
  url?: string;
  base64?: string;
  fileName?: string;
  mimeType?: string;
  size?: number;
  role?: PhotoRole | string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductFieldType = {
  _id: string;
  brand: string;
  model: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  categoryIcon: string;
  price: number;
  currencySymbol: string;
  currency: string;
  imageUrl: string;
  images: string[];
  quantityAvailable: number;
  specifications: string;
  shippingAndReturn: string;
  isBikeSpecific: boolean;
  isNewArrival: boolean;
  isGarageFavorite: boolean;
  isWishlist: boolean;
  productCode: string;
  priority: number;
  isActive: boolean;
  isComingSoon: boolean;
  subCategory: string;
};
