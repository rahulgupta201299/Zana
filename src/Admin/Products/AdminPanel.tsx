import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import DetailsSection from "./Sections/DetailsSection";
import HeroSection from "./Sections/HeroSection";
import HighlightsSection from "./Sections/HighlightsSection";
import BikeClassificationSection from "./Sections/BikeClassificationSection";
import CategorySection from "./Sections/CategorySection";
import PricingInventorySection from "./Sections/PricingInventorySection";
import ProductPhotosSection from "./Sections/ProductPhotosSection";
import ShippingSection from "./Sections/ShippingSection";
import SpecsSection from "./Sections/SpecsSection";
import VisibilitySection from "./Sections/VisibilitySection";
import { useProductCms } from "./ProductCmsContext";
import ProductWorkflowBar from "./Sections/ProductWorkflowBar";
import { CmsSectionId } from "./Constant";
import SectionNavigation from "./Sections/SectionNavigation";
import { Drawer, IconButton, Typography } from "@mui/material";
import PreviewPanel from "./PreviewPanel";
import CloseIcon from "@mui/icons-material/Close";

export default function AdminPanel() {
  const { activeSection, errors } = useProductCms();
  const section = sectionRenderers[activeSection] || sectionRenderers.core;
  const errorCount = Object.keys(errors).length;
  const [previewOpen, setPreviewOpen] = React.useState(false);

  return (
    <Box
      component="aside"
      aria-label="Product CMS controls"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <ProductWorkflowBar showPreview={() => setPreviewOpen(true)} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "200px minmax(0, 1fr)" },
          gap: 2,
          alignItems: "start",
        }}
      >
        <SectionNavigation />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {errorCount ? (
            <Alert severity="warning">
              {errorCount} validation issue{errorCount > 1 ? "s" : ""} need attention.
            </Alert>
          ) : null}
          {section}
        </Box>
      </Box>
       <Drawer
        anchor="right"
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        slotProps={{
          paper: {
            sx: { width: { xs: "100%", sm: 520, md: 720 } },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid",
            borderColor: "divider",
            position: "sticky",
            top: 0,
            bgcolor: "background.paper",
            zIndex: 1,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700}>
            Product Preview
          </Typography>
          <IconButton onClick={() => setPreviewOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ overflowY: "auto", height: "100%" }}>
          <PreviewPanel />
        </Box>
      </Drawer>
    </Box>
  );
}

const sectionRenderers: Record<CmsSectionId, React.ReactNode> = {
  core: (
    <>
      <HeroSection />
      <DetailsSection />
    </>
  ),
  classification: <BikeClassificationSection />,
  categories: <CategorySection />,
  photos: <ProductPhotosSection />,
  content: (
    <>
      <HighlightsSection />
      <SpecsSection />
    </>
  ),
  pricing: <PricingInventorySection />,
  shipping: <ShippingSection />,
  visibility: <VisibilitySection />,
};
