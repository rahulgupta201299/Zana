import { Skeleton, Card, CardContent } from "@mui/material";

export default function BlogsSkeleton() {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "linear-gradient(100deg, #d5d5d5, #bfbfbf)",
      }}
    >
      <Skeleton variant="rectangular" height={260} />
      <CardContent>
        <Skeleton variant="text" width="70%" height={32} />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton
          variant="rectangular"
          width={120}
          height={40}
          sx={{ mt: 2, borderRadius: 0 }}
        />
      </CardContent>
    </Card>
  );
};
