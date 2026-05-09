import Axios from 'axios'
import { NetworkTypes } from "./Types"
import { API_DOMAIN, API_TIME_OUT } from '../env';
import { API_METHOD_ENUM } from './Constant';
import { API_QUERY_KEY, getApiCacheConfig, queryClient } from '../QueryClient';

const asHttp = Axios.create({
  baseURL: API_DOMAIN,
  timeout: API_TIME_OUT,
});

function normalizeForCache(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeForCache);
  }

  if (value && typeof value === "object") {
    return Object.keys(value as Record<string, unknown>)
      .sort()
      .reduce<Record<string, unknown>>((acc, key) => {
        const item = (value as Record<string, unknown>)[key];

        if (item !== undefined) {
          acc[key] = normalizeForCache(item);
        }

        return acc;
      }, {});
  }

  return value ?? null;
}

function createApiQueryKey({ url, method, params, data, headers }: NetworkTypes) {
  return [
    API_QUERY_KEY,
    method.toUpperCase(),
    url,
    normalizeForCache(params),
    normalizeForCache(data),
    normalizeForCache(headers),
  ] as const;
}

export default class Network {
  async request({ url, method, data, params, headers }: NetworkTypes) {
    const normalizedMethod = method.toUpperCase();

    const options = {
      url,
      method: normalizedMethod,
      data,
      headers,
      params
    }

    try {
      const request = async () => {
        const response = await asHttp.request(options)
        const { data } = response
        return data
      }

      if (normalizedMethod === API_METHOD_ENUM.GET) {
        return queryClient.fetchQuery({
          queryKey: createApiQueryKey(options),
          queryFn: request,
          ...getApiCacheConfig(url),
        });
      }

      const response = await request();

      queryClient.invalidateQueries({
        queryKey: [API_QUERY_KEY],
        refetchType: "none",
      });

      return response;
    } catch (error: any) {
      console.error("API Request Error:", error);
      throw error
    }
  }
}
