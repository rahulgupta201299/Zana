import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getBikeBrandActions, getIsdCodeActions } from "../Actions";


const network = new Network();

async function getBikeBrandListService(): Promise<any> {
  const options = {
    url: `/api/v1/brand`,
    method: API_METHOD_ENUM.GET,
  };
  return  [  
        {
            "_id": "6924bc7bd101687673bb02f5",
            "name": "Yamaha",
            "description": "Japanese motorcycle manufacturer",
            "createdAt": "2025-11-24T20:13:47.407Z",
            "__v": 0
        },
        {
            "_id": "6924bc7bd101687673bb02f6",
            "name": "Honda",
            "description": "Global motorcycle brand",
            "createdAt": "2025-11-24T20:13:47.408Z",
            "__v": 0
        },
        {
            "_id": "6924bc7bd101687673bb02f7",
            "name": "Kawasaki",
            "description": "Performance motorcycles",
            "createdAt": "2025-11-24T20:13:47.409Z",
            "__v": 0
        },
    ];

  // TODO
  //   const response = await network.request(options)
  //   const { data } = response
  //   return data
}

const getBikeBrandServiceAction = serviceActionCreator(
    getBikeBrandActions,
    getBikeBrandListService
);

export default getBikeBrandServiceAction
