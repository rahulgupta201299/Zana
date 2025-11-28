import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { verifyOtpActions } from "../Actions";

const network = new Network();

export interface VERIFY_OTP_REQ {
  isdCode: string;
  phoneNumber: string;
  otp: string;
}

async function verifyOtpService(requestData: VERIFY_OTP_REQ): Promise<any> {
  const options = {
    url: `/api/v1/otp/verify`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const VerifyOtpServiceAction = serviceActionCreator(
  verifyOtpActions,
  verifyOtpService
);

export default VerifyOtpServiceAction;
