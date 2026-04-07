"use client";
import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ROUTES } from "@/Constants/Routes";
import Zana from "@/Assets/Icons/Zana.png";
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
import { BikeCategoryEnum, CURRENCY_SYMBOL } from "@/Constants/AppConstant";
import { TAppDispatch } from "@/Configurations/AppStore";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import useCart from "@/hooks/useCart";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import {
  getCurrencyList,
  getSelectedCurrency,
} from "@/Redux/Landing/Selectors";
import { selectedCurrencyActions } from "@/Redux/Landing/Actions";
import { decodeParams } from "@/Utils/global";
import getCartDetailServiceAction from "@/Redux/Cart/Services/GetCartDetailService";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import { convertCurrency } from "./Utils";
import { cartModifyActions } from "@/Redux/Cart/Action";

type NavbarPropsType = {
  isMobile: boolean;
};

function Navbar({ isMobile }: NavbarPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { bikeType = '' } = decodeParams(params)

  const cartDetail = useSelector(cartDetailSelector);

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
      name === MenuItemsName.MOTODEVIL ? window.open(route, "_blank") : navigate(route);
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

  function createProductConverter(newCurrency: string) {
    const updatedCartDetail = structuredClone(cartDetail);

    updatedCartDetail.currency = newCurrency;

    const newCurrencySymbol = currencies.find(item => item.code === newCurrency)?.symbol || CURRENCY_SYMBOL.INR;
    updatedCartDetail.currencySymbol = newCurrencySymbol;

    updatedCartDetail.processedItems = updatedCartDetail.processedItems.map((item) => {
      const price = convertCurrency(item.product.originalPrice, newCurrency);
      const totalPrice = item.quantity * price;

      return {
        ...item,
        currency: newCurrency,
        currencySymbol: newCurrencySymbol,
        price,
        totalPrice,
        product: {
          ...item.product,
          price,
          currency: newCurrency,
          currencySymbol: newCurrencySymbol,
        },
      }
    })

    const totalAmount = updatedCartDetail.processedItems.reduce((acc, item) => acc + item.totalPrice, 0);

    updatedCartDetail.totalAmount = updatedCartDetail.subtotal = totalAmount;

    return updatedCartDetail;
  }

  async function handleChange(value: string) {
    // @ts-ignore
    dispatch(selectedCurrencyActions(value));

    const newCartDetail = createProductConverter(value);
    dispatch(cartModifyActions.success(newCartDetail));

    try {
      await dispatch(getCartDetailServiceAction(value))
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
            <Link
              to={ROUTES.BASE_URL}
              style={{ display: "flex", cursor: "pointer" }}
            >
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
              gap: isMobile ? 1 : 3,
            }}
          >
            <FormControl
              size="small"
              sx={{
                borderRadius: 1,
                // minWidth: isMobile ? 20 : 80, // 👈 smaller width on mobile
              }}
            >
              <Select
                value={selectedCurrency}
                onChange={(e) => handleChange(e.target.value)}
                sx={{
                  color: "white",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                  height: isMobile ? 32 : 40,
                  ".MuiSelect-select": {
                    py: isMobile ? 0.5 : 1,
                    paddingRight: isMobile ? "24px !important" : "32px !important",
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
                    fontSize: isMobile ? "1rem" : "1.25rem",
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
                  const value = isMobile ? item.symbol : `${item.symbol} - ${item.code}`;
                  return (
                    <MenuItem key={item.code} value={item.code}>
                      {value}
                    </MenuItem>
                  )
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

      {/* {selectedTopItem === MenuItemsName.PROFILE &&
        <SignupPopup
          type='navbar'
          onClose={() => setSelectedTopItem(null)}
        />
      } */}
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
