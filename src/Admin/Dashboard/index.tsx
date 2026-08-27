import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip as MuiTooltip,
  Typography,
  useTheme,
} from "@mui/material";

import {
  AdminOrderStats,
  getAdminOrderStats,
  parseAdminOrderStatsResponse,
} from "../Configurations/AdminDashboardApi";
import { formatIsoDate } from "../Utils/DateUtils";

/* ---------------------------------------------------------------------- */
/*  Data shape                                                            */
/* ---------------------------------------------------------------------- */
/*
  {
    organicOnline: { count, totalAmount },
    organicCod:    { count, totalAmount },
    adminOnline:   { count, totalAmount },
    adminCod:      { count, totalAmount },
    overall:       { count, totalAmount },
  }
*/

const EMPTY_STATS: AdminOrderStats = {
  organicOnline: { count: 0, totalAmount: 0 },
  organicCod: { count: 0, totalAmount: 0 },
  adminOnline: { count: 0, totalAmount: 0 },
  adminCod: { count: 0, totalAmount: 0 },
  overall: { count: 0, totalAmount: 0 },
};

const CHART_COLORS = {
  organic: "#16a34a",
  admin: "#2563eb",
  online: "#7c3aed",
  cod: "#f97316",
};

type AppliedDateRange = { startDate: string; endDate: string };
type Bucket = { count: number; totalAmount: number };
type PieDatum = { key: string; name: string; value: number; color: string };
type PaymentModeBreakdown = {
  online: { organic: Bucket; admin: Bucket; total: Bucket };
  cod: { organic: Bucket; admin: Bucket; total: Bucket };
};

function formatLocalIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function minIsoDate(a: string, b: string): string {
  return a <= b ? a : b;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    currency: "INR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value);
}

function sharePct(value: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((value / total) * 100);
}

function metricShare(value: number, total: number): string {
  return `${sharePct(value, total)}%`;
}

function addBuckets(...buckets: Bucket[]): Bucket {
  return buckets.reduce(
    (acc, b) => ({ count: acc.count + b.count, totalAmount: acc.totalAmount + b.totalAmount }),
    { count: 0, totalAmount: 0 },
  );
}

// Organic vs Admin — source breakdown (unchanged)
function buildSourcePieData(stats: AdminOrderStats, metric: "count" | "totalAmount"): PieDatum[] {
  const organic = addBuckets(stats.organicOnline, stats.organicCod);
  const admin = addBuckets(stats.adminOnline, stats.adminCod);
  return [
    { key: "organic", name: "Organic", value: organic[metric], color: CHART_COLORS.organic },
    { key: "admin", name: "Admin", value: admin[metric], color: CHART_COLORS.admin },
  ].filter((item) => item.value > 0);
}

// Online vs COD — combined across organic + admin sources
function buildPaymentModePieData(stats: AdminOrderStats, metric: "count" | "totalAmount"): PieDatum[] {
  const online = addBuckets(stats.organicOnline, stats.adminOnline);
  const cod = addBuckets(stats.organicCod, stats.adminCod);
  return [
    { key: "online", name: "Online", value: online[metric], color: CHART_COLORS.online },
    { key: "cod", name: "COD", value: cod[metric], color: CHART_COLORS.cod },
  ].filter((item) => item.value > 0);
}

// Online / COD split further broken out by Organic vs Admin
function buildPaymentModeBreakdown(stats: AdminOrderStats): PaymentModeBreakdown {
  return {
    online: {
      organic: stats.organicOnline,
      admin: stats.adminOnline,
      total: addBuckets(stats.organicOnline, stats.adminOnline),
    },
    cod: {
      organic: stats.organicCod,
      admin: stats.adminCod,
      total: addBuckets(stats.organicCod, stats.adminCod),
    },
  };
}

/* ---------------------------------------------------------------------- */
/*  Small, reusable pieces                                                */
/* ---------------------------------------------------------------------- */

// Compact KPI, used inline in a single divided strip (not a grid of cards)
function KpiStat(props: { label: string; value: string; helper?: string }) {
  const { label, value, helper } = props;
  return (
    <Box sx={{ px: 3, py: 1.5 }}>
      <Typography color="text.secondary" variant="body2">
        {label}
      </Typography>
      <Typography sx={{ color: "#111827", fontWeight: 800, lineHeight: 1.3, mt: 0.25 }} variant="h5">
        {value}
      </Typography>
      {helper ? (
        <Typography color="text.secondary" sx={{ mt: 0.25 }} variant="caption">
          {helper}
        </Typography>
      ) : null}
    </Box>
  );
}

