import { API_DOMAIN } from "@/Configurations/env";
import { omitEmptyParams } from "./ApiUtils";

type CsvParamValue = string | number | undefined | null;

function buildCsvUrl(path: string, params: Record<string, CsvParamValue>): string {
  const base = API_DOMAIN ? API_DOMAIN.replace(/\/+$/, "") : "";
  const query = new URLSearchParams(
    Object.entries(omitEmptyParams(params)).map(([key, value]) => [key, String(value)]),
  );
  const queryString = query.toString();
  return `${base}${path}${queryString ? `?${queryString}` : ""}`;
}

function getFilename(response: Response, fallbackFilename: string): string {
  const disposition = response.headers.get("content-disposition") ?? "";
  const match = disposition.match(/filename="?([^"]+)"?/i);
  return match?.[1] || fallbackFilename;
}

export async function downloadAdminCsv(
  path: string,
  params: Record<string, CsvParamValue>,
  fallbackFilename: string,
) {
  const response = await fetch(buildCsvUrl(path, params));
  if (!response.ok) {
    throw new Error(`CSV download failed (${response.status})`);
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getFilename(response, fallbackFilename);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
