import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useProductCms } from "./ProductCmsContext";

function formatPrice(value: number, currencyCode = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode || "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

export default function PreviewPanel() {
  const { product } = useProductCms();
  const [activeImage, setActiveImage] = React.useState(product.imageUrl);
  const previewImages = [product.imageUrl, ...product.images].filter(Boolean);

  React.useEffect(() => {
    setActiveImage(product.imageUrl || product.images[0] || "");
  }, [product.imageUrl, product.images]);

  return (
    <Box
      component="section"
      aria-label="Storefront image preview"
      sx={{ position: "static", alignSelf: "start" }}
    >
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1.75,
          borderColor: "#d8dde3",
          borderRadius: 2,
          boxShadow: "0 18px 50px rgba(24, 31, 38, 0.08)",
          px: 1.75,
          py: 1.5,
        }}
      >
        <Typography sx={{ color: "#68717d", fontSize: "0.9rem" }}>
          Storefront product preview
        </Typography>
        <Chip
          label={product.isActive ? "Active" : "Inactive"}
          size="small"
          sx={{
            bgcolor: product.isActive ? "#e7f4ef" : "#f1f5f9",
            color: product.isActive ? "#1b6b55" : "#64748b",
            fontSize: "0.72rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        />
      </Paper>

      <Paper
        component="article"
        variant="outlined"
        sx={{
          overflow: "hidden",
          borderColor: "#111",
          borderRadius: 1,
          bgcolor: "#181818",
          boxShadow: "0 18px 50px rgba(24, 31, 38, 0.16)",
          p: { xs: 1.5, md: 2.5 },
        }}
      >
        <Box sx={thumbnailRailSx}>
          {previewImages.map((imageUrl, index) => {
            const active = imageUrl === activeImage;

            return (
              <Box
                key={`${imageUrl}-${index}`}
                component="button"
                type="button"
                onClick={() => setActiveImage(imageUrl)}
                sx={{
                  ...thumbnailButtonSx,
                  borderColor: active ? "#f8fafc" : "#4b5563",
                }}
              >
                <Box
                  component="img"
                  src={imageUrl}
                  alt={`${product.name || "Product"} thumbnail ${index + 1}`}
                  sx={thumbnailImageSx}
                />
              </Box>
            );
          })}
        </Box>

        <Box sx={mainPreviewSx}>
          {activeImage ? (
            <Box
              component="img"
              src={activeImage}
              alt={product.name || "Product image"}
              sx={mainImageSx}
            />
          ) : (
            <Typography sx={{ color: "#94a3b8", textAlign: "center" }}>
              Upload a main image to see the storefront preview.
            </Typography>
          )}
        </Box>
      </Paper>

      <Paper
        variant="outlined"
        sx={{
          mt: 2,
          borderColor: "#d8dde3",
          borderRadius: 2,
          boxShadow: "0 18px 50px rgba(24, 31, 38, 0.08)",
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
            {product.isNewArrival ? <Chip label="New arrival" size="small" /> : null}
            {product.isGarageFavorite ? (
              <Chip label="Garage favorite" size="small" color="secondary" />
            ) : null}
            {product.isComingSoon ? (
              <Chip label="Coming soon" size="small" color="warning" />
            ) : null}
            <Chip
              label={product.quantityAvailable > 0 ? "In stock" : "Out of stock"}
              size="small"
              color={product.quantityAvailable > 0 ? "success" : "default"}
            />
          </Box>

          <Typography
            sx={{
              color: "#8a4b24",
              fontSize: "0.78rem",
              fontWeight: 850,
              textTransform: "uppercase",
              mb: 0.75,
            }}
          >
            {product.category || "Product"}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.9rem", md: "2.5rem" },
              lineHeight: 1.08,
              fontWeight: 900,
              color: "#111827",
            }}
          >
            {product.name || "Untitled product"}
          </Typography>

          <Typography sx={{ mt: 1.5, color: "#4b5563", fontSize: "1rem" }}>
            {product.shortDescription ||
              "Product description will appear here as the admin fills it."}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.25, mt: 2.5 }}>
            <Typography sx={{ color: "#111827", fontSize: "2rem", fontWeight: 900 }}>
              {formatPrice(product.price, product.currency)}
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "0.86rem" }}>
              {product.currency} · {product.currencySymbol}
            </Typography>
          </Box>

          <Box sx={metaGridSx}>
            <InfoTile label="Product code" value={product.productCode || "-"} />
            <InfoTile label="Brand" value={product.brand || "-"} />
            <InfoTile label="Model" value={product.model || "-"} />
            <InfoTile
              label="Category"
              value={`${product.category || "-"} / ${product.subCategory || "-"}`}
            />
            <InfoTile
              label="Fitment"
              value={product.isBikeSpecific ? "Bike specific" : "Universal fit"}
            />
            <InfoTile label="Stock" value={`${product.quantityAvailable || 0} units`} />
            <InfoTile label="Priority" value={product.priority || "0"} />
          </Box>

          {product.longDescription ? (
            <>
              <Divider sx={{ my: 2.5 }} />
              <Typography sx={sectionTitleSx}>Description</Typography>
              <Typography sx={paragraphSx}>{product.longDescription}</Typography>
            </>
          ) : null}

          {product.specifications ? (
            <>
              <Divider sx={{ my: 2.5 }} />
              <Typography sx={sectionTitleSx}>Specifications</Typography>
              <Typography sx={paragraphSx}>{product.specifications}</Typography>
            </>
          ) : null}

          <Divider sx={{ my: 2.5 }} />
          <Typography sx={sectionTitleSx}>Shipping & Returns</Typography>
          {product.shippingAndReturn ? (
            <Typography sx={paragraphSx}>{product.shippingAndReturn}</Typography>
          ) : null}
        </Box>
      </Paper>
    </Box>
  );
}

function InfoTile({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Box sx={infoTileSx}>
      <Typography sx={infoLabelSx}>{label}</Typography>
      <Typography sx={{ color: "#111827", fontWeight: 800 }}>{value}</Typography>
    </Box>
  );
}

const thumbnailRailSx = {
  display: "flex",
  gap: { xs: 1.25, md: 2 },
  overflowX: "auto",
  pb: 2,
};

const thumbnailButtonSx = {
  flex: "0 0 auto",
  width: { xs: 92, sm: 118, md: 142 },
  height: { xs: 92, sm: 118, md: 142 },
  border: "3px solid",
  borderRadius: 1.25,
  bgcolor: "#111",
  p: 1,
  cursor: "pointer",
};

const thumbnailImageSx = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const mainPreviewSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: { xs: 360, md: 600 },
  bgcolor: "#181818",
};

const mainImageSx = {
  display: "block",
  width: "min(100%, 820px)",
  maxHeight: { xs: 460, md: 720 },
  objectFit: "contain",
};

const metaGridSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: 1.25,
  mt: 2.5,
};

const infoTileSx = {
  p: 1.4,
  border: "1px solid #e2e8f0",
  borderRadius: 2,
  bgcolor: "#f8fafb",
};

const infoLabelSx = {
  mb: 0.4,
  color: "#64748b",
  fontSize: "0.74rem",
  fontWeight: 850,
  textTransform: "uppercase",
};

const sectionTitleSx = {
  mb: 1,
  color: "#111827",
  fontSize: "1rem",
  fontWeight: 900,
};

const paragraphSx = {
  color: "#374151",
  whiteSpace: "pre-line",
  lineHeight: 1.7,
};
