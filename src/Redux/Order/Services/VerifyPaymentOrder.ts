import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { verifyPaymentOrdeActions } from "../Action";
import { VerifyPaymentOrderReqType, VerifyPaymentOrderResType } from "../Types";

const network = new Network();

async function verifyPaymentOrderService(requestData: VerifyPaymentOrderReqType): Promise<VerifyPaymentOrderResType> {
  const options = {
    url: '/v1/payment/verify',
    method: API_METHOD_ENUM.POST,
    data: requestData
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const verifyPaymentOrderServiceAction = serviceActionCreator(verifyPaymentOrdeActions, verifyPaymentOrderService);

export default verifyPaymentOrderServiceAction
