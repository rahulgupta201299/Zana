import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";
import { getAdminApiBody, omitEmptyParams } from "../Utils/ApiUtils";

const network = new Network();

const ADMIN_ORDER_STATS_PATH = "/api/v1/order/admin/stats";

export type AdminOrderStatsFilters = {
  startDate?: string;
  endDate?: string;
};

export type AdminOrderStatsBucket = {
  count: number;
  totalAmount: number;
};

export type AdminOrderStats = {
  online: AdminOrderStatsBucket;
  cod: AdminOrderStatsBucket;
  overall: AdminOrderStatsBucket;
};

function bucketOrDefault(bucket: Partial<AdminOrderStatsBucket> | undefined): AdminOrderStatsBucket {
  return {
    count: Number(bucket?.count ?? 0),
    totalAmount: Number(bucket?.totalAmount ?? 0),
  };
}

export function parseAdminOrderStatsResponse(raw: unknown): AdminOrderStats {
  const body = getAdminApiBody<Partial<AdminOrderStats>>(raw);

  return {
    online: bucketOrDefault(body.data?.online),
    cod: bucketOrDefault(body.data?.cod),
    overall: bucketOrDefault(body.data?.overall),
  };
}

export async function getAdminOrderStats(filters: AdminOrderStatsFilters): Promise<unknown> {
  return network.request({
    url: ADMIN_ORDER_STATS_PATH,
    method: API_METHOD_ENUM.GET,
    params: omitEmptyParams({
      startDate: filters.startDate,
      endDate: filters.endDate,
    }),
    cache: false,
  });
}
