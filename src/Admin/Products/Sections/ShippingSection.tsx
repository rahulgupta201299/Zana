import SectionCard from "@/Admin/Components/SectionCard";
import { Field, TextArea } from "@/Admin/Components/Field";
import { UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";

export default function ShippingSection() {
  const { dispatchAction, errors, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  return (
    <SectionCard title="Shipping" description="Fulfillment and policy notes.">
      <Field label="Shipping and return policy">
        <TextArea
          rows="7"
          value={product.shippingAndReturn}
          onChange={(value) => updateField("shippingAndReturn", value)}
          error={Boolean(errors.shippingAndReturn)}
          helperText={errors.shippingAndReturn}
        />
      </Field>
    </SectionCard>
  );
}
