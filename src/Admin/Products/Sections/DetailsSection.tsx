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
  const [brandOptions, setBrandOptions] = React.useState<BrandOption[]>([]);
  const [modelOptions, setModelOptions] = React.useState<ModelOption[]>([]);
  const [brandsLoading, setBrandsLoading] = React.useState(false);
  const [modelsLoading, setModelsLoading] = React.useState(false);
  const [lookupError, setLookupError] = React.useState("");
  const brandModelOptional = !product.isBikeSpecific;

  React.useEffect(() => {
    let isCurrent = true;

    setBrandsLoading(true);
    setLookupError("");
    getAdminBrands()
      .then((brands) => {
        if (isCurrent) {
          setBrandOptions(brands);
          setLookupError("");
        }
      })
      .catch(() => {
        if (isCurrent) setLookupError("Unable to load brands.");
      })
      .finally(() => {
        if (isCurrent) setBrandsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  React.useEffect(() => {
    let isCurrent = true;

    setModelOptions([]);
    setLookupError("");
    if (!product.brand) {
      return () => {
        isCurrent = false;
      };
    }

    setModelsLoading(true);
    getAdminModelsByBrand(product.brand)
      .then((models) => {
        if (isCurrent) {
          setModelOptions(models);
          setLookupError("");
        }
      })
      .catch(() => {
        if (isCurrent) setLookupError("Unable to load models for this brand.");
      })
      .finally(() => {
        if (isCurrent) setModelsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [product.brand]);

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  function updateBrand(brand: string) {
    updateField("brand", brand);
    updateField("model", "");
  }

  return (
    <SectionCard title="Product details" description="Catalog data and product flags.">
      <Field label="Product code">
        <TextInput
          value={product.productCode}
          onChange={(value) => updateField("productCode", value.toUpperCase())}
          error={Boolean(errors.productCode)}
          helperText={errors.productCode}
        />
      </Field>
      <Box sx={twoColumnSx}>
        <Field label={brandModelOptional ? "Brand (optional)" : "Brand"}>
          <SelectInput
            value={product.brand}
            onChange={updateBrand}
            error={Boolean(errors.brand)}
            helperText={
              errors.brand ||
              (brandModelOptional ? "Optional for universal products." : "")
            }
          >
            <option value="">
              {brandsLoading ? "Loading brands..." : "Select brand..."}
            </option>
            {brandOptions.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label={brandModelOptional ? "Model (optional)" : "Model"}>
          <SelectInput
            value={product.model}
            onChange={(value) => updateField("model", value)}
            disabled={!product.brand || modelsLoading}
            error={Boolean(errors.model)}
            helperText={
              errors.model ||
              lookupError ||
              (brandModelOptional ? "Optional for universal products." : "")
            }
          >
            <option value="">
              {modelsLoading
                ? "Loading models..."
                : product.brand
                  ? "Select model..."
                  : brandModelOptional
                    ? "Select a brand first, if needed"
                    : "Select a brand first"}
            </option>
            {modelOptions.map((model) => (
              <option key={model._id} value={model._id}>
                {model.name}
                {model.isActive === false ? " (Inactive)" : ""}
              </option>
            ))}
          </SelectInput>
        </Field>
      </Box>
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
              onChange={(event) => updateField("isNewArrival", event.target.checked)}
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
              onChange={(event) => updateField("isComingSoon", event.target.checked)}
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
