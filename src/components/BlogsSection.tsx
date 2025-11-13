import { Link } from "react-router-dom";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      id: 2,
      title: "Tank Pads and Protectors: Blending Style with Scratch Resistance",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    },
    {
      id: 3,
      title: "Exhaust Wraps: Improving Performance While Reducing Heat",
      description: "India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.",
      image: "/uploads/d791f0f3-6cb4-4507-910d-cf54cd27082a.png"
    }
  ];

  return (
    <div className="py-8 md:py-16 px-4 md:px-6" style={{ backgroundColor: '#181818' }}>
      <div className="max-w-7xl mx-auto">
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              {/* Blog Image */}
              <div className="relative h-[180px] md:h-[280px] mb-3 md:mb-6 rounded-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-4 leading-tight">
                {blog.title}
              </h3>
              <p className="text-white/80 mb-3 md:mb-6 leading-relaxed text-xs md:text-sm flex-grow">
                {blog.description}
              </p>

              {/* Read More Button with Hero Section Animation */}
              <Link to={`/blog/${blog.id}`}>
                <button 
                  className="relative bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-base font-medium overflow-hidden group transition-colors duration-500 w-fit"
                  style={{
                    background: 'linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: '0% 0%',
                    transition: 'background-position 0.4s ease, color 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = '100% 100%';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = '0% 0%';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  <span className="relative z-10">READ MORE</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;

