import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import {
  ProductCatalogDetailsType,
  QueryParamsType,
} from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { allProductTraceActions } from "../Actions";

const network = new Network();

async function allProductService(
  params: QueryParamsType = {}
): Promise<ProductCatalogDetailsType> {
  const options = {
    url: `/api/v1/product/all`,
    method: API_METHOD_ENUM.GET,
    params,
  };

  const response = await network.request(options);
  return response;
}

export default serviceActionCreator(allProductTraceActions, allProductService);
