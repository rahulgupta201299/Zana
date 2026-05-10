import React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SectionCard from "@/Admin/Components/SectionCard";
import { Field, SelectInput, TextInput } from "@/Admin/Components/Field";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";
import { UPDATE_ACTIONS } from "../Constant";
import {
  type BrandOption,
  getAdminBrands,
  getAdminModelsByBrand,
  type ModelOption,
} from "../ProductApi";

export default function DetailsSection() {
  const { dispatchAction, errors, product } = useProductCms();

  React.useEffect(() => {
    let isCurrent = true;
    return () => {
      isCurrent = false;
    };
  }, []);

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  return (
    <SectionCard
      title="Product details"
      description="Catalog data and product flags."
    >
      <Field label="Product code">
        <TextInput
          value={product.productCode}
          onChange={(value) => updateField("productCode", value.toUpperCase())}
          disabled={Boolean(product._id)}
          error={Boolean(errors.productCode)}
          helperText={
            errors.productCode ||
            (product._id
              ? "Product code cannot be changed after creation."
              : "")
          }
        />
      </Field>
      <Box sx={twoColumnSx}></Box>
      <Field label="Product name">
        <TextInput
          value={product.name}
          onChange={(value) => updateField("name", value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
      </Field>
      <Box sx={threeColumnSx}>
        <FormControlLabel
          control={
            <Switch
              checked={product.isNewArrival}
              onChange={(event) =>
                updateField("isNewArrival", event.target.checked)
              }
            />
          }
          label="New arrival"
        />
        <FormControlLabel
          control={
            <Switch
              checked={product.isGarageFavorite}
              onChange={(event) =>
                updateField("isGarageFavorite", event.target.checked)
              }
            />
          }
          label="Garage favorite"
        />
        <FormControlLabel
          control={
            <Switch
              checked={product.isComingSoon}
              onChange={(event) =>
                updateField("isComingSoon", event.target.checked)
              }
            />
          }
          label="Coming soon"
        />
      </Box>
    </SectionCard>
  );
}

const twoColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: 1.5,
};

const threeColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
  gap: 1.5,
};
