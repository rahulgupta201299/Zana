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
  Slider,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  FormControlLabel,
  Switch,
  Tooltip,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
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

const AMOUNT_SLIDER_MAX = 5000;
const DEFAULT_MIN_AMOUNT = 0;
const DEFAULT_MAX_AMOUNT = AMOUNT_SLIDER_MAX;
const DEFAULT_SORT_BY: AdminOrderListSortBy = "updatedAt";
const DEFAULT_SORT_ORDER: AdminOrderListSortOrder = "desc";

const NULL_PLACEHOLDER = "—";
const UNAVAILABLE_PRODUCT_LABEL = "Product unavailable";

const TABLE_COL_SPAN = 10;

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

function minIsoDate(a: string, b: string): string {
  return a <= b ? a : b;
}

function formatDateTime(iso: string | null | undefined): string {
  if (!iso || !iso.trim()) return NULL_PLACEHOLDER;
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
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
  const orderDateDisplay = formatDateTime(order.orderDate ?? null);
  const updatedDisplay = formatDateTime(order.updatedAt ?? null);

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
        <TableCell>{(order.paymentStatus ?? "").trim() || NULL_PLACEHOLDER}</TableCell>
        <TableCell>{(order.orderStatus ?? "").trim() || NULL_PLACEHOLDER}</TableCell>
        <TableCell>{orderDateDisplay}</TableCell>
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
                  <Typography variant="caption" color="text.secondary">Razorpay order ID</Typography>
                  <Typography variant="body2" sx={{ wordBreak: "break-all" }}>{razorpayOrderId}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Razorpay payment ID</Typography>
                  <Typography variant="body2" sx={{ wordBreak: "break-all" }}>{razorpayPaymentId}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Last updated</Typography>
                  <Typography variant="body2">{updatedDisplay}</Typography>
                </Box>
              </Stack>

              <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
                Line items
              </Typography>
              <Table size="small" aria-label="order line items">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
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
                      <TableCell colSpan={4} align="center">No items</TableCell>
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
                          <TableCell>{formatDateTime(h.timestamp)}</TableCell>
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

type AppliedAmount = { min: number; max: number };

function parseAdminOrderListResponse(raw: unknown): {
  orders: AdminOrderListRecord[];
  pagination: AdminOrderListPagination;
} {
  const body = (raw && typeof raw === "object" ? raw : {}) as {
    success?: boolean;
    message?: string;
    data?: unknown;
  };
  if (body.success === false) {
    throw new Error(body.message?.trim() || "API request failed");
  }
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
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amountRange, setAmountRange] = useState<[number, number]>([
    DEFAULT_MIN_AMOUNT,
    DEFAULT_MAX_AMOUNT,
  ]);
  const [amount5000AndAbove, setAmount5000AndAbove] = useState(false);
  const [sortBy, setSortBy] = useState<AdminOrderListSortBy>(DEFAULT_SORT_BY);
  const [sortOrder, setSortOrder] = useState<AdminOrderListSortOrder>(DEFAULT_SORT_ORDER);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const [appliedStartDate, setAppliedStartDate] = useState("");
  const [appliedEndDate, setAppliedEndDate] = useState("");
  const [appliedAmount, setAppliedAmount] = useState<AppliedAmount>({
    min: DEFAULT_MIN_AMOUNT,
    max: DEFAULT_MAX_AMOUNT,
  });
  const [appliedAmount5000AndAbove, setAppliedAmount5000AndAbove] = useState(false);
  const [appliedSortBy, setAppliedSortBy] = useState<AdminOrderListSortBy>(DEFAULT_SORT_BY);
  const [appliedSortOrder, setAppliedSortOrder] = useState<AdminOrderListSortOrder>(DEFAULT_SORT_ORDER);
  const [appliedPaymentMethod, setAppliedPaymentMethod] = useState("");
  const [appliedPaymentStatus, setAppliedPaymentStatus] = useState("");
  const [appliedOrderStatus, setAppliedOrderStatus] = useState("");

  const load = useCallback(
    async (apiPage: number, limit: number) => {
      const filters: AdminOrderListFilters = {
        page: apiPage,
        limit,
        startDate: appliedStartDate || undefined,
        endDate: appliedEndDate || undefined,
        sortBy: appliedSortBy,
        sortOrder: appliedSortOrder,
        paymentMethod: appliedPaymentMethod || undefined,
        paymentStatus: appliedPaymentStatus || undefined,
        orderStatus: appliedOrderStatus || undefined,
        ...(appliedAmount5000AndAbove
          ? { minAmount: AMOUNT_SLIDER_MAX }
          : {
              minAmount: appliedAmount.min,
              maxAmount: appliedAmount.max,
            }),
      };
      setLoading(true);
      setError(null);
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
      appliedAmount,
      appliedAmount5000AndAbove,
      appliedEndDate,
      appliedStartDate,
      appliedSortBy,
      appliedSortOrder,
      appliedPaymentMethod,
      appliedPaymentStatus,
      appliedOrderStatus,
    ],
  );

  useEffect(() => {
    void load(1, rowsPerPage);
  }, [load, rowsPerPage]);

  const handleApplyFilters = () => {
    setAppliedStartDate(startDate);
    setAppliedEndDate(endDate);
    setAppliedAmount({ min: amountRange[0], max: amountRange[1] });
    setAppliedAmount5000AndAbove(amount5000AndAbove);
    setAppliedSortBy(sortBy);
    setAppliedSortOrder(sortOrder);
    setAppliedPaymentMethod(paymentMethod);
    setAppliedPaymentStatus(paymentStatus);
    setAppliedOrderStatus(orderStatus);
  };

  const handleClearFilters = () => {
    setStartDate("");
    setEndDate("");
    setAmountRange([DEFAULT_MIN_AMOUNT, DEFAULT_MAX_AMOUNT]);
    setAmount5000AndAbove(false);
    setPaymentMethod("");
    setPaymentStatus("");
    setOrderStatus("");
    setAppliedStartDate("");
    setAppliedEndDate("");
    setAppliedAmount({ min: DEFAULT_MIN_AMOUNT, max: DEFAULT_MAX_AMOUNT });
    setAppliedAmount5000AndAbove(false);
    setSortBy(DEFAULT_SORT_BY);
    setSortOrder(DEFAULT_SORT_ORDER);
    setAppliedSortBy(DEFAULT_SORT_BY);
    setAppliedSortOrder(DEFAULT_SORT_ORDER);
    setAppliedPaymentMethod("");
    setAppliedPaymentStatus("");
    setAppliedOrderStatus("");
  };

  const isApplyDisabled =
    startDate === appliedStartDate
    && endDate === appliedEndDate
    && amountRange[0] === appliedAmount.min
    && amountRange[1] === appliedAmount.max
    && amount5000AndAbove === appliedAmount5000AndAbove
    && sortBy === appliedSortBy
    && sortOrder === appliedSortOrder
    && paymentMethod === appliedPaymentMethod
    && paymentStatus === appliedPaymentStatus
    && orderStatus === appliedOrderStatus;

  const isClearDisabled =
    startDate === ""
    && endDate === ""
    && amountRange[0] === DEFAULT_MIN_AMOUNT
    && amountRange[1] === DEFAULT_MAX_AMOUNT
    && !amount5000AndAbove
    && paymentMethod === ""
    && paymentStatus === ""
    && orderStatus === ""
    && appliedStartDate === ""
    && appliedEndDate === ""
    && appliedAmount.min === DEFAULT_MIN_AMOUNT
    && appliedAmount.max === DEFAULT_MAX_AMOUNT
    && !appliedAmount5000AndAbove
    && appliedPaymentMethod === ""
    && appliedPaymentStatus === ""
    && appliedOrderStatus === ""
    && sortBy === DEFAULT_SORT_BY
    && sortOrder === DEFAULT_SORT_ORDER
    && appliedSortBy === DEFAULT_SORT_BY
    && appliedSortOrder === DEFAULT_SORT_ORDER;

  const amountRangeControlsDisabled = amount5000AndAbove;

  const clampAmountPair = (lo: number, hi: number): [number, number] => {
    let a = Math.min(Math.max(0, lo), AMOUNT_SLIDER_MAX);
    let b = Math.min(Math.max(0, hi), AMOUNT_SLIDER_MAX);
    if (a > b) {
      [a, b] = [b, a];
    }
    return [a, b];
  };

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
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="admin-order-payment-method">Payment method</InputLabel>
              <Select
                labelId="admin-order-payment-method"
                label="Payment method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="cod">COD</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel id="admin-order-payment-status">Payment status</InputLabel>
              <Select
                labelId="admin-order-payment-status"
                label="Payment status"
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="failed">Failed</MenuItem>
                <MenuItem value="refunded">Refunded</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="admin-order-order-status">Order status</InputLabel>
              <Select
                labelId="admin-order-order-status"
                label="Order status"
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="placed">Placed</MenuItem>
                <MenuItem value="processing">Processing</MenuItem>
                <MenuItem value="shipped">Shipped</MenuItem>
                <MenuItem value="delivered">Delivered</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
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
                <MenuItem value="updatedAt">Updated at</MenuItem>
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

          <Box sx={{ px: 1 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Total amount range
            </Typography>
            <FormControlLabel
              sx={{ mb: 1, display: "flex", alignItems: "center" }}
              control={(
                <Switch
                  checked={amount5000AndAbove}
                  onChange={(_e, checked) => setAmount5000AndAbove(checked)}
                  color="primary"
                  inputProps={{ "aria-label": "₹5,000 and above" }}
                />
              )}
              label="₹5,000 and above"
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ sm: "center" }}
              sx={{
                opacity: amountRangeControlsDisabled ? 0.45 : 1,
                pointerEvents: amountRangeControlsDisabled ? "none" : "auto",
              }}
            >
              <Box sx={{ flex: "0 0 auto", width: { xs: "100%", sm: 200 }, maxWidth: 220 }}>
                <Slider
                  size="small"
                  value={amountRange}
                  onChange={(_e, value) => {
                    const v = value as number[];
                    setAmountRange(clampAmountPair(v[0], v[1]));
                  }}
                  valueLabelDisplay="auto"
                  min={0}
                  max={AMOUNT_SLIDER_MAX}
                  step={1000}
                  disableSwap
                  disabled={amountRangeControlsDisabled}
                />
              </Box>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ flex: "1 1 auto", minWidth: 0 }}>
                <TextField
                  label="Min amount"
                  type="number"
                  size="small"
                  value={amountRange[0]}
                  onChange={(e) => {
                    const n = e.target.value === "" ? 0 : Number(e.target.value);
                    setAmountRange(clampAmountPair(n, amountRange[1]));
                  }}
                  sx={{ width: 140 }}
                  disabled={amountRangeControlsDisabled}
                />
                <TextField
                  label="Max amount"
                  type="number"
                  size="small"
                  value={amountRange[1]}
                  onChange={(e) => {
                    const n = e.target.value === "" ? DEFAULT_MAX_AMOUNT : Number(e.target.value);
                    setAmountRange(clampAmountPair(amountRange[0], n));
                  }}
                  sx={{ width: 140 }}
                  disabled={amountRangeControlsDisabled}
                />
              </Stack>
            </Stack>
            {amount5000AndAbove && (
              <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
                Fetches orders with total amount at least ₹5,000 (no upper limit). Apply filters to run the query.
              </Typography>
            )}
          </Box>

          <Stack direction="row" spacing={2}>
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
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Payment status</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Order status</TableCell>
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
