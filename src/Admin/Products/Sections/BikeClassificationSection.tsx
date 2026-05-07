import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductFieldType } from "../Types";
import { UPDATE_ACTIONS } from "../Constant";
import SectionCard from "@/Admin/Components/SectionCard";
import { useProductCms } from "../ProductCmsContext";

export default function BikeClassificationSection() {
  const { dispatchAction, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
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
          onClick={() => updateField("isBikeSpecific", true)}
        />
        <FitmentCard
          active={!product.isBikeSpecific}
          title="Universal Fit"
          description="Fits most motorcycles"
          onClick={() => updateField("isBikeSpecific", false)}
        />
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
