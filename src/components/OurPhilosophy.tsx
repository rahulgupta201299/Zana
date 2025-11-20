import { useNavigate } from "react-router-dom";

const OurPhilosophy = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-6 md:py-8" style={{ backgroundColor: '#181818', paddingTop: "3rem"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/uploads/fc780bf6-168c-4870-b45b-cf3f47f07ce2.png" 
              alt="Motorcycle rider on autumn road" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-3 md:space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-lg md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                OUR PHILOSOPHY
              </h2>
              <div className="w-32 md:w-40 h-0.5 bg-white mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-2 md:space-y-4 text-white text-xs md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                At Zana, we don't just make motorcycle accessories — we engineer confidence. Every curve, weld, and
                finish is built with purpose: to protect, enhance, and elevate your riding experience.
              </p>
              
              <p>
                We believe in design that's functional, durable, and unapologetically bold. Whether you're commuting
                through city traffic or pushing limits on off-road trails, our gear is tested for India's harshest conditions
                and trusted by riders across the world.
              </p>
              
              <p>
                Because for us, it's not just about the ride. It's about making every ride count.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <button 
                onClick={() => navigate('/our-stories')}
                className="relative border-2 border-white text-white bg-transparent px-4 py-2 md:px-8 md:py-3 rounded-lg text-xs md:text-base font-medium overflow-hidden transition-colors duration-500"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;