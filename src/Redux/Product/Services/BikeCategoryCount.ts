import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ProductCatergoryCountType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { bikeCategoryCountTraceActions } from "../Actions";

const network = new Network();

async function BikeCategoryCountService(modelId: string): Promise<
  ProductCatergoryCountType[]
> {
  const options = {
    url: `/api/v1/product/model/${modelId}/categories/count`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const bikeCategoryCountServiceAction = serviceActionCreator(
  bikeCategoryCountTraceActions,
  BikeCategoryCountService,
);

export default bikeCategoryCountServiceAction;
