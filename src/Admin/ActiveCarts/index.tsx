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
import {
  downloadAdminActiveCartsCsv,
  getAdminActiveCarts,
  AdminActiveCartFilters,
  AdminActiveCartRecord,
  AdminActiveCartLineItem,
  AdminActiveCartProduct,
  AdminActiveCartAddress,
  AdminActiveCartSortBy,
  AdminActiveCartSortOrder,
  AdminActiveCartPagination,
  parseAdminActiveCartsResponse,
} from "../Configurations/ActiveCartApi";
import {
  AdminIsdCode,
  getAdminIsdCodes,
} from "../Configurations/AdminIsdCodeApi";
import IsdCodeAutocomplete from "../Components/IsdCodeAutocomplete";

const DEFAULT_SORT_BY: AdminActiveCartSortBy = "updatedAt";
const DEFAULT_SORT_ORDER: AdminActiveCartSortOrder = "desc";

const NULL_EMAIL_PLACEHOLDER = "—";
const UNAVAILABLE_PRODUCT_LABEL = "Product unavailable";
const TABLE_COL_SPAN = 6;
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

function productDisplayName(item: AdminActiveCartLineItem): string {
  const p = item.product ?? null;
  if (p == null) return UNAVAILABLE_PRODUCT_LABEL;
  if (typeof p.name === "string" && p.name.trim()) return p.name;
  const bikeName = p["Bike model name"];
  if (typeof bikeName === "string" && bikeName.trim()) return bikeName;
  return "Unknown Product";
}

function formatShippingAddress(addr: AdminActiveCartAddress | null | undefined): string {
  if (addr == null) return "";
  const line3 = [addr.city, addr.state, addr.postalCode].filter((s) => typeof s === "string" && s.trim()).join(", ");
  const lines = [addr.fullName, addr.phone, addr.addressLine1, addr.addressLine2, line3, addr.country]
    .map((s) => (typeof s === "string" ? s.trim() : ""))
    .filter(Boolean);
  return lines.join("\n");
}

function appliedCouponDisplay(cart: AdminActiveCartRecord): string {
  const name = (cart.appliedCoupon ?? "").trim();
  const code = (cart.couponCode ?? "").trim();
  if (!name && !code) return "";
  if (name && code && name !== code) return `${name} (${code})`;
  return name || code;
}

