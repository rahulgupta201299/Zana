import { useEffect } from "react";
import { VITE_ENABLE_TRACKING } from "@/Configurations/env";

export function usePageTracking() {
  const location = window.location;
  const pathname = location.pathname;
  const search = location.search;

  useEffect(() => {
    if (!VITE_ENABLE_TRACKING) return;

    (window as any).gtag("config", "G-RM7848E6XE4", {
      page_path: pathname + search,
    });
  }, [pathname]);

  return null;
}