import SectionCard from "@/Admin/Components/SectionCard";
import { Field, TextArea } from "@/Admin/Components/Field";
import { UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";

export default function HighlightsSection() {
  const { dispatchAction, errors, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  return (
    <SectionCard title="Description" description="Long product description.">
      <Field label="Long description">
        <TextArea
          rows="8"
          value={product.longDescription}
          onChange={(value) => updateField("longDescription", value)}
          error={Boolean(errors.longDescription)}
          helperText={errors.longDescription}
        />
      </Field>
    </SectionCard>
  );
}
