import { PaymentTypeEnum } from "@/pages/Checkout/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";

export type T_CART_REDUCER = {
  cartDetail: CartDetailResType;
  outOfStocks: OutOfStockDetail[];
  cartAddress: {
    shippingAddress: CartAddressType;
    billingAddress: CartAddressType;
    shippingAddressSameAsBillingAddress: boolean;
    emailId: string;
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
  originalPrice: number;
  originalTotalPrice: number;
  currency: string;
  currencySymbol: string;
}

export interface OutOfStockDetail {
  availableQuantity: number;
  message: string;
  price: number;
  quantity: number;
  product: ShopByProductDetailsType;
  totalPrice: number;
}

export interface ClearCartReqType {
  phoneNumber: string;
}

export interface ClearCartResType {
  phoneNumber: string;
  items: Array<unknown>;
  status: string;
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
  codCharges: number;
  discountAmount: number;
  totalAmount: number;
  status: string;
  appliedCoupon: string;
  couponCode: string;
  currency: string;
  currencySymbol: string;
  couponRemoved: boolean;
}

export interface BaseCartOrder {
  _id: string;
  emailId: string | null;
  items: CartItemDetail[];
  phoneNumber: string;
  subtotal: number;
  paymentStatus: string;
  shippingCost: number;
  taxAmount: number;
  codCharges: number;
  discountAmount: number;
  totalAmount: number;
  status: string;
  appliedCoupon: string;
  couponCode: string;
  paymentMethod: PaymentTypeEnum.COD | PaymentTypeEnum.RAZORPAY;
  shippingAddressSameAsBillingAddress: boolean;
  originalSubtotal: number;
  originalDiscountAmount: number;
  originalShippingCost: number;
  originalTaxAmount: number;
  originalTotalAmount: number;
  currency: string;
  currencySymbol: string;
  originalCodCharges: number;
}

export interface GetCartDetailResType extends BaseCartOrder {}
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
  shippingAddressSameAsBillingAddress: boolean;
  emailId: string;
}

export type CouponDetailsType = {
  _id: string;
  code: string;
  type: string;
  discount: number;
  maxDiscount: number;
  minCartAmount: number;
  usageLimit: number;
  usedCount: number;
  currency: string;
  currencySymbol: string;
  isActive: boolean;
  expiresAt: string;
  description: string;
  usedBy: string[];
};

export type AllCouponResType = {
  coupons: CouponDetailsType[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
};

export type ApplyCouponReqType = {
  couponCode: string;
  phoneNumber: string;
};

export type ApplyCouponResType = {
  couponCode: string;
  couponType: string;
  discountAmount: number;
  totalAmount: number;
  subtotal: number;
  shippingCost: number;
  codCharges: number;
  taxAmount: number;
  currency: string;
  currencySymbol: string;
};

export type RemoveCouponResType = {
  totalAmount: number;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  codCharges: number;
  discountAmount: number;
  currency: string;
  currencySymbol: string;
};

export type UpdatePaymentReqType = {
  phoneNumber: string;
  method: string;
  currency: string;
};

export interface UpdatePaymentResType extends BaseCartOrder {
  billingAddress: CartAddressType;
  shippingAddress: CartAddressType;
  advanceAmount: number;
  originalAdvanceAmount: number;
}
