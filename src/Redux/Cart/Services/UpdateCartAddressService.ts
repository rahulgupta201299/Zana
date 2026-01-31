import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { updateCartAddressActions } from "../Action";
import { UpdateCartAddressReqType, UpdateCartAddressResType } from "../Types";

const network = new Network();

async function updateCartAddressService(reqData: UpdateCartAddressReqType): Promise<UpdateCartAddressResType> {  
  const options = {
	url: `/api/v1/cart/addresses`,
	method: API_METHOD_ENUM.POST,
	data: reqData
  };
  const response = await network.request(options);
  const { data } = response
  return data;
}

const updateCartAddressServiceAction = serviceActionCreator(
  updateCartAddressActions,
  updateCartAddressService,
);

export default updateCartAddressServiceAction;
