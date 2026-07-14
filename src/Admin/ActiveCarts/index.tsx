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
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Tooltip,
  Radio,
  RadioGroup,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PaymentIcon from "@mui/icons-material/Payment";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import type { TAppDispatch } from "@/Configurations/AppStore";
import useCart from "@/hooks/useCart";
import updateCartAddressServiceAction from "@/Redux/Cart/Services/UpdateCartAddressService";
import updatePaymentServiceAction from "@/Redux/Cart/Services/UpdatePaymentService";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import currencyListServiceAction from "@/Redux/Landing/Services/CurrencyList";
import { selectedCurrencyActions } from "@/Redux/Landing/Actions";
import { getCurrencyList, getSelectedCurrency } from "@/Redux/Landing/Selectors";
import { COUNTRY_INDIA, CURRENCY_LIST } from "@/Constants/AppConstant";
import { PaymentTypeEnum } from "@/pages/Checkout/Constant";
import type { UpdatePaymentResType } from "@/Redux/Cart/Types";
import { formatUtcToIstDateTime } from "../Utils/DateUtils";
import {
  createAdminActiveCartPaymentLink,
  downloadAdminActiveCartsCsv,
  getAdminActiveCarts,
  getAdminActiveCartByPhone,
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
import CartOrderDialog, {
  CartOrderDialogSavePayload,
} from "../Components/CartOrderDialog";

const DEFAULT_SORT_BY: AdminActiveCartSortBy = "updatedAt";
const DEFAULT_SORT_ORDER: AdminActiveCartSortOrder = "desc";

const NULL_EMAIL_PLACEHOLDER = "—";
const UNAVAILABLE_PRODUCT_LABEL = "Product unavailable";
const TABLE_COL_SPAN = 7;
const DEFAULT_ISD_CODE = "+91";
const INR_OUTSIDE_INDIA_ERROR = "INR currency is only supported for India carts.";
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

function getLineItemProductId(item: AdminActiveCartLineItem): string {
  const product = item.product;
  if (product && typeof product === "object" && typeof product._id === "string") {
    return product._id;
  }

  const itemWithProductId = item as AdminActiveCartLineItem & {
    productId?: string | { _id?: string };
  };
  if (typeof itemWithProductId.productId === "string") {
    return itemWithProductId.productId;
  }
  if (
    itemWithProductId.productId &&
    typeof itemWithProductId.productId === "object" &&
    typeof itemWithProductId.productId._id === "string"
  ) {
    return itemWithProductId.productId._id;
  }

  return "";
}

function getCartModifyItems(cartItems: AdminActiveCartLineItem[]) {
  return cartItems.map((lineItem) => ({
    productId: getLineItemProductId(lineItem),
    quantity: lineItem.quantity ?? 0,
  }));
}

function formatShippingAddress(
  addr: AdminActiveCartAddress | null | undefined,
): string {
  if (addr == null) return "";
  const line3 = [addr.city, addr.state, addr.postalCode]
    .filter((s) => typeof s === "string" && s.trim())
    .join(", ");
  const lines = [
    addr.fullName,
    addr.phone,
    addr.addressLine1,
    addr.addressLine2,
    line3,
    addr.country,
  ]
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

function productImageUrl(
  product: AdminActiveCartProduct | null,
): string | null {
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

function isIndiaCountry(country = ""): boolean {
  return country.trim().toLowerCase() === COUNTRY_INDIA.toLowerCase();
}

function formatMoney(symbol: string, value: number): string {
  return `${symbol}${Number(value || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
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
  rowId: string;
  expanded: boolean;
  paymentLinkLoading: boolean;
  cartItemLoadingKey: string | null;
  paymentMethodLoading: boolean;
  selectedCurrency: string;
  onToggleExpand: () => void;
  onEditContactDetails: (cart: AdminActiveCartRecord) => void;
  onOpenAddProduct: (cart: AdminActiveCartRecord) => void;
  onUpdateCartItemQuantity: (
    cart: AdminActiveCartRecord,
    item: AdminActiveCartLineItem,
    nextQuantity: number,
    itemKey: string,
  ) => void;
  onGeneratePaymentLink: (cart: AdminActiveCartRecord, rowId: string) => void;
  onPaymentMethodChange: (
    cart: AdminActiveCartRecord,
    method: PaymentTypeEnum,
    rowId: string,
  ) => void;
}) {
  const {
    cart,
    rowId,
    expanded,
    paymentLinkLoading,
    cartItemLoadingKey,
    paymentMethodLoading,
    selectedCurrency,
    onToggleExpand,
    onEditContactDetails,
    onOpenAddProduct,
    onUpdateCartItemQuantity,
    onGeneratePaymentLink,
    onPaymentMethodChange,
  } = props;

  const items = cart.items ?? [];

  const symbol = cart.currencySymbol ?? "";

  const formattedShipping = formatShippingAddress(cart.shippingAddress ?? null);
  const formattedBilling = formatShippingAddress(cart.billingAddress ?? null);
  const shippingAddressText =
    formattedShipping.length > 0 ? formattedShipping : NULL_EMAIL_PLACEHOLDER;
  const billingAddressText =
    formattedBilling.length > 0 ? formattedBilling : NULL_EMAIL_PLACEHOLDER;
  const emailText =
    cart.emailId === null || cart.emailId === undefined || cart.emailId === ""
      ? NULL_EMAIL_PLACEHOLDER
      : cart.emailId;
  const couponLine = appliedCouponDisplay(cart);
  const appliedCouponText =
    couponLine.length > 0 ? couponLine : NULL_EMAIL_PLACEHOLDER;

  const subtotal = cart.subtotal ?? 0;
  const totalAmount = cart.totalAmount ?? 0;
  const taxAmount = cart.taxAmount ?? 0;
  const shippingCost = cart.shippingCost ?? 0;
  const discountAmount = cart.discountAmount ?? 0;
  const codCharges = cart.codCharges ?? 0;
  const paymentMethod =
    cart.paymentMethod === PaymentTypeEnum.COD
      ? PaymentTypeEnum.COD
      : PaymentTypeEnum.RAZORPAY;
  const REQUIRED_ADDRESS_FIELDS = [
    "fullName",
    "addressLine1",
    "city",
    "state",
    "postalCode",
    "country",
    "phone",
  ] as const;

  const isValidAddress = (address: AdminActiveCartAddress): boolean =>
    REQUIRED_ADDRESS_FIELDS.every((field) => Boolean(address?.[field]?.trim()));

  const hasPhoneNumber = Boolean((cart.phoneNumber ?? "").trim());
  const hasValidAddresses =
    isValidAddress(cart.shippingAddress ?? {}) &&
    isValidAddress(cart.billingAddress ?? {});
  const canUseCod =
    selectedCurrency === CURRENCY_LIST.INR &&
    isIndiaCountry(cart.shippingAddress?.country ?? "");

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
            {cart.emailId === null ||
            cart.emailId === undefined ||
            cart.emailId === ""
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
          {formatUtcToIstDateTime(
            cart.updatedAt ?? null,
            NULL_EMAIL_PLACEHOLDER,
          )}
        </TableCell>
        <TableCell>
          <Tooltip
            title={
              !hasValidAddresses
                ? "Update cart with valid shipping and billing addresses"
                : !hasPhoneNumber
                  ? "Phone number is required"
                  : "Generate payment link"
            }
            enterDelay={300}
          >
            <span>
              <Button
                variant="outlined"
                size="small"
                startIcon={
                  paymentLinkLoading ? (
                    <CircularProgress size={14} />
                  ) : (
                    <PaymentIcon fontSize="small" />
                  )
                }
                disabled={
                  !hasPhoneNumber || paymentLinkLoading || !hasValidAddresses
                }
                onClick={() => onGeneratePaymentLink(cart, rowId)}
                sx={{ whiteSpace: "nowrap" }}
              >
                Payment Link
              </Button>
            </span>
          </Tooltip>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={TABLE_COL_SPAN}
        >
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 2,
                p: 2,
                bgcolor: "#f8fafc",
                borderRadius: 2,
                border: "1px solid #e2e8f0",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretch", sm: "center" }}
                justifyContent="space-between"
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                >
                  Cart Items Details
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddIcon fontSize="small" />}
                  onClick={() => onOpenAddProduct(cart)}
                  sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}
                >
                  Add product
                </Button>
              </Stack>
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
                    items.map((item, lineIdx) => {
                      const itemKey = item._id ?? `line-${lineIdx}`;
                      const quantity = item.quantity ?? 0;
                      const productId = getLineItemProductId(item);
                      const quantityAvailable =
                        typeof item.product?.quantityAvailable === "number"
                          ? item.product.quantityAvailable
                          : null;
                      const isPlusDisabled =
                        !productId ||
                        cartItemLoadingKey != null ||
                        (quantityAvailable != null &&
                          quantity >= quantityAvailable);
                      const isMinusDisabled =
                        !productId || cartItemLoadingKey != null || quantity <= 0;
                      const isRemoveDisabled =
                        !productId || cartItemLoadingKey != null;
                      const isThisItemLoading =
                        cartItemLoadingKey === `${rowId}:${itemKey}`;

                      return (
                        <TableRow key={itemKey}>
                          <TableCell component="th" scope="row">
                            <ProductThumbCell item={item} />
                          </TableCell>
                          <TableCell>
                            {item.product?.productCode || NULL_EMAIL_PLACEHOLDER}
                          </TableCell>
                          <TableCell>
                            {item.currencySymbol ?? symbol}
                            {item.price ?? 0}
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={0.75}
                              sx={{ minWidth: 132 }}
                            >
                            
                              <Typography
                                variant="body2"
                                sx={{ width: 24, textAlign: "center" }}
                              >
                                {isThisItemLoading ? (
                                  <CircularProgress size={14} />
                                ) : (
                                  quantity
                                )}
                              </Typography>
                            
                            
                            </Stack>
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            {item.currencySymbol ?? symbol}
                            {item.totalPrice ?? 0}
                          </TableCell>
                          <TableCell>
                              <Tooltip title="Remove item" enterDelay={300}>
                                <span>
                                  <IconButton
                                    size="small"
                                    
                                    aria-label="Remove item from cart"
                                    disabled={isRemoveDisabled}
                                    onClick={() => onOpenAddProduct(cart)}
                                  >
                                    <EditIcon fontSize="small" />
                                  </IconButton>
                                </span>
                              </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No items found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <Divider sx={{ my: 2 }} />
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "minmax(180px, 0.8fr) 1fr 1fr",
                  },
                  gap: 2,
                  mb: 2,
                }}
              >
                {[
                  {
                    label: "Email ID",
                    value: emailText,
                    hasValue: emailText !== NULL_EMAIL_PLACEHOLDER,
                  },
                  {
                    label: "Shipping address",
                    value: shippingAddressText,
                    hasValue: formattedShipping.length > 0,
                  },
                  {
                    label: "Billing address",
                    value: billingAddressText,
                    hasValue: formattedBilling.length > 0,
                  },
                ].map((section) => (
                  <Box
                    key={section.label}
                    sx={{
                      border: "1px solid #e2e8f0",
                      borderRadius: 1,
                      p: 1.5,
                      bgcolor: "#fff",
                      minWidth: 0,
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={1}
                      sx={{ mb: 0.5 }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {section.label}
                      </Typography>
                      <Tooltip
                        title={section.hasValue ? "Edit" : "Add"}
                        enterDelay={300}
                      >
                        <IconButton
                          size="small"
                          aria-label={`${section.hasValue ? "Edit" : "Add"} ${section.label}`}
                          onClick={() => onEditContactDetails(cart)}
                        >
                          {section.hasValue ? (
                            <EditIcon fontSize="small" />
                          ) : (
                            <AddIcon fontSize="small" />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
                    >
                      {section.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "grid",
               
                  gap: 2,
                }}
              >
              
                <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: "#fff" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    Payment summary
                  </Typography>
                  <Stack spacing={0.75}>
                    {[
                      ["Subtotal", subtotal],
                      ["Shipping charges", shippingCost],
                      ["Tax", taxAmount],
                      ["Discount", -discountAmount],
                      ["COD charges", codCharges],
                    ].map(([label, value]) => (
                      <Stack key={label} direction="row" justifyContent="space-between">
                        <Typography variant="body2">{label}</Typography>
                        <Typography variant="body2">
                          {formatMoney(symbol, Number(value))}
                        </Typography>
                      </Stack>
                    ))}
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Applied coupon</Typography>
                      <Typography variant="body2">{appliedCouponText}</Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ borderTop: "1px solid #e2e8f0", pt: 1, mt: 0.5 }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Total payable
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {formatMoney(symbol, totalAmount)}
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ActiveCarts() {
  const dispatch = useDispatch<TAppDispatch>();

  const modifyCart = async (phone: string, items: { productId: string; quantity: number }[]) => {
    await dispatch(cartModifyServiceAction({ phoneNumber: phone, items }));
  };
 
  const currencies = useSelector(getCurrencyList);
  const selectedCurrency = useSelector(getSelectedCurrency);
  const [carts, setCarts] = useState<AdminActiveCartRecord[]>([]);
  const [totalCarts, setTotalCarts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [paymentLinkLoadingCartId, setPaymentLinkLoadingCartId] = useState<
    string | null
  >(null);
  const [cartItemLoadingKey, setCartItemLoadingKey] = useState<string | null>(
    null,
  );
  const [paymentMethodLoadingCartId, setPaymentMethodLoadingCartId] = useState<
    string | null
  >(null);
  const [cartOrderDialogCart, setCartOrderDialogCart] =
    useState<AdminActiveCartRecord | null>(null);
  const [cartOrderSaveLoading, setCartOrderSaveLoading] = useState(false);
  const [dialogCartLoading, setDialogCartLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isdCodes, setIsdCodes] = useState<AdminIsdCode[]>([]);
  const [isdCode, setIsdCode] = useState(DEFAULT_ISD_CODE);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [sortBy, setSortBy] = useState<AdminActiveCartSortBy>(DEFAULT_SORT_BY);
  const [sortOrder, setSortOrder] =
    useState<AdminActiveCartSortOrder>(DEFAULT_SORT_ORDER);

  /** At most one expanded cart row (accordion). */
  const [expandedCartId, setExpandedCartId] = useState<string | null>(null);

  const [appliedStartDate, setAppliedStartDate] = useState("");
  const [appliedEndDate, setAppliedEndDate] = useState("");
  const [appliedIsdCode, setAppliedIsdCode] = useState(DEFAULT_ISD_CODE);
  const [appliedPhoneNumber, setAppliedPhoneNumber] = useState("");
  const [appliedEmailId, setAppliedEmailId] = useState("");
  const [appliedSortBy, setAppliedSortBy] =
    useState<AdminActiveCartSortBy>(DEFAULT_SORT_BY);
  const [appliedSortOrder, setAppliedSortOrder] =
    useState<AdminActiveCartSortOrder>(DEFAULT_SORT_ORDER);

  const load = useCallback(
    async (apiPage: number, limit: number) => {
      const filters: AdminActiveCartFilters = {
        page: apiPage,
        limit,
        startDate: appliedStartDate || undefined,
        endDate: appliedEndDate || undefined,
        sortBy: appliedSortBy,
        sortOrder: appliedSortOrder,
        phoneNumber:
          buildPhoneFilter(appliedIsdCode, appliedPhoneNumber) || undefined,
        emailId: appliedEmailId.trim() || undefined,
        currency: selectedCurrency,
      };
      setLoading(true);
      setError(null);
      try {
        const raw = await getAdminActiveCarts(filters);
        const { carts: nextCarts, pagination } =
          parseAdminActiveCartsResponse(raw);
        setCarts(nextCarts);
        setTotalCarts(pagination.totalCarts ?? 0);
        const serverPage = Math.max(1, pagination.currentPage ?? apiPage);
        setPage(serverPage - 1);
      } catch (e: unknown) {
        setCarts([]);
        setTotalCarts(0);
        const message =
          e instanceof Error ? e.message : "Failed to load active carts.";
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
      selectedCurrency,
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
    phoneNumber:
      buildPhoneFilter(appliedIsdCode, appliedPhoneNumber) || undefined,
    emailId: appliedEmailId.trim() || undefined,
    currency: selectedCurrency,
  });

  const handleDownloadCsv = async () => {
    setDownloadLoading(true);
    setError(null);
    try {
      await downloadAdminActiveCartsCsv(getAppliedDownloadFilters());
    } catch (e: unknown) {
      setError(
        e instanceof Error ? e.message : "Failed to download active carts CSV.",
      );
    } finally {
      setDownloadLoading(false);
    }
  };

  const handleGeneratePaymentLink = async (
    cart: AdminActiveCartRecord,
    rowId: string,
  ) => {
    const phoneNumber = (cart.phoneNumber ?? "").trim();

    if (!phoneNumber) {
      enqueueSnackbar("Phone number is required to generate payment link.", {
        variant: "warning",
      });
      return;
    }

    setPaymentLinkLoadingCartId(rowId);
    try {
      await dispatch(
        updatePaymentServiceAction({
          phoneNumber,
          method: PaymentTypeEnum.RAZORPAY,
          currency: selectedCurrency,
        }),
      );
      const response = await createAdminActiveCartPaymentLink(phoneNumber);
      enqueueSnackbar(response.message, { variant: "success" });
    } catch (error: any) {
      const { message = "Failed to generate payment link." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setPaymentLinkLoadingCartId(null);
    }
  };

  const handleSaveCartOrderDetails = async (
    payload: CartOrderDialogSavePayload,
  ) => {
    setCartOrderSaveLoading(true);
    try {
      await dispatch(updateCartAddressServiceAction(payload.address));
      if (payload.hasCartChanges) {
        await modifyCart(payload.cart.phoneNumber, payload.cart.items);
      }
      const method =
        cartOrderDialogCart?.paymentMethod === PaymentTypeEnum.COD
          ? PaymentTypeEnum.COD
          : PaymentTypeEnum.RAZORPAY;
      await dispatch(
        updatePaymentServiceAction({
          phoneNumber: payload.cart.phoneNumber,
          method,
          currency: selectedCurrency,
        }),
      );
      enqueueSnackbar("Cart order details updated.", {
        variant: "success",
      });
      setCartOrderDialogCart(null);
      await load(page + 1, rowsPerPage);
    } catch (error: any) {
      const { message = "Failed to update cart order details." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setCartOrderSaveLoading(false);
    }
  };

  const handlePaymentMethodChange = async (
    cart: AdminActiveCartRecord,
    method: PaymentTypeEnum,
    rowId: string,
  ) => {
    const phoneNumber = (cart.phoneNumber ?? "").trim();
    if (!phoneNumber) {
      enqueueSnackbar("Phone number is required to update payment method.", {
        variant: "warning",
      });
      return;
    }

    if (
      method === PaymentTypeEnum.COD &&
      (selectedCurrency !== CURRENCY_LIST.INR ||
        !isIndiaCountry(cart.shippingAddress?.country ?? ""))
    ) {
      enqueueSnackbar("COD is only available for India carts in INR.", {
        variant: "warning",
      });
      return;
    }

    setPaymentMethodLoadingCartId(rowId);
    try {
      await dispatch(
        updatePaymentServiceAction({
          phoneNumber,
          method,
          currency: selectedCurrency,
        }),
      ) as UpdatePaymentResType;
      enqueueSnackbar("Payment calculation updated.", { variant: "success" });
      await load(page + 1, rowsPerPage);
    } catch (error: any) {
      const { message = "Failed to update payment method." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setPaymentMethodLoadingCartId(null);
    }
  };

  const handleUpdateCartItemQuantity = async (
    cart: AdminActiveCartRecord,
    item: AdminActiveCartLineItem,
    nextQuantity: number,
    loadingKey: string,
  ) => {
    const phoneNumber = (cart.phoneNumber ?? "").trim();
    const productId = getLineItemProductId(item);

    if (!phoneNumber) {
      enqueueSnackbar("Phone number is required to update this cart.", {
        variant: "warning",
      });
      return;
    }

    if (!productId) {
      enqueueSnackbar("This product is unavailable and cannot be updated.", {
        variant: "warning",
      });
      return;
    }

    const cartItems = cart.items ?? [];
    const currentItems = getCartModifyItems(cartItems);
    if (currentItems.some((lineItem) => !lineItem.productId)) {
      enqueueSnackbar(
        "Cart has unavailable product lines. Please resolve them before changing quantities.",
        { variant: "warning" },
      );
      return;
    }

    const items = currentItems.map((lineItem) => ({
      ...lineItem,
      quantity:
        lineItem.productId === productId
          ? Math.max(0, nextQuantity)
          : lineItem.quantity,
    }));

    setCartItemLoadingKey(loadingKey);
    try {
      await modifyCart(phoneNumber, items);
      const method =
        cart.paymentMethod === PaymentTypeEnum.COD
          ? PaymentTypeEnum.COD
          : PaymentTypeEnum.RAZORPAY;
      await dispatch(
        updatePaymentServiceAction({
          phoneNumber,
          method,
          currency: selectedCurrency,
        }),
      );
      enqueueSnackbar(
        nextQuantity > 0 ? "Cart item quantity updated." : "Item removed from cart.",
        { variant: "success" },
      );
      await load(page + 1, rowsPerPage);
    } catch (error: any) {
      const { message = "Failed to update cart item." } = error;
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setCartItemLoadingKey(null);
    }
  };

  useEffect(() => {
    let active = true;
    getAdminIsdCodes()
      .then((codes) => {
        if (!active) return;
        setIsdCodes(codes);
        const india = codes.find(
          (code) => normalizeIsdCode(code.isd) === DEFAULT_ISD_CODE,
        );
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

  useEffect(() => {
    if (!currencies.length) {
      void dispatch(currencyListServiceAction());
    }
  }, [currencies.length, dispatch]);

  useEffect(() => {
    if (!cartOrderDialogCart) return;
    const phone = (cartOrderDialogCart.phoneNumber ?? "").trim();
    if (!phone) return;
    if (cartOrderDialogCart.currency === selectedCurrency) return;

    let active = true;
    setDialogCartLoading(true);
    getAdminActiveCartByPhone(phone, selectedCurrency)
      .then((updatedCart) => {
        if (!active) return;
        if (updatedCart) {
          setCartOrderDialogCart(updatedCart);
        }
      })
      .catch((err) => {
        console.error("Failed to re-fetch active cart on currency change", err);
      })
      .finally(() => {
        if (active) {
          setDialogCartLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [selectedCurrency, cartOrderDialogCart?.phoneNumber]);

  const handleCurrencyChange = (currency: any) => {
    dispatch(selectedCurrencyActions(currency));
    setExpandedCartId(null);
  };

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
    startDate === appliedStartDate &&
    endDate === appliedEndDate &&
    isdCode === appliedIsdCode &&
    phoneNumber.trim() === appliedPhoneNumber &&
    emailId.trim() === appliedEmailId &&
    sortBy === appliedSortBy &&
    sortOrder === appliedSortOrder;

  const isClearDisabled =
    startDate === "" &&
    endDate === "" &&
    isdCode === DEFAULT_ISD_CODE &&
    phoneNumber === "" &&
    emailId === "" &&
    appliedStartDate === "" &&
    appliedEndDate === "" &&
    appliedIsdCode === DEFAULT_ISD_CODE &&
    appliedPhoneNumber === "" &&
    appliedEmailId === "" &&
    sortBy === DEFAULT_SORT_BY &&
    sortOrder === DEFAULT_SORT_ORDER &&
    appliedSortBy === DEFAULT_SORT_BY &&
    appliedSortOrder === DEFAULT_SORT_ORDER;

  const todayIso = formatLocalIsoDate(new Date());
  const startDateInputMax = endDate ? minIsoDate(todayIso, endDate) : todayIso;
  const endDateInputMin = startDate || undefined;
  const currencyOptions = currencies.length
    ? currencies
    : [{ code: selectedCurrency, name: selectedCurrency, symbol: selectedCurrency, exchangeRate: 1 }];

  const toggleExpandedRow = useCallback((rowId: string) => {
    setExpandedCartId((prev) => (prev === rowId ? null : rowId));
  }, []);

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", color: "#111827" }}
      >
        Active Carts
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            flexWrap="wrap"
            useFlexGap
            alignItems="center"
          >
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
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel id="active-cart-currency">Currency</InputLabel>
              <Select
                labelId="active-cart-currency"
                label="Currency"
                value={selectedCurrency}
                onChange={(event) => handleCurrencyChange(event.target.value)}
              >
                {currencyOptions.map((currency) => (
                  <MenuItem key={currency.code} value={currency.code}>
                    {currency.code} ({currency.symbol})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
                onChange={(e) =>
                  setSortBy(e.target.value as AdminActiveCartSortBy)
                }
              >
                <MenuItem value="updatedAt">Last updated</MenuItem>
                <MenuItem value="totalAmount">Cart total</MenuItem>
              </Select>
            </FormControl>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              aria-label="Sort direction"
            >
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
                bgcolor: isApplyDisabled
                  ? "action.disabledBackground"
                  : "#e10600",
                "&:hover": { bgcolor: "#c00500" },
              }}
            >
              Apply filters
            </Button>
            <Button
              variant="outlined"
              onClick={handleClearFilters}
              disabled={isClearDisabled}
              color="inherit"
            >
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
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>
                  User
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>
                  Items
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>
                  Subtotal
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>
                  Total Amount
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>
                  Last Updated
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f1f5f9" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={TABLE_COL_SPAN}
                    align="center"
                    sx={{ py: 3 }}
                  >
                    <CircularProgress size={30} />
                  </TableCell>
                </TableRow>
              ) : carts.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={TABLE_COL_SPAN}
                    align="center"
                    sx={{ py: 3 }}
                  >
                    <Typography color="text.secondary">
                      No active carts found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                carts.map((cart, idx) => {
                  const rowId = cart._id ?? `cart-${idx}`;
                  return (
                    <Row
                      key={rowId}
                      cart={cart}
                      rowId={rowId}
                      expanded={expandedCartId === rowId}
                      paymentLinkLoading={paymentLinkLoadingCartId === rowId}
                      cartItemLoadingKey={cartItemLoadingKey}
                      paymentMethodLoading={paymentMethodLoadingCartId === rowId}
                      selectedCurrency={selectedCurrency}
                      onToggleExpand={() => {
                        toggleExpandedRow(rowId);
                      }}
                      onEditContactDetails={setCartOrderDialogCart}
                      onOpenAddProduct={setCartOrderDialogCart}
                      onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                      onGeneratePaymentLink={handleGeneratePaymentLink}
                      onPaymentMethodChange={handlePaymentMethodChange}
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
      <CartOrderDialog
        open={cartOrderDialogCart != null}
        cart={cartOrderDialogCart}
        countryOptions={isdCodes}
        saving={cartOrderSaveLoading}
        calculatingPaymentSummary={dialogCartLoading}
        onClose={() => setCartOrderDialogCart(null)}
        onSave={handleSaveCartOrderDetails}
        onCurrencyChange={handleCurrencyChange}
      />
    </Box>
  );
}
