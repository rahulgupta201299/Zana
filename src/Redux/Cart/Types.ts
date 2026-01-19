import { ShopByProductDetailsType } from "@/Redux/Product/Types";

export type T_CART_REDUCER = {
  cartDetail: Omit<CartDetailResType, "phoneNumber">;
  isOpenCart: boolean;
};

export interface CartItemDetail {
  product: ShopByProductDetailsType;
  quantity: number;
  price: number;
  totalPrice: number;
  _id: string;
}

export interface CartModifyReqType {
  phoneNumber: string;
  productId: string;
  quantity: number;
}

export interface CartDetailResType {
  _id: string;
  phoneNumber: string;
  items: CartItemDetail[];
  subtotal: number;
  paymentStatus: string;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  status: string;
}

export interface ValidateCartReqType {
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}

export interface InvalidCartItemsType {
  productId: string;
  productName: string;
  isValid: boolean;
  message: string;
  requestedQuantity: number;
  availableQuantity: number;
  price: number;
}

export interface ValidateCartResType {
  isValid: boolean;
  message: string;
  items: InvalidCartItemsType[]
  invalidItems: InvalidCartItemsType[]
}
