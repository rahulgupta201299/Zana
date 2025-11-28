import { Box, Skeleton, Stack } from "@mui/material";

const SearchResultsSkeleton = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#2e2e2e" }}>
      {/* Suggestions Title */}
      <Skeleton
        variant="text"
        width={140}
        height={20}
        sx={{ opacity: 0.4 }}
      />

      {/* Suggestions List */}
      <Stack spacing={1} sx={{ mt: 2, mb: 4 }}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton
            key={idx}
            variant="text"
            width={200}
            height={28}
            sx={{ bgcolor: "rgba(255,255,255,0.25)" }}
          />
        ))}
      </Stack>

      {/* Products Title */}
      <Skeleton
        variant="text"
        width={120}
        height={20}
        sx={{ opacity: 0.4 }}
      />

      {/* Product Items */}
      <Stack spacing={3} sx={{ mt: 2 }}>
        {Array.from({ length: 2 }).map((_, i) => (
          <Box key={i} sx={{ display: "flex", gap: 2 }}>
            {/* Image */}
            <Skeleton
              variant="rounded"
              sx={{
                width: 80,
                height: 80,
                borderRadius: "12px",
                bgcolor: "rgba(255,255,255,0.2)"
              }}
            />

            {/* Text Info */}
            <Box sx={{ flex: 1 }}>
              <Skeleton
                variant="text"
                width="60%"
                height={22}
                sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={18}
                sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
              />
              <Skeleton
                variant="text"
                width="40%"
                height={20}
                sx={{ bgcolor: "rgba(255,255,255,0.25)" }}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SearchResultsSkeleton;
