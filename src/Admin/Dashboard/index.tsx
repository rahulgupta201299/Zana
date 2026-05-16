import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  AdminOrderStats,
  getAdminOrderStats,
  parseAdminOrderStatsResponse,
} from "../Configurations/AdminDashboardApi";
import { formatIsoDate } from "../Utils/DateUtils";

const EMPTY_STATS: AdminOrderStats = {
  online: { count: 0, totalAmount: 0 },
  cod: { count: 0, totalAmount: 0 },
  overall: { count: 0, totalAmount: 0 },
};

const CHART_COLORS = {
  online: "#2563eb",
  cod: "#f97316",
};

type AppliedDateRange = {
  startDate: string;
  endDate: string;
};

type PieDatum = {
  key: "online" | "cod";
  name: string;
  value: number;
  color: string;
};

type PieTooltipPayload = {
  payload?: PieDatum;
  value?: number | string;
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

function metricShare(value: number, total: number): string {
  if (total <= 0) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function buildPieData(stats: AdminOrderStats, metric: "count" | "totalAmount"): PieDatum[] {
  return [
    {
      key: "online",
      name: "Online",
      value: stats.online[metric],
      color: CHART_COLORS.online,
    },
    {
      key: "cod",
      name: "COD",
      value: stats.cod[metric],
      color: CHART_COLORS.cod,
    },
  ].filter((item) => item.value > 0);
}

function MetricCard(props: {
  label: string;
  count: number;
  totalAmount: number;
  accent: string;
  share?: string;
}) {
  const { label, count, totalAmount, accent, share } = props;

  return (
    <Paper
      sx={{
        borderLeft: `4px solid ${accent}`,
        borderRadius: 2,
        boxShadow: "none",
        minWidth: 220,
        p: 2,
      }}
    >
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Typography color="text.secondary" variant="body2">
            {label}
          </Typography>
          {share ? (
            <Typography color="text.secondary" variant="caption">
              {share}
            </Typography>
          ) : null}
        </Stack>
        <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h5">
          {formatNumber(count)}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {formatCurrency(totalAmount)}
        </Typography>
      </Stack>
    </Paper>
  );
}

function StatsPieChart(props: {
  title: string;
  data: PieDatum[];
  emptyLabel: string;
  valueFormatter: (value: number) => string;
}) {
  const { title, data, emptyLabel, valueFormatter } = props;

  return (
    <Paper sx={{ borderRadius: 2, boxShadow: "none", p: 2 }}>
      <Typography sx={{ color: "#111827", fontWeight: 750, mb: 1 }} variant="subtitle1">
        {title}
      </Typography>
      <Box sx={{ height: 320 }}>
        {data.length === 0 ? (
          <Box
            sx={{
              alignItems: "center",
              bgcolor: "#f8fafc",
              border: "1px dashed #cbd5e1",
              borderRadius: 2,
              display: "flex",
              height: "100%",
              justifyContent: "center",
              px: 2,
              textAlign: "center",
            }}
          >
            <Typography color="text.secondary">{emptyLabel}</Typography>
          </Box>
        ) : (
          <ResponsiveContainer height="100%" width="100%">
            <PieChart>
              <Pie
                cx="50%"
                cy="45%"
                data={data}
                dataKey="value"
                innerRadius={58}
                nameKey="name"
                outerRadius={104}
                paddingAngle={3}
              >
                {data.map((entry) => (
                  <Cell fill={entry.color} key={entry.key} />
                ))}
              </Pie>
              <Tooltip
                content={(tooltipProps) => (
                  <PieTooltip
                    active={tooltipProps.active}
                    payload={tooltipProps.payload as PieTooltipPayload[] | undefined}
                    valueFormatter={valueFormatter}
                  />
                )}
              />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#374151", fontSize: 13 }}>{value}</span>
                )}
                verticalAlign="bottom"
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </Box>
    </Paper>
  );
}

function PieTooltip(props: {
  active?: boolean;
  payload?: PieTooltipPayload[];
  valueFormatter: (value: number) => string;
}) {
  const { active, payload, valueFormatter } = props;
  const item = payload?.[0];
  const datum = item?.payload;
  const value = Number(item?.value ?? datum?.value ?? 0);

  if (!active || !datum) return null;

  return (
    <Paper
      sx={{
        border: "1px solid #d1d5db",
        borderRadius: 1,
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
        px: 1.5,
        py: 1,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          aria-hidden
          sx={{
            bgcolor: datum.color,
            borderRadius: "50%",
            height: 10,
            width: 10,
          }}
        />
        <Typography sx={{ color: "#111827", fontWeight: 700 }} variant="body2">
          {datum.name}: {valueFormatter(value)}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminOrderStats>(EMPTY_STATS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [appliedDateRange, setAppliedDateRange] = useState<AppliedDateRange>({
    startDate: "",
    endDate: "",
  });

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

  const countPieData = useMemo(() => buildPieData(stats, "count"), [stats]);
  const amountPieData = useMemo(() => buildPieData(stats, "totalAmount"), [stats]);

  const todayIso = formatLocalIsoDate(new Date());
  const startDateInputMax = endDate ? minIsoDate(todayIso, endDate) : todayIso;
  const endDateInputMin = startDate || undefined;
  const isApplyDisabled =
    startDate === appliedDateRange.startDate && endDate === appliedDateRange.endDate;
  const isClearDisabled =
    startDate === "" && endDate === "" && appliedDateRange.startDate === "" && appliedDateRange.endDate === "";
  const activeRangeLabel =
    appliedDateRange.startDate || appliedDateRange.endDate
      ? `${formatIsoDate(appliedDateRange.startDate, "Start")} to ${formatIsoDate(
          appliedDateRange.endDate || todayIso,
          "Today",
        )}`
      : "Overall";

  const handleApplyFilters = () => {
    setAppliedDateRange({ startDate, endDate });
  };

  const handleClearFilters = () => {
    setStartDate("");
    setEndDate("");
    setAppliedDateRange({ startDate: "", endDate: "" });
  };

  return (
    <Box sx={{ bgcolor: "#eef2f6", minHeight: "100%", p: { xs: 2, md: 3 } }}>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={2}>
          <Box>
            <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h5">
              Dashboard
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Order split and revenue analysis by payment type.
            </Typography>
          </Box>
          <Paper sx={{ alignSelf: { sm: "flex-start" }, borderRadius: 2, boxShadow: "none", px: 2, py: 1 }}>
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

        <Paper sx={{ borderRadius: 2, boxShadow: "none", p: 2 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} flexWrap="wrap" useFlexGap alignItems="center">
            <TextField
              label="Start date"
              type="date"
              variant="outlined"
              size="small"
              value={startDate}
              onChange={(e) => {
                const next = e.target.value;
                setStartDate(next);
                if (next && endDate && next > endDate) {
                  setEndDate(next);
                }
              }}
              InputLabelProps={{ shrink: true }}
              slotProps={{ htmlInput: { max: startDateInputMax } }}
              sx={{ minWidth: 200 }}
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
                if (capped && startDate && capped < startDate) {
                  setStartDate(capped);
                }
              }}
              InputLabelProps={{ shrink: true }}
              slotProps={{
                htmlInput: {
                  max: todayIso,
                  ...(endDateInputMin ? { min: endDateInputMin } : {}),
                },
              }}
              sx={{ minWidth: 200 }}
            />
            <Button
              variant="contained"
              onClick={handleApplyFilters}
              disabled={isApplyDisabled}
              sx={{
                bgcolor: isApplyDisabled ? "action.disabledBackground" : "#e10600",
                "&:hover": { bgcolor: "#c00500" },
              }}
            >
              Apply filters
            </Button>
            <Button variant="outlined" onClick={handleClearFilters} disabled={isClearDisabled} color="inherit">
              Clear
            </Button>
          </Stack>
        </Paper>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <MetricCard
            label="Overall orders"
            count={stats.overall.count}
            totalAmount={stats.overall.totalAmount}
            accent="#111827"
          />
          <MetricCard
            label="Online"
            count={stats.online.count}
            totalAmount={stats.online.totalAmount}
            accent={CHART_COLORS.online}
            share={`${metricShare(stats.online.count, stats.overall.count)} of orders`}
          />
          <MetricCard
            label="COD"
            count={stats.cod.count}
            totalAmount={stats.cod.totalAmount}
            accent={CHART_COLORS.cod}
            share={`${metricShare(stats.cod.count, stats.overall.count)} of orders`}
          />
        </Stack>

        <Paper sx={{ borderRadius: 2, boxShadow: "none", p: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            divider={<Divider flexItem orientation="vertical" />}
            spacing={2}
          >
            <Box sx={{ flex: 1 }}>
              <Typography color="text.secondary" variant="body2">
                Online revenue share
              </Typography>
              <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h6">
                {metricShare(stats.online.totalAmount, stats.overall.totalAmount)}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography color="text.secondary" variant="body2">
                COD revenue share
              </Typography>
              <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h6">
                {metricShare(stats.cod.totalAmount, stats.overall.totalAmount)}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography color="text.secondary" variant="body2">
                Average order value
              </Typography>
              <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h6">
                {formatCurrency(stats.overall.count > 0 ? stats.overall.totalAmount / stats.overall.count : 0)}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" } }}>
          <StatsPieChart
            title="Orders by payment type"
            data={countPieData}
            emptyLabel="No order count data for this range."
            valueFormatter={formatNumber}
          />
          <StatsPieChart
            title="Revenue by payment type"
            data={amountPieData}
            emptyLabel="No revenue data for this range."
            valueFormatter={formatCurrency}
          />
        </Box>

        {loading ? (
          <Box
            sx={{
              alignItems: "center",
              bgcolor: "rgba(238, 242, 246, 0.7)",
              display: "flex",
              inset: 0,
              justifyContent: "center",
              position: "fixed",
              zIndex: (theme) => theme.zIndex.modal,
            }}
          >
            <CircularProgress size={34} />
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}
