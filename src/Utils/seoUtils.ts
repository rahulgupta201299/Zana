import { APP_DOMAIN_URL } from "@/Configurations/env";

export function normalizePath(pathname: string): string {
  if (pathname === "/" || pathname === "") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function truncateSeoText(value: string, maxLength: number): string {
  const normalized = stripHtml(value);
  if (normalized.length <= maxLength) return normalized;
  const tentative = normalized.slice(0, maxLength).trim();
  const lastSpace = tentative.lastIndexOf(" ");
  const final = lastSpace > 0 ? tentative.slice(0, lastSpace) : tentative;
  return `${final}...`;
}

// export function isStaticSeoPage(pathname?: string): boolean {
//   if (typeof document === "undefined") return false;

//   const staticRoute = document.documentElement.getAttribute("data-static-route");
//   if (!staticRoute) return false;

//   const currentPath = normalizePath(pathname ?? window.location.pathname);
//   return normalizePath(staticRoute) === currentPath;
// }

export function buildCanonicalUrl(pathname: string): string {
  const origin = APP_DOMAIN_URL || window.location.origin;
  return `${origin}${normalizePath(pathname)}`;
}
