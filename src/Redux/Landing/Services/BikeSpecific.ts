import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { BikeSpecificResponse } from "../Types";
import { bikeSpecificActions } from "../Actions";

const network = new Network();

async function bikeSpecificService(): Promise<BikeSpecificResponse[]> {
  const options = {
    url: `/api/v1/product/landing/bike-specific`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const bikeSpecificServiceAction = serviceActionCreator(
  bikeSpecificActions,
  bikeSpecificService,
);

export default bikeSpecificServiceAction;
