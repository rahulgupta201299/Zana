// FloatingButtons.tsx
import { Box } from "@mui/material";
import WhatsAppButton from "./WhatsAppButton";
import TawkChat from "./TawkChat";

const FloatingButtons = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
        zIndex: 9999,
      }}
    >
      <TawkChat />
      <WhatsAppButton />
    </Box>
  );
};

export default FloatingButtons;
