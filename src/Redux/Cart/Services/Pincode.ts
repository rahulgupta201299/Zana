import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { pinCodeActions,  } from "../Action";
import { PincodeResType } from "../Types";

const network = new Network();

async function pinCodeService(
  reqData: { pincode: string },
): Promise<PincodeResType> {
  const options = {
    url: `/api/v1/country/validate-pincode/${reqData.pincode}`,
    method: API_METHOD_ENUM.GET,
    cache: false,
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const pinCodeServiceAction = serviceActionCreator(
  pinCodeActions,
  pinCodeService,
);

export default pinCodeServiceAction;
