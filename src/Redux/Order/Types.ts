export type T_ORDER_REDUCER = {
  orderDetails: Array<any>,
  shippingAddress: ShippingAddressType,
  billingAddress: BillingAddressType
};

export type ShippingAddressType = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type BillingAddressType = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
