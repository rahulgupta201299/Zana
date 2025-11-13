
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <div className="relative min-h-[600px] flex items-start justify-start bg-cover bg-center" 
         style={{ backgroundImage: `url('/uploads/b1dad550-3094-45b1-b41c-bc177002d6d0.png')` }}>
      <div className="relative z-10 text-left text-black px-8 py-16 max-w-md">
        <h1 className="text-4xl font-bold mb-4 whitespace-nowrap">AUTUMN ADVENTURE SALE</h1>
        <p className="text-lg mb-8">
          Get 15% off rugged, all-weather accessories<br />
          built for every season.
        </p>
        <Link to="/bike-view">
          <button 
            className="relative bg-white text-black border-2 border-black px-8 py-3 rounded text-lg font-medium overflow-hidden transition-colors duration-500"
            style={{
              background: 'linear-gradient(-45deg, black 0%, black 50%, white 50%, white 100%)',
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 0%',
              transition: 'background-position 0.4s ease, color 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 100%';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0% 0%';
              e.currentTarget.style.color = '#000';
            }}
          >
            <span className="relative z-10">EXPLORE</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandStory;
