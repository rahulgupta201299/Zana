import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { orderDetailActions } from "../Action";


const network = new Network();

async function OrderDetailService(phoneNumber): Promise<any> {
  const options = {
    url: `/api/v1/cart/orders/${phoneNumber}`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const orderDetailServiceAction = serviceActionCreator(orderDetailActions, OrderDetailService);

export default orderDetailServiceAction
