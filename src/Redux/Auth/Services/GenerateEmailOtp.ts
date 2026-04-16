import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { generateEmailOtpActions } from "../Actions";

const network = new Network();

export interface GEN_EMAIL_OTP_REQ{
    email: string;
}

async function generateEmailOtpService(
  requestData: GEN_EMAIL_OTP_REQ
): Promise<any> {
  const options = {
    url: `/api/v1/otp/generate-email`,
    method: API_METHOD_ENUM.POST,
    data:requestData
  };
    const response = await network.request(options)
    return response 
}

const GenerateEmailOtpServiceAction = serviceActionCreator(
    generateEmailOtpActions,
    generateEmailOtpService
);

export default GenerateEmailOtpServiceAction
