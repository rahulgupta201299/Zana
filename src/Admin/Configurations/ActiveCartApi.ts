import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";

const network = new Network();

/** Path after `VITE_API_DOMAIN` (contract: `GET …/v1/cart/admin/active`). */
const ACTIVE_CART_ADMIN_PATH = "/api/v1/cart/admin/active";

export type AdminActiveCartSortBy = "updatedAt" | "totalAmount";
export type AdminActiveCartSortOrder = "asc" | "desc";

export type AdminActiveCartFilters = {
  page: number;
  limit: number;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  sortBy: AdminActiveCartSortBy;
  sortOrder: AdminActiveCartSortOrder;
};

/** Product on a line item — shape varies by catalog / population. */
export type AdminActiveCartProduct = {
  _id?: string;
  brand?: string | { _id?: string; name?: string };
  model?: string | { _id?: string; name?: string };
  "Bike model name"?: string;
  name?: string;
  price?: number;
  imageUrl?: string;
  images?: string[];
  shortDescription?: string;
  category?: string;
  [key: string]: unknown;
};

export type AdminActiveCartLineItem = {
  _id?: string;
  quantity?: number;
  price?: number;
  totalPrice?: number;
  product?: AdminActiveCartProduct | null;
  originalPrice?: number;
  originalTotalPrice?: number;
  currency?: string;
  currencySymbol?: string;
};

export type AdminActiveCartAddress = {
  fullName?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
};

/** One cart row — list payloads omit or vary fields; UI supplies defaults. */
export type AdminActiveCartRecord = {
  _id?: string;
  phoneNumber?: string | null;
  emailId?: string | null;
  items?: AdminActiveCartLineItem[];
  subtotal?: number;
  totalAmount?: number;
  status?: string;
  currency?: string;
  currencySymbol?: string;
  taxAmount?: number;
  shippingCost?: number;
  discountAmount?: number;
  codCharges?: number;
  createdAt?: string;
  updatedAt?: string;
  appliedCoupon?: string | null;
  couponCode?: string | null;
  shippingAddress?: AdminActiveCartAddress | null;
  billingAddress?: AdminActiveCartAddress | null;
  paymentMethod?: string | null;
  razorpayOrderId?: string | null;
};

export type AdminActiveCartPagination = {
  totalCarts?: number;
  totalPages?: number;
  currentPage?: number;
  limit?: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
};

function omitEmptyParams(
  params: Record<string, string | number | undefined | null>,
): Record<string, string | number> {
  const out: Record<string, string | number> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      out[key] = value;
    }
  }
  return out;
}

/** Serialize filters to query params only; no business rules beyond omitting null/undefined. */
function buildQueryParams(filters: AdminActiveCartFilters): Record<string, string | number> {
  return omitEmptyParams({
    page: filters.page,
    limit: filters.limit,
    sortBy: filters.sortBy,
    sortOrder: filters.sortOrder,
    startDate: filters.startDate,
    endDate: filters.endDate,
    minAmount: filters.minAmount,
    maxAmount: filters.maxAmount,
  });
}

/** Raw response body; callers parse `success` / `data` / carts / pagination. */
export async function getAdminActiveCarts(
  filters: AdminActiveCartFilters,
): Promise<unknown> {
  return network.request({
    url: ACTIVE_CART_ADMIN_PATH,
    method: API_METHOD_ENUM.GET,
    params: buildQueryParams(filters),
    cache: false,
  });
}
