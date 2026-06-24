import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { ipLocationCurrencyActions } from "../Actions";
import { IpLocationCurrencyType } from "../Types";

const network = new Network();

async function ipLocationCurrencyService(): Promise<IpLocationCurrencyType> {
  const options = {
    url: `/api/v1/country/ip-location-currency`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const ipLocationCurrencyServiceAction = serviceActionCreator(
  ipLocationCurrencyActions,
  ipLocationCurrencyService,
);

export default ipLocationCurrencyServiceAction;
