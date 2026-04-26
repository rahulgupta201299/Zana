import { ShopByProductDetailsType } from "@/Redux/Product/Types";

export type OrderListType = {
  orders: OrderDetailResponse[];
  pagination: Pagination;
};

export type Item = {
  product: ShopByProductDetailsType;
  quantity: number;
  price: number;
  totalPrice: number;
};

export type AddressType = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
  totalOrders: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type OrderDetailResponse = {
  _id: string;
  phoneNumber: string;
  items: Item[];
  emailId: any;
  shippingAddressSameAsBillingAddress: boolean;
  subtotal: number;
  paymentStatus: string;
  shippingCost: number;
  taxAmount: number;
  codCharges: number;
  advancePaid: number;
  discountAmount: number;
  couponCode: string;
  appliedCoupon: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  billingAddress: AddressType;
  shippingAddress: AddressType;
  paymentMethod: string;
  razorpayOrderId: string;
  orderDate: string;
  orderNumber: string;
  orderStatus: string;
  currency: string;
  currencySymbol: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  logisticsOrderId: string | null;
  logisticsReferenceId: string | null;
  logisticsAWBNumber: string | null;
};
