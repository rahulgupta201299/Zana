import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { getProfileDetails } from "@/Redux/Auth/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import getBikeBrandServiceAction from "@/Redux/Auth/Services/GetBikeBrand";
import getBikeModelServiceAction from "@/Redux/Auth/Services/GetBikeModel";
import addProfileDetailServiceAction, {
  ADD_PROFILE_DETAILS,
} from "@/Redux/Auth/Services/AddProfileDetails";
import getProfileDetailsServiceAction from "@/Redux/Auth/Services/GetProfileDetail";
import {
  addProfileDetailsName,
  getBikeBrandName,
  getBikeModelName,
  getProfileDetailName,
  updateProfileDetailName,
} from "@/Redux/Auth/Actions";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { TReducers } from "@/Redux/Reducers";
import {
  getServiceSelector,
  isServiceLoading,
} from "@/Redux/ServiceTracker/Selectors";

import { useSnackbar } from "notistack";
import { resetAuth } from "@/Redux/Auth/Reducer";
import updateProfileDetailServiceAction, {
  UPDATE_PROFILE_DETAILS,
} from "@/Redux/Auth/Services/UpdateProfileDetails";
import { profileSideMenu } from "./constant";
import { useNavigate } from "react-router";
import Loading from "@/components/Loading";
import MyProfile from "./components/MyProfile";
import Faq from "./components/Faq";
import { ROUTES } from "@/Constants/Routes";
interface PROFILE_PROPS_TYPE {
  onClose: () => void;
  isMobile: boolean;
}

const ProfileModal = ({ onClose, isMobile }: PROFILE_PROPS_TYPE) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("profile");
  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar } = useSnackbar();

  const actions = useMemo(
    () => ({
      //@ts-ignore
      logout: () => dispatch(resetAuth()),
    }),
    [dispatch],
  );

  const navigate = useNavigate();

  const renderContent = () => {
    switch (selectedMenu) {
      case "profile":
        return <MyProfile />;

      case "wishlist":
         navigate(ROUTES.WISHLIST);

      case "faq":
        return <Faq />;

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
    ]),
  );

  // TODO later need to check if the data needs to be persisted or not
  // const fetchProfileData = async () => {
  //   const result = await actions.fetchProfileDetails({
  //     isdCode: "91",
  //     phoneNumber: "7632000876",
  //   });
  // };

  const handleMenuClick = (key: string) => {
    if (key === "logout") {
      setLoading(true);
      setTimeout(() => {
        actions.logout();
        navigate("/");
        // onClose();
        enqueueSnackbar("You have been logged Out!", {
          variant: "info",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          autoHideDuration: 2000,
        });
        setLoading(false);
      }, 2000);
    } else {
      setSelectedMenu(key);
    }
  };

  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#2A2A2A",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: isMobile ? "100%" : "675px",
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
