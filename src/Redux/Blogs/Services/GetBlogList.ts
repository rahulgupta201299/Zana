import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { fetchBlogListActions } from "../Actions";

const network = new Network();

async function allBlogListService(
  { page = 1, limit = 10 }: { page?: number; limit?: number } = {}
): Promise<any> {
  const options = {
    url: `/api/v1/blog`,
    method: API_METHOD_ENUM.GET,
    params: {page, limit},
  };
  const response = await network.request(options);
  return response;
}

const fetchBlogListServiceAction = serviceActionCreator(fetchBlogListActions, allBlogListService);

export default fetchBlogListServiceAction
