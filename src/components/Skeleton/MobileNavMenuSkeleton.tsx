import { Box, Skeleton } from "@mui/material";

// Varying widths make the loading rows read as text of different lengths,
// which feels closer to the real menu than uniform bars.
const ROW_WIDTHS = ["58%", "44%", "50%", "38%", "62%"];

export default function MobileNavMenuSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0d0d0d",
        px: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {ROW_WIDTHS.map((width, ind) => (
        <Box
          key={ind}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.25,
            borderBottom: ind === ROW_WIDTHS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Left text skeleton */}
          <Skeleton
            variant="text"
            sx={{
              width,
              height: "26px",
              bgcolor: "rgba(255,255,255,0.08)",
              transform: "none",
            }}
          />

          {/* Right arrow skeleton */}
          <Skeleton
            variant="circular"
            width={16}
            height={16}
            sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
          />
        </Box>
      ))}
    </Box>
  );
}
