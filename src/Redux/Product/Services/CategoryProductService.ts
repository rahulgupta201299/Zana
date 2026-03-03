import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import {
  CategoryProductReqType,
  ProductCatalogDetailsType,
} from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { categoryProductTraceActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";

const network = new Network();

async function categoryProductService({
  category,
  queryParams = {},
}: CategoryProductReqType): Promise<ProductCatalogDetailsType> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;
  const options = {
    url: `api/v1/product/category/${encodeURIComponent(category)}`,
    method: API_METHOD_ENUM.GET,
    params: { ...queryParams, currency: currency },
  };

  const response = await network.request(options);
  return response;
}

export default serviceActionCreator(
  categoryProductTraceActions,
  categoryProductService,
);
