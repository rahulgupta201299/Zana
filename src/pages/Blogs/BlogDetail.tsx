import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { blogDetailsName, fetchBlogListName } from "@/Redux/Blogs/Actions";
import { getBlogDetail, getTopFourBlogs } from "@/Redux/Blogs/Selectors";
import getBlogDetailServiceAction from "@/Redux/Blogs/Services/GetBlogDetail";
import fetchBlogListServiceAction from "@/Redux/Blogs/Services/GetBlogList";
import { TReducers } from "@/Redux/Reducers";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import { decodeParams } from "@/Utils/global";
import Loading from "@/components/Loading";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PersistPartial } from "redux-persist/es/persistReducer";

const BlogDetail = () => {
  const params = useParams();

  const { id = '' } = decodeParams(params)

  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();
  
  const actions = useMemo(
    () => ({
      getBlogDetails: (state) => dispatch(getBlogDetailServiceAction(state)),
      fetchBlogList: (payload: any) =>
        dispatch(fetchBlogListServiceAction(payload)),
    }),
    [dispatch],
  );
  const isDetailsLoading = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, blogDetailsName) === "LOADING",
  );
  const isListLoading = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, fetchBlogListName) === "LOADING",
  );
  const blogDetails = useSelector((state: TAppStore) => getBlogDetail(state));
  const relatedBlogs = useSelector((state: TAppStore) =>
    getTopFourBlogs(state),
  );

  const getBlogList = async (page: number) => {
    try {
      const { data, pagination } = await actions.fetchBlogList({
        page: page || 1,
        limit: 10,
      });
    } catch (error) {
      console.error("Failed to fetch blog list:", error);
    }
  };

  const fetchBlogDetails = async () => {
    if (!id) return;
    try {
      const result = await actions.getBlogDetails(id);
    } catch (error) {
      console.error("fetchBlogDetails failed:", error);
    }
  };

  useEffect(() => {
    if (id) fetchBlogDetails();
    getBlogList(1);
  }, [id]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#181818" }}>
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Content */}
            {(isDetailsLoading || isListLoading) && <Loading />}
            <div className="lg:col-span-2">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                {blogDetails?.title}
              </h1>

              {/* <p className="text-white text-lg mb-8 leading-relaxed">
                {blogDetails?.description}
              </p> */}

              <div className="mb-8">
                <img
                  src={blogDetails?.imageUrl}
                  alt="Motorcycle on urban street"
                  className="w-full h-auto rounded-lg object-fit"
                />
              </div>

              <div className="text-white space-y-6 leading-relaxed whitespace-pre-line">
                {blogDetails?.content?.replace(/\\n/g, "\n")}
              </div>
            </div>

            {/* Right Side - Related Reads */}
            <div className="lg:col-span-1">
              <div
                className="bg-related-reads-gradient rounded-lg p-6 min-h-[800px] flex flex-col"
                style={{
                  background: "linear-gradient(to bottom, #7B7575, #FFFFFF)",
                }}
              >
                <h2 className="text-white text-xl font-bold mb-6">
                  RELATED READS
                </h2>

                <div className="space-y-6 overflow-y-auto h-auto">
                  {relatedBlogs.map((blog, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:opacity-80 transition-opacity bg-card-gradient p-4 rounded-lg"
                      onClick={() => navigate(`/blog/${blog?._id}`)}
                    >
                      <div className="h-50 overflow-hidden mb-4">
                        <img
                          src={blog?.imageUrl}
                          alt={blog?.title}
                          className="w-full h-full object-fit rounded-lg"
                        />
                      </div>
                      <h3 className="text-black text-sm font-semibold leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
