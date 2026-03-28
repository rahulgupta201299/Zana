import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { ROUTES } from "@/Constants/Routes";
import { fetchBlogListName } from "@/Redux/Blogs/Actions";
import { getListOfBlogs, getTopFourBlogs } from "@/Redux/Blogs/Selectors";
import fetchBlogListServiceAction from "@/Redux/Blogs/Services/GetBlogList";
import { TReducers } from "@/Redux/Reducers";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PersistPartial } from "redux-persist/es/persistReducer";

const BlogsSection = () => {
  const blogList = useSelector(getListOfBlogs);

  const dispatch = useDispatch<TAppDispatch>();

  const actions = useMemo(
    () => ({
      fetchBlogList: () =>
        blogList.length === 0 ? dispatch(fetchBlogListServiceAction({})) : null,
    }),
    [dispatch],
  );

  const isListLoading = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, fetchBlogListName) === "LOADING",
  );

  const blogs = useSelector((state: TAppStore) => getTopFourBlogs(state));

  const getBlogList = async () => {
    const result = actions.fetchBlogList();
  };
  const navigate = useNavigate()

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <div
      className="py-8 md:py-16 px-4 md:px-6 "
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog?._id}
              className="flex flex-col"
              style={{
                backgroundColor: "#2A2A2A",
                borderRadius: "0.5rem",
                padding: "1rem",
                 cursor: 'pointer',
              }}
                onClick={() => navigate(ROUTES.BLOG_DETAIL.replace(":id", blog?._id))}
            >

             
              <div className="relative inline-block max-w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={blog?.imageUrl}
                  alt={blog?.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-xl font-bold text-white mb-3 leading-tight">
                {blog?.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 mb-4 leading-relaxed text-xs md:text-sm flex-grow">
                {blog?.description}
              </p>

              {/* Button */}
           
                <button
                onClick={() => navigate(ROUTES.BLOG_DETAIL.replace(":id", blog?._id))}
                  className="relative bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-base font-medium overflow-hidden group transition-colors duration-500 w-fit"
                  style={{
                    background:
                      "linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: "0% 0%",
                    transition:
                      "background-position 0.4s ease, color 0.4s ease",
                     
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = "100% 100%";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = "0% 0%";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  READ MORE
                </button>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
