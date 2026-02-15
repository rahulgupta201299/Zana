import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { addProfileDetailsActions, removeWishlistActions } from "../Actions";
import { boolean } from "yup";

const network = new Network();

export interface REMOVE_WISHLIST {
  phoneNumber: string;
  productIds: string[];
}

async function removeWishlistService(
  requestData: REMOVE_WISHLIST,
): Promise<any> {
  const options = {
    url: `/api/v1/wishlist/remove`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
  const response = await network.request(options);
  return response;
}

const removeWishlistServiceAction = serviceActionCreator(
  removeWishlistActions,
  removeWishlistService,
);

export default removeWishlistServiceAction;
