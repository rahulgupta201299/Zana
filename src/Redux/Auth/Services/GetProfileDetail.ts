

import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getProfileDetailsActions } from "../Actions";

const network = new Network();

async function getProfileDetailsService({isdCode,phoneNumber}): Promise<any> {
  const options = {
    url: `api/v1/profile/phone?isdCode=${isdCode}&phoneNumber=${phoneNumber}`,
    method: API_METHOD_ENUM.GET,
  };
    const response = await network.request(options)
    const { data } = response
    return data
}

const  getProfileDetailsServiceAction = serviceActionCreator(
    getProfileDetailsActions,
    getProfileDetailsService
);

export default getProfileDetailsServiceAction;
