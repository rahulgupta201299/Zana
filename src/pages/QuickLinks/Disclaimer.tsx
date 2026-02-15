import { Box, Container, Typography } from "@mui/material";
import withDeviceDetails from "@/Hocs/withDeviceDetails";

const Disclaimer = ({ isMobile }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#222222ff",

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
            DISCLAIMER
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
          Cancellation by Site / Customer
          <Typography
            sx={{
              mt: "4px",
            }}
          >
            As a user, you may cancel an order placed by you before the order
            Dispatch stage. For any permitted cancellations, we will refund
            payments, if any, made by you under the relevant order within
            approximately 12 hours. If we suspect any fraudulent transaction by
            any customer or any transaction which defies the terms & conditions
            of using the website, we at our sole discretion could cancel such
            orders. We will maintain a negative list of all fraudulent
            transactions and customers and would deny access to them or cancel
            any orders placed by them.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default withDeviceDetails(Disclaimer);
