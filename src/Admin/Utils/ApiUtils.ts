export type AdminApiResponse<TData = unknown> = {
  success?: boolean;
  message?: string;
  data?: TData;
};

export function omitEmptyParams<TValue extends string | number>(
  params: Record<string, TValue | undefined | null>,
): Record<string, TValue> {
  const out: Record<string, TValue> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      out[key] = value;
    }
  }
  return out;
}

export function getAdminApiBody<TData = unknown>(raw: unknown): AdminApiResponse<TData> {
  const body = (raw && typeof raw === "object" ? raw : {}) as AdminApiResponse<TData>;
  if (body.success === false) {
    throw new Error(body.message?.trim() || "API request failed");
  }
  return body;
}
