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
export const VITE_VIDEO_URL = import.meta.env.VITE_VIDEO_URL;

function parseAppDomainUrl(): string | null {
  const raw = viteEnv("VITE_APP_DOMAIN_URL") || viteEnv("APP_DOMAIN_URL");
	if (raw === "") return null;
	if (typeof raw === "string") {
		const trimmed = raw.trim();
		if (trimmed !== "") return new URL(trimmed).origin;
	}
	return null;
}

/**
 * Absolute app origin only (no path). Set `APP_DOMAIN_URL` per environment so
 * canonical URLs and generated SEO files use the same frontend domain.
 * `VITE_APP_DOMAIN_URL` is also accepted for hosting providers that only
 * expose Vite-prefixed variables.
 */
export const APP_DOMAIN_URL = parseAppDomainUrl();
