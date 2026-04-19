import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";

import { OrderDetailResponse } from "@/pages/OrderDetails/Types";
import AppStore from "@/Configurations/AppStore";
import { orderDetailByIdActions } from "../Action";

const network = new Network();

async function getOrderDetailService(
  orderId: string,
): Promise<OrderDetailResponse> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;

  const options = {
    url: `/api/v1/order/${orderId}`,
    method: API_METHOD_ENUM.GET,
    params: {
      currency,
    },
  };

  const response = await network.request(options);
  const { data } = response;
  return data as OrderDetailResponse;
}

const getOrderDetailServiceAction = serviceActionCreator(
  orderDetailByIdActions,
  getOrderDetailService,
);

export default getOrderDetailServiceAction;
