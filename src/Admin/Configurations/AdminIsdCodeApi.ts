import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";
import { getAdminApiBody } from "../Utils/ApiUtils";

const network = new Network();

const ADMIN_ISD_CODES_PATH = "/api/v1/country/isd-codes";

export type AdminIsdCode = {
  code: string;
  isd: string;
  name: string;
};

export async function getAdminIsdCodes(): Promise<AdminIsdCode[]> {
  const raw = await network.request({
    url: ADMIN_ISD_CODES_PATH,
    method: API_METHOD_ENUM.GET,
  });
  const body = getAdminApiBody<AdminIsdCode[]>(raw);
  return Array.isArray(body.data) ? body.data : [];
}
