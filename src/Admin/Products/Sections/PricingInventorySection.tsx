import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SectionCard from "@/Admin/Components/SectionCard";
import { Field, TextInput } from "@/Admin/Components/Field";
import { ProductFieldType } from "../Types";
import { useProductCms } from "../ProductCmsContext";
import { UPDATE_ACTIONS } from "../Constant";

export default function PricingInventorySection() {
  const { dispatchAction, errors, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  return (
    <SectionCard
      title="Pricing & Inventory"
      description="Manage product price, stock, currency, and display priority."
    >
      <Box sx={twoColumnSx}>
        <Field label="Price">
          <TextInput
            inputMode="decimal"
            value={product.price}
            onChange={(value) => updateField("price", Number(value) || 0)}
            error={Boolean(errors.price)}
            helperText={errors.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {product.currencySymbol || "₹"}
                </InputAdornment>
              ),
            }}
          />
        </Field>
        <Field label="Original price">
          <TextInput
            inputMode="decimal"
            value={product.originalPrice}
            onChange={(value) => updateField("originalPrice", Number(value) || 0)}
          />
        </Field>
      </Box>

      <Box sx={threeColumnSx}>
        <Field label="Quantity available">
          <TextInput
            inputMode="numeric"
            value={product.quantityAvailable}
            onChange={(value) => updateField("quantityAvailable", Number(value) || 0)}
            error={Boolean(errors.quantityAvailable)}
            helperText={errors.quantityAvailable}
          />
        </Field>
        <Field label="Display priority">
          <TextInput
            inputMode="numeric"
            value={product.priority}
            onChange={(value) => updateField("priority", Number(value) || 0)}
            error={Boolean(errors.priority)}
            helperText={errors.priority}
          />
        </Field>
      </Box>
    </SectionCard>
  );
}

const twoColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
  gap: 1.5,
};

const threeColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
  gap: 1.5,
};
