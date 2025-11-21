
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfileModal from "@/components/ProfileModal";
import { ROUTES } from "@/Constants/Routes";
import { TopLevelItems, MenuItemsName, MenuItems } from "@/pages/Landing/Constant";
import { MenuItemsType, TopLevelItemsType } from "@/pages/Landing/Types";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import CartSidebar from "@/components/CartSidebar";

function Header() {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemsName | null>(null)

  // TODO handle with redux
  const cartItemCount = 0
  const isCartOpen = false

  function handleTopLevelClick(item: TopLevelItemsType) {
    const { name, route } = item;

    if (name === MenuItemsName.Profile) {
      setSelectedMenuItem(MenuItemsName.Profile)
      return
    }
    // TODO dispatch the cart open close
    navigate(route, { replace: true })
  }

  function handleMenuItemClick(item: MenuItemsType) {
    const { name, route } = item

    setIsMobileMenuOpen(false)

    if (route) {
      setSelectedMenuItem(null)
      navigate(route, { replace: true })
      return
    }

    setSelectedMenuItem(name)
  }

  return (
    <div className="w-full">
      {/* Logo Section */}
      <div className="py-4 flex justify-between items-center px-4 md:px-8" style={{ backgroundColor: '#181818' }}>
        {/* Left - Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          className="text-white hover:text-gray-300 transition-colors md:hidden"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Left Spacer (Desktop Only) */}
        <div className="w-32 hidden md:block"></div>

        {/* Center Logo */}
        <Link to={ROUTES.BASE_URL} className="flex-shrink-0">
          <img
            src="/uploads/957a38a6-31ae-4f52-8f91-4db69e92b127.png"
            alt="Zana Logo"
            className="h-12 md:h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-6">
          {
            TopLevelItems.map((item, ind) => {
              const { name, Component } = item
              return (
                <button
                  key={ind}
                  onClick={() => handleTopLevelClick(item)}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label={name}
                >
                  <Component className="w-4 h-4 md:w-6 md:h-6" />
                  {name === MenuItemsName.Cart && cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount > 99 ? '99+' : cartItemCount}
                    </span>
                  )}
                </button>
              )
            })
          }
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EEEEEE] text-black">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {
              MenuItems.map((item, ind) => (
                <button
                  key={ind}
                  onClick={() => handleMenuItemClick(item)}
                  className="text-left hover:text-gray-600 font-medium text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))
            }
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-[#EEEEEE] text-black relative">
        <div className="max-w-full px-6">
          <div className="flex items-center justify-center h-12">
            <div className="flex justify-center items-center gap-16 w-full max-w-7xl">
              {
                MenuItems.map((item, ind) => (
                  <button
                    key={ind}
                    onClick={() => handleMenuItemClick(item)}
                    className="text-left hover:text-gray-600 font-medium text-sm tracking-wide"
                  >
                    {item.name}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      </nav>

      {
        selectedMenuItem === MenuItemsName.Profile && (
          <ProfileModal
            open={selectedMenuItem}
            onClose={() => setSelectedMenuItem(null)}
          />
        )
      }
      {
        selectedMenuItem === MenuItemsName.SHOP_BY_BIKE && (
          <CollapsibleShopByBike
            onClose={() => setSelectedMenuItem(null)}
          />
        )
      }
      {
        selectedMenuItem === MenuItemsName.SHOP_BY_PRODUCT && (
          <CollapsibleShopByProduct
            onClose={() => setSelectedMenuItem(null)}
          />
        )
      }
      {/* {
        isCartOpen && (
          <CartSidebar
            onClose={() => {
              // TODO Handle with redux
            }}
          />
        )
      } */}

    </div>
  );
};

export default Header;
