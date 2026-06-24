import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { QueryParamsType, ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { bikeProductTraceActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";
import { removeEmptyFields } from "@/Utils/ObjectUtils";

const network = new Network();

async function bikeProductService(
 { modelId, category, subCategory = "", queryParams = {} }: { modelId: string; category: string; subCategory?: string, queryParams?: QueryParamsType },
): Promise<ShopByProductDetailsType[]> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;


  const options = {
    url: `/api/v1/product/model/${modelId}`,
    method: API_METHOD_ENUM.GET,
    params: removeEmptyFields({
      currency,
      category,
      subCategory,
      ...queryParams
    }),
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(
  bikeProductTraceActions,
  bikeProductService,
);
