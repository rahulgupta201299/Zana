import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Button,
  CircularProgress,
  IconButton,
  Collapse,
  Divider,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Tooltip,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { formatUtcToIstDateTime } from "../Utils/DateUtils";
import { getAdminApiBody } from "../Utils/ApiUtils";
import {
  downloadAdminOrderListCsv,
  getAdminOrderList,
  AdminOrderListFilters,
  AdminOrderListRecord,
  AdminOrderListLineItem,
  AdminOrderListProduct,
  AdminOrderListAddress,
  AdminOrderListSortBy,
  AdminOrderListSortOrder,
  AdminOrderListPagination,
  AdminOrderStatusHistoryEntry,
} from "../Configurations/AdminOrderListApi";
import {
  AdminIsdCode,
  getAdminIsdCodes,
} from "../Configurations/AdminIsdCodeApi";
import IsdCodeAutocomplete from "../Components/IsdCodeAutocomplete";

const DEFAULT_SORT_BY: AdminOrderListSortBy = "orderDate";
const DEFAULT_SORT_ORDER: AdminOrderListSortOrder = "desc";

const NULL_PLACEHOLDER = "—";
const UNAVAILABLE_PRODUCT_LABEL = "Product unavailable";

const TABLE_COL_SPAN = 10;

type PaymentTypeFilter = "all" | "paid" | "cod";
type DateFilter = "custom" | "today" | "yesterday" | "1m" | "3m" | "6m" | "1y";

const DEFAULT_DATE_FILTER: DateFilter = "custom";
const DEFAULT_ISD_CODE = "+91";

function normalizeIsdCode(isd: string): string {
  const trimmed = isd.trim();
  if (!trimmed) return DEFAULT_ISD_CODE;
  return trimmed.startsWith("+") ? trimmed : `+${trimmed}`;
}

function buildPhoneFilter(isdCode: string, phoneNumber: string): string {
  const phone = phoneNumber.trim();
  if (!phone) return "";
  return `${normalizeIsdCode(isdCode)}-${phone}`;
}

function productDisplayName(item: AdminOrderListLineItem): string {
  const p = item.product ?? null;
  if (p == null) return UNAVAILABLE_PRODUCT_LABEL;
  if (typeof p.name === "string" && p.name.trim()) return p.name;
  const bikeName = p["Bike model name"];
  if (typeof bikeName === "string" && bikeName.trim()) return bikeName;
  return "Unknown Product";
}

function formatShippingAddress(addr: AdminOrderListAddress | null | undefined): string {
  if (addr == null) return "";
  const line3 = [addr.city, addr.state, addr.postalCode].filter((s) => typeof s === "string" && s.trim()).join(", ");
  const lines = [addr.fullName, addr.phone, addr.addressLine1, addr.addressLine2, line3, addr.country]
    .map((s) => (typeof s === "string" ? s.trim() : ""))
    .filter(Boolean);
  return lines.join("\n");
}

function productImageUrl(product: AdminOrderListProduct | null): string | null {
  if (product === null) return null;
  if (typeof product.imageUrl === "string" && product.imageUrl.trim()) {
    return product.imageUrl;
  }
  const imgs = product.images;
  if (Array.isArray(imgs)) {
    const first = imgs.find((u) => typeof u === "string" && u.trim());
    if (typeof first === "string") return first;
  }
  return null;
}

function formatLocalIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(d: Date, days: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + days);
  return next;
}

function addMonthsClamped(d: Date, months: number): Date {
  const next = new Date(d);
  const originalDay = next.getDate();
  next.setDate(1);
  next.setMonth(next.getMonth() + months);
  const lastDayOfTargetMonth = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
  next.setDate(Math.min(originalDay, lastDayOfTargetMonth));
  return next;
}

