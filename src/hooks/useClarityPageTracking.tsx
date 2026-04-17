import { useEffect } from "react";

export function useClarityPageTracking() {
  const location = window.location;
  const pathname = location.pathname;
  const search = location.search;

  useEffect(() => {
    if ((window as any).clarity) {
      (window as any).clarity("set", "page", pathname + search);
    }
  }, [pathname]);

  return null;
}