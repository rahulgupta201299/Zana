function viteEnv(key: string): string | undefined {
  const env = import.meta.env as Record<string, string | undefined>;
  return env[key];
}

export const NODE_ENV = viteEnv("VITE_NODE_ENV");
export const isProduction =
  import.meta.env.PROD || viteEnv("VITE_NODE_ENV") === "production";
export const APP_TITLE = import.meta.env.VITE_APP_TITLE;
export const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
export const API_TIME_OUT = Number(import.meta.env.VITE_API_TIME_OUT) || 60000;
export const VITE_ENABLE_TRACKING = import.meta.env.VITE_ENABLE_TRACKING === "true";

function browserCanonicalOrigin(): string | null {
	if (typeof window === "undefined") return null;
	return window.location.origin;
}

function parseCanonicalOrigin(): string | null {
  const raw = viteEnv("VITE_CANONICAL_ORIGIN");
	if (raw === "") return null;
	if (typeof raw === "string") {
		const trimmed = raw.trim();
		if (trimmed !== "") return trimmed.replace(/\/+$/, "");
	}
	if (isProduction) return browserCanonicalOrigin();
	return null;
}

/**
 * Absolute origin only (no path). Empty `VITE_CANONICAL_ORIGIN` opts out.
 * In production builds without an override, uses `window.location.origin` when
 * evaluated in a browser; otherwise null (e.g. SSR / non-browser import).
 */
export const CANONICAL_ORIGIN = parseCanonicalOrigin();
