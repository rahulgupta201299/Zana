import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative h-[175px] md:min-h-screen flex items-center">
      {/* Background GIF */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <img 
          src="/uploads/5f9aa5f190665c7e8b28d19f5c20975680b4d9ce.gif"
          alt="Motorcycle hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-6 leading-tight">
            FORGED IN FIRE<br />
            MORE THAN METAL
          </h1>
          <p className="text-xs md:text-xl lg:text-2xl text-white/90 mb-3 md:mb-8">
            Made in India- Ridden Everywhere
          </p>
          <button 
            onClick={() => navigate('/product-catalog')}
            className="relative bg-transparent border-2 border-white text-white px-4 py-2 md:px-8 md:py-4 rounded-lg text-xs md:text-lg font-medium overflow-hidden group transition-colors duration-500"
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
            <span className="relative z-10">Explore the Collection</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
