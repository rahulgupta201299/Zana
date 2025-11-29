

export type T_CART_REDUCER = {
    userId: string
    items: Item[]
    shippingAddress: ShippingAddress
    billingAddress: BillingAddress
    isOpenCart: boolean
  }
  
  export interface Item {
    productId: string
    quantity: number
  }
  
  export interface ShippingAddress {
    fullName: string
    phone: string
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  
  export interface BillingAddress {
    fullName: string
    phone: string
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  