import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getCouponActions } from "../Action";
import { CouponDetailsType } from "../Types";

const network = new Network();

async function getCouponDetailService(couponId: string): Promise<CouponDetailsType> {
  const options = {
	url: `/api/v1/coupon/${couponId}`,
	method: API_METHOD_ENUM.GET,
  };
  const response = await network.request(options);
  const { data } = response
  return data;
}

const getCouponDetailsServiceAction = serviceActionCreator(
  getCouponActions,
  getCouponDetailService,
);

export default getCouponDetailsServiceAction;