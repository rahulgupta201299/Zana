import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { cartUtmActions } from "../Action";
import { UtmCartReqType } from "../Types";

const network = new Network();

async function utmCartService(reqData: UtmCartReqType): Promise<any> {  
  const options = {
    url: `/api/v1/cart/utm`,
    method: API_METHOD_ENUM.POST,
    data: reqData
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const cartUtmServiceAction = serviceActionCreator(
  cartUtmActions,
  utmCartService,
);

export default cartUtmServiceAction;
