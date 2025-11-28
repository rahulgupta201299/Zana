import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { addProfileDetailsActions } from "../Actions";
import { boolean } from "yup";

const network = new Network();

export interface ADD_PROFILE_DETAILS {
  firstName: string;
  lastName: string;
  isdCode: string;
  phoneNumber: string;
  address: string;
  notifyOffers: boolean;
  bikeOwnedByCustomer?: bike_owned[]
}

 type bike_owned={
    brand: string,
    model: string
 }

async function addProfileDetailsService(
  requestData: ADD_PROFILE_DETAILS
): Promise<any> {
  const options = {
    url: `/api/v1/profile`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };
  // TODO
    const response = await network.request(options)
    const { data } = response
    return data
 
}

const addProfileDetailServiceAction = serviceActionCreator(
  addProfileDetailsActions,
  addProfileDetailsService
);

export default addProfileDetailServiceAction;
