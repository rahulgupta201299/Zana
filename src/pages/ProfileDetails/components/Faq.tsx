import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { faqs } from "../constant";

const Faq = ({ isMobile }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "60%",
        p: isMobile ? "16px" : "48px 48px 48px 0",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          color: "#fff",
          borderRadius: "10px",
          height: "100%",
          p: isMobile ? "20px" : "32px 40px 32px 40px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <Typography sx={{ fontSize: isMobile ? "20px" : "28px", fontWeight: 700, mb: "12px" }}>
          FREQUENTLY ASK QUESTIONS
        </Typography>

        {faqs.map((item, index) => {
          const isOpen = expanded === index;

          return (
            <Accordion
              key={index}
              expanded={isOpen}
              onChange={() => setExpanded(isOpen ? null : index)}
              disableGutters
              sx={{
                bgcolor: "transparent",
                boxShadow: "none",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  isOpen ? (
                    <RemoveIcon sx={{ color: "#1a1a1a" }} />
                  ) : (
                    <AddIcon sx={{ color: "#6b7280" }} />
                  )
                }
                sx={{
                  px: 0,
                  borderBottom: "1px solid #e5e7eb",
                  "&:hover .MuiTypography-root": {
                    color: "#f5f7fbff",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, pt: 1, pb: 2 }}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default withDeviceDetails(Faq);
