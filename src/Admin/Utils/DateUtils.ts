const IST_OFFSET_MINUTES = 330;
const UTC_TIME_ZONE = "UTC";

function parseUtcDateTime(value: string): Date {
  const trimmed = value.trim();
  const hasTimeZone = /(?:z|[+-]\d{2}:?\d{2})$/i.test(trimmed);
  const utcValue = hasTimeZone ? trimmed : `${trimmed}Z`;
  return new Date(utcValue);
}

export function formatUtcToIstDateTime(
  value: string | null | undefined,
  fallback = "—",
): string {
  if (!value || !value.trim()) return fallback;

  const utcDate = parseUtcDateTime(value);
  if (Number.isNaN(utcDate.getTime())) {
    return value;
  }

  const istDate = new Date(utcDate.getTime() + IST_OFFSET_MINUTES * 60 * 1000);
  const display = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: UTC_TIME_ZONE,
  }).format(istDate);

  return `${display} (IST)`;
}

export function formatIsoDate(value: string | null | undefined, fallback = "—"): string {
  if (!value || !value.trim()) return fallback;

  const [year, month, day] = value.trim().split("-").map(Number);
  if (!year || !month || !day) return value;

  const date = new Date(Date.UTC(year, month - 1, day));
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    timeZone: UTC_TIME_ZONE,
    year: "numeric",
  }).format(date);
}
