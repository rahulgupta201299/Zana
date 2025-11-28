import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { blogDetailsActions, fetchBlogListActions } from "../Actions";

const network = new Network();

async function blogDetailService(blogId): Promise<any> {
    console.log(blogId)
  const options = {
    url: `/api/v1/blog/${blogId}`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return data;
}

const getBlogDetailServiceAction = serviceActionCreator(blogDetailsActions, blogDetailService);

export default getBlogDetailServiceAction
