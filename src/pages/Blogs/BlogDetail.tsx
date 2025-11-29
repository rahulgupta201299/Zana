import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { blogDetailsName } from "@/Redux/Blogs/Actions";
import { getBlogDetail, getTopFourBlogs } from "@/Redux/Blogs/Selectors";
import getBlogDetailServiceAction from "@/Redux/Blogs/Services/GetBlogDetail";
import { TReducers } from "@/Redux/Reducers";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import Loading from "@/components/Loading";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PersistPartial } from "redux-persist/es/persistReducer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();
  const actions = useMemo(
    () => ({
      getBlogDetails: (state) => dispatch(getBlogDetailServiceAction(state)),
    }),
    [dispatch]
  );
  const isDetailsLoading = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, blogDetailsName) === "LOADING"
  );
  const blogDetails = useSelector((state: TAppStore) =>
  getBlogDetail(state)
  )
  const relatedBlogs = useSelector((state: TAppStore) =>
  getTopFourBlogs(state)
  )

  const fetchBlogDetails = async () => {
   const result = await actions.getBlogDetails(id);
   console.log(result)
  };

  useEffect(() => {  
    if(id){
    fetchBlogDetails();
    }
  }, [id]);

  


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#181818" }}>
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Content */}
            {isDetailsLoading && <Loading/>}
            <div className="lg:col-span-2">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
               {blogDetails?.title}
              </h1>

              <p className="text-white text-lg mb-8 leading-relaxed">
                {blogDetails?.description}
              </p>

              <div className="mb-8">
                <img
                  src={blogDetails?.imageUrl}
                  alt="Motorcycle on urban street"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="text-white space-y-6 leading-relaxed">
             {blogDetails?.content}
              </div>
            </div>

            {/* Right Side - Related Reads */}
            <div className="lg:col-span-1">
              <div
                className="bg-related-reads-gradient rounded-lg p-6 h-full min-h-[800px] flex flex-col"
                style={{
                  background: "linear-gradient(to bottom, #7B7575, #FFFFFF)",
                }}
              >
                <h2 className="text-white text-xl font-bold mb-6">
                  RELATED READS
                </h2>

                <div className="space-y-6 overflow-y-auto flex-1">
                  {relatedBlogs.map((blog, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => navigate(`/blog/${blog?._id}`)}
                    >
                      <div className="mb-3">
                        <img
                          src={blog?.imageUrl}
                          alt={blog?.title}
                          className="w-full h-32 object-cover rounded-lg"
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
