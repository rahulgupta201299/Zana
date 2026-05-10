import SectionCard from "@/Admin/Components/SectionCard";
import { Field, TextArea, TextInput } from "@/Admin/Components/Field";
import { UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";

export default function HeroSection() {
  const { dispatchAction, errors, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  return (
    <SectionCard title="Core product content" description="Maps to name and shortDescription.">
      <Field label="Name">
        <TextInput
          value={product.name}
          onChange={(value) => updateField("name", value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
      </Field>
      <Field label="Short description">
        <TextArea
          rows="3"
          value={product.shortDescription}
          onChange={(value) => updateField("shortDescription", value)}
          error={Boolean(errors.shortDescription)}
          helperText={errors.shortDescription}
        />
      </Field>
    </SectionCard>
  );
}
