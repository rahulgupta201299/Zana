import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { createPaymentOrdeActions } from "../Action";
import { CreatePaymentOrderReqType, CreatePaymentOrderResType } from "../Types";


const network = new Network();

async function createPaymentOrderService(requestData: CreatePaymentOrderReqType): Promise<CreatePaymentOrderResType> {
  const options = {
    url: '/api/v1/payment/create-order',
    method: API_METHOD_ENUM.POST,
    data: requestData
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const createPaymentOrderServiceAction = serviceActionCreator(createPaymentOrdeActions, createPaymentOrderService);

export default createPaymentOrderServiceAction
