import { Box, Skeleton } from "@mui/material";

export default function MobileNavMenuSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#2F2F2F",      // same dark background
        padding: "20px",
        display: "flex",
        marginTop: '2rem',
        flexDirection: "column",
        gap: "28px",
      }}
    >
      {Array(5).fill(0).map((_, ind) => (
        <Box
          key={ind}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left text skeleton */}
          <Skeleton
            variant="text"
            sx={{ 
              width: "160px", 
              height: "24px", 
              bgcolor: "rgba(255,255,255,0.15)" 
            }}
          />

          {/* Right arrow skeleton */}
          <Skeleton
            variant="circular"
            width={20}
            height={20}
            sx={{ bgcolor: "rgba(255,255,255,0.15)" }}
          />
        </Box>
      ))}
    </Box>
  );
}
