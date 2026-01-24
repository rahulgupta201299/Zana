import { useState, useEffect, useMemo } from "react";

import {
  Box,
  Dialog,
  Select,
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  Typography,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { generateOtpName, verifyOtpName } from "@/Redux/Auth/Actions";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { getLoginDetails, isdCodeDetails } from "@/Redux/Auth/Selectors";
import { GEN_OTP_REQ } from "@/Redux/Auth/Services/GenerateOtpService";
import GenerateOtpServiceAction from "@/Redux/Auth/Services/GenerateOtpService";
import { TAppDispatch } from "@/Configurations/AppStore";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import { TReducers } from "@/Redux/Reducers";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import VerifyOtpServiceAction, {
  VERIFY_OTP_REQ,
} from "@/Redux/Auth/Services/VerifyOtpService";
import getIsdListServiceAction from "@/Redux/Auth/Services/GetIsdCodes";
import { useSnackbar } from "notistack";
import Loading from "./Loading";
interface SIGN_UP_TYPE {
  isMobile: boolean;
  type?: string;
  onClose?: () => void;
}

const SignupPopup = ({ isMobile, onClose, type }: SIGN_UP_TYPE) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [phoneError, setPhoneError] = useState("");
  const dispatch = useDispatch<TAppDispatch>();
  const isGeneratingOtp = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, generateOtpName) === "LOADING"
  );
  const { enqueueSnackbar } = useSnackbar();
  const loginData = useSelector((state: any) => getLoginDetails(state));
  const isVerifyingOtp = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, verifyOtpName) === "LOADING"
  );
  const isdCode = useSelector(isdCodeDetails)

  const actions = useMemo(
    () => ({
      generateOtp: (state: GEN_OTP_REQ) =>
        dispatch(GenerateOtpServiceAction(state)),
      verifyOtp: (state: VERIFY_OTP_REQ) =>
        dispatch(VerifyOtpServiceAction(state)),
      getIsdCodeList: () => dispatch(getIsdListServiceAction()),
    }),
    [dispatch]
  );

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("landing_popup_shown");
    getIsdCode();
    if (type === "navbar") {
      setIsOpen(true);
      return;
    }
    if (!loginData?.verified && !hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loginData, type]);

  const handleRequestOtp = async () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
      return;
    } else {
      // const body = {
      //   isdCode: countryCode,
      //   phoneNumber: phone,
      // };
      // const result = await actions.generateOtp(body);
      // if (result.statusCode === 200) {
      setPhoneError("");
      setTimer(30);
      setOtpSent(true);
      // }
    }
  };

  const getIsdCode = async () => {
    if (isdCode.length) return;
    await actions.getIsdCodeList();
  };

  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [otpSent, timer]);

  useEffect(() => {
    if (otpArray.every((digit) => digit !== "")) {
      setOtp(otpArray.join(""));
    }
  }, [otpArray]);

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newArr = [...otpArray];
    newArr[index] = value.slice(-1);
    setOtpArray(newArr);

    if (value && index < 5) {
      const next = document.getElementById(`otp-box-${index + 1}`);
      next?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      const prev = document.getElementById(`otp-box-${index - 1}`);
      prev?.focus();
    }
  };

  const handleSubmitOtp = async (otp: any) => {
    if (otp.length !== 6) {
      alert("Enter a valid 6-digit OTP");
      return;
    }

    const reqBody = {
      isdCode: countryCode,
      phoneNumber: phone,
      otp: otp,
    };

    try {
      await actions.verifyOtp(reqBody);
      enqueueSnackbar("You have logged in successfully.", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 3000,
      });
      onClose && onClose();
      setIsOpen(false);
    } catch (error: any) {
      enqueueSnackbar("Failed to verify OTP. Please try again.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 3000,
      });
    }
  };

  const handleOtpPaste = (e, index) => {
    e.preventDefault();

    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    const digits = pasted.slice(0, 6).split("");

    const newArr = [...otpArray];

    digits.forEach((d, i) => {
      if (index + i < 6) newArr[index + i] = d;
    });
    setOtpArray(newArr);
    const lastIndex = Math.min(index + digits.length - 1, 5);
    const next = document.getElementById(`otp-box-${lastIndex}`);
    next?.focus();
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      fullWidth
      maxWidth="sm"
      fullScreen={isMobile}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        },
        paper: {
          sx: {
            backgroundColor: "#2A2A2A",
            color: "white",
            ...(isMobile && {
              position: "absolute",
              bottom: 0,
              m: 0,
              width: "100%",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              maxHeight: "40vh",
              display: "flex",
              flexDirection: "column",
              animation: "slideUp 0.3s ease",
            }),
          },
        },
      }}
      disableEscapeKeyDown
    >
      <IconButton
        onClick={() => {
          setIsOpen(false);
          onClose && onClose();
          sessionStorage.setItem("landing_popup_shown", "true");
        }}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ p: { md: "32px 32px 24px", xs: "16px" } }}>
        Login With OTP
      </DialogTitle>
      {(isVerifyingOtp || isGeneratingOtp) && <Loading />}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: { md: "64px 32px", xs: "32px 16px" },
          overflowY: "auto",
          flex: 1,
        }}
      >
        {!otpSent ? (
          <>
            <Typography>
              Enter your phone number and we’ll send you a 6-digit OTP
            </Typography>

            <TextField
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <Box
                      sx={{
                        borderRight: "1px solid #000",
                        mr: "16px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        renderValue={(selected) => selected}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "10px",
                          ".MuiSelect-select": { display: "flex", gap: "8px" },
                          ".MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          backgroundColor: "#fff",
                          height: "100%",
                          minWidth: "80px",
                        }}
                      >
                        {isdCode.map((c) => (
                          <MenuItem
                            key={c.isd}
                            value={c.isd}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>{c.isd}</span>
                            <span>{c.name}</span>
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  ),
                  sx: {
                    backgroundColor: "#FFFFFF",
                    color: "#000",
                    p: 0,
                    borderRadius: "10px",
                  },
                  inputProps: { maxLength: 10 },
                },
              }}
              value={phone}
              onChange={(e) => {
                if (/\D/.test(e.target.value)) return;
                setPhoneError("");
                setPhone(e.target.value);
              }}
              error={!!phoneError}
              helperText={phoneError}
            />

            <Button
              size="large"
              onClick={handleRequestOtp}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "2px solid white",
                borderRadius: "10px",
              }}
              disabled={isGeneratingOtp || phone.length != 10}
            >
              Request OTP
            </Button>
          </>
        ) : (
          <>
            <Typography>Enter the 6-digit OTP sent to your phone</Typography>

            <Box
              sx={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                mt: "16px",
              }}
            >
              {otpArray.map((digit, index) => (
                <TextField
                  key={index}
                  id={`otp-box-${index}`}
                  value={digit}
                  onPaste={(e) => handleOtpPaste(e, index)}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  slotProps={{
                    input: {
                      sx: {
                        backgroundColor: "#FFFFFF",
                        color: "#000",
                        textAlign: "center",
                        fontSize: "20px",
                      },
                      inputProps: { maxLength: 10 },
                    },
                  }}
                  sx={{ width: "48px", color: "#000" }}
                />
              ))}
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "14px",
                opacity: 0.7,
              }}
            >
              {timer > 0 ? (
                <>
                  Resend OTP in <b>00:{String(timer).padStart(2, "0")}</b>
                </>
              ) : (
                <Button
                  variant="text"
                  onClick={handleRequestOtp}
                  sx={{ color: "white" }}
                  disabled={isVerifyingOtp || isGeneratingOtp}
                >
                  Resend OTP
                </Button>
              )}
            </Typography>

            <Button
              disabled={otpArray.some((d) => d === "") || isVerifyingOtp}
              size="large"
              onClick={() => handleSubmitOtp(otp)}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "2px solid white",
                mt: 2,
                borderRadius: "10px",
              }}
            >
              Submit OTP
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default withDeviceDetails(SignupPopup);
