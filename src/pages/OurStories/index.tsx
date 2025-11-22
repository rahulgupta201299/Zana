import { Box, Typography, Container } from "@mui/material";

function OurStories() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#181818" }}>
      
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: 600,
          backgroundImage: "url('/uploads/bea60e6f-378c-4c52-a047-a7755c425785.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        <Container sx={{ position: "relative", pb: 6 }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 2,
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              textAlign: 'center'
            }}
          >
            Designed by Riders, Built for Legends.
          </Typography>

          <Typography
            sx={{
              color: "white",
              mb: 3,
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              textAlign: 'center'
            }}
          >
            From hustling city streets to the hardest terrains — Zana's got your ride covered.
          </Typography>
        </Container>
      </Box>

      {/* CONTENT SECTION */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 4 }}
            >
              Engineered for the Fearless
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
              At Zana, we understand the uncompromising standards and craft confidence for riders across
              every road, trek, and terrain. Born from a passion for motorcycles and the spirit of adventure,
              Zana is a proudly Indian brand inspired by thousands of bikers who demand nothing but the best.
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
              We don't compromise on quality, design, or durability. We create high-performance crash guards,
              premium accessories, and rider gear that's built to last. Every product is meticulously designed
              and tested to ensure rider protection, road presence, function, and the genuine love for biking
              our customers live for — and helps everyone discover the hearts of their personality.
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
              From weekend rides to cross-country expeditions, we ensure your bike is protected, your gear
              secure, and your journey unforgettable.
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
              But our mission goes beyond just protection. At Zana, we're committed to elevating the entire
              riding experience — combining aesthetics, unmatched engineering for gear that stands the test
              of time. Expectations of today's riders, Zana stands as a result of their relentless journey.
              We don't just protect motorcycles; we elevate the experiences of the motorcycling community.
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
              Our in-house manufacturing ensures tight quality control, allowing us to deliver unmatched
              excellence — whether it's a rider protection system or premium gear engineered for performance.
              Every accessory we design speaks to the passion, styling, and riding dynamics that define us —
              and rider meets their diverse needs.
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
              It's no coincidence that bikers choose Zana for their most trusted equipment.
            </Typography>

            <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 2 }}>
              The rider comes first.
            </Typography>

            <Typography sx={{ lineHeight: 1.7 }}>
              We live to be part of a growing tribe that values performance, trust, and a shared love for the ride.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* WHITE SEPARATOR */}
      <Box sx={{ width: "100%", height: "1px", backgroundColor: "white" }} />
    </Box>
  );
}

export default OurStories;
