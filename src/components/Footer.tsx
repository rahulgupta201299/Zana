import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    zanaAccessories: false,
    zproAccessories: false,
    contactUs: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="text-white overflow-x-hidden" style={{ backgroundColor: '#181818' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-8">
          {/* Quick Links - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection('quickLinks')}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>Quick Links</span>
              <ChevronDown 
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${openSections.quickLinks ? 'rotate-180' : ''}`}
              />
            </button>
            {openSections.quickLinks && (
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="/our-stories" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Become A Vendor</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Disclaimer</a></li>
                <li><a href="#" className="hover:underline">FAQ's</a></li>
                <li><a href="#" className="hover:underline">Returns and Exchange</a></li>
                <li><a href="/blogs" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Warranty Registration</a></li>
              </ul>
            )}
          </div>

          {/* Zana Bike Accessories - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection('zanaAccessories')}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>Zana Bikes Accessories</span>
              <ChevronDown 
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${openSections.zanaAccessories ? 'rotate-180' : ''}`}
              />
            </button>
            {openSections.zanaAccessories && (
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="/bikes" className="hover:underline">BMW</a></li>
                <li><a href="/bikes" className="hover:underline">BSA</a></li>
                <li><a href="/bikes" className="hover:underline">BAJAJ</a></li>
                <li><a href="/bikes" className="hover:underline">HARLEY DAVIDSON</a></li>
                <li><a href="/bikes" className="hover:underline">HERO</a></li>
                <li><a href="/bikes" className="hover:underline">HONDA</a></li>
                <li><a href="/bikes" className="hover:underline">KTM</a></li>
                <li><a href="/bikes" className="hover:underline">HUSQVARNA</a></li>
                <li><a href="/bikes" className="hover:underline">KAWASAKI</a></li>
                <li><a href="/bikes" className="hover:underline">ROYAL ENFIELD</a></li>
                <li><a href="/bikes" className="hover:underline">SUZUKI</a></li>
                <li><a href="/bikes" className="hover:underline">TRIUMPH</a></li>
                <li><a href="/bikes" className="hover:underline">TVS</a></li>
                <li><a href="/bikes" className="hover:underline">YAMAHA</a></li>
                <li><a href="/bikes" className="hover:underline">YEZDI</a></li>
                <li><a href="/bikes" className="hover:underline">Universal Accessories</a></li>
              </ul>
            )}
          </div>

          {/* ZPro Bike Accessories - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection('zproAccessories')}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>ZPro Bikes Accessories</span>
              <ChevronDown 
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${openSections.zproAccessories ? 'rotate-180' : ''}`}
              />
            </button>
            {openSections.zproAccessories && (
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="/bikes" className="hover:underline">BMW</a></li>
                <li><a href="/bikes" className="hover:underline">DUCATI</a></li>
                <li><a href="/bikes" className="hover:underline">KAWASAKI</a></li>
                <li><a href="/bikes" className="hover:underline">SUZUKI</a></li>
                <li><a href="/bikes" className="hover:underline">TRIUMPH</a></li>
                <li><a href="/bikes" className="hover:underline">Universal Accessories</a></li>
              </ul>
            )}
          </div>

          {/* Contact Us - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection('contactUs')}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>Contact Us</span>
              <ChevronDown 
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${openSections.contactUs ? 'rotate-180' : ''}`}
              />
            </button>
            {openSections.contactUs && (
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <p>IMT Manesar, Gurugram,</p>
                <p>Gurgaon, Haryana, 122001</p>
                <p className="mt-2 md:mt-3">Phone: +91-9953112277</p>
                <p>+91- 9821729377</p>
                <p className="mt-2 md:mt-3">Email:</p>
                <p>onlinesales@zanainternational.com</p>
              </div>
            )}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 my-4 md:my-8"></div>

        {/* Bottom Section - Hidden on mobile */}
        <div className="hidden md:block mb-8">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">Zana Motorcycles - Elevating Bike Accessories to Art</span>
            <br />
            At Zana Motorcycles, we don't just create accessories; we craft experiences that redefine your ride. Established with a passion for two-wheelers and an unwavering commitment to excellence, Zana Motorcycles is a beacon of innovation and artistry in the world of bike accessories.
          </p>
        </div>

        {/* Follow Us Section */}
        <div 
          className="py-2 md:py-4 px-0 md:-mx-6 md:px-6"
          style={{
            background: 'linear-gradient(to right, #302929, #ffffff)'
          }}
        >
          <div className="flex items-center justify-between px-4 md:px-0 md:max-w-7xl md:mx-auto">
            <span className="text-xs md:text-2xl font-medium text-white whitespace-nowrap">FOLLOW US ON</span>
            <div className="flex gap-2 md:gap-4 items-center flex-shrink-0">
              <a href="https://www.instagram.com/zanamotorcycles/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg className="w-[20px] h-[20px] md:w-[34px] md:h-[34px] fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg className="w-[20px] h-[20px] md:w-[34px] md:h-[34px] fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg className="w-[28px] h-[20px] md:w-[48px] md:h-[34px] fill-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
