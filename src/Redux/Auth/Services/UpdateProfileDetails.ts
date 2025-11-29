import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { updateProfileDetailsActions } from "../Actions";
import AppStore from "@/Configurations/AppStore";

const network = new Network();

export interface UPDATE_PROFILE_DETAILS {
  firstName: string;
  lastName: string;
  isdCode: string;
  phoneNumber: string;
  emailId: string
  address: string;
  notifyOffers: boolean;
  bikeOwnedByCustomer?: bike_owned[]
}

 type bike_owned={
	brand: string,
	model: string
 }

async function updateProfileDetailsService(
  requestData: UPDATE_PROFILE_DETAILS,
): Promise<any> {

  const state = AppStore.getState()
  const profileId = state.auth.profileDetails._id

  const options = {
	url: `/api/v1/profile/update/${profileId}`,
	method: API_METHOD_ENUM.POST,
	data: requestData,
  };
  // TODO
	const response = await network.request(options)
	const { data } = response
	return data
 
}

const updateProfileDetailServiceAction = serviceActionCreator(
  updateProfileDetailsActions,
  updateProfileDetailsService
);

export default updateProfileDetailServiceAction;
