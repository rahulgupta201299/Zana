import { useEffect } from "react";

const TAWK_SRC = "https://embed.tawk.to/659536d68d261e1b5f4ea412/1hj7dse1u";
const TAWK_LOAD_DELAY = 3500;

function scheduleAfterInitialPaint(callback: () => void) {
  const timeoutId = window.setTimeout(() => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback, { timeout: 2000 });
      return;
    }

    callback();
  }, TAWK_LOAD_DELAY);

  return () => window.clearTimeout(timeoutId);
}

const TawkChat = () => {
  useEffect(() => {
    let isMounted = true;

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

    const retryTimer = window.setInterval(showWidget, 500);

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

    const injectScript = () => {
      if (!isMounted || document.getElementById("tawk-script")) return;

      (window as any).Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.id = "tawk-script";
      script.async = true;
      script.src = TAWK_SRC;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.head.appendChild(script);
    };

    const cancelScheduledLoad = scheduleAfterInitialPaint(injectScript);

    // No cleanup - removing the script breaks Tawk permanently in the session
    return () => {
      isMounted = false;
      cancelScheduledLoad?.();
      window.clearInterval(retryTimer);
      hideWidget();
      (window as any).Tawk_API.onLoad = previousOnLoad;
    };
  }, []);

  return null;
};

export default TawkChat;
