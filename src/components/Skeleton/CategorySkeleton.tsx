import { Box, Skeleton } from "@mui/material";

export default function CategorySkeleton() {

  return (
   <Box
  sx={{
    mb: 4,
    display: "flex",
    flexWrap: "nowrap",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
    width: "100%",
  }}
>
  {Array(10).fill(0).map((_, ind) => (
    <Skeleton
      key={ind}
      width={140}
      height={70}
      sx={{
        flexShrink: 0,    // 👈 prevents shrinking
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
    />
  ))}
</Box>

  );
}
