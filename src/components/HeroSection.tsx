import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LandingVideo from '@/Assets/Images/LandingVideo.gif'
import { ROUTES } from "@/Constants/Routes";
import Zana from "@/Assets/Icons/Zana.png";
import withDeviceDetails from "@/Hocs/withDeviceDetails";

const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "175px", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          bgcolor: "black",
        }}
      >
        <Box
          component="img"
          src={LandingVideo}
          alt="Motorcycle hero background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
      </Box>

      {/* LOGO */}
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Link component={RouterLink} to={ROUTES.BASE_URL} sx={{ display: "flex", cursor: 'pointer' }}>
          <img
            src={Zana}
            alt={`Zana Logo`}
            style={{
              height: isMobile ? "3.5rem" : "5rem",
              width: "auto",
              cursor: "pointer",
              transition: "opacity 0.2s",
              filter: 'brightness(0) sepia(10%) saturate(200%) hue-rotate(10deg) invert(90%)'
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </Link>
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, md: 3 },
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: "650px" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: { xs: 1, md: 3 },
              fontSize: {
                xs: "1.5rem",
                md: "4rem",
                lg: "5rem",
              },
              lineHeight: 1.1,
            }}
          >
            FORGED IN FIRE<br />
            MORE THAN METAL
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              mb: { xs: 2, md: 4 },
              fontSize: {
                xs: "0.75rem",
                md: "1.25rem",
                lg: "1.75rem",
              },
            }}
          >
            Made in India - Ridden Everywhere
          </Typography>

          {/* Animated Button */}
          <Button
            onClick={() => navigate("/product-catalog")}
            sx={{
              position: "relative",
              border: "2px solid white",
              textTransform: "none",
              color: "white",
              px: { xs: 2, md: 6 },
              py: { xs: 1, md: 2 },
              fontSize: { xs: "0.75rem", md: "1.1rem" },
              borderRadius: "8px",
              overflow: "hidden",
              transition: "0.4s ease",

              background:
                "linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)",
              backgroundSize: "200% 200%",
              backgroundPosition: "0% 0%",

              "&:hover": {
                backgroundPosition: "100% 100%",
                color: "#000",
                borderColor: "white",
              },
            }}
          >
            Explore the Collection
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default withDeviceDetails(HeroSection);
