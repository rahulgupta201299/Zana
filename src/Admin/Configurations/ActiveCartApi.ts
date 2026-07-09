import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";
import { getAdminApiBody, omitEmptyParams } from "../Utils/ApiUtils";
import { downloadAdminCsv } from "../Utils/CsvDownloadUtils";

const network = new Network();

/** Path after `VITE_API_DOMAIN` (contract: `GET …/v1/cart/admin/active`). */
const ACTIVE_CART_ADMIN_PATH = "/api/v1/cart/admin/active";
const ACTIVE_CART_ADMIN_DOWNLOAD_PATH = "/api/v1/cart/admin/active/download";
const CREATE_PAYMENT_LINK_PATH = "/api/v1/payment/create-payment-link";

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
  phoneNumber?: string;
  emailId?: string;
  currency?: string;
};

export type AdminActiveCartDownloadFilters = Omit<AdminActiveCartFilters, "page" | "limit">;

/** Product on a line item — shape varies by catalog / population. */
export type AdminActiveCartProduct = {
  _id?: string;
  brand?: string | { _id?: string; name?: string };
  model?: string | { _id?: string; name?: string };
  "Bike model name"?: string;
  name?: string;
  price?: number;
  quantityAvailable?: number;
  imageUrl?: string;
  images?: string[];
  shortDescription?: string;
  category?: string;
  productCode?: string;
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
  shippingAddressSameAsBillingAddress?: boolean;
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

export type AdminCreatePaymentLinkData = {
  orderId?: string;
  orderNumber?: string;
  cartId?: string;
  paymentLinkId?: string;
  paymentLink?: string;
  amount?: number;
  currency?: string;
};

export type AdminCreatePaymentLinkResponse = {
  success?: boolean;
  message?: string;
  data?: AdminCreatePaymentLinkData;
};

/** `data` object for a successful active-carts list response. */
export type AdminActiveCartListData = {
  carts?: AdminActiveCartRecord[];
  pagination?: AdminActiveCartPagination;
};

/**
 * Response body from `GET …/cart/admin/active`.
 * Supports `{ success, data: { carts, pagination } }` and flattened `{ carts, pagination }`.
 */
export type AdminActiveCartsApiResponse = {
  success?: boolean;
  message?: string;
  data?: AdminActiveCartListData;
  carts?: AdminActiveCartRecord[];
  pagination?: AdminActiveCartPagination;
};

export function parseAdminActiveCartsResponse(
  body: AdminActiveCartsApiResponse | null | undefined,
): { carts: AdminActiveCartRecord[]; pagination: AdminActiveCartPagination } {
  const envelope = getAdminApiBody<AdminActiveCartListData>(body);
  const flattened = body != null && typeof body === "object" ? body : {};
  const list: AdminActiveCartListData =
    envelope.data != null && typeof envelope.data === "object"
      ? envelope.data
      : { carts: flattened.carts, pagination: flattened.pagination };
  const carts = Array.isArray(list.carts) ? list.carts : [];
  const pagination =
    list.pagination != null && typeof list.pagination === "object" ? list.pagination : {};
  return { carts, pagination };
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
    phoneNumber: filters.phoneNumber,
    emailId: filters.emailId,
    currency: filters.currency,
  });
}

export async function getAdminActiveCarts(
  filters: AdminActiveCartFilters,
): Promise<AdminActiveCartsApiResponse> {
  const data = await network.request({
    url: ACTIVE_CART_ADMIN_PATH,
    method: API_METHOD_ENUM.GET,
    params: buildQueryParams(filters),
    cache: false,
  });
  return data as AdminActiveCartsApiResponse;
}

export async function downloadAdminActiveCartsCsv(filters: AdminActiveCartDownloadFilters) {
  return downloadAdminCsv(
    ACTIVE_CART_ADMIN_DOWNLOAD_PATH,
    omitEmptyParams({
      sortBy: filters.sortBy,
      sortOrder: filters.sortOrder,
      startDate: filters.startDate,
      endDate: filters.endDate,
      minAmount: filters.minAmount,
      maxAmount: filters.maxAmount,
      phoneNumber: filters.phoneNumber,
      emailId: filters.emailId,
      currency: filters.currency,
    }),
    "admin-active-carts.csv",
  );
}

export async function createAdminActiveCartPaymentLink(
  phoneNumber: string,
): Promise<AdminCreatePaymentLinkResponse> {
  return network.request({
    url: CREATE_PAYMENT_LINK_PATH,
    method: API_METHOD_ENUM.POST,
    data: { phoneNumber },
    cache: false,
  }) as Promise<AdminCreatePaymentLinkResponse>;
}
