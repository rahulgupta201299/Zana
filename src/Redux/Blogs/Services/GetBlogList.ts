import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { fetchBlogListActions } from "../Actions";

const network = new Network();

async function allBlogListService(): Promise<any> {
  const options = {
    url: `/api/v1/blog`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const fetchBlogListServiceAction = serviceActionCreator(fetchBlogListActions, allBlogListService);

export default fetchBlogListServiceAction
