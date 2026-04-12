import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import { Button, Box, Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PreviewIcon from "@mui/icons-material/Visibility";
import { Order } from "@/pages/OrderDetails/Types";

// ─── Asset import ─────────────────────────────────────────────────────────────
// @react-pdf/renderer cannot use <img> HTML tags — must use its own <Image>.
// Import the asset as a URL string (works with Vite and CRA).
import ZanaLogo from "@/Assets/Icons/Zana.png";

// ─── Constants ────────────────────────────────────────────────────────────────
const ORANGE = "#fffffc"; // your light-peach header background — kept as-is
const BLACK = "#000000"; // all body text
const DARK_TEXT = "#222222"; // slight softening for secondary text
const MUTED_TEXT = "#555555"; // labels
const WHITE = "#ffffff";
const GRAY_LIGHT = "#f5f5f5";
const GRAY_MID = "#f0f0f0";
const BORDER = "#cccccc";

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: BLACK,
    backgroundColor: WHITE,
    paddingBottom: 20,
  },

  // ── Header ──
  header: {
    backgroundColor: ORANGE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  logo: {
    width: 90,
    height: 34,
    objectFit: "contain",
  },
  companyAddress: {
    fontSize: 8,
    color: DARK_TEXT, // ← dark on light-peach bg
    marginTop: 5,
    lineHeight: 1.6,
  },
  invoiceTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: BLACK, // ← dark on light-peach bg
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  invoiceMeta: {
    fontSize: 9,
    color: DARK_TEXT, // ← dark on light-peach bg
    textAlign: "right",
    marginTop: 4,
    lineHeight: 1.7,
  },

  // ── Original tag ──
  originalTag: {
    backgroundColor: GRAY_LIGHT,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingVertical: 4,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: MUTED_TEXT,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  // ── Body ──
  body: {
    paddingHorizontal: 20,
    paddingTop: 14,
  },

  // ── Two column row ──
  twoCol: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  col50: { flex: 1 },

  // ── Info box ──
  infoBox: {
    borderWidth: 1,
    borderColor: BORDER,
  },
  infoBoxHeader: {
    backgroundColor: ORANGE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: BLACK, // ← dark on light-peach bg
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  infoBoxBody: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  infoLabel: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: MUTED_TEXT,
    width: 82,
  },
  infoVal: {
    fontSize: 9.5,
    color: BLACK,
    flex: 1,
    flexWrap: "wrap",
  },

  // ── Badge ──
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 3,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
  },
  badgeSuccess: { backgroundColor: "#e6f4ea", color: "#1e7e34" },
  badgeWarning: { backgroundColor: "#fff3cd", color: "#856404" },
  badgeInfo: { backgroundColor: "#dbeafe", color: "#1d4ed8" },

  // ── Table ──
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: ORANGE,
  },
  tableHeaderCell: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: BLACK, // ← dark on light-peach bg
    paddingHorizontal: 8,
    paddingVertical: 6,
    textTransform: "uppercase",
    letterSpacing: 0.3,
    borderRightWidth: 1,
    borderRightColor: "#e7e4e3",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  tableRowEven: { backgroundColor: "#fafafa" },
  tableCell: {
    fontSize: 9.5,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRightWidth: 1,
    borderRightColor: "#dddddd",
    color: BLACK,
  },
  tableFooterRow: {
    flexDirection: "row",
    backgroundColor: GRAY_MID,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  tableFooterCell: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRightWidth: 1,
    borderRightColor: "#dddddd",
    color: BLACK, // ← was TEXT_DARK (same as bg — invisible!)
  },

  // Column widths
  colSno: { width: 36, textAlign: "center" },
  colProduct: { flex: 1 },
  colSku: { width: 75 },
  colPrice: { width: 68, textAlign: "right" },
  colQty: { width: 40, textAlign: "center" },
  colTotal: { width: 72, textAlign: "right", borderRightWidth: 0 },

  // ── Bottom section ──
  bottomRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  bottomLeft: { flex: 1 },
  bottomRight: { width: 240 },

  sectionBox: {
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 10,
  },
  sectionHeader: {
    backgroundColor: ORANGE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: BLACK, // ← dark on light-peach bg
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sectionBody: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  // Terms
  termRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  termNum: {
    fontSize: 9,
    color: DARK_TEXT,
    fontFamily: "Helvetica-Bold",
    width: 14,
  },
  termText: {
    fontSize: 9,
    color: "#333333",
    flex: 1,
    lineHeight: 1.6,
  },

  // Summary table
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
  },
  summaryLabel: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: MUTED_TEXT,
  },
  summaryVal: { fontSize: 10, color: BLACK },
  summaryGrand: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: ORANGE,
  },
  summaryGrandLabel: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: BLACK,
  },
  summaryGrandVal: { fontSize: 11, fontFamily: "Helvetica-Bold", color: BLACK },

  // Signatory
  signatoryWrap: { marginTop: 14, alignItems: "flex-end" },
  sigCertified: {
    fontSize: 9,
    color: MUTED_TEXT,
    textAlign: "right",
    lineHeight: 1.5,
  },
  sigCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: DARK_TEXT,
    marginTop: 6,
  },
  sigNote: {
    fontSize: 8,
    color: "#aaaaaa",
    fontStyle: "italic",
    marginTop: 2,
    textAlign: "right",
    lineHeight: 1.5,
  },
  sigAuth: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: MUTED_TEXT,
    marginTop: 5,
  },
});

