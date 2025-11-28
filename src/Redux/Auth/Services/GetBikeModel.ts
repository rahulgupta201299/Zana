import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import {
  getBikeBrandActions,
  getBikeModelActions,
  getIsdCodeActions,
} from "../Actions";

const network = new Network();

async function getBikeModelListService( brandId ): Promise<any> {
  const options = {
    url: `api/v1/model/brand/${brandId}`,
    method: API_METHOD_ENUM.GET,
  };
  // TODO
    const response = await network.request(options)
    const { data } = response
    return data
}

const getBikeModelServiceAction = serviceActionCreator(
  getBikeModelActions,
  getBikeModelListService
);

export default getBikeModelServiceAction;
