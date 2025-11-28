import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { QueryParamShopByBikeType, ShopByBikeType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { zProBikeTraceActions } from "../Actions";
import { bikes } from "@/pages/BikeDetail/Constant";

const network = new Network();

async function zProBikeService(params: QueryParamShopByBikeType): Promise<ShopByBikeType[]> {
  const options = {
	url: `/api/v1/brand/with-models`,
	method: API_METHOD_ENUM.GET,
	params
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(zProBikeTraceActions, zProBikeService);
