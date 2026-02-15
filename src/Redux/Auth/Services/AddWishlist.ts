import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { addWishlistActions } from "../Actions";
import { boolean } from "yup";

const network = new Network();

export interface ADD_WISHLIST {
  phoneNumber: string;
  productIds: string[];
}

async function addWishListService(requestData: ADD_WISHLIST): Promise<any> {
  const options = {
    url: `/api/v1/wishlist/add`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
  // TODO
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const addWishListServiceAction = serviceActionCreator(
  addWishlistActions,
  addWishListService,
);

export default addWishListServiceAction;
