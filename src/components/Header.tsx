
import { useState } from "react";
import { User, Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfileModal from "@/components/ProfileModal";

interface HeaderProps {
  isShopByBikeOpen?: boolean;
  onToggleShopByBike?: () => void;
  isShopByProductOpen?: boolean;
  onToggleShopByProduct?: () => void;
  onCartClick?: () => void;
  cartItemCount?: number;
}

const Header = ({ isShopByBikeOpen = false, onToggleShopByBike, isShopByProductOpen = false, onToggleShopByProduct, onCartClick, cartItemCount = 0 }: HeaderProps) => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Logo Section */}
      <div className="py-4 flex justify-between items-center px-4 md:px-8" style={{ backgroundColor: '#181818' }}>
        {/* Left - Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors md:hidden"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Left Spacer (Desktop Only) */}
        <div className="w-32 hidden md:block"></div>
        
        {/* Center Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/uploads/957a38a6-31ae-4f52-8f91-4db69e92b127.png" 
            alt="Zana Logo" 
            className="h-12 md:h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
        
        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-6">
          <button 
            onClick={() => navigate('/search')}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={() => setIsProfileModalOpen(true)}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Profile"
          >
            <User className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={() => {
              if (onCartClick) {
                onCartClick();
              } else {
                navigate('/cart');
              }
            }}
            className="text-white hover:text-gray-300 transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EEEEEE] text-black">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <button 
              onClick={() => {
                onToggleShopByBike?.();
                setIsMobileMenuOpen(false);
              }}
              className="text-left hover:text-gray-600 font-medium text-sm tracking-wide"
            >
              SHOP BY BIKE
            </button>
            <button 
              onClick={() => {
                onToggleShopByProduct?.();
                setIsMobileMenuOpen(false);
              }}
              className="text-left hover:text-gray-600 font-medium text-sm tracking-wide"
            >
              SHOP BY PRODUCT
            </button>
            <Link 
              to="/blogs" 
              className="hover:text-gray-600 font-medium text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RIDE STORIES
            </Link>
            <Link 
              to="/our-stories" 
              className="hover:text-gray-600 font-medium text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR STORY
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-[#EEEEEE] text-black relative">
        <div className="max-w-full px-6">
          <div className="flex items-center justify-center h-12">
            <div className="flex justify-center items-center gap-16 w-full max-w-7xl">
              <button 
                onClick={onToggleShopByBike}
                className="hover:text-gray-600 font-medium text-sm tracking-wide"
              >
                SHOP BY BIKE
              </button>
              <button 
                onClick={onToggleShopByProduct}
                className="hover:text-gray-600 font-medium text-sm tracking-wide"
              >
                SHOP BY PRODUCT
              </button>
              <Link to="/blogs" className="hover:text-gray-600 font-medium text-sm tracking-wide">RIDE STORIES</Link>
              <Link to="/our-stories" className="hover:text-gray-600 font-medium text-sm tracking-wide">OUR STORY</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </div>
  );
};

export default Header;
