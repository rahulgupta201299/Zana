import { Box, Skeleton } from "@mui/material";

const WebNavMenuSkeleton = () => {
  return (
    <Box
      sx={{
        width: "90%",
        background: "#000",
        borderRadius: "20px",
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 4,
      }}
    >
      {Array(4).fill(0).map((_, ind1) => (
        <Box key={ind1} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {Array(4).fill(0).map((_, ind2) => (
            <Box key={ind2}>
              <Skeleton
                variant="text"
                width={120}
                height={28}
                sx={{ bgcolor: "#333", borderRadius: 1 }}
              />
              <Skeleton
                variant="text"
                width={150}
                height={20}
                sx={{ bgcolor: "#444", borderRadius: 1, mt: 1 }}
              />
              <Skeleton
                variant="rectangular"
                height={1}
                width="100%"
                sx={{ bgcolor: "#333", mt: 1 }}
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WebNavMenuSkeleton;
