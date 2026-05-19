import React from "react";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DYW6l2FBd3s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DX_ai2JhL_O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DYMAzj7hhpy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, "_blank");
  };

  const getEmbedUrl = (url: string) => {
    const match = url.match(/instagram\.com\/reel\/([^/?]+)/);
    return match ? `https://www.instagram.com/reel/${match[1]}/embed` : url;
  };
  return (
    <section
      className="w-full text-white py-6 md:py-12"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative group">
            <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden relative border border-white/20">
             
                <div
                  style={{ height: "calc(100% - 80px)", overflow: "hidden" }}
                >
                  <iframe
                    src={getEmbedUrl(post.url)}
                    className="w-full border-0"
                    style={{ height: "calc(100% + 80px)", minHeight: "500px" }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
