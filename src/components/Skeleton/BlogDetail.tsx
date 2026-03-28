import { Box, Skeleton, Stack } from "@mui/material";

export const BlogDetailsSkeleton = () => {
     const widths = ['100%', '92%', '85%', '78%', '70%', '92%', '85%', '78%']
  return (
    <Box className="lg:col-span-2">
      <Skeleton
        variant="text"
        width="75%"
        height={48}
        sx={{ mb: 2, background: "linear-gradient(100deg, #6d6b6b, #353333)" }}
      />

      <Skeleton
        variant="rounded"
        width="100%"
        height={300}
        sx={{
          mb: 4,
          borderRadius: "8px",
          background: "linear-gradient(100deg, #6d6b6b, #353333)",
        }}
      />

      <Stack spacing="12px">
       
        {widths.map((w, i) => (
          <Skeleton
            key={i}
            variant="text"
            height={30}
            width={w}
            sx={{
              background: "linear-gradient(100deg, #6d6b6b, #353333)",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const RelatedReadsSkeleton = () => {
  return (
    <Stack spacing={3}>
      {Array.from({ length: 4 }).map((_, i) => (
        <Box key={i} p={2} borderRadius={2} bgcolor="rgba(255,255,255,0.2)">
          <Skeleton
            variant="rounded"
            width="100%"
            height={160}
            sx={{ mb: 2, borderRadius: "8px" }}
          />
          <Skeleton variant="text" width="75%" />
        </Box>
      ))}
    </Stack>
  );
};
