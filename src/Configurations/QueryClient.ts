import { QueryClient } from "@tanstack/react-query";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

export const API_QUERY_KEY = "api";

export type ApiCacheConfig = {
  staleTime: number;
  gcTime: number;
};

export const apiCacheConfig = {
  realtime: {
    staleTime: 15 * SECOND,
    gcTime: 5 * MINUTE,
  },
  catalog: {
    staleTime: 15 * MINUTE,
    gcTime: 2 * HOUR,
  },
} satisfies Record<string, ApiCacheConfig>;

export function getApiCacheConfig(url: string): ApiCacheConfig {
  const normalizedUrl = url.toLowerCase();

  if (
    normalizedUrl.includes("/product") ||
    normalizedUrl.includes("/brand") ||
    normalizedUrl.includes("/model")
  ) {
    return apiCacheConfig.catalog;
  }

  return apiCacheConfig.realtime;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: apiCacheConfig.realtime.staleTime,
      gcTime: apiCacheConfig.realtime.gcTime,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});
