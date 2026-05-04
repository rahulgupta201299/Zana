import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ProductCatergoryCountType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { bikeSubCategoryCountTraceActions } from "../Actions";

const network = new Network();

async function bikeSubCategoryCountService({ category, modelId }: { category: string, modelId: string }): Promise<
  ProductCatergoryCountType[]
> {
  const options = {
    url: `/api/v1/product/model/${modelId}/category/${encodeURIComponent(category)}/subcategories/count`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const bikeSubCategoryCountServiceAction = serviceActionCreator(
  bikeSubCategoryCountTraceActions,
  bikeSubCategoryCountService,
);

export default bikeSubCategoryCountServiceAction;
