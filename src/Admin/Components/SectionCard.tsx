import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type SectionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <Paper
      component="section"
      variant="outlined"
      sx={{
        borderColor: "#d8dde3",
        borderRadius: 2,
        boxShadow: "0 18px 50px rgba(24, 31, 38, 0.08)",
        p: 2.25,
      }}
    >
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", sm: "baseline" },     
          flexDirection: 'column',
          gap: '4px',
          mb: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "1rem", fontWeight: 800 }}>
          {title}
        </Typography>
        {description ? (
          <Typography sx={{ color: "#68717d", fontSize: "0.8rem" }}>
            {description}
          </Typography>
        ) : null}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}>
        {children}
      </Box>
    </Paper>
  );
}
