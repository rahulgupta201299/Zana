import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ProductCatergoryCountType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { productSubCategoryCountTraceActions } from "../Actions";
import { ALL_CATEGORY } from "@/Constants/AppConstant";

const network = new Network();

async function productSubCategoryCountService(category: string): Promise<
  ProductCatergoryCountType[]
> {

  if (!category || category.toLowerCase() === ALL_CATEGORY) return [];

  const options = {
    url: `/api/v1/product/category/${encodeURIComponent(category)}/subcategories/count`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(
  productSubCategoryCountTraceActions,
  productSubCategoryCountService,
);
