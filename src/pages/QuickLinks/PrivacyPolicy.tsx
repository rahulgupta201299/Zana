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
import { privacyPolicy } from "./Constant";
import { useState } from "react";
import withDeviceDetails from "@/Hocs/withDeviceDetails";

const PrivacyPolicy = ({isMobile}) => {
const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#2a2a2a",
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
         Privacy Policy
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
          At Zana Motorcycles, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, and safeguard the information provided to us when using our Website / Mobile App or Any of the services/products by any means. By accessing or using our Website, you agree to the terms of this Privacy Policy.
        </Typography>
        {privacyPolicy.map((item, index) => {
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

export default withDeviceDetails(PrivacyPolicy);
