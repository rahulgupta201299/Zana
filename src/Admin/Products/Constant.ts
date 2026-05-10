import { ProductFieldType } from "./Types";

export enum UPDATE_ACTIONS {
  START_NEW_PRODUCT = "START_NEW_PRODUCT",
  LOAD_PRODUCT = "LOAD_PRODUCT",
  UPDATE_FIELD = "UPDATE_FIELD",
  SET_ERRORS = "SET_ERRORS",
  RESET_PRODUCT = "RESET_PRODUCT",
  SAVE_DRAFT = "SAVE_DRAFT",
  SET_ACTIVE_SECTION = "SET_ACTIVE_SECTION",
}

export enum ProductStatus {
  Active = "Active",
  Inactive = "Inactive",
}

export enum PhotoRole {
  Hero = "Hero",
  Gallery = "Gallery",
}

export enum CmsSectionId {
  Core = "core",
  Classification = "classification",
  Categories = "categories",
  Photos = "photos",
  Content = "content",
  Pricing = "pricing",
  Shipping = "shipping",
  Visibility = "visibility",
}

export enum ProductMode {
  Create = "create",
  Edit = "edit",
}

export enum CategoryName {
  Luggage = "Luggage",
  Protection = "Protection",
  Lighting = "Lighting",
  Ergonomics = "Ergonomics",
  FogLight = "Fog Light",
}


const productImages = [
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proMImg_12_1702444513.jpg",
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proMImg_01_1705642643.jpg",
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proMImg_10_1728990386.jpg",
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proMImg_03_1742364292.jpg",
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proMImg_10_1760612806.png",
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proGImg_10_68f0d1dd3b7ed.jpg",
  "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proGImg_10_68f0d1dd3f9f1.jpg",
];

export const newProductData: ProductFieldType = {
  _id: "69e279ae5685096a33ad979c",
  brand: "69be7516111e9766e928d23d",
  model: "69bea3ebc222d7fdd0662a97",
  name: "Zana- Front Fork Slider For TVS Apache RTX 300",
  shortDescription: "Front Fork Slider",
  longDescription:
    "Front Fork Slider for TVS Apache RTX 300 is a critical accessory designed to protect your motorcycle's front fork and brake disc during falls or crashes. Made from high-density material, this slider helps safeguard essential components whether you're riding through city streets or pushing limits on open roads.",
  category: "Bike Protection",
  categoryIcon: "",
  price: 1149,
  currencySymbol: "₹",
  currency: "INR",
  imageUrl:
    "https://d1bw1i3fxlc6zi.cloudfront.net/Zana+website/proMImg_02_1770120997.jpg",
  images: productImages,
  quantityAvailable: 6,
  specifications:
    "Front Fork Slider for TVS Apache RTX 300 offers durable protection for the front fork and brake disc. Made from high-density material, it minimizes damage during falls, enhancing safety and longevity.",
  shippingAndReturn:
    "Delivery\nDispatch: Within 1-2 days\nFree shipping across all products on a minimum purchase of ₹ 499.\nInternational orders shipping will applicable\nInternational delivery time - 7-15 business days\nCash on delivery might be available\n7 days conditional return and exchange",
  isBikeSpecific: true,
  isNewArrival: true,
  isGarageFavorite: false,
  isWishlist: false,
  productCode: "ZI-8405",
  priority: 1,
  isActive: true,
  isComingSoon: false,
  subCategory: "Fork Slider",
};

export const initialProductField: ProductFieldType = {
  _id: "",
  brand: "",
  model: "",
  name: "",
  shortDescription: "",
  longDescription: "",
  category: "",
  categoryIcon: "",
  price: 0,
  currencySymbol: "₹",
  currency: "INR",
  imageUrl: "",
  images: [],
  quantityAvailable: 0,
  specifications: "",
  shippingAndReturn: "",
  isBikeSpecific: false,
  isNewArrival: false,
  isGarageFavorite: false,
  isWishlist: false,
  productCode: "",
  priority: 0,
  isActive: false,
  isComingSoon: false,
  subCategory: "",
};
