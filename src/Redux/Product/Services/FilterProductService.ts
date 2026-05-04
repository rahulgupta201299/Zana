import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import {
  FilterProductReqType,
  ProductCatalogDetailsType,
} from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { filterProductTraceActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";

const network = new Network();

async function filterProductService({
  category,
  subCategory,
  queryParams = {},
}: FilterProductReqType): Promise<ProductCatalogDetailsType> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;
  
  const options = {
    url: `/api/v1/product/category/${encodeURIComponent(category)}/subcategory/${encodeURIComponent(subCategory)}`,
    method: API_METHOD_ENUM.GET,
    params: {
      ...queryParams,
      currency,
    },
  };

  const response = await network.request(options);
  return response;
}

export default serviceActionCreator(
  filterProductTraceActions,
  filterProductService,
);
