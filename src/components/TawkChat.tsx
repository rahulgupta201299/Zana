import { useEffect } from "react";

const TAWK_SRC = "https://embed.tawk.to/659536d68d261e1b5f4ea412/1hj7dse1u";

const TawkChat = () => {
  useEffect(() => {
    let isMounted = true;
    let retryTimer: number | undefined;

    const hideWidget = () => {
      (window as any).Tawk_API?.hideWidget?.();
    };

    const showWidget = () => {
      (window as any).Tawk_API?.showWidget?.();
    };

    (window as any).Tawk_API = (window as any).Tawk_API || {};
    const previousOnLoad = (window as any).Tawk_API.onLoad;

    (window as any).Tawk_API.onLoad = () => {
      previousOnLoad?.();
      if (isMounted) showWidget();
      else hideWidget();
    };

    retryTimer = window.setInterval(showWidget, 500);

    if (
      document.getElementById("tawk-script") &&
      (window as any).Tawk_API?.showWidget
    ) {
      showWidget();
      return () => {
        isMounted = false;
        window.clearInterval(retryTimer);
        hideWidget();
        (window as any).Tawk_API.onLoad = previousOnLoad;
      };
    }

    // Already injected but still loading - do nothing
    if (document.getElementById("tawk-script")) {
      return () => {
        isMounted = false;
        window.clearInterval(retryTimer);
        hideWidget();
        (window as any).Tawk_API.onLoad = previousOnLoad;
      };
    }

    // First time - inject
    (window as any).Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.head.appendChild(script);

    // No cleanup - removing the script breaks Tawk permanently in the session
    return () => {
      isMounted = false;
      window.clearInterval(retryTimer);
      hideWidget();
      (window as any).Tawk_API.onLoad = previousOnLoad;
    };
  }, []);

  return null;
};

export default TawkChat;
