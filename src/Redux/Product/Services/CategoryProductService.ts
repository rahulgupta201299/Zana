import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import {
  CategoryProductReqType,
  ProductCatalogDetailsType,
} from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { categoryProductTraceActions } from "../Actions";

const network = new Network();

async function categoryProductService({
  category,
  queryParams = {},
}: CategoryProductReqType): Promise<ProductCatalogDetailsType> {
  const options = {
    url: `api/v1/product/category/${encodeURIComponent(category)}`,
    method: API_METHOD_ENUM.GET,
    params: queryParams,
  };

  const response = await network.request(options);
  return response;
}

export default serviceActionCreator(
  categoryProductTraceActions,
  categoryProductService
);
