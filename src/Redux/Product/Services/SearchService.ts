import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { SearchRequestType, SearchResponseType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { allProductTraceActions } from "../Actions";

const network = new Network();

async function searchService(
  queryParams: SearchRequestType
): Promise<SearchResponseType> {
  const options = {
    url: `api/v1/product/search`,
    method: API_METHOD_ENUM.GET,
    queryParams,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(allProductTraceActions, searchService);
