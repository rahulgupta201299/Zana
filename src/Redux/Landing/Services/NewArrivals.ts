import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import AppStore from "@/Configurations/AppStore";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { newArrivalsActions } from "../Actions";

const network = new Network();

async function newArrivalsService(): Promise<ShopByProductDetailsType[]> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;

  const options = {
    url: `/api/v1/product/new-arrivals/`,
    method: API_METHOD_ENUM.GET,
    params: {
      currency,
    },
  };

  const response = await network.request(options);
  const { data } = response;
  return data;

}

const newArrivalsServiceAction = serviceActionCreator(
  newArrivalsActions,
  newArrivalsService,
);

export default newArrivalsServiceAction;
