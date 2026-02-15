import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { productDetailTraceActions } from "../Actions";

const network = new Network();

export type Product_Detail_Type = {
  productId: string
  phoneNumber:string
}

async function productDetailService({productId, phoneNumber}:Product_Detail_Type
): Promise<ShopByProductDetailsType> {
  const options = {
    url: `/api/v1/product/${productId}?phoneNumber=${phoneNumber}`,
    method: API_METHOD_ENUM.GET,
  };
  
  const response = await network.request(options);
  const { data } = response;
  return data;
}

export default serviceActionCreator(
  productDetailTraceActions,
  productDetailService
);
