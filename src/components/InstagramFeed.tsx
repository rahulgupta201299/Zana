import React from 'react';

const InstagramFeed = () => {

  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/zanamotorcycles/reel/DMSZKQLNWFe/?hl=en",
      thumbnail: "/uploads/b67e9e8e-d696-4316-b2bb-11bd7bc13b81.png"
    },
    {
      id: 2,
      url: "https://www.instagram.com/zanamotorcycles/p/DMR-ceUB_cP/?hl=en",
      thumbnail: "/uploads/217344ea-47af-4464-9cd6-c943037ad654.png"
    },
    {
      id: 3,
      url: "https://www.instagram.com/zanamotorcycles/reel/DMP4cNwB8xe/?hl=en",
      thumbnail: "/uploads/308eca5a-6835-43b4-a78d-255bfc062c42.png"
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="w-full text-white py-6 md:py-12" style={{ backgroundColor: '#181818' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Grid with 3 columns */}
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative cursor-pointer group"
              onClick={() => handleVideoClick(post.url)}
            >
                {/* Instagram Icon */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
                  <svg
                    width="16"
                    height="16"
                    className="md:w-8 md:h-8"
                    viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-lg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              
              {/* Thumbnail Image */}
              <div className="w-full h-[600px] rounded-lg overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;