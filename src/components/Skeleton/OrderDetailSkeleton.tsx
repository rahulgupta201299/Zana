import { Box, Skeleton, Stack, Divider } from "@mui/material";

export default function OrderDetailsSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#111",
        p: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <Stack spacing={1} mb={4}>
          <Skeleton sx={{ bgcolor: "#1b1a1a" }} width={220} height={32} />
          <Skeleton sx={{ bgcolor: "#1b1a1a" }} width={260} height={20} />
          <Skeleton sx={{ bgcolor: "#1b1a1a" }} width={200} height={16} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Skeleton
            sx={{ bgcolor: "#1b1a1a", borderRadius: 999 }}
            width={120}
            height={50}
          />
          <Skeleton sx={{ bgcolor: "#1b1a1a" }} width={80} height={20} />
        </Stack>

        <Skeleton sx={{ bgcolor: "#1b1a1a", mb: 2 }} width={180} height={28} />

        <Stack spacing={3}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "80px 1fr",
                  md: "100px 1fr 120px 120px",
                },
                gap: 2,
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                bgcolor: "#1a1a1a",
              }}
            >
              <Skeleton
                variant="rectangular"
                width={100}
                height={100}
                sx={{ borderRadius: 2 }}
              />

              <Box>
                <Skeleton width="40%" height={16} />
                <Skeleton width="80%" height={20} />
                <Skeleton width="60%" height={16} />
              </Box>

              <Skeleton width={60} height={20} />

              <Skeleton width={80} height={20} />
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Box sx={{ maxWidth: 400, ml: "auto" }}>
          <Stack spacing={1}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Stack key={i} direction="row" justifyContent="space-between">
                <Skeleton width={100} height={16} />
                <Skeleton width={80} height={16} />
              </Stack>
            ))}

            <Divider sx={{ borderColor: "grey.700", my: 1 }} />

            <Stack direction="row" justifyContent="space-between">
              <Skeleton width={80} height={20} />
              <Skeleton width={100} height={20} />
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {[1, 2].map((i) => (
            <Box key={i} sx={{ flex: 1 }}>
              <Skeleton width={160} height={20} sx={{ mb: 1 }} />
              <Skeleton width="70%" height={16} />
              <Skeleton width="60%" height={16} />
              <Skeleton width="80%" height={16} />
              <Skeleton width="65%" height={16} />
            </Box>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} mt={6}>
          <Skeleton width={140} height={40} sx={{ borderRadius: 2 }} />
          <Skeleton width={180} height={40} sx={{ borderRadius: 2 }} />
        </Stack>
      </Box>
    </Box>
  );
}
