
import { Box, Card, CardContent, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { Heart, ShoppingCart } from "lucide-react";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { getProductImageProps, IMAGE_WIDTH_PRESETS } from "@/Utils/ImageUtils";

type Props = {
  product: ShopByProductDetailsType;
  quantityAddedInCart: number;
  isWishlisted: boolean;
  onProductClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  onWishList: (e: React.MouseEvent) => void;
  priority?: boolean;
};

export default function Products({
  product,
  quantityAddedInCart,
  isWishlisted,
  onProductClick,
  onAddToCart,
  onWishList,
  priority = false,
}: Props) {
  const { _id, category, name, shortDescription, imageUrl, isBikeSpecific, price, currencySymbol, quantityAvailable, isComingSoon } = product;
  const isDisabled = quantityAddedInCart >= quantityAvailable;
  const imageProps = getProductImageProps(
    imageUrl,
    [...IMAGE_WIDTH_PRESETS.productCard],
    480,
  );

  return (
    <Card
      onClick={onProductClick}
      sx={{
        height: "100%",
        cursor: "pointer",
        bgcolor: "rgba(255,255,255,0.05)",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
        "&:hover": { borderColor: "#facc15" },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative", flexShrink: 0, p: "8px" }}>
        <Box
          component="img"
          {...imageProps}
          alt={name}
          data-original-src={imageUrl}
          sizes="(min-width: 1024px) 298px, (min-width: 640px) 33vw, 50vw"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={(event: any) => {
            const originalSrc = event.currentTarget.dataset.originalSrc;

            if (
              originalSrc &&
              event.currentTarget.dataset.fallbackApplied !== "true"
            ) {
              event.currentTarget.removeAttribute("srcset");
              event.currentTarget.dataset.fallbackApplied = "true";
              event.currentTarget.src = originalSrc;
              return;
            }

            event.currentTarget.src = BikePlaceholderImage;
          }}
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "contain",
            borderRadius: "8px",
            display: "block",
            transition: "transform 0.3s",
            ".MuiCard-root:hover &": { transform: "scale(1.1)" },
            filter: quantityAvailable === 0 ? "grayscale(100%)" : "none",
            opacity: quantityAvailable === 0 ? 0.6 : 1,
          }}
        />

        {quantityAvailable === 0 && (
          <Box sx={{
            position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
            bgcolor: "#fff", px: 2, py: 0.5, borderRadius: "4px", fontWeight: 600,
            fontSize: "0.85rem", color: "#ff5722", whiteSpace: "nowrap", zIndex: 2,
          }}>
            {isComingSoon ? "COMING SOON" : "OUT OF STOCK"}
          </Box>
        )}

        {isBikeSpecific && (
          <Chip label="FEATURED" size="small" sx={{
            position: "absolute", top: 8, right: 8, bgcolor: "#facc15",
            color: "black", fontSize: "0.75rem", fontWeight: "bold", borderRadius: "999px", px: 1,
          }} />
        )}
        {!isBikeSpecific && (
          <Chip label="UNIVERSAL" size="small" sx={{
            position: "absolute", top: 8, left: 8, bgcolor: "primary.main",
            color: "white", fontSize: "0.75rem", fontWeight: "bold", borderRadius: "999px", px: 1,
          }} />
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ p: { xs: 1.5, md: 2 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography
          variant="caption"
          color="#facc15"
          sx={{ display: "block", textAlign: "left" }}
        >
          {category}
        </Typography>

        <Typography variant="h6" component="h3" sx={{
          color: "white",
          fontWeight: "bold",
          mb: 0.5,
          fontSize: { xs: "0.85rem", md: "1rem" },
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textAlign: "left",
        }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{
          color: "rgba(255,255,255,0.6)",
          mb: 1,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          fontSize: { xs: "0.75rem", md: "0.875rem" },
          textAlign: "left",
        }}>
          {shortDescription}
        </Typography>


        <Box display="flex" justifyContent="space-between" alignItems="center" mt="auto" gap={1}>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "#facc15",
              fontWeight: "bold",
              fontSize: { xs: "0.85rem", md: "1rem" },
              textAlign: "left",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {currencySymbol}{" "}
            {price?.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>

          <Box sx={{ display: "flex", gap: "8px", flexShrink: 0 }}>
            <IconButton
              onClick={onWishList}
              aria-label={`Add ${name} to wishlist`}
              sx={{
                width: { xs: 28, md: 36 }, height: { xs: 28, md: 36 }, borderRadius: 2,
                color: isWishlisted ? "black" : "white",
                bgcolor: isWishlisted ? "#FACC15" : "rgba(255,255,255,0.1)",
                transition: "all 0.2s",
                "&:hover": { bgcolor: "#FACC15", color: "black" },
              }}
            >
              <Heart size={14} className="md:w-4 md:h-4" />
            </IconButton>

            <Box position="relative">
              <Tooltip title="Out of stock" arrow disableHoverListener={!isDisabled}>
                <span>
                  <IconButton
                    onClick={onAddToCart}
                    aria-label={`Add ${name} to cart`}
                    sx={{
                      width: { xs: 28, md: 36 }, height: { xs: 28, md: 36 }, borderRadius: 2,
                      bgcolor: "#facc15", color: "black",
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      opacity: isDisabled ? 0.5 : 1, pointerEvents: "auto",
                      transition: "all 0.2s",
                      "&:hover": { bgcolor: isDisabled ? "#facc15" : "#EAB308" },
                    }}
                  >
                    <ShoppingCart fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>

              {quantityAddedInCart > 0 && (
                <Box sx={{
                  position: "absolute", top: -4, right: -4,
                  minWidth: 18, height: 18, px: "5px",
                  bgcolor: "error.main", color: "white", fontSize: 11,
                  fontWeight: "bold", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
                }}>
                  {quantityAddedInCart}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
