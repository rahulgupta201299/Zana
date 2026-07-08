import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import type { TAppDispatch } from "@/Configurations/AppStore";
import SearchService from "@/Redux/Product/Services/SearchService";
import type {
  SearchDataProductsType,
  SearchResponseType,
} from "@/Redux/Product/Types";
import type {
  CartAddressType,
  CartModifyReqType,
  UpdateCartAddressReqType,
} from "@/Redux/Cart/Types";
import type {
  AdminActiveCartAddress,
  AdminActiveCartLineItem,
  AdminActiveCartRecord,
} from "../Configurations/ActiveCartApi";

const EMPTY_CART_ADDRESS: CartAddressType = {
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

type EditableCartAddressField = keyof CartAddressType;

const CART_ADDRESS_FIELDS: Array<{
  name: EditableCartAddressField;
  label: string;
  required?: boolean;
}> = [
  { name: "fullName", label: "Full name", required: true },
  { name: "phone", label: "Phone", required: true },
  { name: "addressLine1", label: "Address line 1", required: true },
  { name: "addressLine2", label: "Address line 2" },
  { name: "city", label: "City", required: true },
  { name: "state", label: "State", required: true },
  { name: "postalCode", label: "Postal code", required: true },
  { name: "country", label: "Country", required: true },
];

export type CartOrderDraftItem = {
  productId: string;
  quantity: number;
  name: string;
  shortDescription?: string;
  imageUrl?: string;
  price?: number;
  currencySymbol?: string;
  productCode?: string;
};

export type CartOrderDialogCart = Pick<
  AdminActiveCartRecord,
  | "phoneNumber"
  | "emailId"
  | "items"
  | "currencySymbol"
  | "shippingAddress"
  | "billingAddress"
  | "shippingAddressSameAsBillingAddress"
>;

export type CartOrderDialogSavePayload = {
  address: UpdateCartAddressReqType;
  cart: CartModifyReqType;
  hasCartChanges: boolean;
};

function toCartAddress(
  address: AdminActiveCartAddress | null | undefined,
): CartAddressType {
  return {
    ...EMPTY_CART_ADDRESS,
    ...(address ?? {}),
  };
}

function isAddressPopulated(
  addr: AdminActiveCartAddress | null | undefined,
): boolean {
  if (addr == null) return false;
  return Object.values(addr).some((value) =>
    typeof value === "string" ? value.trim().length > 0 : false,
  );
}

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email.trim());
}

function hasRequiredAddressFields(address: CartAddressType): boolean {
  return CART_ADDRESS_FIELDS.every((field) => {
    if (!field.required) return true;
    return address[field.name].trim().length > 0;
  });
}

function productDisplayName(item: AdminActiveCartLineItem): string {
  const p = item.product ?? null;
  if (p == null) return "Product unavailable";
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

function productImageUrl(item: AdminActiveCartLineItem): string | undefined {
  const product = item.product;
  if (!product) return undefined;
  if (typeof product.imageUrl === "string" && product.imageUrl.trim()) {
    return product.imageUrl;
  }
  const firstImage = product.images?.find((u) => typeof u === "string" && u.trim());
  return firstImage;
}

function buildDraftItems(cart: CartOrderDialogCart | null): CartOrderDraftItem[] {
  return (cart?.items ?? [])
    .map((lineItem) => {
      const productId = getLineItemProductId(lineItem);
      if (!productId) return null;
      return {
        productId,
        quantity: lineItem.quantity ?? 0,
        name: productDisplayName(lineItem),
        shortDescription: lineItem.product?.shortDescription,
        imageUrl: productImageUrl(lineItem),
        price: lineItem.price,
        currencySymbol: lineItem.currencySymbol ?? cart?.currencySymbol,
        productCode: lineItem.product?.productCode,
      };
    })
    .filter((item): item is CartOrderDraftItem => item != null);
}

function toProductDraftItem(product: SearchDataProductsType): CartOrderDraftItem {
  return {
    productId: product._id,
    quantity: 1,
    name: product.name,
    shortDescription: product.shortDescription,
    imageUrl: product.imageUrl,
    price: product.price,
    currencySymbol: product.currencySymbol,
  };
}

function areCartItemsEqual(
  first: CartModifyReqType["items"],
  second: CartModifyReqType["items"],
): boolean {
  if (first.length !== second.length) return false;
  return first.every((item, index) => {
    const next = second[index];
    return item.productId === next.productId && item.quantity === next.quantity;
  });
}

function CartAddressFields(props: {
  title: string;
  value: CartAddressType;
  onChange: (next: CartAddressType) => void;
  disabled?: boolean;
}) {
  const { title, value, onChange, disabled = false } = props;

  const handleFieldChange =
    (field: EditableCartAddressField) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ ...value, [field]: event.target.value });
    };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        {CART_ADDRESS_FIELDS.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            value={value[field.name]}
            onChange={handleFieldChange(field.name)}
            required={field.required}
            disabled={disabled}
            size="small"
            fullWidth
            sx={
              field.name === "addressLine1" || field.name === "addressLine2"
                ? { gridColumn: { sm: "1 / -1" } }
                : undefined
            }
          />
        ))}
      </Box>
    </Box>
  );
}

