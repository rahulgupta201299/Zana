import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getIsdCodeActions } from "../Actions";
import { IsdCodeType } from "../Types";

const network = new Network();

async function getIsdCodeListService(): Promise<IsdCodeType[]> {
  const options = {
    url: `/api/v1/country/isd-codes`,
    method: API_METHOD_ENUM.GET,
  };
    const response = await network.request(options)
    const { data } = response
    return data
}

const getIsdListServiceAction = serviceActionCreator(
    getIsdCodeActions,
    getIsdCodeListService
);

export default getIsdListServiceAction
