import { useEffect } from "react";
import { ROUTES } from "@/Constants/Routes";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Navigate, useLocation, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error: any = useRouteError();
  const location = useLocation();

  useEffect(() => {
    (window as any).gtag?.("event", "route_error", {
      message: error?.message,
      stack: error?.stack,
      path: window.location.pathname,
    });
  }, [error]);

  const isAdminPath =
    location.pathname === ROUTES.ADMIN ||
    location.pathname.startsWith(`${ROUTES.ADMIN}/`);

  if (isAdminPath) {
    return (
      <Box
        sx={{
          alignItems: "center",
          bgcolor: "#eef2f6",
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            borderColor: "#d8dde3",
            borderRadius: 2,
            maxWidth: 520,
            p: 3,
            width: "100%",
          }}
        >
          <Typography sx={{ color: "#e10600", fontSize: "0.8rem", fontWeight: 850 }}>
            ZANA ADMIN
          </Typography>
          <Typography component="h1" sx={{ fontSize: "1.35rem", fontWeight: 850, mt: 1 }}>
            Unable to load admin page
          </Typography>
          <Typography sx={{ color: "#667085", mt: 1.25 }}>
            {error?.message || "Please refresh and try again."}
          </Typography>
          <Button
            href={ROUTES.ADMIN_PRODUCTS}
            sx={{ mt: 2.5 }}
            variant="contained"
          >
            Open products
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Navigate
      to={ROUTES.PAGE_NOT_FOUND}
      replace
    />
  );
}

export default ErrorBoundary;
