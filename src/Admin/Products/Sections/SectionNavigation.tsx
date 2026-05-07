import React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CmsSectionId, UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";

export type CmsSection = `${CmsSectionId}`;

export const cmsSections: Array<{ id: CmsSection; label: string }> = [
  { id: CmsSectionId.Core, label: "Core Info" },
  { id: CmsSectionId.Classification, label: "Bike Classification" },
  { id: CmsSectionId.Categories, label: "Categories" },
  { id: CmsSectionId.Photos, label: "Photos" },
  { id: CmsSectionId.Content, label: "Highlights & Specs" },
  { id: CmsSectionId.Pricing, label: "Pricing & Stock" },
  { id: CmsSectionId.Shipping, label: "Shipping" },
  { id: CmsSectionId.Visibility, label: "Visibility" },
];

const sectionErrorPrefix: Record<CmsSection, string[]> = {
  core: ["productCode", "brand", "model", "name", "shortDescription"],
  classification: ["isBikeSpecific"],
  categories: ["category", "subCategory"],
  photos: ["imageUrl", "images"],
  content: ["longDescription", "specifications"],
  pricing: ["price", "currency", "priority", "quantityAvailable"],
  shipping: ["shippingAndReturn"],
  visibility: ["isActive"],
};

export default function SectionNavigation() {
  const { activeSection, dispatchAction, errors } = useProductCms();

  return (
    <Paper
      variant="outlined"
      sx={{
        borderColor: "#d8dde3",
        borderRadius: 2,
        boxShadow: "0 18px 50px rgba(24, 31, 38, 0.08)",
        p: 1,
      }}
    >
      <Box sx={{ display: "grid", gap: 0.5 }}>
        {cmsSections.map((section) => {
          const hasSectionError = Object.keys(errors).some((key) => {
            const prefixes = sectionErrorPrefix[section.id] || [section.id];
            return prefixes.some((prefix: string) => key.startsWith(prefix));
          });
          const active = activeSection === section.id;

          return (
            <ButtonBase
              key={section.id}
              onClick={() =>
                dispatchAction(UPDATE_ACTIONS.SET_ACTIVE_SECTION, {
                  section: section.id,
                })
              }
              sx={{
                justifyContent: "flex-start",
                width: "100%",
                borderRadius: 1.5,
                px: 1.5,
                py: 1.15,
                bgcolor: active ? "#111827" : "transparent",
                color: active ? "#fff" : "#303844",
                border: hasSectionError
                  ? "1px solid #d97706"
                  : "1px solid transparent",
              }}
            >
              <Typography
                sx={{ fontSize: "0.9rem", fontWeight: active ? 850 : 650 }}
              >
                {section.label}
              </Typography>
            </ButtonBase>
          );
        })}
      </Box>
    </Paper>
  );
}
