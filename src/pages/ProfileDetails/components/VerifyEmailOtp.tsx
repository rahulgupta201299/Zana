import React, {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { EditIcon } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import verifyEmailOtpServiceAction from "@/Redux/Auth/Services/VerifyEmailOtp";

import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { verifyEmailOtpName } from "@/Redux/Auth/Actions";

const VerifyEmailOtp = ({ open, onClose, emailId, handleRequestOtp }) => {
  const dispatch = useDispatch<TAppDispatch>();
  const [otpArray, setOtpArray] = React.useState(["", "", "", "", "", ""]);
  const [otp, setOtp] = React.useState("");
  const [timer, setTimer] = useState(30);
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [verifyEmailOtpName]),
  );
    const timerId = useRef(null);

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
  useEffect(() => { 
   handleTimer(30);
    return () => {  
        setTimer(0);
    }}, []);

    function handleTimer(t: number) {
    if (t === 0) return;
    timerId.current = setTimeout(() => {
      setTimer(t - 1);
      handleTimer(t - 1);
    }, 1000);
  }
  const handleSubmitOtp = async () => {
    if (otp.length !== 6) return;

    const reqBody = {
      email: emailId,
      otp,
    };

    try {
      const response = await dispatch(verifyEmailOtpServiceAction(reqBody));

      console.log(response);
    
      enqueueSnackbar({
        variant: "success",
        message: "Your Email has been successfully verified.",
      });
      onClose();
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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: 600 }}>
        Verify Email
      </DialogTitle>

      <DialogContent>
        <Stack
        sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
        }}
        >
          {/* Top text */}
          <Stack direction="row" sx={{ gap: "4px", alignItems: "center" }}>
            <Typography variant="body2">
              Enter the verification code sent to
            </Typography>

            <Stack direction="row" alignItems="center">
              <Typography sx={{color: "#1366d3"}} variant="body2">{emailId}</Typography>

              <IconButton
                sx={{ color: "#facc15", p:0 }}
                onClick={() => {
                  onClose();
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          {/* OTP boxes */}
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              mt: "8px",
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

          {/* Timer / resend */}
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
                sx={{ color: "#facc15", p: 0 }}
                disabled={isLoading}
              >
                Resend OTP
              </Button>
            )}
          </Typography>

          {/* Submit */}
          <Button
            size="large"
            variant="contained"
            onClick={()=>handleSubmitOtp()}
            sx={{
              backgroundColor: "#100d0d",
              color: "#fff",
              borderRadius: "10px",
            }}
            disabled={
              isLoading || otp.length !== 6 
            
            }
          >
         Submit Otp
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyEmailOtp;
