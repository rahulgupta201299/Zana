import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ProductCatergoryCountType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { productCategoryCountTraceActions } from "../Actions";

const network = new Network();

async function productCategoryCountService(): Promise<
  ProductCatergoryCountType[]
> {
  const options = {
    url: `/api/v1/product/categories/count`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(
  productCategoryCountTraceActions,
  productCategoryCountService
);
