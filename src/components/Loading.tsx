import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {

  // Disable scroll while loader is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
        zIndex: 50,
      }}
    >
      <CircularProgress size={55} sx={{ color: "white" }} />
    </Box>
  );
};

export default Loading;
