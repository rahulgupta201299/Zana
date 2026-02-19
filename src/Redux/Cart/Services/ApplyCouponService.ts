import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { applyCouponActions } from "../Action";
import { ApplyCouponReqType, ApplyCouponResType } from "../Types";

const network = new Network();

async function applyCouponService(
  reqData: ApplyCouponReqType,
): Promise<ApplyCouponResType> {
  const options = {
    url: "/api/v1/cart/apply-coupon",
    method: API_METHOD_ENUM.POST,
    data: reqData,
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const applyCouponServiceAction = serviceActionCreator(
  applyCouponActions,
  applyCouponService,
);

export default applyCouponServiceAction;
