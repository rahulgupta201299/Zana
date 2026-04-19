import { useEffect } from "react";
import { VITE_ENABLE_TRACKING } from "@/Configurations/env";

export function useClarityPageTracking() {
  const location = window.location;
  const pathname = location.pathname;
  const search = location.search;

  useEffect(() => {
    if (!VITE_ENABLE_TRACKING) return;

    if ((window as any).clarity) {
      (window as any).clarity("set", "page", pathname + search);
    }
  }, [pathname]);

  return null;
}