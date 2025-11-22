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
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { updateLoginStatusActions } from "@/Redux/Auth/Actions";

const countries = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+81", label: "JP", flag: "🇯🇵" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
];

const SignupPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
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
    // Show popup after a short delay on page load
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
    setOtpSent(true);
  };

  const handleSubmitOtp = async () => {
    if (otp.length !== 6) {
      alert("Enter a valid 6-digit OTP");
      return;
    }
    await actions.handleUpdateLogin(phone);

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      // onClose={() => setIsOpen(false)}
      disableEscapeKeyDown
      maxWidth="sm"
      fullWidth
      slotProps={{
        backdrop: {
          onClick: (e) => e.stopPropagation(),
        },
        paper: {
          sx: {
            backgroundColor: "black",
            color: "white",
          },
        },
      }}
    >
      <IconButton
        onClick={() => setIsOpen(false)}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
          zIndex: 10,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ p: "32px 32px 24px 32px" }}>
        Login With OTP
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: "64px 32px",
        }}
      >
        {!otpSent ? (
          <>
            <Typography>
              Enter your phone number and we’ll send you a six digit OTP
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
                        left: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          ".MuiSelect-select": {
                            display: "flex",
                            alignItems: "center",
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
                  sx: { backgroundColor: "#FFFFFF", color: "#000", p: 0 },
                  inputProps: { maxLength: 10 },
                },
              }}
              value={phone}
              onChange={(e) => {
                if (e.target.value.match(/[^0-9]/)) return;
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
              }}
            >
              Request OTP
            </Button>
          </>
        ) : (
          <>
            <Typography>Enter the 6-digit OTP sent to your phone</Typography>
            <TextField
              fullWidth
              value={otp}
              variant="outlined"
              onChange={(e) => {
                if (e.target.value.match(/[^0-9]/)) return;
                setOtp(e.target.value);
              }}
              slotProps={{
                input: {
                  inputProps: { maxLength: 6 },
                  sx: { backgroundColor: "#FFFFFF", color: "#000" },
                },
              }}
            />
            <Button
              disabled={otp.length != 6}
              size="large"
              onClick={handleSubmitOtp}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "2px solid white",
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

export default SignupPopup;
