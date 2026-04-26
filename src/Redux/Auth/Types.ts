import {
  ShopByBikeBrandType,
  ShopByBikeModelsType,
  ShopByProductDetailsType,
} from "../Product/Types";

export type BIKE_LIST = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  __v: number;
};

export type WishlistProductType = Omit<
  ShopByProductDetailsType,
  "brand" | "model"
> & {
  brand: ShopByBikeBrandType;
  model: ShopByBikeModelsType;
};

export type ProfileDetailsType = {
    _id: string;
    firstName: string;
    lastName: string;
    isdCode: string;
    phoneNumber: string;
    emailId: string;
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    notifyOffers: boolean;
    bikeOwnedByCustomer: bike_owned[];
    createdAt: string;
    __v: number;
  };


export type T_AUTH_REDUCER = {
  login: {
    phoneNumber: string;
    verified: boolean;
    firstName?: string;
    lastName?: string;
    address?: string;
  };

  bikeList: BIKE_LIST[];

  wishlist: WishlistProductType[];

  isdCode: IsdCodeType[];

  profileDetails: ProfileDetailsType;
  openSignupPopup: boolean;
};

type bike_owned = {
  brand: string;
  model: string;
};

export type IsdCodeType = {
  code: string;
  isd: string;
  name: string;
};

export type WishListResType = {
  _id: string | null;
  phoneNumber: string;
  products: WishlistProductType[];
};

export interface VeriftyOtpReqType {
  isdCode: string;
  phoneNumber: string;
  otp: string;
}

export type VerifyOtpResType = {
  message: string;
  phoneNumber: string;
  verified: boolean;
  profile: ProfileDetailsType;
};