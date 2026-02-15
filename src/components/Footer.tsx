import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    zanaAccessories: false,
    zproAccessories: false,
    contactUs: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer
      className="text-white overflow-x-hidden"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-8">
          {/* Quick Links - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection("quickLinks")}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>Quick Links</span>
              <ChevronDown
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                  openSections.quickLinks ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.quickLinks && (
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>
                  <a href="/our-stories" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Become A Vendor
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="hover:underline">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns and Exchange
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:underline">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Warranty Registration
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Zana Bike Accessories - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection("zanaAccessories")}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>Zana Bikes Accessories</span>
              <ChevronDown
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                  openSections.zanaAccessories ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.zanaAccessories && (
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>
                  <a href="/bikes" className="hover:underline">
                    BMW
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    BSA
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    BAJAJ
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    HARLEY DAVIDSON
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    HERO
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    HONDA
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    KTM
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    HUSQVARNA
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    KAWASAKI
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    ROYAL ENFIELD
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    SUZUKI
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    TRIUMPH
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    TVS
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    YAMAHA
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    YEZDI
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    Universal Accessories
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* ZPro Bike Accessories - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection("zproAccessories")}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>ZPro Bikes Accessories</span>
              <ChevronDown
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                  openSections.zproAccessories ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.zproAccessories && (
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>
                  <a href="/bikes" className="hover:underline">
                    BMW
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    DUCATI
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    KAWASAKI
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    SUZUKI
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    TRIUMPH
                  </a>
                </li>
                <li>
                  <a href="/bikes" className="hover:underline">
                    Universal Accessories
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Contact Us - Collapsible */}
          <div>
            <button
              onClick={() => toggleSection("contactUs")}
              className="flex items-center justify-between w-full text-xs md:text-lg font-semibold mb-2 md:mb-4"
            >
              <span>Contact Us</span>
              <ChevronDown
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                  openSections.contactUs ? "rotate-180" : ""
                }`}
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
            <span className="font-semibold">
              Zana Motorcycles - Elevating Bike Accessories to Art
            </span>
            <br />
            At Zana Motorcycles, we don't just create accessories; we craft
            experiences that redefine your ride. Established with a passion for
            two-wheelers and an unwavering commitment to excellence, Zana
            Motorcycles is a beacon of innovation and artistry in the world of
            bike accessories.
          </p>
        </div>

        {/* Follow Us Section */}
        <div
          className="py-2 md:py-4 px-0 md:-mx-6 md:px-6"
          style={{
            background: "linear-gradient(to right, #302929, #ffffff)",
          }}
        >
          <div className="flex items-center justify-between px-4 md:px-0 md:max-w-7xl md:mx-auto">
            <span className="text-xs md:text-2xl font-medium text-white whitespace-nowrap">
              FOLLOW US ON
            </span>
            <div className="flex gap-2 md:gap-4 items-center flex-shrink-0">
              <a
                href="https://www.instagram.com/zanamotorcycles/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="28"
                  height="28"
                >
                  <defs>
                    <linearGradient
                      id="instaGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="25%" stopColor="#fa7e1e" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="75%" stopColor="#962fbf" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Background */}
                  <rect
                    width="256"
                    height="256"
                    rx="60"
                    fill="url(#instaGradient)"
                  />

                  <rect
                    width="256"
                    height="256"
                    rx="60"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="24"
                  />
                  <path
                    d="M128 80c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 78c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"
                    fill="#fff"
                  />
                  <circle cx="178" cy="78" r="14" fill="#fff" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="Facebook"
              >
                <svg
                  className="w-[20px] h-[20px] md:w-[34px] md:h-[34px]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    fill="#1877F2"
                    d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.438H7.078v-3.49h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0024 12.073z"
                  />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="YouTube"
              >
                <svg
                  className="w-[28px] h-[20px] md:w-[48px] md:h-[34px]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    fill="#FF0000"
                    d="M23.497 6.186a3.01 3.01 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545S4.495 3.545 2.625 4.05A3.01 3.01 0 0 0 .503 6.186 31.32 31.32 0 0 0 0 12a31.32 31.32 0 0 0 .503 5.814 3.01 3.01 0 0 0 2.122 2.136c1.87.505 9.375.505 9.375.505s7.505 0 9.377-.505a3.01 3.01 0 0 0 2.122-2.136A31.32 31.32 0 0 0 24 12a31.32 31.32 0 0 0-.503-5.814z"
                  />
                  <path
                    fill="#fff"
                    d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
