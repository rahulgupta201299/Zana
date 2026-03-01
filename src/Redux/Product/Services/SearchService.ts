import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { SearchRequestType, SearchResponseType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { allProductTraceActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";

const network = new Network();

async function searchService(
  { query = '' }: SearchRequestType
): Promise<SearchResponseType> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;
  const options = {
    url: `api/v1/product/search`,
    method: API_METHOD_ENUM.GET,
    params: {
      query: encodeURIComponent(query),   
      currency: currency,
    
    },
  };

  const response = await network.request(options);
  return response;
}

export default serviceActionCreator(allProductTraceActions, searchService);
