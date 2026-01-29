import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { cartModifyActions } from "../Action";
import { CartModifyReqType, CartDetailResType } from "../Types";

const network = new Network();

async function cartModifyService(
  requestData: CartModifyReqType
): Promise<CartDetailResType> {

  const { phoneNumber = '' } = requestData;

  if (!phoneNumber) return;

  const options = {
    url: `/api/v1/cart/item`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
    const response = await network.request(options)
    return response
}

const cartModifyServiceAction = serviceActionCreator(
  cartModifyActions,
  cartModifyService
);

export default cartModifyServiceAction;
