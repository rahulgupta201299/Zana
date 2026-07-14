"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/Constants/Routes";
import Zana from "@/Assets/Icons/Zana.webp";
import ZPro from "@/Assets/Icons/ZPro.webp";
import { TopLevelItems, MenuItemsName, MenuItems } from "./Constant";
import { MenuItemsType } from "./Types";
import HeroSection from "@/components/HeroSection";
import MenuIcon from "@mui/icons-material/Menu";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import Search from "./Search";
import MobileNavMenu from "./MobileNavMenu";
import WebNavMenu from "./WebNavMenu";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import { TAppDispatch } from "@/Configurations/AppStore";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import useCart from "@/hooks/useCart";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import {
  getCurrencyList,
  getSelectedCurrency,
} from "@/Redux/Landing/Selectors";
import { selectedCurrencyActions } from "@/Redux/Landing/Actions";
import getCartDetailServiceAction from "@/Redux/Cart/Services/GetCartDetailService";
import { cartModifyActions } from "@/Redux/Cart/Action";
import { createProductConverter } from "./Utils";

type NavbarPropsType = {
  isMobile: boolean;
};

// Single source of truth for logo height — navbar height and img height
// both derive from this so they can never drift apart.
const LOGO_HEIGHT = {
  mobile: "3.5rem", // 56px
  desktop: "5rem", // 80px
};
const NAVBAR_VERTICAL_PADDING = {
  mobile: "12px", // 12px top + 12px bottom
  desktop: "16px", // 16px top + 16px bottom
};

// Shared "dark" dropdown paper styling so mobile and desktop currency
// menus look consistent instead of mobile falling back to MUI defaults.
const currencyMenuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "#111",
      color: "white",
      border: "1px solid rgba(255,255,255,0.1)",
      "& .MuiMenuItem-root:hover": {
        backgroundColor: "rgba(255,255,255,0.08)",
      },
      "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "rgba(255,255,255,0.12)",
      },
      "& .MuiMenuItem-root.Mui-selected:hover": {
        backgroundColor: "rgba(255,255,255,0.16)",
      },
    },
  },
};

