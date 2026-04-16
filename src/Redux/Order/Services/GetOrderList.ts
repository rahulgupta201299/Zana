import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { QueryParamsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";

import AppStore from "@/Configurations/AppStore";
import { OrderListType } from "@/pages/OrderDetails/Types";
import { orderActions } from "../Action";

const network = new Network();

async function getOrderListService(params: QueryParamsType = {}): Promise<OrderListType> {
  const state = AppStore.getState();
  const phoneNumber = state.auth.login.phoneNumber;
  const currency = state.landing.selectedCurrency;

  const options = {
    url: `/api/v1/order/user/${phoneNumber}`,
    method: API_METHOD_ENUM.GET,
    params: {
      ...params,
      currency,
    },
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const getOrderListServiceAction = serviceActionCreator(
  orderActions,
  getOrderListService,
);

export default getOrderListServiceAction;
