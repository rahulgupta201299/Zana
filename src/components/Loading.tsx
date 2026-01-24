import { Box, CircularProgress } from "@mui/material";

const Loading = () => {

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: 0,
        width: "100%",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overscrollBehavior: 'none',
        overflow: 'hidden',
        zIndex: 100,
      }}
    >
      <CircularProgress size={55} sx={{ color: "white" }} />
    </Box>
  );
};

export default Loading;
