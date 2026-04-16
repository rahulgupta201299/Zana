import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { verifyEmailOtpActions, verifyOtpActions } from "../Actions";
import { VeriftyOtpReqType, VerifyOtpResType } from "../Types";

const network = new Network();

export interface VeriftyEmailOtpReqType {
    email: string;
    otp: string;
}

async function verifyEmailOtpService(requestData: VeriftyEmailOtpReqType): Promise<VeriftyEmailOtpReqType> {
  const options = {
    url: `/api/v1/otp/verify-email`,
    method: API_METHOD_ENUM.POST,
    data: requestData,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const verifyEmailOtpServiceAction = serviceActionCreator(
  verifyEmailOtpActions,
  verifyEmailOtpService
);

export default verifyEmailOtpServiceAction;
