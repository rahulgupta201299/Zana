import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: "36px" }}>
    <Typography
      sx={{
        color: "#fff",
        fontSize: "17px",
        fontWeight: 700,
        mb: "10px",
        letterSpacing: "0.02em",
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "rgba(255,255,255,0.75)",
      fontSize: "15px",
      lineHeight: 1.75,
      mt: "4px",
    }}
  >
    {children}
  </Typography>
);

const BulletList = ({ items }: { items: string[] }) => (
  <Box
    component="ul"
    sx={{ pl: "20px", mt: "8px", mb: 0, color: "rgba(255,255,255,0.75)" }}
  >
    {items.map((item, i) => (
      <Box
        component="li"
        key={i}
        sx={{ fontSize: "15px", lineHeight: 1.75, mb: "4px" }}
      >
        {item}
      </Box>
    ))}
  </Box>
);

const Divider = () => (
  <Box
    sx={{
      width: "100%",
      height: "1px",
      backgroundColor: "rgba(255,255,255,0.08)",
      my: "32px",
    }}
  />
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "rgba(255,255,255,0.6)",
      fontSize: "13px",
      fontWeight: 600,
      mt: "16px",
      mb: "6px",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    }}
  >
    {children}
  </Typography>
);

const NoteBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      mt: "12px",
      p: "12px 16px",
      borderLeft: "3px solid rgba(100,160,255,0.5)",
      background: "rgba(100,160,255,0.05)",
      borderRadius: "0 6px 6px 0",
    }}
  >
    <Typography sx={{ color: "rgba(160,200,255,0.9)", fontSize: "13px", lineHeight: 1.7 }}>
      {children}
    </Typography>
  </Box>
);

const WarnBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      mt: "12px",
      p: "12px 16px",
      borderLeft: "3px solid rgba(255,180,0,0.6)",
      background: "rgba(255,180,0,0.06)",
      borderRadius: "0 6px 6px 0",
    }}
  >
    <Typography sx={{ color: "rgba(255,210,80,0.9)", fontSize: "13px", lineHeight: 1.7 }}>
      {children}
    </Typography>
  </Box>
);

const SuccessBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      mt: "12px",
      p: "12px 16px",
      borderLeft: "3px solid rgba(80,200,120,0.6)",
      background: "rgba(80,200,120,0.06)",
      borderRadius: "0 6px 6px 0",
    }}
  >
    <Typography sx={{ color: "rgba(120,230,160,0.9)", fontSize: "13px", lineHeight: 1.7 }}>
      {children}
    </Typography>
  </Box>
);

const DangerBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      mt: "12px",
      p: "12px 16px",
      borderLeft: "3px solid rgba(255,80,80,0.5)",
      background: "rgba(255,80,80,0.05)",
      borderRadius: "0 6px 6px 0",
    }}
  >
    <Typography sx={{ color: "rgba(255,140,140,0.9)", fontSize: "13px", lineHeight: 1.7 }}>
      {children}
    </Typography>
  </Box>
);

