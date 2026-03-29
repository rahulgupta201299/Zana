import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import {
  QueryParamsType,
} from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";


import {  orderDetailResponse } from "@/pages/OrderDetails/Types";
import { orderDetailByIdActions } from "../Action";

const network = new Network();

async function getOrderDetailService(
  orderId: string,
): Promise<orderDetailResponse> {
  const options = {
    url: `/api/v1/order/${orderId}`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const {data} = response;
  return data as orderDetailResponse;
}

const getOrderDetailServiceAction = serviceActionCreator(orderDetailByIdActions, getOrderDetailService);

export default getOrderDetailServiceAction;
