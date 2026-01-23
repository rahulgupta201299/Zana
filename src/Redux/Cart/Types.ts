import { ShopByProductDetailsType } from "@/Redux/Product/Types";

export type T_CART_REDUCER = {
  cartDetail: CartDetailResType;
  initialCartLoaded: boolean;
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
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}

export interface CartDetailResType {
  _id: string;
  processedItems: CartItemDetail[];
  unProcessedItems: CartItemDetail[];
  subtotal: number;
  paymentStatus: string;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  status: string;
}