function resolveDateFilterRange(filter: DateFilter, customStartDate: string, customEndDate: string) {
  const today = new Date();
  const todayIso = formatLocalIsoDate(today);
  if (filter === "custom") {
    return { startDate: customStartDate, endDate: customEndDate };
  }
  if (filter === "today") {
    return { startDate: todayIso, endDate: todayIso };
  }
  if (filter === "yesterday") {
    const yesterdayIso = formatLocalIsoDate(addDays(today, -1));
    return { startDate: yesterdayIso, endDate: yesterdayIso };
  }
  if (filter === "1m") {
    return { startDate: formatLocalIsoDate(addMonthsClamped(today, -1)), endDate: todayIso };
  }
  if (filter === "3m") {
    return { startDate: formatLocalIsoDate(addMonthsClamped(today, -3)), endDate: todayIso };
  }
  if (filter === "6m") {
    return { startDate: formatLocalIsoDate(addMonthsClamped(today, -6)), endDate: todayIso };
  }
  return { startDate: formatLocalIsoDate(addMonthsClamped(today, -12)), endDate: todayIso };
}

function minIsoDate(a: string, b: string): string {
  return a <= b ? a : b;
}

function ProductThumbCell(props: { item: AdminOrderListLineItem }) {
  const { item } = props;
  const src = productImageUrl(item.product);
  const name = productDisplayName(item);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {src ? (
        <img
          src={src}
          alt={name}
          style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }}
        />
      ) : (
        <Box
          aria-hidden
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            bgcolor: "action.hover",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            —
          </Typography>
        </Box>
      )}
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
}

