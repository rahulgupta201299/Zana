import { BillingAddressType, ShippingAddressType } from "@/Redux/Order/Types";

export type T_CART_REDUCER = {
  userId: string;
  items: Item[];
  shippingAddress: ShippingAddressType;
  billingAddress: BillingAddressType;
  isOpenCart: boolean;
};

export interface Item {
  productId: string;
  quantity: number;
}
