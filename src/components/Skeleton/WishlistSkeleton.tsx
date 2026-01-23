import { Card, Box, Skeleton, CardContent, Button, Grid } from "@mui/material";

const WishlistCardSkeleton = () => {
  return (
    <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
      <Card
        sx={{
          position: "relative",
          bgcolor: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
     
        <Box
          sx={{
            bgcolor: "#fff",
            p: "16px",
            height: { xs: 192, md: 248 },
            borderRadius: "12px 12px 0 0",
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ borderRadius: "12px" }}
          />
        </Box>

  
        <CardContent
          sx={{
            p: { xs: "8px", md: "12px" },
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Skeleton
            variant="text"
            width="90%"
            height={22}
            sx={{ mb: 0.5 }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={22}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Skeleton variant="text" width={80} height={28} />
          </Box>
        </CardContent>

      
        <Box sx={{ p: "24px" }}>
          <Skeleton
            variant="rectangular"
            height={48}
            sx={{ borderRadius: "8px" }}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default WishlistCardSkeleton;
