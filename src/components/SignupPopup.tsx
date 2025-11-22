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
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { updateLoginStatusActions } from "@/Redux/Auth/Actions";
import { kMaxLength } from "buffer";
import withDeviceDetails from "@/Hocs/withDeviceDetails";

const countries = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+81", label: "JP", flag: "🇯🇵" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
];

interface SIGN_UP_TYPE {
  isMobile: boolean;
  onClose?: () => void;
}

const SignupPopup = ({ isMobile, onClose }: SIGN_UP_TYPE) => {
  const [isOpen, setIsOpen] = useState(true);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [phoneError, setPhoneError] = useState("");
  const dispatch = useDispatch();
  const actions = useMemo(
    () => ({
      handleUpdateLogin: (state: any) =>
        dispatch(updateLoginStatusActions(state)),
    }),
    [dispatch]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRequestOtp = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
      return;
    }
    setPhoneError("");
    setTimer(30);
    setOtpSent(true);
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
    await actions.handleUpdateLogin(phone);
    onClose && onClose();
    setIsOpen(false);
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
      onClose={() => !isMobile && setIsOpen(false)}
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
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              height: "auto",
              maxHeight: "85vh",
              animation: "slideUp 0.3s ease",
            }),
          },
        },
      }}
      disableEscapeKeyDown
    >
      <IconButton
        onClick={() => setIsOpen(false)}
        sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ p: { md: "32px 32px 24px", xs: "16px" } }}>
        Login With OTP
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: { md: "64px 32px", xs: "64px 16px" },
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
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "10px",
                          ".MuiSelect-select": {
                            display: "flex",
                            gap: "8px",
                          },
                          ".MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          backgroundColor: "#fff",
                          height: "100%",
                          minWidth: "80px",
                        }}
                      >
                        {countries.map((c) => (
                          <MenuItem
                            key={c.code}
                            value={c.code}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <span>{c.flag}</span>
                            <span>{c.code}</span>
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
                  sx={{
                    width: "48px",
                    // backgroundColor: "#FFFFFF",
                    color: "#000",
                  }}
                />
              ))}
            </Box>

            {/* TIMER */}
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
                >
                  Resend OTP
                </Button>
              )}
            </Typography>

            <Button
              disabled={otpArray.some((d) => d === "")}
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
