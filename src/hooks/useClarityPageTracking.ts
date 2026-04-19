import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VITE_ENABLE_TRACKING } from "@/Configurations/env";

export function useClarityPageTracking() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (!VITE_ENABLE_TRACKING) return;

    if ((window as any).clarity) {
      (window as any).clarity("set", "page", pathname);
    }
  }, [pathname]);

  return null;
}
