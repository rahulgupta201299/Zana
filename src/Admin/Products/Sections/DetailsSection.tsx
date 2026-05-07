import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SectionCard from "@/Admin/Components/SectionCard";
import { Field, SelectInput, TextInput } from "@/Admin/Components/Field";
import { useProductCms } from "../ProductCmsContext";
import { ProductFieldType } from "../Types";
import { UPDATE_ACTIONS } from "../Constant";

const brandOptions = [
  { id: "69be7516111e9766e928d23d", name: "TVS" },
  { id: "69be7516111e9766e928d233", name: "Honda" },
  { id: "royal-enfield", name: "Royal Enfield" },
  { id: "ktm", name: "KTM" },
];

const modelOptionsByBrand: Record<string, Array<{ id: string; name: string }>> = {
  "69be7516111e9766e928d23d": [
    { id: "69bea3ebc222d7fdd0662a97", name: "Apache RTX 300" },
    { id: "apache-rr-310", name: "Apache RR 310" },
  ],
  "69be7516111e9766e928d233": [
    { id: "69bea3ebc222d7fdd0662a7b", name: "CB350 HIGHNESS" },
    { id: "cb350rs", name: "CB350RS" },
  ],
  "royal-enfield": [
    { id: "himalayan-450", name: "Himalayan 450" },
    { id: "classic-350", name: "Classic 350" },
  ],
  ktm: [
    { id: "adventure-390", name: "Adventure 390" },
    { id: "duke-390", name: "Duke 390" },
  ],
};

export default function DetailsSection() {
  const { dispatchAction, errors, product } = useProductCms();
  const modelOptions = modelOptionsByBrand[product.brand] || [];

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
        <Field label="Brand">
          <SelectInput
            value={product.brand}
            onChange={updateBrand}
            error={Boolean(errors.brand)}
            helperText={errors.brand}
          >
            <option value="">Select brand...</option>
            {brandOptions.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Model">
          <SelectInput
            value={product.model}
            onChange={(value) => updateField("model", value)}
            disabled={!product.brand}
            error={Boolean(errors.model)}
            helperText={errors.model}
          >
            <option value="">
              {product.brand ? "Select model..." : "Select a brand first"}
            </option>
            {modelOptions.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
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
