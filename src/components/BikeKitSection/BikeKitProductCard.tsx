import { Box, Typography } from "@mui/material";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";

type Props = {
  product: ShopByProductDetailsType;
  onProductClick: () => void;
};

export default function BikeKitProductCard({
  product,
  onProductClick,
}: Props) {
  const { category, name, shortDescription } = product;

  return (
    <Box
      onClick={onProductClick}
      sx={{
        height: "100%",
        cursor: "pointer",
        bgcolor: "#17191e",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 2,
        p: { xs: 2.5, sm: 3 },
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        transition: "border-color 0.25s, background 0.25s",
        "&:hover": {
          borderColor: "rgba(255,255,255,0.2)",
          bgcolor: "#1a1d24",
        },
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.4)",
            mb: 1.5,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          {category}
        </Typography>

        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: "1.15rem", sm: "1.25rem" },
            fontWeight: 600,
            color: "rgba(255,255,255,0.95)",
            mb: 1.5,
            fontFamily: "'Georgia', serif",
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {shortDescription}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, alignItems: "center" }}>
        {/* We are skipping the price part as requested */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 600,
            textTransform: "uppercase",
            transition: "color 0.25s",
            fontFamily: "'Inter', sans-serif",
            "&:hover": { color: "rgba(255,255,255,0.9)" },
          }}
        >
          VIEW →
        </Typography>
      </Box>
    </Box>
  );
}
