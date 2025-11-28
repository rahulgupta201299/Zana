import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { getBlogDetail } from "@/Redux/Blogs/Selectors";
import getBlogDetailServiceAction from "@/Redux/Blogs/Services/GetBlogDetail";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<TAppDispatch>();
  const actions = useMemo(
    () => ({
      getBlogDetails: (state) => dispatch(getBlogDetailServiceAction(state)),
    }),
    [dispatch]
  );
  const blogDetails = useSelector((state: TAppStore) =>
  getBlogDetail(state)
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

  const relatedBlogs = [
    {
      title: "Exhaust Wraps: Improving Performance While Reducing Heat",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png",
    },
    {
      title:
        "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png",
    },
    {
      title:
        "Battery Chargers and Tenders: Essential for Off-Season Motorcycle Storage",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png",
    },
    {
      title:
        "Decal and Graphic Kits: Easy Ways to Customize Without Breaking the Bank",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png",
    },
    {
      title: "Locking Systems Reviewed: Keeping Your Bike Secure on the Go",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#181818" }}>
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Content */}
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
                    >
                      <div className="mb-3">
                        <img
                          src={blog.image}
                          alt={blog.title}
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
