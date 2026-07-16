import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { encodedGeneratedPath } from "@/Utils/global";
import { ROUTES } from "@/Constants/Routes";
import ShowcaseProductCard from "./ShowcaseCatalogueCard";
import withDeviceDetails, { IWithDeviceDetails } from "@/Hocs/withDeviceDetails";
import { CatalogueItem } from "@/Redux/Landing/Types";

// ─── Types ───────────────────────────────────────────────────────────────────

type OwnProps = {
  /** Tag shown in accent colour inside the hero card */
  tag: string;
  /** Title shown in white below the tag */
  title: string;
  /** Hero image URL; falls back to a gradient swatch when not provided */
  heroImageUrl?: string;
  /** Up to 3 products shown as small cards in the grid */
  catalogue: CatalogueItem[];
  /** Source tag forwarded to product-detail breadcrumb state */
  source?: string;
  /** Image position for desktop layout */
  imagePosition?: "left" | "right";
  type: "product" | "bike";
  brandName?: string;
  modelName?: string;
  model?: string;
};

type Props = OwnProps & IWithDeviceDetails;

// ─── Catalogue tile ───────────────────────────────────────────────────────────

function CatalogueTile({
  onClick,
  minHeight,
}: {
  onClick: () => void;
  minHeight: number | string;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        minHeight,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        bgcolor: "#17191e",
        border: "1px dashed rgba(255,255,255,0.18)",
        borderRadius: 2,
        p: { xs: 2.5, sm: 3 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        transition: "border-color 0.25s, background 0.25s",
        "&:hover": {
          borderColor: "rgba(255,255,255,0.45)",
          bgcolor: "#1a1d24",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.45)",
          mb: 1,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        FULL RANGE
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1.15rem", sm: "1.3rem" },
          fontStyle: "italic",
          fontWeight: 700,
          color: "rgba(255,255,255,0.92)",
          lineHeight: 1.35,
          mb: 1.5,
          fontFamily: "'Georgia', serif",
        }}
      >
        View Catalogue →
      </Typography>
    </Box>
  );
}

// ─── Hero card ────────────────────────────────────────────────────────────────

function HeroCard({
  tag,
  title,
  heroImageUrl,
  minHeight,
}: {
  tag: string;
  title: string;
  heroImageUrl?: string;
  minHeight: number | string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight,
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        bgcolor: "#1c1c1e",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      {/* Watermark text */}
      <Typography
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: 12, md: 20 },
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: { xs: "clamp(2.5rem, 10vw, 5.5rem)", md: "clamp(3rem, 7vw, 5.5rem)" },
          fontWeight: 700,
          lineHeight: 1,
          color: "rgba(255,255,255,0.06)",
          userSelect: "none",
          letterSpacing: "0.02em",
          pointerEvents: "none",
        }}
      >
        {title}
      </Typography>


      {/* Hero image */}
      {heroImageUrl && (
        <Box
          component="img"
          src={heroImageUrl}
          alt={`${tag} ${title}`}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      )}

      {/* Bottom gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Tag + Title text */}
      <Box sx={{ position: "relative", p: { xs: 3, sm: 4.5 }, zIndex: 2, textAlign: "center", width: "100%" }}>
        <Typography
          sx={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            color: "#C0392B",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            mb: 0.75,
          }}
        >
          {tag}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: "rgba(255,255,255,0.92)",
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function ShowcaseItem({
  tag,
  title,
  heroImageUrl,
  catalogue = [],
  imagePosition = "left",
  isMobile,
  type,
  brandName = "",
  modelName = "",
  model = ""
}: Props) {
  const navigate = useNavigate();

  // ── Handlers ──────────────────────────────────────────────────────────────

  function handleBoxClick(category = "", subCategory = "") {
    if (type === "product") {
      navigate(
        encodedGeneratedPath(ROUTES.PRODUCT_CATALOG_WITH_CATEGORY, { productCategory: category }), { 
          state: { 
            category: category.toLowerCase(),
            subCategory: subCategory.toLowerCase()
          }
        },
      );
      return;
    }
    if (type === "bike") {
      // TODO hardcoded types
      navigate(
        encodedGeneratedPath(ROUTES.BIKE_DETAIL_WITH_CATEGORY, {
          bikeType: 'zana',
          bikeBrand: brandName,
          bikeModel: modelName,
          bikeId: model,
          productCategory: category
        }), {
          state: { 
            category: category.toLowerCase(),
            subCategory: subCategory.toLowerCase()
          }
        }
      )
      return;
    }
  }

  function handleViewCatalogue() {
    if (type === "product") {
      const firstCategory = catalogue?.[0]?.category?.toLowerCase() || "";
      navigate(
        encodedGeneratedPath(ROUTES.PRODUCT_CATALOG_WITH_CATEGORY, { productCategory: firstCategory }), { 
          state: { 
            category: firstCategory,
          }
        },
      );
      return;
    }

    // TODO hardcoded types
    if (type === "bike") {
      navigate(
        encodedGeneratedPath(ROUTES.BIKE_DETAIL, {
          bikeType: 'zana',
          bikeBrand: brandName,
          bikeModel: modelName,
          bikeId: model,
        })
      )
      return;
    }
  }

  // ── Layout constants ──────────────────────────────────────────────────────

  const cardMinHeight = isMobile ? 180 : 210;
  const heroMinHeight = isMobile ? 340 : 440;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <Box sx={{ width: "100%" }}>
      {/* ── Desktop / Tablet Landscape layout: hero left, grid right ── */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={1.5} alignItems="stretch" direction={imagePosition === "right" ? "row-reverse" : "row"}>
          {/* Hero card — spans full column height */}
          <Grid size={{ md: 6, lg: 6 }} sx={{ display: "flex" }}>
            <HeroCard
              tag={tag}
              title={title}
              heroImageUrl={heroImageUrl}
              minHeight={heroMinHeight}
            />
          </Grid>

          {/* 2×2 product / catalogue grid */}
          <Grid size={{ md: 6, lg: 6 }}>
            <Grid container spacing={1.5} sx={{ height: "100%" }}>
              {catalogue.map((cat, index) => (
                <Grid
                  key={index}
                  size={{ xs: 6 }}
                  sx={{ display: "flex" }}
                >
                  <ShowcaseProductCard
                    details={cat}
                    onProductClick={() => handleBoxClick(cat.category, cat.subCategory)}
                  />
                </Grid>
              ))}

              {/* Catalogue tile */}
              <Grid size={{ xs: 6 }} sx={{ display: "flex" }}>
                <CatalogueTile
                  onClick={handleViewCatalogue}
                  minHeight={cardMinHeight}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* ── Mobile / Tablet portrait layout: stacked ── */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 1.5 }}>
        {/* Hero */}
        <HeroCard
          tag={tag}
          title={title}
          heroImageUrl={heroImageUrl}
          minHeight={heroMinHeight}
        />

        {/* Products — 2-col grid on tablet portrait and mobile */}
        <Grid container spacing={1.5}>
          {catalogue.map((cat, index) => (
            <Grid
              key={index}
              size={{ xs: 6 }}
              sx={{ display: "flex" }}
            >
              <ShowcaseProductCard
                details={cat}
                onProductClick={() => handleBoxClick(cat.category, cat.subCategory)}
              />
            </Grid>
          ))}

          <Grid size={{ xs: 6 }} sx={{ display: "flex" }}>
            <CatalogueTile
              onClick={handleViewCatalogue}
              minHeight={isMobile ? 160 : 200}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default withDeviceDetails(ShowcaseItem);
