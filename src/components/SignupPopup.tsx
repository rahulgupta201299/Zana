import {
  useState,
  useEffect,
  useMemo,
  useRef,
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
} from "react";

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
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { generateOtpName, verifyOtpName } from "@/Redux/Auth/Actions";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { isdCodeDetails } from "@/Redux/Auth/Selectors";
import { GEN_OTP_REQ } from "@/Redux/Auth/Services/GenerateOtpService";
import GenerateOtpServiceAction from "@/Redux/Auth/Services/GenerateOtpService";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { getServiceSelector } from "@/Redux/ServiceTracker/Selectors";
import { TReducers } from "@/Redux/Reducers";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import VerifyOtpServiceAction, {
  VERIFY_OTP_REQ,
} from "@/Redux/Auth/Services/VerifyOtpService";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router";
import Loading from "./Loading";
import useCart from "@/hooks/useCart";
import { SESSION_STORAGE } from "@/Constants/AppConstant";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import { ROUTES } from "@/Constants/Routes";
import EditIcon from "@mui/icons-material/Edit";

interface SIGN_UP_TYPE {
  isMobile: boolean;
}

const SignupPopup = ({ isMobile }: SIGN_UP_TYPE) => {
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
      getServiceSelector(state, generateOtpName) === "LOADING",
  );
  const { enqueueSnackbar } = useSnackbar();
  const isVerifyingOtp = useSelector(
    (state: TReducers & PersistPartial) =>
      getServiceSelector(state, verifyOtpName) === "LOADING",
  );
  const open = useSelector((state: TAppStore) => state.auth.openSignupPopup);
  const isdCode = useSelector(isdCodeDetails);

  const location = useLocation();

  const timerId = useRef(null);

  const { saveCartToDB } = useCart();

  const actions = useMemo(
    () => ({
      generateOtp: (state: GEN_OTP_REQ) =>
        dispatch(GenerateOtpServiceAction(state)),
      verifyOtp: (state: VERIFY_OTP_REQ) =>
        dispatch(VerifyOtpServiceAction(state)),
    }),
    [dispatch],
  );

  function handleTimer(t: number) {
    if (t === 0) return;
    timerId.current = setTimeout(() => {
      setTimer(t - 1);
      handleTimer(t - 1);
    }, 1000);
  }

  const handleRequestOtp = async () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
      return;
    }

    const body = {
      isdCode: countryCode,
      phoneNumber: phone,
    };

    try {
      const result = await actions.generateOtp(body);
      if (!result.success) throw Error();
      setPhoneError("");
      clearTimeout(timerId.current);
      handleTimer(30);
      setOtpSent(true);
      enqueueSnackbar({
        variant: "success",
        message: "Otp sent successfully.",
      });
    } catch (error: any) {
      enqueueSnackbar({
        variant: "error",
        message: "Failed to generate OTP. Please try again.",
      });
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newArr = [...otpArray];
    newArr[index] = value.slice(-1);
    setOtpArray(newArr);

    if (value && index < 5) {
      const next = document.getElementById(`otp-box-${index + 1}`);
      next?.focus();
    }

    setOtp(newArr.join(""));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      const prev = document.getElementById(`otp-box-${index - 1}`);
      prev?.focus();
    }
  };

  const handleSubmitOtp = async (otp: string) => {
    if (otp.length !== 6) return;

    const reqBody = {
      isdCode: countryCode,
      phoneNumber: phone,
      otp,
    };

    try {
      const response = await actions.verifyOtp(reqBody);
      const { phoneNumber = "" } = response;
      saveCartToDB(phoneNumber);
      enqueueSnackbar({
        variant: "success",
        message: "You have logged in successfully.",
        
      });
      handleClose();
    } catch (error: any) {
      enqueueSnackbar({
        variant: "error",
        message: "Failed to verify OTP. Please try again.",
      });
    }
  };

  const handleOtpPaste = (
    e: ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    const digits = pasted.slice(0, 6).split("");

    const newArr = [...otpArray];

    digits.forEach((d, i) => {
      if (index + i < 6) newArr[index + i] = d;
    });

    setOtpArray(newArr);
    setOtp(newArr.join(""));

    const lastIndex = Math.min(index + digits.length - 1, 5);
    const next = document.getElementById(`otp-box-${lastIndex}`);
    next?.focus();
  };

  function handleClose() {
    sessionStorage.setItem(SESSION_STORAGE.LANDING_POPUP_SHOWN, "true");
    dispatch(setOpenSignupPopup(false));
  }

  useEffect(() => {
    return () => clearTimeout(timerId.current);
  }, []);

  const showClose = location.pathname !== ROUTES.CHECKOUT;

  if (!open) return null;

  return (
    <Dialog
      open={true}
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
      {showClose && (
        <IconButton
          onClick={handleClose}
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
      )}

      <DialogTitle sx={{ p: { md: "32px 32px 0px", xs: "16px" } }}>
        Login With OTP
      </DialogTitle>
      {(isVerifyingOtp || isGeneratingOtp) && <Loading />}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          mt: "24px",
          p: { md: "0px 32px 32px 32px", xs: "16px" },
          overflowY: "auto",
          flex: 1,
        }}
      >
        {!otpSent ? (
          <>
            <Typography>
              Enter your phone number and we'll send you a 6-digit OTP
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
            <Stack
              direction="row"
              sx={{
                gap: "4px",
                alignItems:'center'
              }}
            >
              <Typography variant="body2">
                Enter the 6-digit OTP sent to
              </Typography>

              <Stack direction="row" alignItems="center">
                <Typography variant="body2">{phone}</Typography>

                <IconButton
                  sx={{
                    color:'#facc15'
                  }}
                  onClick={()=>setOtpSent(false)}
                >
                  <EditIcon
                  fontSize='small'
                  />
                </IconButton>
               
              
              </Stack>
            </Stack>
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
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) =>
                    handleOtpPaste(e, index)
                  }
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleOtpChange(e.target.value, index)
                  }
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(e, index)
                  }
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
                  sx={{ color: "#facc15", cursor: "pointer", p:0 }}
                  disabled={isVerifyingOtp || isGeneratingOtp}
                >
                  Resend OTP
                </Button>
              )}
            </Typography>

            <Button
              disabled={otp.length !== 6 || isVerifyingOtp}
              size="large"
              onClick={() => handleSubmitOtp(otp)}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "2px solid white",
                mt: 2,
                borderRadius: "10px",
                cursor: "pointer",
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
