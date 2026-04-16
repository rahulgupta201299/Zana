import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { QueryParamsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";

import { orderDetailResponse } from "@/pages/OrderDetails/Types";
import AppStore from "@/Configurations/AppStore";
import { trackOrderActions } from "../Action";

const network = new Network();

async function trackOrderService(
  orderId: string,
): Promise<orderDetailResponse> {
  const state = AppStore.getState();
 

  const options = {
    url: `/api/v1/order/track-order/${orderId}`,
    method: API_METHOD_ENUM.GET,
   
  };

  const response = await network.request(options);
  const { data } = response;
  return data as orderDetailResponse;
}

const trackOrderServiceAction = serviceActionCreator(
  trackOrderActions,
  trackOrderService,
);

export default trackOrderServiceAction;
