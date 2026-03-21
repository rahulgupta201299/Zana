import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import AppStore from "@/Configurations/AppStore";
import { applyCouponActions } from "../Action";
import { ApplyCouponReqType, ApplyCouponResType } from "../Types";

const network = new Network();

async function applyCouponService(
  reqData: ApplyCouponReqType,
): Promise<ApplyCouponResType> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;

  const options = {
    url: "/api/v1/cart/apply-coupon",
    method: API_METHOD_ENUM.POST,
    data: {
      ...reqData,
      currency,
    },
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
