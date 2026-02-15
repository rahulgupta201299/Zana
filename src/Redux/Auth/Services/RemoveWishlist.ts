import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { removeWishlistActions } from "../Actions";
import { WishListResType } from "../Types";

const network = new Network();

export interface REMOVE_WISHLIST {
  phoneNumber: string;
  productIds: string[];
}

async function removeWishlistService(
  requestData: REMOVE_WISHLIST,
): Promise<WishListResType> {
  const options = {
    url: `/api/v1/wishlist/remove`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
  
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const removeWishlistServiceAction = serviceActionCreator(
  removeWishlistActions,
  removeWishlistService,
);

export default removeWishlistServiceAction;
