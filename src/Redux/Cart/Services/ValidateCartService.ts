import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { validateCartActions } from "../Action";
import { ValidateCartReqType, ValidateCartResType } from "../Types";

const network = new Network();

async function validateCartService(
  requestData: ValidateCartReqType,
): Promise<ValidateCartResType> {
  const options = {
    url: `/api/v1/cart/validate`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const validateCartServiceAction = serviceActionCreator(
  validateCartActions,
  validateCartService,
);

export default validateCartServiceAction;
