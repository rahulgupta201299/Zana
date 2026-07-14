import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { TAppDispatch } from "@/Configurations/AppStore";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import { encodedGeneratedPath } from "@/Utils/global";
import { ROUTES } from "@/Constants/Routes";
import useCart from "@/hooks/useCart";
import Products from "@/components/Product";
import withDeviceDetails, { IWithDeviceDetails } from "@/Hocs/withDeviceDetails";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export type BikeKitProduct = ShopByProductDetailsType;

type OwnProps = {
  /** Brand name shown in accent colour inside the hero card */
  brandName: string;
  /** Model name shown in white below the brand name */
  modelName: string;
  /** Hero image URL; falls back to a gradient swatch when not provided */
  heroImageUrl?: string;
  /** Up to 3 products shown as small cards in the grid */
  products: BikeKitProduct[];
  /** Source tag forwarded to product-detail breadcrumb state */
  source?: string;
  /** Image position for desktop layout */
  imagePosition?: "left" | "right";
  /** Optional prop to show/hide wishlist icon (defaults to false meaning wishlist is hidden) */
  hideWishlistIcon?: boolean;
};

type Props = OwnProps & IWithDeviceDetails;

// ─── Catalogue tile ───────────────────────────────────────────────────────────

function CatalogueTile({
  modelName,
  minHeight,
}: {
  modelName: string;
  minHeight: number | string;
}) {
  return (
    <Box
      // onClick={item.onClick}
      sx={{
        minHeight,
        height: "100%",
        cursor: "pointer",
        bgcolor: "rgba(255,255,255,0.04)",
        border: "1px dashed rgba(255,255,255,0.18)",
        borderRadius: 3,
        p: { xs: 2.5, sm: 3 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "border-color 0.25s, background 0.25s",
        "&:hover": {
          borderColor: "rgba(255,255,255,0.45)",
          bgcolor: "rgba(255,255,255,0.07)",
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
        FULL CATALOGUE
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
        Sell all {modelName} products
      </Typography>
      {/* <Typography
        sx={{
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.6,
        }}
      >
        {item.subtitle}
      </Typography> */}
    </Box>
  );
}

// ─── Hero card ────────────────────────────────────────────────────────────────

function HeroCard({
  brandName,
  modelName,
  heroImageUrl,
  minHeight,
}: {
  brandName: string;
  modelName: string;
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
      {/* Watermark model text */}
      <Typography
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: 12, md: 20 },
          left: { xs: 14, md: 24 },
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
        {modelName}
      </Typography>

      {/* Hero image */}
      {heroImageUrl && (
        <Box
          component="img"
          src={heroImageUrl}
          alt={`${brandName} ${modelName}`}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
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

      {/* Brand + Model text */}
      <Box sx={{ position: "relative", p: { xs: 2.5, sm: 3.5 }, zIndex: 2 }}>
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
          {brandName}
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
          {modelName}
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function BikeKitItem({
  brandName,
  modelName,
  heroImageUrl,
  products,
  source = "bike-kit",
  imagePosition = "left",
  hideWishlistIcon = true,
  isMobile,
}: Props) {
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { phoneNumber = "" } = useSelector(getLoginDetails);
  const { incrementToCart, getQuantity } = useCart();

  const [wishlistMap, setWishlistMap] = useState<Record<string, boolean>>({});

  // ── Handlers ──────────────────────────────────────────────────────────────

  function handleProductClick(product: ShopByProductDetailsType) {
    navigate(
      encodedGeneratedPath(ROUTES.PRODUCT_DETAIL, {
        productCategory: product.category,
        productItem: product.name,
        productId: product._id,
      }),
      { state: { source } },
    );
  }

  async function handleWishList(
    e: React.MouseEvent,
    product: ShopByProductDetailsType,
  ) {
    e.stopPropagation();
    const { _id: productId, isWishlist } = product;
    const currentValue = wishlistMap[productId] ?? isWishlist;

    if (!phoneNumber) {
      enqueueSnackbar({
        message: "Login required to save products to your wishlist.",
        variant: "info",
      });
      dispatch(setOpenSignupPopup(true));
      return;
    }

    setWishlistMap((prev) => ({ ...prev, [productId]: !currentValue }));

    try {
      const action = currentValue
        ? removeWishlistServiceAction({ phoneNumber, productIds: [productId] })
        : addWishListServiceAction({ phoneNumber, productIds: [productId] });

      const result = await dispatch(action);
      if (result) {
        enqueueSnackbar({
          message: currentValue ? "Removed from wishlist" : "Added to wishlist",
          variant: currentValue ? "info" : "success",
        });
      }
    } catch {
      setWishlistMap((prev) => ({ ...prev, [productId]: currentValue }));
    }
  }

  function handleAddToCart(
    e: React.MouseEvent,
    product: ShopByProductDetailsType,
  ) {
    e.stopPropagation();
    incrementToCart(product, product._id, product.quantityAvailable);
  }

  // ── Layout constants ──────────────────────────────────────────────────────

  // Show up to 3 real products; 4th tile is the optional catalogue card.
  const visibleProducts = products.slice(0, 3);

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
              brandName={brandName}
              modelName={modelName}
              heroImageUrl={heroImageUrl}
              minHeight={heroMinHeight}
            />
          </Grid>

          {/* 2×2 product / catalogue grid */}
          <Grid size={{ md: 6, lg: 6 }}>
            <Grid container spacing={1.5} sx={{ height: "100%" }}>
              {visibleProducts.map((product, index) => (
                <Grid
                  key={product._id}
                  size={{ xs: 12, sm: 6 }}
                  sx={{ display: "flex" }}
                >
                  <Products
                    product={product}
                    quantityAddedInCart={getQuantity(product._id)}
                    isWishlisted={wishlistMap[product._id] ?? product.isWishlist}
                    priority={index === 0}
                    hideWishlistIcon={hideWishlistIcon}
                    onProductClick={() => handleProductClick(product)}
                    onAddToCart={(e) => handleAddToCart(e, product)}
                    onWishList={(e) => handleWishList(e, product)}
                  />
                </Grid>
              ))}

              {/* Catalogue tile */}
              <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                <Box sx={{ width: "100%" }}>
                  <CatalogueTile
                    modelName={modelName}
                    minHeight={cardMinHeight}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* ── Mobile / Tablet portrait layout: stacked ── */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 1.5 }}>
        {/* Hero */}
        <HeroCard
          brandName={brandName}
          modelName={modelName}
          heroImageUrl={heroImageUrl}
          minHeight={heroMinHeight}
        />

        {/* Products — 2-col grid on tablet portrait, 1-col on mobile */}
        <Grid container spacing={1.5}>
          {visibleProducts.map((product, index) => (
            <Grid
              key={product._id}
              size={{ xs: 12, sm: 6 }}
              sx={{ display: "flex" }}
            >
              <Products
                product={product}
                quantityAddedInCart={getQuantity(product._id)}
                isWishlisted={wishlistMap[product._id] ?? product.isWishlist}
                priority={index === 0}
                hideWishlistIcon={hideWishlistIcon}
                onProductClick={() => handleProductClick(product)}
                onAddToCart={(e) => handleAddToCart(e, product)}
                onWishList={(e) => handleWishList(e, product)}
              />
            </Grid>
          ))}

          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%" }}>
              <CatalogueTile
                modelName={modelName}
                minHeight={isMobile ? 160 : 200}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default withDeviceDetails(BikeKitItem);