export default function CartOrderDialog(props: {
  open: boolean;
  cart: CartOrderDialogCart | null;
  saving: boolean;
  onClose: () => void;
  onSave: (payload: CartOrderDialogSavePayload) => Promise<void>;
}) {
  const { open, cart, saving, onClose, onSave } = props;
  const dispatch = useDispatch<TAppDispatch>();
  const [emailId, setEmailId] = useState("");
  const [shippingAddress, setShippingAddress] =
    useState<CartAddressType>(EMPTY_CART_ADDRESS);
  const [billingAddress, setBillingAddress] =
    useState<CartAddressType>(EMPTY_CART_ADDRESS);
  const [shippingAddressSameAsBillingAddress, setSameAsBilling] =
    useState(true);
  const [draftItems, setDraftItems] = useState<CartOrderDraftItem[]>([]);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<SearchDataProductsType[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const initialItems = useMemo(() => buildDraftItems(cart), [cart]);
  const hasUnavailableLines = (cart?.items ?? []).some(
    (lineItem) => !getLineItemProductId(lineItem),
  );

  useEffect(() => {
    if (!open || cart == null) return;

    const shipping = toCartAddress(cart.shippingAddress);
    const billing = toCartAddress(cart.billingAddress);
    const hasBilling = isAddressPopulated(cart.billingAddress);

    setEmailId(cart.emailId ?? "");
    setShippingAddress(shipping);
    setBillingAddress(hasBilling ? billing : shipping);
    setSameAsBilling(cart.shippingAddressSameAsBillingAddress ?? !hasBilling);
    setDraftItems(buildDraftItems(cart));
    setQuery("");
    setProducts([]);
    setLoadingProducts(false);
  }, [cart, open]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setProducts([]);
      setLoadingProducts(false);
      return;
    }

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setProducts([]);
      setLoadingProducts(false);
      return;
    }

    let active = true;
    setLoadingProducts(true);
    const timer = window.setTimeout(() => {
      dispatch(SearchService({ query: trimmedQuery, page: 1, limit: 8 }))
        .then((response) => {
          if (!active) return;
          const { data = [] } = response as SearchResponseType;
          setProducts(Array.isArray(data) ? data : []);
        })
        .catch(() => {
          if (active) setProducts([]);
        })
        .finally(() => {
          if (active) setLoadingProducts(false);
        });
    }, 400);

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [dispatch, open, query]);

  const phoneNumber = (cart?.phoneNumber ?? "").trim();
  const effectiveBillingAddress = shippingAddressSameAsBillingAddress
    ? shippingAddress
    : billingAddress;
  const cartItems = draftItems
    .filter((item) => item.quantity > 0)
    .map((item) => ({ productId: item.productId, quantity: item.quantity }));
  const initialCartItems = initialItems
    .filter((item) => item.quantity > 0)
    .map((item) => ({ productId: item.productId, quantity: item.quantity }));
  const hasCartChanges = !areCartItemsEqual(initialCartItems, cartItems);
  const isInvalid =
    !phoneNumber ||
    !isValidEmail(emailId) ||
    !hasRequiredAddressFields(shippingAddress) ||
    !hasRequiredAddressFields(effectiveBillingAddress) ||
    (hasCartChanges && hasUnavailableLines);

  const updateDraftQuantity = (productId: string, nextQuantity: number) => {
    setDraftItems((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, nextQuantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const addProductToDraft = (product: SearchDataProductsType) => {
    if (hasUnavailableLines) return;
    setDraftItems((current) => {
      const existing = current.find((item) => item.productId === product._id);
      if (existing) {
        return current.map((item) =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...current, toProductDraftItem(product)];
    });
    setQuery("");
    setProducts([]);
    setLoadingProducts(false);
  };

  const handleSubmit = async () => {
    if (isInvalid) return;

    await onSave({
      address: {
        phoneNumber,
        emailId: emailId.trim(),
        shippingAddress,
        billingAddress: effectiveBillingAddress,
        shippingAddressSameAsBillingAddress,
      },
      cart: {
        phoneNumber,
        items: cartItems,
      },
      hasCartChanges,
    });
  };

  return (
    <Dialog open={open} onClose={saving ? undefined : onClose} fullWidth maxWidth="md">
      <DialogTitle>Cart order details</DialogTitle>
      <DialogContent dividers>
        {!phoneNumber && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            This cart needs a phone number before details can be saved.
          </Alert>
        )}
        {hasUnavailableLines && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            This cart has unavailable product lines. Address details can still be saved,
            but product changes are disabled until those lines are resolved.
          </Alert>
        )}
        <Stack spacing={2.5} sx={{ pt: 0.5 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
              Cart items
            </Typography>
            <Stack spacing={1}>
              {draftItems.length === 0 ? (
                <Typography color="text.secondary">No products added.</Typography>
              ) : (
                draftItems.map((item) => (
                  <Box
                    key={item.productId}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
                      gap: 1.5,
                      alignItems: "center",
                      border: "1px solid #e2e8f0",
                      borderRadius: 1,
                      p: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1.5, minWidth: 0 }}>
                      {item.imageUrl ? (
                        <Box
                          component="img"
                          src={item.imageUrl}
                          alt={item.name}
                          sx={{
                            width: 56,
                            height: 56,
                            objectFit: "cover",
                            borderRadius: 1,
                            bgcolor: "action.hover",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 1,
                            bgcolor: "action.hover",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {item.name}
                        </Typography>
                        {item.productCode && (
                          <Typography variant="caption" color="text.secondary">
                            {item.productCode}
                          </Typography>
                        )}
                        <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 700 }}>
                          {item.currencySymbol}
                          {(item.price ?? 0).toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </Typography>
                      </Box>
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={0.75}>
                      <Tooltip title="Decrease" enterDelay={300}>
                        <span>
                          <IconButton
                            size="small"
                            aria-label="Decrease item quantity"
                            disabled={saving}
                            onClick={() =>
                              updateDraftQuantity(item.productId, item.quantity - 1)
                            }
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                        </span>
                      </Tooltip>
                      <Typography variant="body2" sx={{ width: 28, textAlign: "center" }}>
                        {item.quantity}
                      </Typography>
                      <Tooltip title="Increase" enterDelay={300}>
                        <span>
                          <IconButton
                            size="small"
                            aria-label="Increase item quantity"
                            disabled={saving}
                            onClick={() =>
                              updateDraftQuantity(item.productId, item.quantity + 1)
                            }
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </span>
                      </Tooltip>
                      <Tooltip title="Remove item" enterDelay={300}>
                        <span>
                          <IconButton
                            size="small"
                            color="error"
                            aria-label="Remove item from cart"
                            disabled={saving}
                            onClick={() => updateDraftQuantity(item.productId, 0)}
                          >
                            <DeleteOutlineIcon fontSize="small" />
                          </IconButton>
                        </span>
                      </Tooltip>
                    </Stack>
                  </Box>
                ))
              )}
            </Stack>
          </Box>

          <Box>
            <TextField
              label="Search products"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              size="small"
              fullWidth
              disabled={saving || hasUnavailableLines}
            />
            <Box sx={{ mt: 1.25 }}>
              {loadingProducts ? (
                <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
                  <CircularProgress size={24} />
                </Box>
              ) : products.length === 0 ? (
                <Typography color="text.secondary" sx={{ py: 1 }}>
                  {query.trim() ? "No products found." : "Search by product name."}
                </Typography>
              ) : (
                <Stack spacing={1}>
                  {products.map((product) => {
                    const draftQuantity =
                      draftItems.find((item) => item.productId === product._id)
                        ?.quantity ?? 0;
                    return (
                      <Button
                        key={product._id}
                        color="inherit"
                        disabled={saving || hasUnavailableLines}
                        onClick={() => addProductToDraft(product)}
                        sx={{
                          justifyContent: "flex-start",
                          textAlign: "left",
                          border: "1px solid #e2e8f0",
                          borderRadius: 1,
                          p: 1,
                          textTransform: "none",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 1.5, width: "100%" }}>
                          <Box
                            component="img"
                            src={product.imageUrl}
                            alt={product.name}
                            sx={{
                              width: 56,
                              height: 56,
                              objectFit: "cover",
                              borderRadius: 1,
                              bgcolor: "action.hover",
                              flexShrink: 0,
                            }}
                          />
                          <Box sx={{ minWidth: 0, flex: 1 }}>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 700, color: "text.primary" }}
                            >
                              {product.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              sx={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {product.shortDescription || "No description"}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ mt: 0.5, fontWeight: 700, color: "#111827" }}
                            >
                              {product.currencySymbol}
                              {product.price?.toLocaleString("en-IN", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </Typography>
                          </Box>
                          {draftQuantity > 0 && (
                            <Typography
                              variant="caption"
                              sx={{ alignSelf: "center", fontWeight: 700 }}
                            >
                              x{draftQuantity}
                            </Typography>
                          )}
                        </Box>
                      </Button>
                    );
                  })}
                </Stack>
              )}
            </Box>
          </Box>

          <Divider />

          <TextField
            label="Email ID"
            value={emailId}
            onChange={(event) => setEmailId(event.target.value)}
            error={emailId.trim().length > 0 && !isValidEmail(emailId)}
            helperText={
              emailId.trim().length > 0 && !isValidEmail(emailId)
                ? "Enter a valid email address"
                : " "
            }
            required
            size="small"
            fullWidth
          />
          <CartAddressFields
            title="Shipping address"
            value={shippingAddress}
            onChange={setShippingAddress}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={shippingAddressSameAsBillingAddress}
                onChange={(event) => setSameAsBilling(event.target.checked)}
              />
            }
            label="Billing address is same as shipping address"
          />
          <CartAddressFields
            title="Billing address"
            value={effectiveBillingAddress}
            onChange={setBillingAddress}
            disabled={shippingAddressSameAsBillingAddress}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving} color="inherit">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={saving || isInvalid}
          startIcon={saving ? <CircularProgress size={16} /> : undefined}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
