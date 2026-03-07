import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { currencyListActions } from "../Actions";
import { CurrencyType } from "../Types";



const network = new Network();

async function currencyListService(): Promise<CurrencyType[]> {
  const options = {
    url: `/api/v1/country/currencies`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
   return data
    
}

const currencyListServiceAction = serviceActionCreator(currencyListActions, currencyListService);

export default currencyListServiceAction