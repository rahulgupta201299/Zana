import { ShopByProductDetailsType } from "@/Redux/Product/Types";

export type T_CART_REDUCER = {
  cartDetail: CartDetailResType;
  outOfStocks: OutOfStockDetail[];
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

export interface OutOfStockDetail {
  availableQuantity: number;
  message: string;
  price: number;
  quantity: number;
  product: ShopByProductDetailsType;
  totalPrice: number;
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
  unProcessedItems: OutOfStockDetail[];
  subtotal: number;
  paymentStatus: string;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  status: string;
  appliedCoupon: string;
  couponCode: string;
}

export interface GetCartDetailResType {
  _id: string;
  items: CartItemDetail[];
  phoneNumber: string;
  subtotal: number;
  paymentStatus: string;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  status: string;
  appliedCoupon: string;
  couponCode: string;
}
