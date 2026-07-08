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
        />
      </DialogContent>
    </Dialog>
  );
}
