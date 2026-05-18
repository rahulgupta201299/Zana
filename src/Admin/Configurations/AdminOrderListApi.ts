import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";
import { omitEmptyParams } from "../Utils/ApiUtils";
import { downloadAdminCsv } from "../Utils/CsvDownloadUtils";

const network = new Network();

/** Path after `VITE_API_DOMAIN` (contract: `GET …/api/v1/order/admin/all`). */
const ADMIN_ORDER_LIST_PATH = "/api/v1/order/admin/all";
const ADMIN_ORDER_LIST_DOWNLOAD_PATH = "/api/v1/order/admin/all/download";

export type AdminOrderListSortBy = "updatedAt" | "totalAmount";
export type AdminOrderListSortOrder = "asc" | "desc";

export type AdminOrderListFilters = {
  page: number;
  limit: number;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  sortBy: AdminOrderListSortBy;
  sortOrder: AdminOrderListSortOrder;
  paymentMethod?: string;
  paymentStatus?: string;
  orderStatus?: string;
  phoneNumber?: string;
  emailId?: string;
};

export type AdminOrderListDownloadFilters = Omit<AdminOrderListFilters, "page" | "limit">;

export type AdminOrderListProduct = {
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
  productCode?: string;
  [key: string]: unknown;
};

export type AdminOrderListLineItem = {
  _id?: string;
  quantity?: number;
  price?: number;
  totalPrice?: number;
  product?: AdminOrderListProduct | null;
  currency?: string;
  currencySymbol?: string;
};

export type AdminOrderListAddress = {
  fullName?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
};

export type AdminOrderStatusHistoryEntry = {
  status?: string;
  timestamp?: string;
  notes?: string;
};

export type AdminOrderListRecord = {
  _id?: string;
  orderNumber?: string;
  phoneNumber?: string | null;
  emailId?: string | null;
  items?: AdminOrderListLineItem[];
  subtotal?: number;
  totalAmount?: number;
  currency?: string;
  currencySymbol?: string;
  taxAmount?: number;
  shippingCost?: number;
  discountAmount?: number;
  codCharges?: number;
  advancePaid?: number;
  couponCode?: string | null;
  paymentMethod?: string | null;
  paymentStatus?: string | null;
  orderStatus?: string | null;
  orderDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
  shippingAddress?: AdminOrderListAddress | null;
  billingAddress?: AdminOrderListAddress | null;
  shippingAddressSameAsBillingAddress?: boolean;
  statusHistory?: AdminOrderStatusHistoryEntry[];
  razorpayOrderId?: string | null;
  razorpayPaymentId?: string | null;
  razorpaySignature?: string | null;
  logisticsOrderId?: string | null;
  logisticsReferenceId?: string | null;
  logisticsAWBNumber?: string | null;
};

export type AdminOrderListPagination = {
  totalOrders?: number;
  totalPages?: number;
  currentPage?: number;
  limit?: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
};

function buildQueryParams(filters: AdminOrderListFilters): Record<string, string | number> {
  return omitEmptyParams({
    page: filters.page,
    limit: filters.limit,
    sortBy: filters.sortBy,
    sortOrder: filters.sortOrder,
    startDate: filters.startDate,
    endDate: filters.endDate,
    minAmount: filters.minAmount,
    maxAmount: filters.maxAmount,
    paymentMethod: filters.paymentMethod,
    paymentStatus: filters.paymentStatus,
    orderStatus: filters.orderStatus,
    phoneNumber: filters.phoneNumber,
    emailId: filters.emailId,
  });
}

export async function getAdminOrderList(filters: AdminOrderListFilters): Promise<unknown> {
  return network.request({
    url: ADMIN_ORDER_LIST_PATH,
    method: API_METHOD_ENUM.GET,
    params: buildQueryParams(filters),
    cache: false,
  });
}

export async function downloadAdminOrderListCsv(filters: AdminOrderListDownloadFilters) {
  return downloadAdminCsv(
    ADMIN_ORDER_LIST_DOWNLOAD_PATH,
    omitEmptyParams({
      sortBy: filters.sortBy,
      sortOrder: filters.sortOrder,
      startDate: filters.startDate,
      endDate: filters.endDate,
      minAmount: filters.minAmount,
      maxAmount: filters.maxAmount,
      paymentMethod: filters.paymentMethod,
      paymentStatus: filters.paymentStatus,
      orderStatus: filters.orderStatus,
      phoneNumber: filters.phoneNumber,
      emailId: filters.emailId,
    }),
    "admin-orders.csv",
  );
}
