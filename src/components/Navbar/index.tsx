"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ProfileModal from "@/components/ProfileModal";
import { ROUTES } from "@/Constants/Routes";
import Zana from "@/Assets/Icons/Zana.png";
import ZPro from "@/Assets/Icons/ZPro.webp";
import { TopLevelItems, MenuItemsName, MenuItems } from "./Constant";
import { MenuItemsType, TopLevelItemsType } from "./Types";
import HeroSection from "@/components/HeroSection";
import MenuIcon from "@mui/icons-material/Menu";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import Search from "./Search";
import MobileNavMenu from "./MobileNavMenu";
import WebNavMenu from "./WebNavMenu";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { useDispatch, useSelector } from "react-redux";
import SignupPopup from "../SignupPopup";
import { useCartContext } from "@/Context/CartProvider";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import { TAppDispatch } from "@/Configurations/AppStore";
import { setOpenCart } from "@/Redux/Cart/Reducer";


type NavbarPropsType = {
  isMobile: boolean;
};

function Navbar({ isMobile }: NavbarPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams()
  const bikeType = params?.bikeType?.toLowerCase() || ''

  const [selectedMenuItem, setSelectedMenuItem] =
    useState<MenuItemsName | null>(null);
  const [selectedTopItem, setSelectedTopItem] = useState<MenuItemsName | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const { verified } = useSelector((state: any) => getLoginDetails(state))

  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const { totalItems } = useCartContext();

  const isZProPath = bikeType === BikeCategoryEnum.ZPRO

  const dispatch = useDispatch<TAppDispatch>()


  function handleMenuItemClick(
    event: React.MouseEvent<HTMLElement>,
    item: MenuItemsType
  ) {
    const { name, route } = item;

    setIsMobileMenuOpen(false);
    setAnchorEl(event.currentTarget);

    if (route) {
      setSelectedMenuItem(null);
      navigate(route);
      return;
    }

    setSelectedMenuItem(name);
  }

  function handleTopLevelClick(item: TopLevelItemsType) {
    const { name } = item;

    if (name === MenuItemsName.CART) {
      dispatch(setOpenCart(true))
      return
    }

    setSelectedTopItem(name);
  }

  useEffect(() => {

    if (location.pathname !== ROUTES.BASE_URL) {
      containerRef.current!.style.position = 'fixed';
      return;
    }

    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (!entry.isIntersecting && entry.intersectionRatio === 0) containerRef.current.style.position = 'fixed';
      else containerRef.current.style.position = 'sticky';
    })

    observer.observe(heroSectionRef.current)

    return () => observer.disconnect()
  }, [location.pathname]);

  return (
    <Box>
      <Box ref={heroSectionRef}>
        {location.pathname === ROUTES.BASE_URL && <HeroSection />}
      </Box>
      <Box
        ref={containerRef}
        sx={{
          position: "sticky",
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
            <Link to={ROUTES.BASE_URL} style={{ display: "flex", cursor: 'pointer' }}>
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

                  {name === MenuItemsName.CART && totalItems > 0 && (
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
        (verified ? (
          <ProfileModal onClose={() => setSelectedTopItem(null)} />
        ) : (
          <SignupPopup
            type='navbar'
            onClose={() => setSelectedTopItem(null)} />
        ))}
      {selectedTopItem === MenuItemsName.SEARCH && (
        <Search onClose={() => setSelectedTopItem(null)} />
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
