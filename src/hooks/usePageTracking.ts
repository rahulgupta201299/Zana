import { useEffect } from "react";

function usePageTracking() {
  const location = window.location;
  const pathname = location.pathname;
  const search = location.search;

  useEffect(() => {
    (window as any).gtag("config", "G-RM7848E6XE4", {
      page_path: pathname + search,
    });
  }, [pathname]);
}

export default usePageTracking;