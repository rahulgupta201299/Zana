import SectionCard from "@/Admin/Components/SectionCard";
import { Field, TextArea } from "@/Admin/Components/Field";
import { UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";

export default function SpecsSection() {
  const { dispatchAction, errors, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  return (
    <SectionCard title="Specifications" description="Product specification text.">
      <Field label="Specifications">
        <TextArea
          rows="5"
          value={product.specifications}
          onChange={(value) => updateField("specifications", value)}
          error={Boolean(errors.specifications)}
          helperText={errors.specifications}
        />
      </Field>
    </SectionCard>
  );
}
