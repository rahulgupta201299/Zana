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
import { terms } from "./Constant";

const TermsConsitions = ({ isMobile }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <Box
      sx={{
        width: "100%",
         backgroundColor: "#222222ff",
        minHeight: "100vh",
    
      }}
    >
      <Box
        sx={{
          py: { xs: "16px", md: "24px" },
          px: { xs: "16px", md: "24px" },
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            align="left"
            sx={{
              color: "#fff",
              fontSize: { xs: "2.25rem", md: "2.75rem" },
              fontWeight: 700,
            }}
          >
            Terms & Conditions
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          width: "100%",
          color: "#fff",
          borderRadius: "10px",
          height: "100%",
          p: isMobile ? "20px" : "48px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "15px",
            lineHeight: 1.75,
          }}
        >
          By using the Basketable.in website (and App and mobile site) and our
          social media pages ("Website") you accept these terms and conditions
          ("Agreement") and our Privacy Policy. We may change these Terms &
          Condition without prior notice at any time, and changes will be posted
          on the Website. By continuing to use the Website, you agree to be
          bound by the changes.
        </Typography>
        {terms.map((item, index) => {
          const isOpen = expanded === index;

          return (
            <Accordion
              key={index}
              expanded={isOpen}
              onChange={() => setExpanded(isOpen ? null : index)}
              disableGutters
              sx={{
                mt: "24px",
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
                  {item.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, pt: 1, pb: 2 }}>
                {Array.isArray(item.summary) ? (
                  item.summary.map((point: string, i: number) => (
                    <Typography
                      key={i}
                      sx={{
                        color: "#fff",
                        fontSize: "14px",
                        lineHeight: 1.75,
                        mb: "2px",
                      }}
                    >
                      {point}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.summary}
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default withDeviceDetails(TermsConsitions);