export default function RefundReplacementPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#222222ff",
      }}
    >
      {/* Header */}
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
            RETURN, REFUND & REPLACEMENT POLICY
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "14px",
              mt: "6px",
            }}
          >
            ZANA Motorcycles &nbsp;·&nbsp; Effective as of current date
          </Typography>
        </Container>
      </Box>

      {/* Content */}
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
        {/* Intro */}
        <BodyText>
          At ZANA Motorcycles, we are committed to delivering high-quality products and a seamless
          customer experience. Please review our policy carefully to understand the terms governing
          returns, refunds, and replacements.
        </BodyText>

        <Divider />

        {/* 1. Returns */}
        <Section title="1. Eligibility for Returns">
          <BodyText>
            We accept return requests within <strong style={{ color: "#fff" }}>7 days of delivery</strong> under
            the following conditions:
          </BodyText>
          <BulletList
            items={[
              "Product received is damaged or defective",
              "Incorrect product delivered",
              "Missing components or accessories",
            ]}
          />

          <SubHeading>Conditions:</SubHeading>
          <BulletList
            items={[
              "Product must be unused, uninstalled, and in original packaging",
              "All original tags, manuals, and accessories must be intact",
            ]}
          />

          <NoteBox>
            <strong>Note 1:</strong> Products that have been used, installed, or tampered with will
            not be eligible for return.
          </NoteBox>
          <NoteBox>
            <strong>Note 2:</strong> If none of these conditions apply and the product is as per
            design without any defect, but you are still not satisfied, you can send the product to
            our Zana International warehouse (Haryana) at your own cost. Once we receive the
            product, it will be checked and further process (replacement/exchange) will be initiated
            accordingly. Refunds are subject to approval from Zana management ONLY.
          </NoteBox>
          <WarnBox>
            Note 3: No replacement or exchange is applicable on sale items.
          </WarnBox>
        </Section>

        <Divider />

        {/* 2. Replacement */}
        <Section title="2. Replacement Policy">
          <BodyText>We offer replacements in genuine cases where:</BodyText>
          <BulletList
            items={[
              "The product has a manufacturing defect",
              "The product was received in a damaged condition",
              "An incorrect item was delivered",
            ]}
          />

          <SubHeading>Process:</SubHeading>
          <BulletList
            items={[
              "Customers must share clear photos/videos of the issue along with order details",
              "All requests are subject to technical inspection and approval",
              "The product may need to be returned to our facility before dispatching a replacement",
            ]}
          />
          <SuccessBox>
            Replacement will be processed only after successful verification by our team.
          </SuccessBox>
        </Section>

        <Divider />

        {/* Exchange Policy */}
        <Section title="Exchange Policy">
          <BodyText>
            If you wish to exchange any product, please follow the guidelines below:
          </BodyText>

          <SubHeading>1. Intimation Requirement</SubHeading>
          <BodyText>
            Customers must inform us within <strong style={{ color: "#fff" }}>5 days of delivery</strong> to
            initiate an exchange request.
          </BodyText>

          <SubHeading>2. Product Condition</SubHeading>
          <BulletList
            items={[
              "The product must be unused, uninstalled, and in clean & saleable condition",
              "All original packaging, tags, and accessories must be intact",
            ]}
          />

          <SubHeading>3. Proof Submission</SubHeading>
          <BulletList
            items={[
              "Customers are required to share clear images of the product as proof for approval before proceeding",
            ]}
          />

          <SubHeading>4. Shipping Process</SubHeading>
          <BodyText>
            The product must be shipped by the customer at their own cost to our warehouse:
          </BodyText>
          <Box
            sx={{
              mt: "8px",
              mb: "12px",
              p: "10px 16px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
              ZANA International, Haryana Warehouse
            </Typography>
          </Box>

          <SubHeading>5. Exchange Processing</SubHeading>
          <BulletList
            items={[
              "Once we receive and inspect the product, the exchange will be processed accordingly",
            ]}
          />

          <DangerBox>
            Exchange requests without prior approval will not be accepted. Products that are used,
            damaged, or not in saleable condition may be rejected after inspection.
          </DangerBox>
        </Section>

        <Divider />

        {/* 3. Refund */}
        <Section title="3. Refund Policy">
          <BodyText>Refunds are applicable under the following circumstances:</BodyText>
          <BulletList
            items={[
              "Replacement is not available",
              "Order is cancelled prior to dispatch",
            ]}
          />

          <SubHeading>Processing Time:</SubHeading>
          <BulletList
            items={[
              "Refunds will be initiated within 5–7 business days after approval",
            ]}
          />

          <SubHeading>Mode of Refund:</SubHeading>
          <BulletList
            items={[
              "Original payment method, or",
              "Bank transfer (if required)",
            ]}
          />
        </Section>

        <Divider />

        {/* 4. Shipping */}
        <Section title="4. Shipping & Handling Charges">
          <BulletList
            items={[
              "Customers may be required to bear one-side shipping charges for returns/replacements",
              "In verified cases of defective or incorrect products, shipping costs may be covered by ZANA Motorcycles",
            ]}
          />
        </Section>

        <Divider />

        {/* 5. Non-Returnable */}
        <Section title="5. Non-Returnable / Non-Replaceable Cases">
          <BodyText>
            Returns or replacements will not be accepted in the following scenarios:
          </BodyText>
          <BulletList
            items={[
              "Product has been used or installed",
              "Damage caused due to misuse, improper installation, or accidents",
              "Product has been modified or tampered with",
              "Request is raised after the 7-day return window",
            ]}
          />
        </Section>

        <Divider />

        {/* 6. Important Guidelines */}
        <Section title="6. Important Guidelines">
          <BulletList
            items={[
              "Customers are strongly advised to record an unboxing video while opening the package",
              "Claims without sufficient proof may not be considered",
            ]}
          />
        </Section>

        <Divider />

        {/* Terms & Conditions */}
        <Section title="Terms & Conditions">

          <SubHeading>1. Product Compatibility</SubHeading>
          <BodyText>
            Customers are responsible for ensuring that the product is compatible with their
            specific bike model before placing an order. ZANA Motorcycles will not be responsible
            for incorrect purchases made by the customer.
          </BodyText>

          <SubHeading>2. Installation Disclaimer</SubHeading>
          <BulletList
            items={[
              "Professional installation is highly recommended",
              "ZANA Motorcycles shall not be liable for any damage caused due to improper installation",
            ]}
          />

          <SubHeading>3. Warranty Coverage</SubHeading>
          <BulletList
            items={[
              "Warranty (if applicable) is limited to manufacturing defects only",
              "Does not cover normal wear & tear, misuse, or accidental damage",
            ]}
          />

          <SubHeading>4. Order Processing & Dispatch</SubHeading>
          <BulletList
            items={[
              "Orders are processed within 1–3 business days, subject to availability",
              "Any delays will be communicated to the customer in advance",
            ]}
          />

          <SubHeading>5. Order Cancellation</SubHeading>
          <BulletList
            items={[
              "Orders can be cancelled only before dispatch",
              "Once shipped, cancellations will not be accepted",
            ]}
          />

          <SubHeading>6. Limitation of Liability</SubHeading>
          <BodyText>
            ZANA Motorcycles shall not be held liable for any indirect, incidental, or consequential
            damages arising from the use or inability to use our products.
          </BodyText>

          <SubHeading>7. Policy Updates</SubHeading>
          <BodyText>
            ZANA Motorcycles reserves the right to modify or update this policy at any time without
            prior notice.
          </BodyText>
        </Section>
      </Box>
    </Box>
  );
}