function productImageUrl(product: AdminActiveCartProduct | null): string | null {
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

/** Local calendar date as YYYY-MM-DD for `<input type="date">` min/max. */
function formatLocalIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Lexicographic min works for ISO date strings (YYYY-MM-DD). */
function minIsoDate(a: string, b: string): string {
  return a <= b ? a : b;
}

function ProductThumbCell(props: { item: AdminActiveCartLineItem }) {
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
  cart: AdminActiveCartRecord;
  expanded: boolean;
  onToggleExpand: () => void;
}) {
  const { cart, expanded, onToggleExpand } = props;

  const items = cart.items ?? [];

  const symbol = cart.currencySymbol ?? "";

  const formattedShipping = formatShippingAddress(cart.shippingAddress ?? null);
  const shippingAddressText = formattedShipping.length > 0 ? formattedShipping : NULL_EMAIL_PLACEHOLDER;
  const couponLine = appliedCouponDisplay(cart);
  const appliedCouponText = couponLine.length > 0 ? couponLine : NULL_EMAIL_PLACEHOLDER;

  const subtotal = cart.subtotal ?? 0;
  const totalAmount = cart.totalAmount ?? 0;
  const taxAmount = cart.taxAmount ?? 0;
  const shippingCost = cart.shippingCost ?? 0;
  const discountAmount = cart.discountAmount ?? 0;
  const codCharges = cart.codCharges ?? 0;

  return (
    <React.Fragment>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={onToggleExpand}
          >
            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {(cart.phoneNumber ?? "").trim() ? (cart.phoneNumber ?? "") : "N/A"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {cart.emailId === null || cart.emailId === undefined || cart.emailId === ""
              ? NULL_EMAIL_PLACEHOLDER
              : cart.emailId}
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
        <TableCell>
          {formatUtcToIstDateTime(cart.updatedAt ?? null, NULL_EMAIL_PLACEHOLDER)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={TABLE_COL_SPAN}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2, p: 2, bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #e2e8f0" }}>
              <Typography variant="subtitle1" gutterBottom component="div" fontWeight="bold">
                Cart Items Details
              </Typography>
              <Table size="small" aria-label="cart items">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product code</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.length > 0 ? (
                    items.map((item, lineIdx) => (
                      <TableRow key={item._id ?? `line-${lineIdx}`}>
                        <TableCell component="th" scope="row">
                          <ProductThumbCell item={item} />
                        </TableCell>
                        <TableCell>{item.product?.productCode || NULL_EMAIL_PLACEHOLDER}</TableCell>
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
                      <TableCell colSpan={5} align="center">No items found</TableCell>
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
              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">Tax Amount:</Typography>
                  <Typography variant="body2">
                    {symbol}
                    {taxAmount}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Shipping Cost:</Typography>
                  <Typography variant="body2">
                    {symbol}
                    {shippingCost}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Discount Amount:</Typography>
                  <Typography variant="body2" color="error">
                    -
                    {symbol}
                    {discountAmount}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">COD charges:</Typography>
                  <Typography variant="body2">
                    {symbol}
                    {codCharges}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Applied coupon:</Typography>
                  <Typography variant="body2">{appliedCouponText}</Typography>
                </Box>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ActiveCarts() {
  const [carts, setCarts] = useState<AdminActiveCartRecord[]>([]);
  const [totalCarts, setTotalCarts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isdCodes, setIsdCodes] = useState<AdminIsdCode[]>([]);
  const [isdCode, setIsdCode] = useState(DEFAULT_ISD_CODE);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [sortBy, setSortBy] = useState<AdminActiveCartSortBy>(DEFAULT_SORT_BY);
  const [sortOrder, setSortOrder] = useState<AdminActiveCartSortOrder>(DEFAULT_SORT_ORDER);

  /** At most one expanded cart row (accordion). */
  const [expandedCartId, setExpandedCartId] = useState<string | null>(null);

  const [appliedStartDate, setAppliedStartDate] = useState("");
  const [appliedEndDate, setAppliedEndDate] = useState("");
  const [appliedIsdCode, setAppliedIsdCode] = useState(DEFAULT_ISD_CODE);
  const [appliedPhoneNumber, setAppliedPhoneNumber] = useState("");
  const [appliedEmailId, setAppliedEmailId] = useState("");
  const [appliedSortBy, setAppliedSortBy] = useState<AdminActiveCartSortBy>(DEFAULT_SORT_BY);
  const [appliedSortOrder, setAppliedSortOrder] = useState<AdminActiveCartSortOrder>(DEFAULT_SORT_ORDER);

  const load = useCallback(
    async (apiPage: number, limit: number) => {
      const filters: AdminActiveCartFilters = {
        page: apiPage,
        limit,
        startDate: appliedStartDate || undefined,
        endDate: appliedEndDate || undefined,
        sortBy: appliedSortBy,
        sortOrder: appliedSortOrder,
        phoneNumber: buildPhoneFilter(appliedIsdCode, appliedPhoneNumber) || undefined,
        emailId: appliedEmailId.trim() || undefined,
      };
      setLoading(true);
      setError(null);
      try {
        const raw = await getAdminActiveCarts(filters);
        const { carts: nextCarts, pagination } = parseAdminActiveCartsResponse(raw);
        setCarts(nextCarts);
        setTotalCarts(pagination.totalCarts ?? 0);
        const serverPage = Math.max(1, pagination.currentPage ?? apiPage);
        setPage(serverPage - 1);
      } catch (e: unknown) {
        setCarts([]);
        setTotalCarts(0);
        const message = e instanceof Error ? e.message : "Failed to load active carts.";
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
    phoneNumber: buildPhoneFilter(appliedIsdCode, appliedPhoneNumber) || undefined,
    emailId: appliedEmailId.trim() || undefined,
  });

  const handleDownloadCsv = async () => {
    setDownloadLoading(true);
    setError(null);
    try {
      await downloadAdminActiveCartsCsv(getAppliedDownloadFilters());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to download active carts CSV.");
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
    setAppliedStartDate(startDate);
    setAppliedEndDate(endDate);
    setAppliedIsdCode(isdCode);
    setAppliedPhoneNumber(phoneNumber.trim());
    setAppliedEmailId(emailId.trim());
    setAppliedSortBy(sortBy);
    setAppliedSortOrder(sortOrder);
  };

  const handleClearFilters = () => {
    setStartDate("");
    setEndDate("");
    setIsdCode(DEFAULT_ISD_CODE);
    setPhoneNumber("");
    setEmailId("");
    setAppliedStartDate("");
    setAppliedEndDate("");
    setAppliedIsdCode(DEFAULT_ISD_CODE);
    setAppliedPhoneNumber("");
    setAppliedEmailId("");
    setSortBy(DEFAULT_SORT_BY);
    setSortOrder(DEFAULT_SORT_ORDER);
    setAppliedSortBy(DEFAULT_SORT_BY);
    setAppliedSortOrder(DEFAULT_SORT_ORDER);
  };

  const isApplyDisabled =
    startDate === appliedStartDate
    && endDate === appliedEndDate
    && isdCode === appliedIsdCode
    && phoneNumber.trim() === appliedPhoneNumber
    && emailId.trim() === appliedEmailId
    && sortBy === appliedSortBy
    && sortOrder === appliedSortOrder;

  const isClearDisabled =
    startDate === ""
    && endDate === ""
    && isdCode === DEFAULT_ISD_CODE
    && phoneNumber === ""
    && emailId === ""
    && appliedStartDate === ""
    && appliedEndDate === ""
    && appliedIsdCode === DEFAULT_ISD_CODE
    && appliedPhoneNumber === ""
    && appliedEmailId === ""
    && sortBy === DEFAULT_SORT_BY
    && sortOrder === DEFAULT_SORT_ORDER
    && appliedSortBy === DEFAULT_SORT_BY
    && appliedSortOrder === DEFAULT_SORT_ORDER;

  const todayIso = formatLocalIsoDate(new Date());
  const startDateInputMax = endDate ? minIsoDate(todayIso, endDate) : todayIso;
  const endDateInputMin = startDate || undefined;

  const toggleExpandedRow = useCallback((rowId: string) => {
    setExpandedCartId((prev) => (prev === rowId ? null : rowId));
  }, []);

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#111827" }}>
        Active Carts
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
              id="active-cart-isd-code"
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
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel id="active-cart-sort-by">Sort by</InputLabel>
              <Select<AdminActiveCartSortBy>
                labelId="active-cart-sort-by"
                label="Sort by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as AdminActiveCartSortBy)}
              >
                <MenuItem value="updatedAt">Last updated</MenuItem>
                <MenuItem value="totalAmount">Cart total</MenuItem>
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
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="active carts table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 50, bgcolor: "#f1f5f9" }} />
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>User</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Items</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Subtotal</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Total Amount</TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={TABLE_COL_SPAN} align="center" sx={{ py: 3 }}>
                    <CircularProgress size={30} />
                  </TableCell>
                </TableRow>
              ) : carts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={TABLE_COL_SPAN} align="center" sx={{ py: 3 }}>
                    <Typography color="text.secondary">No active carts found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                carts.map((cart, idx) => {
                  const rowId = cart._id ?? `cart-${idx}`;
                  return (
                    <Row
                      key={rowId}
                      cart={cart}
                      expanded={expandedCartId === rowId}
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
          count={totalCarts}
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
