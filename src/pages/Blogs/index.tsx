import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { useEffect, useMemo, useState } from "react";
import fetchBlogListServiceAction from "@/Redux/Blogs/Services/GetBlogList";
import { getListOfBlogs } from "@/Redux/Blogs/Selectors";
import { TReducers } from "@/Redux/Reducers";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import { fetchBlogListName } from "@/Redux/Blogs/Actions";
import { Grid } from "lucide-react";
import BlogsSkeleton from "@/components/Skeleton/BlogsSkeleton";
import { Box, Pagination } from "@mui/material";

const Blogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const LIMIT_PER_PAGE = 10;
  const actions = useMemo(
    () => ({
      fetchBlogList: (payload: any) =>
        dispatch(fetchBlogListServiceAction(payload)),
    }),
    [dispatch],
  );
  const isListLoading = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, fetchBlogListName) === "LOADING",
  );
  const blogs = useSelector((state: TAppStore) => getListOfBlogs(state));

  const getBlogList = async (page: number) => {
    try {
      const { data, pagination } = await actions.fetchBlogList({
        page: page || 1,
        limit: LIMIT_PER_PAGE,
      });
      setNumberOfPages(pagination.totalPages);
      setCurrentPage(pagination.currentPage);
    } catch (error) {
      console.error("Failed to fetch blog list:", error);
      setNumberOfPages(0);
    }
  };

  useEffect(() => {
    getBlogList(1);
  }, []);

  return (
    <div className="min-h-screen bg-dark-gray">
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-5xl font-bold mb-12">BLOGS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isListLoading
              ? Array.from({ length: 4 }).map((_, i) => <BlogsSkeleton />)
              : blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden bg-card-gradient"
                  >
                    <div className="h-80 overflow-hidden p-3">
                      <img
                        src={blog?.imageUrl}
                        alt={blog?.title}
                        className="w-full h-full object-fit rounded-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-4">
                        {blog?.title}
                      </h3>
                    
                      <Button
                        className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white rounded-none font-bold px-6"
                        onClick={() => navigate(`/blog/${blog?._id}`)}
                      >
                        READ MORE
                      </Button>
                    </div>
                  </div>
                ))}
          </div>
          {blogs.length === 0 && !isListLoading && (
            <div className="flex items-center justify-center text-center py-16 min-h-[400px]">
              <p className="text-white/50 text-xl">No blogs found</p>
            </div>
          )}
        </div>
      </div>
     
      {blogs.length != 0  && (
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Pagination
            count={numberOfPages}
            page={currentPage}
            siblingCount={1}
            boundaryCount={0}
            onChange={(_, page) => {
              getBlogList(page);
            }}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
                fontSize: "1.25rem",
                fontWeight: "bold",
              },
              "& .Mui-selected": {
                color: "#3B82F6",
                backgroundColor: "transparent",
              },
              "& .MuiPaginationItem-root:hover": {
                color: "yellow",
                backgroundColor: "transparent",
              },
              "& .Mui-disabled": {
                color: "#f9f8f8ff",
              },
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default Blogs;
