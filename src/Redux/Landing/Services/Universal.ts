import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { ApiUniversalData } from "../Types";
import { universalActions } from "../Actions";

const network = new Network();

async function universalService(): Promise<ApiUniversalData[]> {
  const options = {
    url: `/api/v1/product/landing/universal`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const universalServiceAction = serviceActionCreator(
  universalActions,
  universalService,
);

export default universalServiceAction;
