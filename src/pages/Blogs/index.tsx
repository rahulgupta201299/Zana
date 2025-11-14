
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-gray">
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-5xl font-bold mb-12">BLOGS</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-card-gradient">
                <div className="h-64 overflow-hidden p-3">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">{blog.title}</h3>
                  <p className="text-black mb-6">{blog.description}</p>
                  <Button
                    className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white rounded-none font-bold px-6"
                    onClick={() => navigate(`/blog/${index + 1}`)}
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs
