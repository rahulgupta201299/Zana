import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { clearCartActions } from "../Action";
import { ClearCartResType, ClearCartReqType } from "../Types";

const network = new Network();

async function clearCartService(
  requestData: ClearCartReqType,
): Promise<ClearCartResType> {

  const options = {
    url: '/api/v1/cart/clear',
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };

  const response = await network.request(options);
  return response;
}

const clearCartServiceAction = serviceActionCreator(
  clearCartActions,
  clearCartService,
);

export default clearCartServiceAction;
