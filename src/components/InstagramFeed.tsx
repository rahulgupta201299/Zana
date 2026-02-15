import React from "react";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DRKZdwsAWyC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      thumbnail: "/uploads/b67e9e8e-d696-4316-b2bb-11bd7bc13b81.png",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DUsuR-sDJ7h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      thumbnail: "/uploads/217344ea-47af-4464-9cd6-c943037ad654.png",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DTk6xS1Dr6M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      thumbnail: "/uploads/308eca5a-6835-43b4-a78d-255bfc062c42.png",
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
              <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden">
              <iframe
                src={getEmbedUrl(post.url)}
                className="w-full aspect-[9/16] border-0 "
                allow="autoplay; encrypted-media"
                allowFullScreen
                scrolling="no"
                loading="lazy"            
                />
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
