import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/Constants/Routes";

const BrandStory = () => {

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "600px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundImage: "url('/uploads/b1dad550-3094-45b1-b41c-bc177002d6d0.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          textAlign: "left",
          color: "black",
          px: 8,
          py: 8,
          maxWidth: "400px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 2,
            whiteSpace: "nowrap",
            fontSize: "2.25rem",
            lineHeight: "2.5rem"
          }}
        >
          AUTUMN ADVENTURE SALE
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1.125rem", lineHeight: '1.75rem', mb: 4 }}>
          Get 15% off rugged, all-weather accessories <br />
          built for every season.
        </Typography>

        <Button
          variant="contained"
          sx={{
            position: "relative",
            background:
              "linear-gradient(-45deg, black 0%, black 50%, white 50%, white 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 0%",
            transition: "background-position 0.4s ease, color 0.4s ease",
            border: "2px solid black",
            px: 4,
            py: 1.5,
            color: "black",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: 500,
            overflow: "hidden",
            "&:hover": {
              backgroundPosition: "100% 100%",
              color: "white",
              boxShadow: "none",
            },
          }}
          onClick={() => navigate(ROUTES.PRODUCT_CATALOG)}
        >
          EXPLORE
        </Button>
      </Box>
    </Box>
  );
};

export default BrandStory;
