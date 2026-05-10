import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SectionCard from "@/Admin/Components/SectionCard";
import { Field, SelectInput } from "@/Admin/Components/Field";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";
import { UPDATE_ACTIONS } from "../Constant";
import {
  type BrandOption,
  getAdminBrands,
  getAdminModelsByBrand,
  type ModelOption,
} from "../ProductApi";

export default function BikeClassificationSection() {
  const { dispatchAction, product, errors } = useProductCms();
  const [brandOptions, setBrandOptions] = React.useState<BrandOption[]>([]);
  const [modelOptions, setModelOptions] = React.useState<ModelOption[]>([]);
  const [brandsLoading, setBrandsLoading] = React.useState(false);
  const [modelsLoading, setModelsLoading] = React.useState(false);
  const [lookupError, setLookupError] = React.useState("");

  const isUniversal = !product.isBikeSpecific;

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

  function setBikeSpecific(isBikeSpecific: boolean) {
    const classificationChanged = product.isBikeSpecific !== isBikeSpecific;

    updateField("isBikeSpecific", isBikeSpecific);

    if (!isBikeSpecific) {
      updateField("brand", "");
      updateField("model", "");
    }

    if (classificationChanged) {
      updateField("subCategory", "");
    }
  }

  return (
    <SectionCard
      title="Bike Classification"
      description="Define whether this product is model-specific or universal."
    >
      <Box sx={choiceGridSx}>
        <FitmentCard
          active={product.isBikeSpecific}
          title="Bike Specific"
          description="Only for the selected brand and model"
          onClick={() => setBikeSpecific(true)}
        />
        <FitmentCard
          active={!product.isBikeSpecific}
          title="Universal Fit"
          description="Fits most motorcycles"
          onClick={() => setBikeSpecific(false)}
        />
      </Box>

      <Box sx={twoColumnSx}>
        <Field label="Brand">
          <SelectInput
            value={product.brand}
            onChange={updateBrand}
            disabled={isUniversal}
            error={Boolean(errors.brand)}
            helperText={
              errors.brand ||
              (!isUniversal ? "Required for bike-specific products." : "")
            }
            sx={{ opacity: isUniversal ? 0.45 : 1 }}
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

        <Field label="Model">
          <SelectInput
            value={product.model}
            onChange={(value) => updateField("model", value)}
            disabled={isUniversal || !product.brand || modelsLoading}
            error={Boolean(errors.model)}
            helperText={
              errors.model ||
              lookupError ||
              (!isUniversal ? "Required for bike-specific products." : "")
            }
            sx={{ opacity: isUniversal || !product.brand ? 0.45 : 1 }}
          >
            <option value="">
              {modelsLoading
                ? "Loading models..."
                : product.brand
                  ? "Select model..."
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
    </SectionCard>
  );
}

function FitmentCard({
  active,
  title,
  description,
  onClick,
}: {
  active: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="outlined"
      type="button"
      onClick={onClick}
      sx={{
        justifyContent: "flex-start",
        minHeight: 74,
        borderColor: active ? "#111827" : "#d8e0e8",
        borderWidth: active ? 2 : 1,
        color: "#273142",
        textAlign: "left",
        p: 1.75,
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 850 }}>{title}</Typography>
        <Typography sx={{ color: "#68717d", fontSize: "0.84rem" }}>
          {description}
        </Typography>
      </Box>
    </Button>
  );
}

const choiceGridSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
  gap: 1.5,
};

const twoColumnSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: 1.5,
};
