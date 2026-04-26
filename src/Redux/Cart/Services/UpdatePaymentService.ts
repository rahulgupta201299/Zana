import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { UpdatePaymentReqType, UpdatePaymentResType } from "../Types";
import { updatePaymentMethodActions } from "../Action";

const network = new Network();

async function updatePaymentMethodService(
  reqData: UpdatePaymentReqType,
): Promise<UpdatePaymentResType> {
  const options = {
    url: "/api/v1/cart/set-payment-method",
    method: API_METHOD_ENUM.POST,
    data: reqData,
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const updatePaymentMethodServiceAction = serviceActionCreator(
  updatePaymentMethodActions,
  updatePaymentMethodService,
);

export default updatePaymentMethodServiceAction;
