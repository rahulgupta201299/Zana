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

  profileDetails: {
    _id: string;
    firstName: string;
    lastName: string;
    isdCode: string;
    phoneNumber: string;
    emailId: string;
    address: string;
    notifyOffers: boolean;
    bikeOwnedByCustomer: bike_owned[];
    createdAt: string;
    __v: number;
  };

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
