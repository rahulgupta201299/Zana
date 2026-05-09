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

export default function AdminPanel() {
  const { activeSection, errors } = useProductCms();
  const section = sectionRenderers[activeSection] || sectionRenderers.core;
  const errorCount = Object.keys(errors).length;

  return (
    <Box
      component="aside"
      aria-label="Product CMS controls"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <ProductWorkflowBar />

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
