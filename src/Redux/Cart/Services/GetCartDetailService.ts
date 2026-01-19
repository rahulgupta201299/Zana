import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getCartDetailActions } from "../Action";
import { CartDetailResType } from "../Types";
import AppStore from "@/Configurations/AppStore";

const network = new Network();

async function getCartDetailService(): Promise<CartDetailResType> {
  const state = AppStore.getState()
  const phoneNumber = state.auth.login.phoneNumber;

  const options = {
    url: `/api/v1/cart/active/${phoneNumber}`,
    method: API_METHOD_ENUM.GET,
  };
    const response = await network.request(options)
    const { data } = response
    return data
}

const getCartDetailServiceAction = serviceActionCreator(
  getCartDetailActions,
  getCartDetailService
);

export default getCartDetailServiceAction;