function Row(props: {
  order: AdminOrderListRecord;
  expanded: boolean;
  onToggleExpand: () => void;
}) {
  const { order, expanded, onToggleExpand } = props;

  const items = order.items ?? [];
  const symbol = order.currencySymbol ?? "";
  const formattedShipping = formatShippingAddress(order.shippingAddress ?? null);
  const shippingAddressText = formattedShipping.length > 0 ? formattedShipping : NULL_PLACEHOLDER;

  const subtotal = order.subtotal ?? 0;
  const totalAmount = order.totalAmount ?? 0;
  const taxAmount = order.taxAmount ?? 0;
  const shippingCost = order.shippingCost ?? 0;
  const discountAmount = order.discountAmount ?? 0;
  const codCharges = order.codCharges ?? 0;
  const advancePaid = order.advancePaid ?? 0;

  const razorpayOrderId = (order.razorpayOrderId ?? "").trim() || NULL_PLACEHOLDER;
  const razorpayPaymentId = (order.razorpayPaymentId ?? "").trim() || NULL_PLACEHOLDER;

  const history = order.statusHistory ?? [];

  return (
    <React.Fragment>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={onToggleExpand}>
            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {(order.orderNumber ?? "").trim() || NULL_PLACEHOLDER}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {(order.phoneNumber ?? "").trim() ? (order.phoneNumber ?? "") : "N/A"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {order.emailId === null || order.emailId === undefined || order.emailId === ""
              ? NULL_PLACEHOLDER
              : order.emailId}
          </Typography>
        </TableCell>
        <TableCell>{items.length}</TableCell>
        <TableCell>
          {symbol}
          {subtotal}
        </TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>
          {symbol}
          {totalAmount}
        </TableCell>
        <TableCell>{(order.paymentMethod ?? "").trim() || NULL_PLACEHOLDER}</TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
            {razorpayOrderId}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
            {razorpayPaymentId}
          </Typography>
        </TableCell>
        <TableCell>
          {formatUtcToIstDateTime(order.orderDate ?? null, NULL_PLACEHOLDER)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={TABLE_COL_SPAN}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2, p: 2, bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #e2e8f0" }}>
              <Typography variant="subtitle1" gutterBottom component="div" fontWeight="bold">
                Order details
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                <Box>
                  <Typography variant="caption" color="text.secondary">Last updated</Typography>
                  <Typography variant="body2">
                    {formatUtcToIstDateTime(order.updatedAt ?? null, NULL_PLACEHOLDER)}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
                Line items
              </Typography>
              <Table size="small" aria-label="order line items">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Product code</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.length > 0 ? (
                    items.map((item, lineIdx) => (
                      <TableRow key={item._id ?? `line-${lineIdx}`}>
                        <TableCell component="th" scope="row">
                          <ProductThumbCell item={item} />
                        </TableCell>
                        <TableCell>{item.product?.productCode || NULL_PLACEHOLDER}</TableCell>
                        <TableCell>
                          {item.currencySymbol ?? symbol}
                          {item.price ?? 0}
                        </TableCell>
                        <TableCell>{item.quantity ?? 0}</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          {item.currencySymbol ?? symbol}
                          {item.totalPrice ?? 0}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">No items</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <Divider sx={{ my: 2 }} />
              <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                Shipping address
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 2 }}>
                {shippingAddressText}
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 2 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">Tax</Typography>
                  <Typography variant="body2">{symbol}{taxAmount}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Shipping</Typography>
                  <Typography variant="body2">{symbol}{shippingCost}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Discount</Typography>
                  <Typography variant="body2" color="error">-{symbol}{discountAmount}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">COD charges</Typography>
                  <Typography variant="body2">{symbol}{codCharges}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Advance paid</Typography>
                  <Typography variant="body2">{symbol}{advancePaid}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Coupon</Typography>
                  <Typography variant="body2">
                    {(order.couponCode ?? "").trim() || NULL_PLACEHOLDER}
                  </Typography>
                </Box>
              </Box>

              {history.length > 0 && (
                <>
                  <Typography variant="subtitle2" gutterBottom>Status history</Typography>
                  <Table size="small" aria-label="status history">
                    <TableHead>
                      <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Notes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {history.map((h: AdminOrderStatusHistoryEntry, i: number) => (
                        <TableRow key={`${h.status ?? "s"}-${h.timestamp ?? i}`}>
                          <TableCell>{h.status ?? NULL_PLACEHOLDER}</TableCell>
                          <TableCell>
                            {formatUtcToIstDateTime(h.timestamp, NULL_PLACEHOLDER)}
                          </TableCell>
                          <TableCell>{(h.notes ?? "").trim() || NULL_PLACEHOLDER}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function parseAdminOrderListResponse(raw: unknown): {
  orders: AdminOrderListRecord[];
  pagination: AdminOrderListPagination;
} {
  const body = getAdminApiBody(raw);
  const data = (
    body.data && typeof body.data === "object" ? body.data : body
  ) as Record<string, unknown>;
  const orders = Array.isArray(data.orders) ? data.orders : [];
  const pagination = (
    data.pagination && typeof data.pagination === "object" ? data.pagination : {}
  ) as AdminOrderListPagination;
  return {
    orders: orders as AdminOrderListRecord[],
    pagination,
  };
}

export default function AdminOrderList() {
  const [orders, setOrders] = useState<AdminOrderListRecord[]>([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [dateFilter, setDateFilter] = useState<DateFilter>(DEFAULT_DATE_FILTER);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isdCodes, setIsdCodes] = useState<AdminIsdCode[]>([]);
  const [isdCode, setIsdCode] = useState(DEFAULT_ISD_CODE);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [sortBy, setSortBy] = useState<AdminOrderListSortBy>(DEFAULT_SORT_BY);
  const [sortOrder, setSortOrder] = useState<AdminOrderListSortOrder>(DEFAULT_SORT_ORDER);

  const [paymentType, setPaymentType] = useState<PaymentTypeFilter>("all");

  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const [appliedDateFilter, setAppliedDateFilter] = useState<DateFilter>(DEFAULT_DATE_FILTER);
  const [appliedStartDate, setAppliedStartDate] = useState("");
  const [appliedEndDate, setAppliedEndDate] = useState("");
  const [appliedIsdCode, setAppliedIsdCode] = useState(DEFAULT_ISD_CODE);
  const [appliedPhoneNumber, setAppliedPhoneNumber] = useState("");
  const [appliedEmailId, setAppliedEmailId] = useState("");
  const [appliedSortBy, setAppliedSortBy] = useState<AdminOrderListSortBy>(DEFAULT_SORT_BY);
  const [appliedSortOrder, setAppliedSortOrder] = useState<AdminOrderListSortOrder>(DEFAULT_SORT_ORDER);
  const [appliedPaymentType, setAppliedPaymentType] = useState<PaymentTypeFilter>("all");

  const load = useCallback(
    async (apiPage: number, limit: number) => {
      const filters: AdminOrderListFilters = {
        page: apiPage,
        limit,
        startDate: appliedStartDate || undefined,
        endDate: appliedEndDate || undefined,
        sortBy: appliedSortBy,
        sortOrder: appliedSortOrder,
        paymentMethod: appliedPaymentType === "cod" ? "cod" : undefined,
        paymentStatus: appliedPaymentType === "paid" ? "paid" : undefined,
        phoneNumber: buildPhoneFilter(appliedIsdCode, appliedPhoneNumber) || undefined,
        emailId: appliedEmailId.trim() || undefined,
      };
      setLoading(true);
      setError(null);
      setExpandedOrderId(null);
      try {
        const raw = await getAdminOrderList(filters);
        const { orders: nextOrders, pagination } = parseAdminOrderListResponse(raw);
        setOrders(nextOrders);
        setTotalOrders(pagination.totalOrders ?? 0);
        const serverPage = Math.max(1, pagination.currentPage ?? apiPage);
        setPage(serverPage - 1);
      } catch (e: unknown) {
        setOrders([]);
        setTotalOrders(0);
        const message = e instanceof Error ? e.message : "Failed to load orders.";
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [
      appliedEndDate,
      appliedStartDate,
      appliedSortBy,
      appliedSortOrder,
      appliedPaymentType,
      appliedIsdCode,
      appliedPhoneNumber,
      appliedEmailId,
    ],
  );

  useEffect(() => {
    void load(1, rowsPerPage);
  }, [load, rowsPerPage]);

  const getAppliedDownloadFilters = () => ({
    startDate: appliedStartDate || undefined,
    endDate: appliedEndDate || undefined,
    sortBy: appliedSortBy,
    sortOrder: appliedSortOrder,
    paymentMethod: appliedPaymentType === "cod" ? "cod" : undefined,
    paymentStatus: appliedPaymentType === "paid" ? "paid" : undefined,
    phoneNumber: buildPhoneFilter(appliedIsdCode, appliedPhoneNumber) || undefined,
    emailId: appliedEmailId.trim() || undefined,
  });

  const handleDownloadCsv = async () => {
    setDownloadLoading(true);
    setError(null);
    try {
      await downloadAdminOrderListCsv(getAppliedDownloadFilters());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to download orders CSV.");
    } finally {
      setDownloadLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    getAdminIsdCodes()
      .then((codes) => {
        if (!active) return;
        setIsdCodes(codes);
        const india = codes.find((code) => normalizeIsdCode(code.isd) === DEFAULT_ISD_CODE);
        if (india) {
          setIsdCode(normalizeIsdCode(india.isd));
          setAppliedIsdCode(normalizeIsdCode(india.isd));
        }
      })
      .catch(() => {
        if (active) setIsdCodes([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleApplyFilters = () => {
    const nextDateRange = resolveDateFilterRange(dateFilter, startDate, endDate);
    setAppliedDateFilter(dateFilter);
    setAppliedStartDate(nextDateRange.startDate);
    setAppliedEndDate(nextDateRange.endDate);
    setAppliedIsdCode(isdCode);
    setAppliedPhoneNumber(phoneNumber.trim());
    setAppliedEmailId(emailId.trim());
    setAppliedSortBy(sortBy);
    setAppliedSortOrder(sortOrder);
    setAppliedPaymentType(paymentType);
  };

  const handleClearFilters = () => {
    setDateFilter(DEFAULT_DATE_FILTER);
    setStartDate("");
    setEndDate("");
    setIsdCode(DEFAULT_ISD_CODE);
    setPhoneNumber("");
    setEmailId("");
    setPaymentType("all");
    setAppliedDateFilter(DEFAULT_DATE_FILTER);
    setAppliedStartDate("");
    setAppliedEndDate("");
    setAppliedIsdCode(DEFAULT_ISD_CODE);
    setAppliedPhoneNumber("");
    setAppliedEmailId("");
    setSortBy(DEFAULT_SORT_BY);
    setSortOrder(DEFAULT_SORT_ORDER);
    setAppliedSortBy(DEFAULT_SORT_BY);
    setAppliedSortOrder(DEFAULT_SORT_ORDER);
    setAppliedPaymentType("all");
  };

  const isCustomDateFilter = dateFilter === "custom";
  const isDateFilterUnchanged =
    dateFilter === appliedDateFilter
    && (dateFilter !== "custom" || (startDate === appliedStartDate && endDate === appliedEndDate));

  const isApplyDisabled =
    isDateFilterUnchanged
    && isdCode === appliedIsdCode
    && phoneNumber.trim() === appliedPhoneNumber
    && emailId.trim() === appliedEmailId
    && sortBy === appliedSortBy
    && sortOrder === appliedSortOrder
    && paymentType === appliedPaymentType;

  const isClearDisabled =
    dateFilter === DEFAULT_DATE_FILTER
    && startDate === ""
    && endDate === ""
    && isdCode === DEFAULT_ISD_CODE
    && phoneNumber === ""
    && emailId === ""
    && paymentType === "all"
    && appliedDateFilter === DEFAULT_DATE_FILTER
    && appliedStartDate === ""
    && appliedEndDate === ""
    && appliedIsdCode === DEFAULT_ISD_CODE
    && appliedPhoneNumber === ""
    && appliedEmailId === ""
    && appliedPaymentType === "all"
    && sortBy === DEFAULT_SORT_BY
    && sortOrder === DEFAULT_SORT_ORDER
    && appliedSortBy === DEFAULT_SORT_BY
    && appliedSortOrder === DEFAULT_SORT_ORDER;

  const todayIso = formatLocalIsoDate(new Date());
  const startDateInputMax = endDate ? minIsoDate(todayIso, endDate) : todayIso;
  const endDateInputMin = startDate || undefined;

  const toggleExpandedRow = useCallback((rowId: string) => {
    setExpandedOrderId((prev) => (prev === rowId ? null : rowId));
  }, []);

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#111827" }}>
        Order list
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
        <Stack spacing={2}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} flexWrap="wrap" useFlexGap alignItems="center">
            <IsdCodeAutocomplete
              id="admin-order-isd-code"
              options={isdCodes}
              value={isdCode}
              onChange={setIsdCode}
            />
            <TextField
              label="Phone number"
              variant="outlined"
              size="small"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ minWidth: 180 }}
            />
            <TextField
              label="Email ID"
              variant="outlined"
              size="small"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              sx={{ minWidth: 240 }}
            />
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel id="admin-order-date-filter">Date filter</InputLabel>
              <Select<DateFilter>
                labelId="admin-order-date-filter"
                label="Date filter"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value as DateFilter)}
              >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="yesterday">Yesterday</MenuItem>
                <MenuItem value="1m">1 month</MenuItem>
                <MenuItem value="3m">3 months</MenuItem>
                <MenuItem value="6m">6 months</MenuItem>
                <MenuItem value="1y">1 year</MenuItem>
                <MenuItem value="custom">Custom date range</MenuItem>
              </Select>
            </FormControl>
            {isCustomDateFilter && (
              <>
                <TextField
                  label="Start date"
                  type="date"
                  variant="outlined"
                  size="small"
                  value={startDate}
                  onChange={(e) => {
                    const next = e.target.value;
                    setStartDate(next);
                    if (next && endDate && next > endDate) {
                      setEndDate(next);
                    }
                  }}
                  InputLabelProps={{ shrink: true }}
                  slotProps={{
                    htmlInput: {
                      max: startDateInputMax,
                    },
                  }}
                  sx={{ minWidth: 200 }}
                />
                <TextField
                  label="End date"
                  type="date"
                  variant="outlined"
                  size="small"
                  value={endDate}
                  onChange={(e) => {
                    const next = e.target.value;
                    const capped = next && next > todayIso ? todayIso : next;
                    setEndDate(capped);
                    if (capped && startDate && capped < startDate) {
                      setStartDate(capped);
                    }
                  }}
                  InputLabelProps={{ shrink: true }}
                  slotProps={{
                    htmlInput: {
                      max: todayIso,
                      ...(endDateInputMin ? { min: endDateInputMin } : {}),
                    },
                  }}
                  sx={{ minWidth: 200 }}
                />
              </>
            )}
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel id="admin-order-payment-type">Payment type</InputLabel>
              <Select<PaymentTypeFilter>
                labelId="admin-order-payment-type"
                label="Payment type"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value as PaymentTypeFilter)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="cod">COD</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} flexWrap="wrap" useFlexGap alignItems="center">
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel id="admin-order-sort-by">Sort by</InputLabel>
              <Select<AdminOrderListSortBy>
                labelId="admin-order-sort-by"
                label="Sort by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as AdminOrderListSortBy)}
              >
                 <MenuItem value="orderDate">Order Date</MenuItem>
                <MenuItem value="updatedAt">Last modified</MenuItem>
                <MenuItem value="totalAmount">Total amount</MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" spacing={0.5} alignItems="center" aria-label="Sort direction">
              <Tooltip title="Ascending" enterDelay={300}>
                <IconButton
                  size="small"
                  color={sortOrder === "asc" ? "primary" : "default"}
                  aria-label="Sort ascending"
                  onClick={() => setSortOrder("asc")}
                >
                  <ArrowUpwardIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Descending" enterDelay={300}>
                <IconButton
                  size="small"
                  color={sortOrder === "desc" ? "primary" : "default"}
                  aria-label="Sort descending"
                  onClick={() => setSortOrder("desc")}
                >
                  <ArrowDownwardIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          {/* Amount min/max filter hidden per admin request. */}

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button
              variant="contained"
              onClick={handleApplyFilters}
              disabled={isApplyDisabled}
              sx={{
                bgcolor: isApplyDisabled ? "action.disabledBackground" : "#e10600",
                "&:hover": { bgcolor: "#c00500" },
              }}
            >
              Apply filters
            </Button>
            <Button variant="outlined" onClick={handleClearFilters} disabled={isClearDisabled} color="inherit">
              Clear
            </Button>
            <Button
              variant="outlined"
              onClick={handleDownloadCsv}
              disabled={downloadLoading}
              color="inherit"
            >
              {downloadLoading ? "Downloading..." : "Download CSV"}
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: 2 }}>
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader size="small" aria-label="admin orders table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 48, bgcolor: "#f1f5f9" }} />
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Order #</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>User</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Items</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Subtotal</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Total</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Payment method</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Razorpay order ID</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Razorpay payment ID</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Order date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={TABLE_COL_SPAN} align="center" sx={{ py: 3 }}>
                    <CircularProgress size={30} />
                  </TableCell>
                </TableRow>
              ) : orders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={TABLE_COL_SPAN} align="center" sx={{ py: 3 }}>
                    <Typography color="text.secondary">No orders found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order, idx) => {
                  const rowId = order._id ?? `order-${idx}`;
                  return (
                    <Row
                      key={rowId}
                      order={order}
                      expanded={expandedOrderId === rowId}
                      onToggleExpand={() => {
                        toggleExpandedRow(rowId);
                      }}
                    />
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={totalOrders}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_e, newPage) => {
            void load(newPage + 1, rowsPerPage);
          }}
          onRowsPerPageChange={(e) => {
            const newLimit = parseInt(e.target.value, 10);
            setRowsPerPage(newLimit);
          }}
        />
      </Paper>
    </Box>
  );
}
