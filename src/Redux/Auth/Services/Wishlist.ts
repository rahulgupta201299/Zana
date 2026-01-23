import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { wishlistActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";
const network = new Network();

async function getWishListService(): Promise<any> {
  const state = AppStore.getState();
  const phoneNumber = state.auth.profileDetails._id;
  //TODO
  const options = {
    url: `/api/v1/wishlist/7632000876`,
    method: API_METHOD_ENUM.GET,
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const getWishListServiceAction = serviceActionCreator(
  wishlistActions,
  getWishListService,
);

export default getWishListServiceAction;
