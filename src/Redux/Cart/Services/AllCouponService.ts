import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { allCouponActions } from "../Action";
import { AllCouponResType } from "../Types";
import { QueryParamsType } from "@/Redux/Product/Types";

const network = new Network();

async function allCouponService(queryParams: QueryParamsType): Promise<AllCouponResType> {
  const options = {
    url: "/api/v1/coupon",
    method: API_METHOD_ENUM.GET,
    params: {
      isActive: true,
      ...queryParams,
    },
  };
  const response = await network.request(options);
  const { data } = response;
  return data;
}

const allCouponServiceAction = serviceActionCreator(
  allCouponActions,
  allCouponService,
);

export default allCouponServiceAction;