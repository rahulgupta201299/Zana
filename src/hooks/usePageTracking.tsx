import { useEffect } from "react";

export function usePageTracking() {
  const location = window.location;
  const pathname = location.pathname;
  const search = location.search;

  useEffect(() => {
    (window as any).gtag("config", "G-RM7848E6XE4", {
      page_path: pathname + search,
    });
  }, [pathname]);

  return null;
}