// Generic at-a-glance donut, reused for source and payment splits.
function StatDonut(props: {
  data: PieDatum[];
  total: number;
  centerLabel?: string;
  size?: number;
  valueFormatter?: (value: number) => string;
}) {
  const { data, total, centerLabel = "Orders", size = 180, valueFormatter = formatNumber } = props;
  const strokeWidth = 26;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const sum = data.reduce((s, d) => s + d.value, 0);

  let offsetAccum = 0;

  return (
    <Box sx={{ position: "relative", mx: "auto" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={strokeWidth} />
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {data.map((d) => {
            const fraction = sum > 0 ? d.value / sum : 0;
            const dash = fraction * circumference;
            const gap = circumference - dash;
            const dashoffset = -offsetAccum;
            offsetAccum += dash;
            const pct = sharePct(d.value, sum);
            return (
              <MuiTooltip key={d.key} arrow title={`${d.name}: ${valueFormatter(d.value)} (${pct}%)`}>
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={d.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${dash} ${gap}`}
                  strokeDashoffset={dashoffset}
                  style={{ cursor: "pointer" }}
                />
              </MuiTooltip>
            );
          })}
        </g>
      </svg>
      <Box
        sx={{
          left: "50%",
          pointerEvents: "none",
          position: "absolute",
          textAlign: "center",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography color="text.secondary" variant="caption">
          {centerLabel}
        </Typography>
        <Typography sx={{ color: "#111827", fontWeight: 850 }} variant="h6">
          {valueFormatter(total)}
        </Typography>
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------- */

export default function AdminDashboard() {
  const theme = useTheme();

  const [stats, setStats] = useState<AdminOrderStats>(EMPTY_STATS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [appliedDateRange, setAppliedDateRange] = useState<AppliedDateRange>({ startDate: "", endDate: "" });

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const raw = await getAdminOrderStats({
        startDate: appliedDateRange.startDate || undefined,
        endDate: appliedDateRange.endDate || undefined,
      });
      setStats(parseAdminOrderStatsResponse(raw));
    } catch (e: unknown) {
      setStats(EMPTY_STATS);
      setError(e instanceof Error ? e.message : "Failed to load dashboard stats.");
    } finally {
      setLoading(false);
    }
  }, [appliedDateRange]);

  useEffect(() => {
    void load();
  }, [load]);

  const organicTotal = useMemo(() => addBuckets(stats.organicOnline, stats.organicCod), [stats]);
  const adminTotal = useMemo(() => addBuckets(stats.adminOnline, stats.adminCod), [stats]);
  const sourceCountPieData = useMemo(() => buildSourcePieData(stats, "count"), [stats]);
  const paymentModeCountPieData = useMemo(() => buildPaymentModePieData(stats, "count"), [stats]);
  const paymentModeBreakdown = useMemo(() => buildPaymentModeBreakdown(stats), [stats]);

  const todayIso = formatLocalIsoDate(new Date());
  const startDateInputMax = endDate ? minIsoDate(todayIso, endDate) : todayIso;
  const endDateInputMin = startDate || undefined;
  const isApplyDisabled = startDate === appliedDateRange.startDate && endDate === appliedDateRange.endDate;
  const isClearDisabled =
    startDate === "" && endDate === "" && appliedDateRange.startDate === "" && appliedDateRange.endDate === "";
  const activeRangeLabel =
    appliedDateRange.startDate || appliedDateRange.endDate
      ? `${formatIsoDate(appliedDateRange.startDate, "Start")} to ${formatIsoDate(appliedDateRange.endDate || todayIso, "Today")}`
      : "Overall";

  const handleApplyFilters = () => setAppliedDateRange({ startDate, endDate });
  const handleClearFilters = () => {
    setStartDate("");
    setEndDate("");
    setAppliedDateRange({ startDate: "", endDate: "" });
  };

  const avgOrderValue = stats.overall.count > 0 ? stats.overall.totalAmount / stats.overall.count : 0;

  return (
    <Box sx={{ bgcolor: "#eef2f6", minHeight: "100%", minWidth: 1100, p: 3 }}>
      <Stack spacing={3}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
          <Box>
            <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h5">
              Dashboard
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Organic vs. admin orders, at a glance.
            </Typography>
          </Box>
          <Paper sx={{ borderRadius: 2, boxShadow: "none", px: 2, py: 1 }}>
            <Typography color="text.secondary" variant="caption">
              Showing
            </Typography>
            <Typography sx={{ color: "#111827", fontWeight: 750 }} variant="body2">
              {activeRangeLabel}
            </Typography>
          </Paper>
        </Stack>

        {error ? (
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        ) : null}

        {/* Filters — compact single row */}
        <Paper sx={{ borderRadius: 2, boxShadow: "none", p: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              label="Start date"
              type="date"
              variant="outlined"
              size="small"
              value={startDate}
              onChange={(e) => {
                const next = e.target.value;
                setStartDate(next);
                if (next && endDate && next > endDate) setEndDate(next);
              }}
              InputLabelProps={{ shrink: true }}
              slotProps={{ htmlInput: { max: startDateInputMax } }}
              sx={{ minWidth: 180 }}
            />
            <TextField
              label="End date"
              type="date"
              variant="outlined"
              size="small"
              value={endDate}
              onChange={(e) => {
                const next = e.target.value;
                const capped = next && next > todayIso ? todayIso : next;
                setEndDate(capped);
                if (capped && startDate && capped < startDate) setStartDate(capped);
              }}
              InputLabelProps={{ shrink: true }}
              slotProps={{ htmlInput: { max: todayIso, ...(endDateInputMin ? { min: endDateInputMin } : {}) } }}
              sx={{ minWidth: 180 }}
            />
            <Button
              variant="contained"
              onClick={handleApplyFilters}
              disabled={isApplyDisabled}
              sx={{ bgcolor: isApplyDisabled ? "action.disabledBackground" : "#e10600", "&:hover": { bgcolor: "#c00500" } }}
            >
              Apply
            </Button>
            <Button variant="outlined" onClick={handleClearFilters} disabled={isClearDisabled} color="inherit">
              Clear
            </Button>
          </Stack>
        </Paper>

        {/* KPI strip — one Paper, divided, instead of separate cards */}
        <Paper sx={{ borderRadius: 2, boxShadow: "none" }}>
          <Stack direction="row" divider={<Divider flexItem orientation="vertical" />}>
            <KpiStat label="Overall orders" value={formatNumber(stats.overall.count)} helper={formatCurrency(stats.overall.totalAmount)} />
            <KpiStat label="Average order value" value={formatCurrency(avgOrderValue)} helper="Across all orders" />
            <KpiStat
              label="Organic share"
              value={metricShare(organicTotal.count, stats.overall.count)}
              helper={`${formatNumber(organicTotal.count)} orders`}
            />
            <KpiStat
              label="Admin share"
              value={metricShare(adminTotal.count, stats.overall.count)}
              helper={`${formatNumber(adminTotal.count)} orders`}
            />
          </Stack>
        </Paper>

        {/* Main content: source table + two donuts (source split, online/COD split) */}
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1.5fr 1fr 1fr" }}>
          <Paper sx={{ borderRadius: 2, boxShadow: "none", p: 2.5 }}>
            <Typography sx={{ color: "#111827", fontWeight: 750, mb: 1.5 }} variant="subtitle1">
              Source breakdown
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: "text.secondary" }}>Source</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                      Orders
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                      Revenue
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                      Rev. share
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box sx={{ bgcolor: CHART_COLORS.organic, borderRadius: "50%", height: 10, width: 10 }} />
                        <Typography sx={{ fontWeight: 600 }} variant="body2">
                          Organic
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{formatNumber(organicTotal.count)}</TableCell>
                    <TableCell align="right">{formatCurrency(organicTotal.totalAmount)}</TableCell>
                    <TableCell align="right">{metricShare(organicTotal.totalAmount, stats.overall.totalAmount)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box sx={{ bgcolor: CHART_COLORS.admin, borderRadius: "50%", height: 10, width: 10 }} />
                        <Typography sx={{ fontWeight: 600 }} variant="body2">
                          Admin
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{formatNumber(adminTotal.count)}</TableCell>
                    <TableCell align="right">{formatCurrency(adminTotal.totalAmount)}</TableCell>
                    <TableCell align="right">{metricShare(adminTotal.totalAmount, stats.overall.totalAmount)}</TableCell>
                  </TableRow>
                  <TableRow sx={{ "& td": { borderBottom: "none", pt: 1.5 } }}>
                    <TableCell>
                      <Typography sx={{ fontWeight: 800 }} variant="body2">
                        Total
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography sx={{ fontWeight: 800 }} variant="body2">
                        {formatNumber(stats.overall.count)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography sx={{ fontWeight: 800 }} variant="body2">
                        {formatCurrency(stats.overall.totalAmount)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography sx={{ fontWeight: 800 }} variant="body2">
                        100%
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <Paper sx={{ alignItems: "center", borderRadius: 2, boxShadow: "none", display: "flex", flexDirection: "column", justifyContent: "center", p: 2.5 }}>
            <Typography sx={{ alignSelf: "flex-start", color: "#111827", fontWeight: 750, mb: 1.5 }} variant="subtitle1">
              Orders by source
            </Typography>
            <StatDonut data={sourceCountPieData} total={stats.overall.count} />
            <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
              {sourceCountPieData.map((d) => (
                <Stack key={d.key} direction="row" spacing={1} alignItems="center">
                  <Box sx={{ bgcolor: d.color, borderRadius: "50%", height: 10, width: 10 }} />
                  <Typography variant="body2">{d.name}</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>

          {/* Online vs COD donut, with per-mode count + amount and organic/admin split */}
          <Paper sx={{ alignItems: "center", borderRadius: 2, boxShadow: "none", display: "flex", flexDirection: "column", justifyContent: "center", p: 2.5 }}>
            <Typography sx={{ alignSelf: "flex-start", color: "#111827", fontWeight: 750, mb: 1.5 }} variant="subtitle1">
              Online vs COD
            </Typography>
            <StatDonut data={paymentModeCountPieData} total={stats.overall.count} />
            <Stack spacing={1.25} sx={{ mt: 2, width: "100%" }}>
              {paymentModeCountPieData.map((d) => {
                const mode = d.key === "online" ? paymentModeBreakdown.online : paymentModeBreakdown.cod;
                return (
                  <Box key={d.key}>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box sx={{ bgcolor: d.color, borderRadius: "50%", height: 10, width: 10 }} />
                        <Typography sx={{ fontWeight: 700 }} variant="body2">
                          {d.name}
                        </Typography>
                      </Stack>
                      <Typography color="text.secondary" variant="caption">
                        {formatNumber(mode.total.count)} orders · {formatCurrency(mode.total.totalAmount)}
                      </Typography>
                    </Stack>
                    <Typography color="text.secondary" sx={{ display: "block", pl: 2.5 }} variant="caption">
                      Organic {formatNumber(mode.organic.count)} ({formatCurrency(mode.organic.totalAmount)}) · Admin{" "}
                      {formatNumber(mode.admin.count)} ({formatCurrency(mode.admin.totalAmount)})
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Paper>
        </Box>

        {/* Payment mode breakdown table — mirrors the Source breakdown table above */}
        <Paper sx={{ borderRadius: 2, boxShadow: "none", p: 2.5 }}>
          <Typography sx={{ color: "#111827", fontWeight: 750, mb: 1.5 }} variant="subtitle1">
            Payment mode breakdown
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "text.secondary" }}>Mode</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                    Organic orders
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                    Admin orders
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                    Total orders
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                    Total revenue
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "text.secondary" }} align="right">
                    Rev. share
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ bgcolor: CHART_COLORS.online, borderRadius: "50%", height: 10, width: 10 }} />
                      <Typography sx={{ fontWeight: 600 }} variant="body2">
                        Online
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{formatNumber(paymentModeBreakdown.online.organic.count)}</TableCell>
                  <TableCell align="right">{formatNumber(paymentModeBreakdown.online.admin.count)}</TableCell>
                  <TableCell align="right">{formatNumber(paymentModeBreakdown.online.total.count)}</TableCell>
                  <TableCell align="right">{formatCurrency(paymentModeBreakdown.online.total.totalAmount)}</TableCell>
                  <TableCell align="right">
                    {metricShare(paymentModeBreakdown.online.total.totalAmount, stats.overall.totalAmount)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ bgcolor: CHART_COLORS.cod, borderRadius: "50%", height: 10, width: 10 }} />
                      <Typography sx={{ fontWeight: 600 }} variant="body2">
                        COD
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{formatNumber(paymentModeBreakdown.cod.organic.count)}</TableCell>
                  <TableCell align="right">{formatNumber(paymentModeBreakdown.cod.admin.count)}</TableCell>
                  <TableCell align="right">{formatNumber(paymentModeBreakdown.cod.total.count)}</TableCell>
                  <TableCell align="right">{formatCurrency(paymentModeBreakdown.cod.total.totalAmount)}</TableCell>
                  <TableCell align="right">
                    {metricShare(paymentModeBreakdown.cod.total.totalAmount, stats.overall.totalAmount)}
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { borderBottom: "none", pt: 1.5 } }}>
                  <TableCell>
                    <Typography sx={{ fontWeight: 800 }} variant="body2">
                      Total
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontWeight: 800 }} variant="body2">
                      {formatNumber(organicTotal.count)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontWeight: 800 }} variant="body2">
                      {formatNumber(adminTotal.count)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontWeight: 800 }} variant="body2">
                      {formatNumber(stats.overall.count)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontWeight: 800 }} variant="body2">
                      {formatCurrency(stats.overall.totalAmount)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontWeight: 800 }} variant="body2">
                      100%
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {loading ? (
          <Box
            sx={{
              alignItems: "center",
              bgcolor: "rgba(238, 242, 246, 0.7)",
              display: "flex",
              inset: 0,
              justifyContent: "center",
              position: "fixed",
              zIndex: (t) => t.zIndex.modal,
            }}
          >
            <CircularProgress size={34} />
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}
