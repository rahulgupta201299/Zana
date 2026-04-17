import { useEffect } from "react";
import { ROUTES } from "@/Constants/Routes";
import { Navigate, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error: any = useRouteError();

  useEffect(() => {
    (window as any).gtag("event", "route_error", {
      message: error?.message,
      stack: error?.stack,
      path: window.location.pathname,
    });
  }, [error]);

  return <Navigate to={ROUTES.ANY} replace />;
}

export default ErrorBoundary;