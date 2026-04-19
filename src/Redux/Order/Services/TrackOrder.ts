import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";

import { OrderDetailResponse } from "@/pages/OrderDetails/Types";
import AppStore from "@/Configurations/AppStore";
import { trackOrderActions } from "../Action";

const network = new Network();

async function trackOrderService(
  orderId: string,
): Promise<OrderDetailResponse> {
  const state = AppStore.getState();

  const options = {
    url: `/api/v1/order/track-order/${orderId}`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data as OrderDetailResponse;
}

const trackOrderServiceAction = serviceActionCreator(
  trackOrderActions,
  trackOrderService,
);

export default trackOrderServiceAction;
