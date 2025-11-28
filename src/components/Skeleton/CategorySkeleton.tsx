import { Box, Skeleton } from "@mui/material";

export default function CategorySkeleton() {

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Array(10).fill(0).map((_, ind) => {

        return (
          <Skeleton
            key={ind}
            width={140}
            height={70}
            sx={{
              textTransform: "none",
              px: 2,
              py: 1,
              fontSize: { xs: "0.875rem", md: "1rem" },
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
            }}
          />
        )
      })}
    </Box>
  );
}
