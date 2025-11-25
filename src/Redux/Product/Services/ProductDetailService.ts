import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { productDetailTraceActions } from "../Actions";

const network = new Network();

async function productDetailService(
  productId: string
): Promise<ShopByProductDetailsType> {
  const options = {
    url: `/api/v1/product/${productId}`,
    method: API_METHOD_ENUM.GET,
  };

  return {
    _id: "1",
	brand: "",
	model: "",
    name: "Mobile Holder",
    price: 500,
	imageUrl: "/uploads/217344ea-47af-4464-9cd6-c943037ad654.png",
    images: [
      "/uploads/217344ea-47af-4464-9cd6-c943037ad654.png",
      "/uploads/b67e9e8e-d696-4316-b2bb-11bd7bc13b81.png",
      "/uploads/7c5ed4c4-7038-4008-8660-219e1d51d61e.png",
      "/uploads/f61f70a5-d36b-4d2b-b524-96f52b70293d.png",
    ],
    shortDescription:
      "Built for riders who demand durability, quality, and effortless functionality everyday you hit the dusty lanes.",
    longDescription:
      "Protect your engine and radiator from debris and impact with our premium Radiator Guard. The Zana Radiator Guard is built to protect your motorcycle's radiator against harsh road elements — so it's sturdy, durable and built to last. It's made from premium zinc-coated steel construction designed to shine with your bike's style, not against it. Our Radiator Guard is built to perfect your motorcycle's radiator against harsh road elements, and promises you outstanding durability and unmatched protection.",
    specifications:
      "• Material: Premium aluminum alloy\n• Weight: 250g\n• Compatibility: Universal fit for all bike models\n• Water resistance: IPX4 rated\n• Installation: Tool-free mounting system",
    shippingAndReturn:
      "• Free shipping on orders above ₹999\n• Standard delivery: 3-5 business days\n• Express delivery: 1-2 business days\n• Easy returns within 30 days\n• Warranty: 1 year manufacturer warranty",
	category: "Accesory",
	categoryIcon: "",
	quantityAvailable: 6,
	isBikeSpecific: true,
  }

  // TODO
  //   const response = await network.request(options)
  //   const { data } = response
  //   return data
}

export default serviceActionCreator(
  productDetailTraceActions,
  productDetailService
);
