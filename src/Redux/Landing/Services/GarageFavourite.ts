import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { garageFavoriteActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";

const network = new Network();

async function garageFavoriteService(): Promise<ShopByProductDetailsType[]> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;

  const options = {
    url: `/api/v1/product/garage-favorite/`,
    method: API_METHOD_ENUM.GET,
    params: {
      currency,
    },
  };

  const response = await network.request(options);
  const { data } = response;
    return data;
    
}

const garageFavoriteServiceAction = serviceActionCreator(
  garageFavoriteActions,
  garageFavoriteService,
);

export default garageFavoriteServiceAction;
