import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { getIsdCodeActions } from "../Actions";


const network = new Network();

async function getIsdCodeListService(): Promise<any> {
  const options = {
    url: `/api/v1/country/isd-codes`,
    method: API_METHOD_ENUM.GET,
  };
  return  [
        { name: "Afghanistan", code: "AF", isd: "+93" },
        { name: "Albania", code: "AL", isd: "+355" },
        { name: "Algeria", code: "DZ", isd: "+213" },
        { name: "Andorra", code: "AD", isd: "+376" },
        { name: "Angola", code: "AO", isd: "+244" },
        { name: "Argentina", code: "AR", isd: "+54" },
        { name: "Armenia", code: "AM", isd: "+374" },
        { name: "Australia", code: "AU", isd: "+61" },
        { name: "Austria", code: "AT", isd: "+43" },
        { name: "Azerbaijan", code: "AZ", isd: "+994" },
        {name: "India", code: "IN", isd: "+91"},
    ];

  // TODO
  //   const response = await network.request(options)
  //   const { data } = response
  //   return data
}

const getIsdListServiceAction = serviceActionCreator(
    getIsdCodeActions,
    getIsdCodeListService
);

export default getIsdListServiceAction
