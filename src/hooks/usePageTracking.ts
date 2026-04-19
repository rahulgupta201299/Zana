import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { VITE_ENABLE_TRACKING } from "@/Configurations/env";

export function usePageTracking() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (!VITE_ENABLE_TRACKING) return;

    if ((window as any).gtag) {
      (window as any).gtag("config", "G-RM7848E6XE4", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
