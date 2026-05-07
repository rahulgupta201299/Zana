import React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { useProductCms } from "../ProductCmsContext";
import { UPDATE_ACTIONS } from "../Constant";
import SectionCard from "@/Admin/Components/SectionCard";

export default function VisibilitySection() {
  const { dispatchAction, product } = useProductCms();

  function setActive(isActive: boolean) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, {
      field: "isActive",
      value: isActive,
    });
  }

  return (
    <SectionCard
      title="Visibility"
      description="Control whether this product is visible on the storefront."
    >
      <Box sx={switchCardSx}>
        <Box>
          <Typography sx={{ fontWeight: 850 }}>
            {product.isActive ? "Active product" : "Inactive product"}
          </Typography>
          <Typography sx={{ color: "#68717d", fontSize: "0.88rem" }}>
            {product.isActive
              ? "Visible to customers."
              : "Hidden from the storefront."}
          </Typography>
        </Box>
        <FormControlLabel
          control={
            <Switch
              checked={product.isActive}
              onChange={(event) => setActive(event.target.checked)}
            />
          }
          label={product.isActive ? "Active" : "Inactive"}
        />
      </Box>
    </SectionCard>
  );
}

const switchCardSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  p: 1.5,
  border: "1px solid #e2e8f0",
  borderRadius: 2,
};
