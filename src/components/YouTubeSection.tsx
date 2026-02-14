import { useState } from "react";
import { Play } from "lucide-react";

const YouTubeSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "IaMy7mlG0FY";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div style={{ backgroundColor: '#181818' }}>
      <div className="py-8 md:py-16 px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-5xl font-black text-white mb-1 md:mb-2">ZANA UNFILTERED</h2>
          <p className="text-gray-300 text-xs md:text-lg">Real Rides. Real Stories. Real Proof</p>
        </div>

        {/* Video Section */}
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video">
            {!isPlaying ? (
              <div className="relative w-full h-full cursor-pointer" onClick={handlePlayClick}>
                <img 
                  src={thumbnailUrl} 
                  alt="YouTube Video Thumbnail" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;