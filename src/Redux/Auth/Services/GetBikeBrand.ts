import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getBikeBrandActions, getIsdCodeActions } from "../Actions";


const network = new Network();

async function getBikeBrandListService(): Promise<any> {
  const options = {
    url: `/api/v1/brand`,
    method: API_METHOD_ENUM.GET,
  };
    const response = await network.request(options)
    const { data } = response
    return data
}

const getBikeBrandServiceAction = serviceActionCreator(
    getBikeBrandActions,
    getBikeBrandListService
);

export default getBikeBrandServiceAction
