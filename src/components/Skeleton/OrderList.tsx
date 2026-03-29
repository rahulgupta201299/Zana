import { Box, Skeleton, Stack } from "@mui/material";

export const OrderListSkeleton = () => {

  return (

      <Stack spacing="12px" sx={{p: { xs: 2, md: 4 }}}>     
      {Array(10).fill(0).map((_, i) => 
          <Skeleton
            key={i}
            variant="text"
            height={140}
            width="100%"
            sx={{
              background: "linear-gradient(100deg, #6d6b6b, #353333)",
            }}
          />
        )}
        </Stack>
  );
};


