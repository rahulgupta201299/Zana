import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ProductCatergoryCountType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { productCategoryCountTraceActions } from "../Actions";

const network = new Network();

async function productCategoryCountService(): Promise<
  ProductCatergoryCountType[]
> {
  const options = {
    url: `/api/v1/product/categories/count`,
    method: API_METHOD_ENUM.GET,
  };

  return [
    {
      count: 7,
      name: "Accessory",
      icon: "http://example.com/accessory_icon.png",
    },
    {
      count: 1,
      name: "Security",
      icon: "http://example.com/security_icon.png",
    },
    {
      count: 1,
      name: "Maintenance",
      icon: "http://example.com/maintenance_icon.png",
    },
    {
      count: 1,
      name: "Safety",
      icon: "http://example.com/safety_icon.png",
    },
    {
      count: 1,
      name: "Lighting",
      icon: "http://example.com/lighting_icon.png",
    },
  ];

  // TODO
  //   const response = await network.request(options)
  //   const { data } = response
  //   return data
}

export default serviceActionCreator(
  productCategoryCountTraceActions,
  productCategoryCountService
);