function Navbar({ isMobile }: NavbarPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { bikeType = "" } = params;

  // const cartDetail = useSelector(cartDetailSelector);

  const [selectedMenuItem, setSelectedMenuItem] =
    useState<MenuItemsName | null>(null);
  const [selectedTopItem, setSelectedTopItem] = useState<MenuItemsName | null>(
    null,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const { verified } = useSelector(getLoginDetails);
  const currencies = useSelector(getCurrencyList);
  const selectedCurrency = useSelector(getSelectedCurrency);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const { getTotalQuantity } = useCart();

  const isZProPath = bikeType === BikeCategoryEnum.ZPRO;

  const dispatch = useDispatch<TAppDispatch>();

  const totalItems = getTotalQuantity();

  function handleMenuItemClick(
    event: React.MouseEvent<HTMLElement>,
    item: MenuItemsType,
  ) {
    const { name, route } = item;

    setIsMobileMenuOpen(false);
    setAnchorEl(event.currentTarget);

    if (route) {
      setSelectedMenuItem(null);
      if (name === MenuItemsName.MOTODEVIL) {
        window.open(route, "_blank");
      } else {
        navigate(route);
      }
      return;
    }

    setSelectedMenuItem(name);
  }
  const handleTopLevelClick = (item: any) => {
    const { name } = item;

    switch (name) {
      case MenuItemsName.PROFILE:
        if (verified) {
          navigate(ROUTES.PROFILE);
        } else {
          // setSelectedTopItem(MenuItemsName.PROFILE);
          dispatch(setOpenSignupPopup(true));
        }
        break;

      case MenuItemsName.SEARCH:
        setSelectedTopItem(MenuItemsName.SEARCH);
        break;

      case MenuItemsName.CART:
        dispatch(setOpenCart(true));
        break;

      default:
        navigate(`/${name.toLowerCase()}`);
    }
  };

  useEffect(() => {
    if (location.pathname !== ROUTES.BASE_URL) {
      containerRef.current!.style.position = "fixed";
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && entry.intersectionRatio === 0)
        containerRef.current.style.position = "fixed";
      else containerRef.current.style.position = "sticky";
    });

    observer.observe(heroSectionRef.current);

    return () => observer.disconnect();
  }, [location.pathname]);

  async function handleChange(value: string) {
    dispatch(selectedCurrencyActions(value));

    const newCartDetail = createProductConverter(value);
    dispatch(cartModifyActions.success(newCartDetail));

    try {
      await dispatch(getCartDetailServiceAction(value));
    } catch (error) {
      console.error(error);
    }
  }

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
          backgroundColor: "#0d0d0d",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 6 },
            // Navbar height now derives directly from the logo height instead
            // of being an incidental sum of padding + image size, so it can't
            // drift between mobile/desktop or when the logo swaps (Zana/ZPro).
            minHeight: {
              xs: `calc(${LOGO_HEIGHT.mobile} + ${NAVBAR_VERTICAL_PADDING.mobile})`,
              md: `calc(${LOGO_HEIGHT.desktop} + ${NAVBAR_VERTICAL_PADDING.desktop})`,
            },
            py: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isMobile ? (
            /* MOBILE NAVBAR VIEW */
            <>
              {/* Mobile Menu Icon Left */}
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open navigation menu"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    minWidth: 0,
                    p: 0,
                    "&:hover": { color: "#ff3f6c" },
                  }}
                >
                  <MenuIcon />
                </Button>
              </Box>

              {/* Mobile Logo Center */}
              <Box
                sx={{ width: "40%", display: "flex", justifyContent: "center" }}
              >
                <Link
                  to={ROUTES.BASE_URL}
                  className="text-white tracking-[0.2em] text-sm md:text-base font-bold flex items-center hover:opacity-80 transition-opacity font-serif"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <img
                    src={isZProPath ? ZPro : Zana}
                    alt={`${isZProPath ? "ZPro" : "Zana"} Logo`}
                    width={isZProPath ? 120 : 404}
                    height={isZProPath ? 120 : 316}
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      height: LOGO_HEIGHT.mobile,
                      width: "auto",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </Link>
              </Box>

              {/* Mobile Icons Right */}
              <Box
                sx={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                <FormControl
                  size="small"
                  sx={{
                    borderRadius: 1,
                    minWidth:  20,
                  }}
                >
                  <Select
                    value={selectedCurrency}
                    onChange={(e) => handleChange(e.target.value)}
                    inputProps={{ "aria-label": "Select currency" }}
                    aria-label="Select currency"
                    sx={{
                      color: "white",
                      fontSize:  "0.8rem" ,
                      height: "32px",
                      ".MuiSelect-select": {
                        py: 0.5,
                        paddingRight: "24px !important"
                      },           
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      ".MuiSvgIcon-root": {
                        color: "white",
                        fontSize: ".75rem",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: "#1e1e1e",
                          color: "white",
                        },
                      },
                    }}
                    renderValue={(selected) => {
                      const selectedCurrency = currencies.find(
                        (item) => item.code === selected,
                      );

                      if (!selectedCurrency) return "";
                      if (isMobile) return selectedCurrency.symbol;

                      return `${selectedCurrency.symbol} ${selectedCurrency.code}`;
                    }}
                  >
                    {currencies.map((item) => {
                      const value = isMobile
                        ? item.symbol
                        : `${item.symbol} - ${item.code}`;
                      return (
                        <MenuItem key={item.code} value={item.code}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                {TopLevelItems.map((item, ind) => {
                  const { name, Component } = item;
                  return (
                    <Button
                      key={ind}
                      onClick={() => handleTopLevelClick(item)}
                      aria-label={name}
                      sx={{ p: 0, minWidth: 0, position: "relative" }}
                    >
                      <Component
                        sx={{
                          color: "rgba(255, 255, 255, 0.85)",
                          fontSize: 20,
                          transition: "color 0.2s",
                          "&:hover": { color: "#ff3f6c" },
                        }}
                      />
                      {name === MenuItemsName.CART && totalItems > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                          {totalItems > 99 ? "99+" : totalItems}
                        </span>
                      )}
                    </Button>
                  );
                })}
              </Box>
            </>
          ) : (
            /* DESKTOP NAVBAR VIEW */
            <>
              {/* Desktop Logo Left */}
              <Box sx={{ flexShrink: 0 }}>
                <Link
                  to={ROUTES.BASE_URL}
                  className="text-white tracking-[0.25em] text-xl font-bold flex items-center hover:opacity-80 transition-opacity font-serif"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <img
                    src={isZProPath ? ZPro : Zana}
                    alt={`${isZProPath ? "ZPro" : "Zana"} Logo`}
                    width={isZProPath ? 120 : 404}
                    height={isZProPath ? 120 : 316}
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      height: LOGO_HEIGHT.desktop,
                      width: "auto",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </Link>
              </Box>

              {/* Desktop Menu Items Center */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: 4, lg: 6 },
                }}
              >
                {MenuItems.map((navItem, index) => (
                  <button
                    key={index}
                    onClick={(event) => handleMenuItemClick(event, navItem)}
                    className="text-white/80 hover:text-white transition-colors text-xs font-semibold tracking-[0.2em] font-sans relative group py-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {navItem.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </Box>

              {/* Desktop Right Links */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <FormControl size="small">
                  <Select
                    value={selectedCurrency}
                    onChange={(e) => handleChange(e.target.value)}
                    inputProps={{ "aria-label": "Select currency" }}
                    aria-label="Select currency"
                    MenuProps={currencyMenuProps}
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                      "&:hover": { color: "white" },
                      ".MuiOutlinedInput-notchedOutline": { border: 1},
                      "&:hover .MuiOutlinedInput-notchedOutline": { border: 1 },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                      ".MuiSelect-select": { p: 1, pr: "18px !important" },
                      ".MuiSvgIcon-root": {
                        color: "rgba(255, 255, 255, 0.4)",
                        right: 0,
                        fontSize: "1.1rem",
                      },
                    }}
                  >
                    {currencies.map((item) => (
                      <MenuItem
                        key={item.code}
                        value={item.code}
                        sx={{ fontSize: "0.85rem" }}
                      >
                        {item.symbol} {item.code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {TopLevelItems.map((item, ind) => {
                  const { name, Component } = item;
                  return (
                    <Button
                      key={ind}
                      onClick={() => handleTopLevelClick(item)}
                      aria-label={name}
                      sx={{ p: 0, minWidth: 0, position: "relative" }}
                    >
                      <Component
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontSize: 22,
                          transition: "color 0.2s",
                          "&:hover": { color: "#ff3f6c" },
                        }}
                      />
                      {name === MenuItemsName.CART && totalItems > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                          {totalItems > 99 ? "99+" : totalItems}
                        </span>
                      )}
                    </Button>
                  );
                })}
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Popups & Drawers */}
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
