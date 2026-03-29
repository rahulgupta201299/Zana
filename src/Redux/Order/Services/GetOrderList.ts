import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { QueryParamsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";

import AppStore from "@/Configurations/AppStore";
import { OrderListType } from "@/pages/OrderDetails/Types";
import { orderActions } from "../Action";

const network = new Network();

async function getOrderListService(): Promise<OrderListType> {
  const state = AppStore.getState();
  const phoneNumber = state.auth.login.phoneNumber;
  const currency = state.landing.selectedCurrency;

  const options = {
    url: `/api/v1/order/user/+91-9811360979`,
    method: API_METHOD_ENUM.GET,
    params: {
      currency
    }
  };

  const response = await network.request(options);
  const { data } = response;
  return data as OrderListType;
}

const getOrderListServiceAction = serviceActionCreator(
  orderActions,
  getOrderListService,
);

export default getOrderListServiceAction;
