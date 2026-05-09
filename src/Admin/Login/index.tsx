import { FormEvent, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";

import { ROUTES } from "@/Constants/Routes";
import {
  generateAdminEmailOtp,
  verifyAdminEmailOtp,
} from "@/Admin/Configurations/AdminOtpApi";
import { setAdminSession } from "@/Admin/Configurations/AdminAuth";
import zanaLogo from "@/Assets/Icons/Zana.png";

type LoginStep = "email" | "otp";

function getLoginError(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

function getAdminRedirectPath(from?: string) {
  const validAdminRedirects = [ROUTES.ADMIN_PRODUCTS];

  if (from && validAdminRedirects.includes(from)) {
    return from;
  }

  return ROUTES.ADMIN_PRODUCTS;
}

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<LoginStep>("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const redirectTo = useMemo(() => {
    const state = location.state as { from?: string } | null;
    return getAdminRedirectPath(state?.from);
  }, [location.state]);

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const canSubmitEmail = isEmailValid && !loading;
  const canSubmitOtp = otp.trim().length >= 4 && !loading;

  const handleGenerateOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmitEmail) return;

    setLoading(true);
    setError("");

    try {
      const data = await generateAdminEmailOtp(email.trim());
      setOtpMessage(data.message || "OTP sent successfully.");
      setStep("otp");
      enqueueSnackbar("OTP sent successfully", { variant: "success" });
    } catch (requestError) {
      setError(getLoginError(requestError));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmitOtp) return;

    setLoading(true);
    setError("");

    try {
      const data = await verifyAdminEmailOtp(email.trim(), otp.trim());
      if (!data.verified) {
        throw new Error("OTP verification failed.");
      }

      setAdminSession(data.email || email.trim());
      enqueueSnackbar("Admin login verified", { variant: "success" });
      navigate(redirectTo, { replace: true });
    } catch (requestError) {
      setError(getLoginError(requestError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        bgcolor: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #d8dde3",
          borderRadius: 2,
          maxWidth: 440,
          p: { xs: 2.5, sm: 4 },
          width: "100%",
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Box
              component="img"
              src={zanaLogo}
              alt="Zana"
              sx={{ display: "block", height: 48, mb: 2, objectFit: "contain" }}
            />
            <Typography
              component="h1"
              sx={{ color: "#111827", fontSize: "1.65rem", fontWeight: 850 }}
            >
              Sign in with email OTP
            </Typography>
            <Typography sx={{ color: "#667085", fontSize: "0.92rem", mt: 1 }}>
              Generate an OTP for your admin email and verify it to continue.
            </Typography>
          </Box>

          {error ? <Alert severity="error">{error}</Alert> : null}
          {otpMessage ? <Alert severity="success">{otpMessage}</Alert> : null}

          {step === "email" ? (
            <Box component="form" onSubmit={handleGenerateOtp}>
              <Stack spacing={2.25}>
                <TextField
                  autoComplete="email"
                  autoFocus
                  fullWidth
                  inputProps={{ inputMode: "email" }}
                  label="Admin email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  type="text"
                  value={email}
                />
                <Button
                  disabled={!canSubmitEmail}
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#111827",
                    minHeight: 48,
                    "&:hover": { bgcolor: "#263244" },
                  }}
                >
                  {loading ? <CircularProgress color="inherit" size={22} /> : "Generate OTP"}
                </Button>
              </Stack>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleVerifyOtp}>
              <Stack spacing={2.25}>
                <TextField
                  fullWidth
                  inputProps={{ inputMode: "email" }}
                  label="Admin email"
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  value={email}
                />
                <TextField
                  autoComplete="one-time-code"
                  autoFocus
                  fullWidth
                  inputProps={{ inputMode: "numeric", maxLength: 6 }}
                  label="OTP"
                  onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))}
                  placeholder="123456"
                  value={otp}
                />
                <Button
                  disabled={!canSubmitOtp}
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#111827",
                    minHeight: 48,
                    "&:hover": { bgcolor: "#263244" },
                  }}
                >
                  {loading ? <CircularProgress color="inherit" size={22} /> : "Verify and login"}
                </Button>
                <Button
                  disabled={loading}
                  onClick={() => {
                    setStep("email");
                    setOtp("");
                    setOtpMessage("");
                    setError("");
                  }}
                  type="button"
                >
                  Use a different email
                </Button>
              </Stack>
            </Box>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
