import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { QueryParamsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";

import AppStore from "@/Configurations/AppStore";
import { OrderListType } from "@/pages/OrderDetails/Types";
import { orderActions } from "../Action";

const network = new Network();

async function getOrderListService(
  { page = 1, limit = 10 }: { page?: number; limit?: number } = {}
): Promise<any> {
  const state = AppStore.getState();
  const phoneNumber = state.auth.login.phoneNumber;
  const currency = state.landing.selectedCurrency;

  const options = {
    url: `/api/v1/order/user/${phoneNumber}`,
    method: API_METHOD_ENUM.GET,
    params: {
      currency,
      page,
      limit,
    },
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
