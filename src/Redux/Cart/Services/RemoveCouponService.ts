import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { removeCouponActions } from "../Action";
import { RemoveCouponResType } from "../Types";

const network = new Network();

async function removeCouponService(
  reqData: { phoneNumber: string },
): Promise<RemoveCouponResType> {
  const options = {
    url: "/api/v1/cart/remove-coupon",
    method: API_METHOD_ENUM.POST,
    data: reqData,
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const removeCouponServiceAction = serviceActionCreator(
  removeCouponActions,
  removeCouponService,
);

export default removeCouponServiceAction;