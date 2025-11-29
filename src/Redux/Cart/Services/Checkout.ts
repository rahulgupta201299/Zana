import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { cartCheckoutActions } from "../Action";

const network = new Network();

async function cartCheckoutService(
  requestData: any
): Promise<any> {
  const options = {
    url: `/api/v1/cart/save`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
    const response = await network.request(options)
    const { data } = response
    console.log(response)
    return data
 
}

const cartCheckoutServiceAction = serviceActionCreator(
  cartCheckoutActions,
  cartCheckoutService
);

export default cartCheckoutServiceAction;
