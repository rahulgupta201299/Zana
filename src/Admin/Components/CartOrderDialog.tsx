import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CartOrderEditor, {
  CartOrderEditorCart,
  CartOrderEditorSavePayload,
} from "./CartOrderEditor";
import type { AdminIsdCode } from "../Configurations/AdminIsdCodeApi";

export type CartOrderDialogCart = CartOrderEditorCart;
export type CartOrderDialogSavePayload = CartOrderEditorSavePayload;

export default function CartOrderDialog(props: {
  open: boolean;
  cart: CartOrderDialogCart | null;
  countryOptions: AdminIsdCode[];
  saving: boolean;
  onClose: () => void;
  onSave: (payload: CartOrderDialogSavePayload) => Promise<void>;
  submitLabel?: string;
  title?: string;
  disablePhoneFields?: boolean;
  showPaymentMethodAndCurrency?: boolean;
  onPaymentMethodChange?: (method: "online" | "cod") => void;
  onCurrencyChange?: (currency: string) => void;
  footer?: ReactNode;
  onCartItemsChange?: (items: CartModifyReqType["items"], paymentMethod: "online" | "cod", currency: string) => Promise<void>;
  calculatingPaymentSummary?: boolean;
}) {
  const {
    open,
    cart,
    countryOptions,
    saving,
    onClose,
    onSave,
    submitLabel = "Save",
    title = "Cart order details",
    disablePhoneFields = false,
    showPaymentMethodAndCurrency = true,
    onPaymentMethodChange,
    onCurrencyChange,
    footer,
    onCartItemsChange,
    calculatingPaymentSummary = false,
  } = props;

  return (
    <Dialog open={open} onClose={saving ? undefined : onClose} fullWidth maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <CartOrderEditor
          cart={cart}
          countryOptions={countryOptions}
          saving={saving}
          onCancel={onClose}
          onSave={onSave}
          submitLabel={submitLabel}
          disablePhoneFields={disablePhoneFields}
          showPaymentMethodAndCurrency={showPaymentMethodAndCurrency}
          onPaymentMethodChange={onPaymentMethodChange}
          onCurrencyChange={onCurrencyChange}
          footer={footer}
          onCartItemsChange={onCartItemsChange}
          calculatingPaymentSummary={calculatingPaymentSummary}
        />
      </DialogContent>
    </Dialog>
  );
}
