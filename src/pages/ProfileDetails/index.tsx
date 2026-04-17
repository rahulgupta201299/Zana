import { useEffect, useMemo, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { getLoginDetails, getProfileDetails, listOfBikes } from "@/Redux/Auth/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import getBikeBrandServiceAction from "@/Redux/Auth/Services/GetBikeBrand";
import getProfileDetailsServiceAction from "@/Redux/Auth/Services/GetProfileDetail";
import {
  addProfileDetailsName,
  generateEmailOtpName,
  getBikeBrandName,
  getBikeModelName,
  getProfileDetailName,
  updateProfileDetailName,
  verifyEmailOtpName,
} from "@/Redux/Auth/Actions";
import {
  isServiceLoading,
} from "@/Redux/ServiceTracker/Selectors";
import { profileSideMenu } from "./constant";
import { useNavigate } from "react-router";
import Loading from "@/components/Loading";
import MyProfile from "./components/MyProfile";
import Faq from "./components/Faq";
import { ROUTES } from "@/Constants/Routes";
import { logout } from "./Utils";


interface PROFILE_PROPS_TYPE {
  onClose: () => void;
  isMobile: boolean;
}

const ProfileModal = ({ onClose, isMobile }: PROFILE_PROPS_TYPE) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("profile");

  const dispatch = useDispatch<TAppDispatch>();
  const profileDetails = useSelector(getProfileDetails);
  const loginDetails = useSelector(getLoginDetails);
  const bikeDetails = useSelector(listOfBikes)

  const actions = useMemo(
    () => ({
      getBrandList: () => dispatch(getBikeBrandServiceAction()),
      fetchProfileDetails: (data: any) =>
        dispatch(getProfileDetailsServiceAction(data))
    }),
    [dispatch],
  );

  const navigate = useNavigate();


  const fetchDetails = async () => {

    const { isdCode } = profileDetails;
    const { phoneNumber } = loginDetails;

    const body = {
      isdCode: encodeURIComponent(isdCode),
      phoneNumber: encodeURIComponent(phoneNumber),
    };
    try {
      if (!bikeDetails.length) await actions.getBrandList();

      await actions.fetchProfileDetails(body);

    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const renderContent = () => {
    switch (selectedMenu) {
      case "profile":
        return <MyProfile />;

      case "wishlist":
        navigate(ROUTES.WISHLIST);
      case "faq":
        return <Faq />;
      case "orders":
        navigate(ROUTES.ORDER_LIST);

      default:
        return null;
    }
  };

  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      addProfileDetailsName,
      updateProfileDetailName,
      getBikeModelName,
      getBikeBrandName,
      getProfileDetailName,
      verifyEmailOtpName,
      generateEmailOtpName
    ]),
  );

  const handleMenuClick = (key: string) => {
    if (key === "logout") {
      setLoading(true);
      setTimeout(() => {
        logout();
        navigate("/");
        // onClose();
        setLoading(false);
      }, 2000);
    } else {
      setSelectedMenu(key);
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#2A2A2A",
      }}
    >
      {(isLoading || loading) && <Loading />
      }
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          px: { lg: "80px", xs: "0" },

          backgroundColor: "#0000008",
        }}
      >
        {!isMobile ? (
          //Desktop View//
          <Box
            sx={{
              width: "45%",
              // bgcolor: "#00000080",
              p: "48px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                textAlign: "center",
                mb: "48px",
                fontSize: "30px",
              }}
            >
              Hey Rider! Welcome to Zana.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {profileSideMenu.map((item) => (
                <Paper
                  onClick={() => handleMenuClick(item.key)}
                  key={item.key}
                  sx={{
                    p: "16px 24px",
                    borderRadius: "10px",
                    backgroundColor:
                      selectedMenu === item.key ? "#aaa8a8ff" : "#fff",
                    borderLeft:
                      selectedMenu === item.key
                        ? "4px solid #facc15"
                        : "4px solid transparent",
                    display: "flex",
                    justifyContent: "space-between",
                    transition: "0.2s",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#e1dfdfff" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                    <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                      {item.label}
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Paper>
              ))}
            </Box>
          </Box>
        ) : (
          // mobile View//
          <Box
            sx={{
              width: "100%",
              // bgcolor: "#00000080",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: "16px",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#fff",
                  px: "32px",
                }}
              >
                Hey Rider! Welcome to Zana.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                mt: "8px",
              }}
            >
              {profileSideMenu.map((menu, index) => (
                <Box
                  onClick={() => handleMenuClick(menu.key)}
                  key={index}
                  sx={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "#F6F6F6",
                    backgroundColor:
                      selectedMenu === menu.key ? "#aaa8a8ff" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { background: "#c7c2c2ff" },
                    "&:active": { transform: "scale(0.92)" },
                  }}
                >
                  {menu?.icon}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {renderContent()}
      </Box>
    </Box>
  );
};

export default withDeviceDetails(ProfileModal);
