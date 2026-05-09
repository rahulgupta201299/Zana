import React from "react";
import Box from "@mui/material/Box";
import SectionCard from "@/Admin/Components/SectionCard";
import { Field, SelectInput } from "@/Admin/Components/Field";
import { UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";
import { type CategoryCountOption } from "../ProductApi";

export default function CategorySection() {
  const {
    categoriesLoading,
    categoryLookupError,
    categoryOptions,
    dispatchAction,
    errors,
    product,
    subCategoriesLoading,
    subCategoryOptions,
    typeOfCategory,
  } = useProductCms();
  const categoryOptionsWithCurrent = includeCurrentOption(
    categoryOptions,
    product.category,
  );
  const subCategoryOptionsWithCurrent = includeCurrentOption(
    subCategoryOptions,
    product.subCategory,
  );

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
            helperText={
              errors.category ||
              categoryLookupError ||
              `Showing ${typeOfCategory.toLowerCase()} categories.`
            }
            disabled={categoriesLoading}
          >
            <option value="">
              {categoriesLoading ? "Loading categories..." : "Select category..."}
            </option>
            {categoryOptionsWithCurrent.map((category) => (
              <option key={category.name} value={category.name}>
                {formatCountOption(category)}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Sub-category">
          <SelectInput
            value={product.subCategory}
            onChange={(value) => updateField("subCategory", value)}
            disabled={!product.category || subCategoriesLoading}
            error={Boolean(errors.subCategory)}
            helperText={errors.subCategory || categoryLookupError}
          >
            <option value="">
              {subCategoriesLoading
                ? "Loading sub-categories..."
                : product.category
                  ? "Select sub-category..."
                  : "Select a category first"}
            </option>
            {subCategoryOptionsWithCurrent.map((subCategory) => (
              <option key={subCategory.name} value={subCategory.name}>
                {formatCountOption(subCategory)}
              </option>
            ))}
          </SelectInput>
        </Field>
      </Box>
    </SectionCard>
  );
}

function includeCurrentOption(
  options: CategoryCountOption[],
  currentValue: string,
): CategoryCountOption[] {
  if (!currentValue || options.some((option) => option.name === currentValue)) {
    return options;
  }

  return [{ name: currentValue, count: 0 }, ...options];
}

function formatCountOption(option: CategoryCountOption) {
  return option.count ? `${option.name} (${option.count})` : option.name;
}

const twoColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: 1.5,
};
