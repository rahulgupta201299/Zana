import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { createCodOrdeActions } from "../Action";
import { CreateCodOrderResType, CreatePaymentOrderReqType } from "../Types";

const network = new Network();

async function createCodOrderService(
  requestData: CreatePaymentOrderReqType,
): Promise<CreateCodOrderResType> {

  const options = {
	url: "/api/v1/payment/create-cod-order",
	method: API_METHOD_ENUM.POST,
	data: requestData,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const createCodOrderServiceAction = serviceActionCreator(
  createCodOrdeActions,
  createCodOrderService,
);

export default createCodOrderServiceAction;
