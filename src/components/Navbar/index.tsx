"use client";
import { useEffect, useState, useMemo } from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileModal from "@/components/ProfileModal";
import { ROUTES } from "@/Constants/Routes";
import Zana from "@/Assets/Icons/Zana.png";
import ZPro from "@/Assets/Icons/ZPro.webp";
import { TopLevelItems, MenuItemsName, MenuItems } from "./Constant";
import { MenuItemsType, TopLevelItemsType } from "./Types";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import HeroSection from "@/components/HeroSection";
import CartSidebar from "@/components/CartSidebar";
import MenuIcon from "@mui/icons-material/Menu";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import Search from "./Search";
import MobileNavMenu from "./MobileNavMenu";
import WebNavMenu from "./WebNavMenu";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { useSelector } from "react-redux";
import SignupPopup from "../SignupPopup";
import { useCart } from "@/hooks/useCart";
import { useCartContext } from "@/Context/CartProvider";


type NavbarPropsType = {
  isMobile: boolean;
};

function Navbar({ isMobile }: NavbarPropsType) {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedMenuItem, setSelectedMenuItem] =
    useState<MenuItemsName | null>(null);
  const [selectedTopItem, setSelectedTopItem] = useState<MenuItemsName | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const isLoggedIn = useSelector((state: any) => getLoginDetails(state));
  const isZProPath = useMemo(() => {
    return location.pathname.split("/").filter(Boolean)?.[0] === "z-pro";
  }, [location.pathname]);


  const { totalItems } =
  useCartContext();


  function handleMenuItemClick(
    event: React.MouseEvent<HTMLElement>,
    item: MenuItemsType
  ) {
    const { name, route } = item;

    setIsMobileMenuOpen(false);
    setAnchorEl(event.currentTarget);

    if (route) {
      setSelectedMenuItem(null);
      navigate(route, { replace: true });
      return;
    }

    setSelectedMenuItem(name);
  }

  function handleTopLevelClick(item: TopLevelItemsType) {
    const { name } = item;

    setSelectedTopItem(name);
  }

  function handleScroll() {
    if (location.pathname !== ROUTES.BASE_URL) return;

    const newHeight = isMobile ? 175 : window.innerHeight;

    if (window.scrollY >= newHeight) setIsSticky(false);
    else setIsSticky(true);
  }

  useEffect(() => {
    if (location.pathname === ROUTES.BASE_URL)
      window.addEventListener("scroll", handleScroll);
    else setIsSticky(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isMobile]);

  return (
    <Box>
      {location.pathname === ROUTES.BASE_URL && <HeroSection />}
      <Box
        sx={{
          position: isSticky ? "sticky" : "fixed",
          top: 0,
          width: "100%",
          zIndex: 4,
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* LEFT EMPTY SPACE */}
          <Box sx={{ flex: 1 }}>
            {isMobile && (
              <Button
                onClick={() => setIsMobileMenuOpen(true)}
                sx={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    color: "#1976D2",
                  },
                }}
              >
                <MenuIcon />
              </Button>
            )}
          </Box>

          {/* LOGO CENTER */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Link to={ROUTES.BASE_URL} style={{ display: "flex" }}>
              <img
                src={isZProPath ? ZPro : Zana}
                alt={`${isZProPath ? "ZPro" : "Zana"} Logo`}
                style={{
                  height: isMobile ? "3.5rem" : "5rem",
                  width: "auto",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </Link>
          </Box>

          {/* RIGHT ICONS */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: isMobile ? 3 : 6,
            }}
          >
            {TopLevelItems.map((item, ind) => {
              const { name, Component } = item;
              return (
                <Button
                  key={ind}
                  onClick={() => handleTopLevelClick(item)}
                  aria-label={name}
                  sx={{
                    p: 0,
                    minWidth: 0,
                  }}
                >
                  <Component
                    sx={{
                      color: "white",
                      fontSize: isMobile ? 20 : 30,
                      "&:hover": {
                        color: "#1976D2",
                      },
                    }}
                  />
                  {/* TODO */}

                  {name === "Cart" && totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}
                </Button>
              );
            })}
          </Box>
        </Box>
        {!isMobile && (
          <Box
            sx={{
              background: "white",
              width: "100%",
              borderBottom: "1px solid #e5e5e5",
              px: 2,
              py: 1,
              display: "flex",
              justifyContent: "center",
              gap: "5%",
            }}
          >
            {MenuItems.map((item, ind) => (
              <Button
                key={ind}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  minWidth: 0,
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "0.5rem",
                    color: "#1976D2",
                  },
                }}
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  handleMenuItemClick(event, item)
                }
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}
      </Box>

      {selectedTopItem === MenuItemsName.PROFILE &&
        (isLoggedIn ? (
          <ProfileModal onClose={() => setSelectedTopItem(null)} />
        ) : (
          <SignupPopup onClose={() => setSelectedTopItem(null)} />
        ))}
      {selectedTopItem === MenuItemsName.SEARCH && (
        <Search onClose={() => setSelectedTopItem(null)} />
      )}
      {selectedTopItem === MenuItemsName.CART && (
        <CartSidebar
          isOpen={selectedTopItem === MenuItemsName.CART}
          onClose={() => setSelectedTopItem(null)}
         
        />
      )}
      {isMobileMenuOpen && (
        <MobileNavMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
      {selectedMenuItem && (
        <WebNavMenu
          menuName={selectedMenuItem}
          anchorEl={anchorEl}
          onClose={() => setSelectedMenuItem(null)}
        />
      )}
    </Box>
  );
}

export default withDeviceDetails(Navbar);
