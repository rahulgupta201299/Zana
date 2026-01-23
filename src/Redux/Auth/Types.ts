import { ShopByProductDetailsType } from "../Product/Types";

export type T_AUTH_REDUCER = {
  login: {
    phoneNumber: string;
    verified: boolean;
    firstName?: string;
    lastName?: string;
    address?: string;
  };

  wishlist: ShopByProductDetailsType[];

  profileDetails:{
    _id: string
  firstName: string
  lastName: string
  isdCode: string
  phoneNumber: string
  emailId: string
  address: string
  notifyOffers: boolean
  bikeOwnedByCustomer: bike_owned[]
  createdAt: string
  __v: number
  }
};

 type bike_owned={
    brand: string,
    model: string
 }
