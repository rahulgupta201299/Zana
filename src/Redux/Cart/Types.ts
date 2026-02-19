import { COUPON_TYPE_ENUM } from "@/Constants/AppConstant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";

export type T_CART_REDUCER = {
  cartDetail: CartDetailResType;
  outOfStocks: OutOfStockDetail[];
  cartAddress: {
    shippingAddress: CartAddressType;
    billingAddress: CartAddressType;
  };
  initialCartLoaded: boolean;
  isOpenCart: boolean;
  isOpenCouponDialog: boolean;
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

export interface CartAddressType {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type UpdateCartAddressReqType = UpdateCartAddressResType & {
  phoneNumber: string;
};

export interface UpdateCartAddressResType {
  shippingAddress: CartAddressType;
  billingAddress: CartAddressType;
}

export type DiscountType = COUPON_TYPE_ENUM.PERCENTAGE | COUPON_TYPE_ENUM.FIXED;

export type CouponDetailsType = {
  _id: string;
  code: string;
  type: DiscountType;
  discount: number;
  maxDiscount: number;
  minCartAmount: number;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
  expiresAt: string;
  description: string;
  usedBy: string[];
};

export type AllCouponResType = {
  coupons: CouponDetailsType[];
  pagination: {
    page: boolean;
    limit: boolean;
    total: boolean;
    pages: boolean;
  };
};

export type ApplyCouponReqType = {
  couponCode: string;
  phoneNumber: string;
};

export type ApplyCouponResType = {
  couponCode: string;
  couponType: COUPON_TYPE_ENUM;
  discountAmount: number;
  totalAmount: number;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
};

export type RemoveCouponResType = {
  totalAmount: number;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
};