// ─── Helpers ──────────────────────────────────────────────────────────────────
// const fmt = (n: number) => `\u20B9${n.toLocaleString('en-IN')}`

const fmtDate = (d: string | Date, time = false) =>
  new Date(d).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...(time ? { hour: "2-digit", minute: "2-digit" } : {}),
  });

const Badge = ({ status }: { status: string }) => {
  const style =
    status === "delivered"
      ? s.badgeSuccess
      : status === "pending"
        ? s.badgeWarning
        : s.badgeInfo;
  return <Text style={[s.badge, style]}>{status}</Text>;
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <View style={s.infoRow}>
    <Text style={s.infoLabel}>{label}</Text>
    <Text style={s.infoVal}>{value}</Text>
  </View>
);

const SectionBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={s.sectionBox}>
    <Text style={s.sectionHeader}>{title}</Text>
    <View style={s.sectionBody}>{children}</View>
  </View>
);

// ─── Main PDF Document ────────────────────────────────────────────────────────
const InvoicePDFDocument = ({ data }: { data: Order }) => {
  const { billingAddress: ba, shippingAddress: sa } = data;

  const addr = (a: typeof ba) =>
    [a.addressLine1, a.addressLine2, a.city, a.state, a.postalCode]
      .filter(Boolean)
      .join(", ");

  return (
    <Document title={`Invoice - ${data.orderNumber}`}>
      <Page size="A4" style={s.page}>
        {/* ── HEADER ── */}
        <View style={s.header}>
          <View>
            {/*
              Use @react-pdf/renderer's <Image> — NOT <img>.
              ZanaLogo is imported as a URL string (Vite/CRA both support this).
              If your bundler gives a type error, cast: src={ZanaLogo as string}
            */}
            <Image src={ZanaLogo as string} style={s.logo} />
            <Text style={s.companyAddress}>
              IMT Manesar, Gurugram, Gurgaon, Haryana, 122001{"\n"}
              9953112277, 9821729377 | onlinesales@zanainternational.com
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={s.invoiceTitle}>Invoice</Text>
            <Text style={s.invoiceMeta}>
              Invoice Number : {data.orderNumber}
              {"\n"}
              Invoice Date : {fmtDate(data.orderDate, true)}
            </Text>
          </View>
        </View>

        {/* ── ORIGINAL TAG ── */}
        <Text style={s.originalTag}>TAX INVOICE · ORIGINAL FOR RECIPIENT</Text>

        <View style={s.body}>
          {/* ── CUSTOMER + INVOICE DETAILS ── */}
          <View style={s.twoCol}>
            <View style={s.col50}>
              <View style={s.infoBox}>
                <Text style={s.infoBoxHeader}>Customer Details</Text>
                <View style={s.infoBoxBody}>
                  <InfoRow label="Name:" value={ba.fullName} />
                  <InfoRow label="Address:" value={addr(ba)} />
                  <InfoRow label="Phone:" value={ba.phone} />
                  <InfoRow label="State:" value={ba.state} />
                  <InfoRow label="Country:" value={ba.country} />
                </View>
              </View>
            </View>

            <View style={s.col50}>
              <View style={s.infoBox}>
                <Text style={s.infoBoxHeader}>Invoice Details</Text>
                <View style={s.infoBoxBody}>
                  <InfoRow label="Invoice No.:" value={data.orderNumber} />
                  <InfoRow
                    label="Invoice Date:"
                    value={fmtDate(data.orderDate)}
                  />
                  <InfoRow label="Pmt Received:" value={data.totalAmount} />
                  <InfoRow
                    label="Payment Mode:"
                    value={
                      data.paymentMethod.charAt(0).toUpperCase() +
                      data.paymentMethod.slice(1)
                    }
                  />
                  <View style={s.infoRow}>
                    <Text style={s.infoLabel}>Order Status:</Text>
                    <Badge status={data.orderStatus} />
                  </View>
                  <View style={s.infoRow}>
                    <Text style={s.infoLabel}>Pay Status:</Text>
                    <Badge status={data.paymentStatus} />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ── ITEMS TABLE ── */}
          <View style={{ borderWidth: 1, borderColor: BORDER }}>
            <View style={s.tableHeaderRow}>
              <Text style={[s.tableHeaderCell, s.colSno]}>S.No.</Text>
              <Text style={[s.tableHeaderCell, s.colProduct]}>
                Product Name
              </Text>
              <Text style={[s.tableHeaderCell, s.colSku]}>SKU</Text>
              <Text style={[s.tableHeaderCell, s.colPrice]}>Price</Text>
              <Text style={[s.tableHeaderCell, s.colQty]}>Qty</Text>
              <Text style={[s.tableHeaderCell, s.colTotal]}>Total</Text>
            </View>

            {data.items.map((item, idx) => (
              <View
                key={idx}
                style={[s.tableRow, idx % 2 === 1 ? s.tableRowEven : {}]}
              >
                <Text style={[s.tableCell, s.colSno]}>{idx + 1}</Text>
                <Text style={[s.tableCell, s.colProduct]}>
                  {item.product.name}
                </Text>
                <Text style={[s.tableCell, s.colSku]}>
                  {item.product.productCode}
                </Text>
                <Text style={[s.tableCell, s.colPrice]}>{item.price}</Text>
                <Text style={[s.tableCell, s.colQty]}>{item.quantity}</Text>
                <Text style={[s.tableCell, s.colTotal]}>{item.totalPrice}</Text>
              </View>
            ))}

            <View style={s.tableFooterRow}>
              <Text
                style={[
                  s.tableFooterCell,
                  s.colSno,
                  s.colProduct,
                  { flex: 1, textAlign: "right" },
                ]}
              >
                Total
              </Text>
              <Text style={[s.tableFooterCell, s.colQty]}>
                {data.items.reduce((sum, i) => sum + i.quantity, 0)}
              </Text>
              <Text style={[s.tableFooterCell, s.colTotal]}>
                {data.subtotal}
              </Text>
            </View>
          </View>

          {/* ── BOTTOM: SHIPPING + TERMS | SUMMARY ── */}
          <View style={s.bottomRow}>
            <View style={s.bottomLeft}>
              <SectionBox title="Shipping Details">
                <InfoRow label="Name:" value={sa.fullName} />
                <InfoRow label="Address:" value={addr(sa)} />
                <InfoRow label="Phone:" value={sa.phone} />
                <InfoRow label="State:" value={sa.state} />
                <InfoRow label="Country:" value={sa.country} />
              </SectionBox>

              <SectionBox title="Terms and Conditions">
                {[
                  "Subject to Manesar Jurisdiction.",
                  "Our Responsibility Ceases as soon as goods leaves our Premises.",
                  "Goods once sold will not taken back.",
                  "Delivery Ex-Premises.",
                ].map((t, i) => (
                  <View key={i} style={s.termRow}>
                    <Text style={s.termNum}>{i + 1}.</Text>
                    <Text style={s.termText}>{t}</Text>
                  </View>
                ))}
              </SectionBox>
            </View>

            <View style={s.bottomRight}>
              <View style={{ borderWidth: 1, borderColor: BORDER }}>
                <View style={s.summaryRow}>
                  <Text style={s.summaryLabel}>Subtotal:</Text>
                  <Text style={s.summaryVal}>{data.subtotal}</Text>
                </View>
                <View style={s.summaryRow}>
                  <Text style={s.summaryLabel}>Coupon Discount:</Text>
                  <Text style={s.summaryVal}>{data.discountAmount}</Text>
                </View>
                <View style={s.summaryRow}>
                  <Text style={s.summaryLabel}>Shipping Charge:</Text>
                  <Text style={s.summaryVal}>
                    {data.shippingCost === 0 ? "Free" : data.shippingCost}
                  </Text>
                </View>
                {data.taxAmount > 0 && (
                  <View style={s.summaryRow}>
                    <Text style={s.summaryLabel}>Tax Amount:</Text>
                    <Text style={s.summaryVal}>{data.taxAmount}</Text>
                  </View>
                )}
                <View style={s.summaryGrand}>
                  <Text style={s.summaryGrandLabel}>Total Amount:</Text>
                  <Text style={s.summaryGrandVal}>{data.totalAmount}</Text>
                </View>
              </View>

              <View style={s.signatoryWrap}>
                <Text style={s.sigCertified}>
                  Certified that the particulars given above are{"\n"}true and
                  correct.
                </Text>
                <Text style={s.sigCompany}>For Zana Motorcycles</Text>
                <Text style={s.sigNote}>
                  This is computer generated invoice hence,{"\n"}signature not
                  required
                </Text>
                <Text style={s.sigAuth}>Authorised Signatory</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// ─── Buttons ─────────────────────────────────────────────────────────────────
interface Props {
  data?: Order;
}

export const InvoiceDownloadButton = ({ data }: Props) => {
  const handleDownload = async () => {
    if (!data) return;
    try {
      const blob = await pdf(<InvoicePDFDocument data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.orderNumber}-invoice.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
  };

  return (
    <Tooltip title="Download invoice as PDF">
      <span>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            color: "white",
            borderColor: "white",
          }}
          onClick={handleDownload}
        >
          DOWNLOAD INVOICE
        </Button>
      </span>
    </Tooltip>
  );
};

export const InvoicePreviewButton = ({ data }: Props) => {
  const handlePreview = async () => {
    if (!data) return;
    try {
      const blob = await pdf(<InvoicePDFDocument data={data} />).toBlob();
      window.open(URL.createObjectURL(blob), "_blank");
    } catch (err) {
      console.error("PDF preview failed:", err);
    }
  };

  return (
    <Tooltip title="Preview invoice in new tab">
      <span>
        <Button
          variant="outlined"
          size="small"
          startIcon={<PreviewIcon />}
          onClick={handlePreview}
          disabled={!data}
        >
          Preview
        </Button>
      </span>
    </Tooltip>
  );
};

const InvoicePDFRenderer = ({ data }: Props) => (
  <Box sx={{ display: "flex", gap: 1 }}>
    <InvoicePreviewButton data={data} />
    <InvoiceDownloadButton data={data} />
  </Box>
);

export default InvoicePDFRenderer;
