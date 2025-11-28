import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { generateOtpActions } from "../Actions";

const network = new Network();

export interface GEN_OTP_REQ{
    isdCode: string;
    phoneNumber: string;
}

async function generateOtpService(
  requestData: GEN_OTP_REQ
): Promise<any> {
  const options = {
    url: `/api/v1/otp/generate`,
    method: API_METHOD_ENUM.POST,
    data:requestData
  };
    const response = await network.request(options)
    const { data } = response
    return data 
}

const GenerateOtpServiceAction = serviceActionCreator(
    generateOtpActions,
    generateOtpService
);

export default GenerateOtpServiceAction
