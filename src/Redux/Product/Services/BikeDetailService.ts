import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { BikeDetailResType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { bikeDetailTraceActions } from "../Actions";

const network = new Network();

async function bikeDetailService(modelId: string): Promise<BikeDetailResType> {
  const options = {
    url: `/api/v1/model/${modelId}`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(bikeDetailTraceActions, bikeDetailService);
