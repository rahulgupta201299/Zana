import Box from "@mui/material/Box";
import SectionCard from "@/Admin/Components/SectionCard";
import { Field, SelectInput } from "@/Admin/Components/Field";
import { CategoryName, UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";

const categories: Record<string, string[]> = {
  [CategoryName.Luggage]: ["Tank Bags", "Saddlebags", "Top Boxes", "Tail Bags"],
  [CategoryName.Protection]: ["Crash Guards", "Bash Plates", "Frame Sliders"],
  [CategoryName.Lighting]: ["Aux Lamps", "Headlight Guards", "Wiring Harnesses"],
  [CategoryName.Ergonomics]: ["Handlebar Risers", "Foot Pegs", "Seats"],
  [CategoryName.FogLight]: ["Fog Light Mount", "Fog Light Cover", "Aux Light Bracket"],
  "Bike Protection": ["Fork Slider", "Crash Guard", "Frame Slider"],
};

export default function CategorySection() {
  const { dispatchAction, errors, product } = useProductCms();
  const subCategories = categories[product.category] || [];

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  const updatePrimaryCategory = (value: string) => {
    updateField("category", value);
    updateField("subCategory", "");
  };

  return (
    <SectionCard
      title="Category & Sub-Category"
      description="Controls where this product appears in navigation and filters."
    >
      <Box sx={twoColumnSx}>
        <Field label="Category">
          <SelectInput
            value={product.category}
            onChange={updatePrimaryCategory}
            error={Boolean(errors.category)}
            helperText={errors.category}
          >
            <option value="">Select category...</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Sub-category">
          <SelectInput
            value={product.subCategory}
            onChange={(value) => updateField("subCategory", value)}
            disabled={!product.category}
            error={Boolean(errors.subCategory)}
            helperText={errors.subCategory}
          >
            <option value="">
              {product.category ? "Select sub-category..." : "Select a category first"}
            </option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </SelectInput>
        </Field>
      </Box>
    </SectionCard>
  );
}

const twoColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: 1.5,
};
