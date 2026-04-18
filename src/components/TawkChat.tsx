import { useEffect } from "react";

const TAWK_SRC = "https://embed.tawk.to/659536d68d261e1b5f4ea412/1hj7dse1u";

const TawkChat = () => {
  useEffect(() => {
   
    if (
      document.getElementById("tawk-script") &&
      (window as any).Tawk_API?.showWidget
    ) {
      (window as any).Tawk_API.showWidget();
      return;
    }

    // Already injected but still loading — do nothing
    if (document.getElementById("tawk-script")) return;

    // First time — inject
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

 

    document.head.appendChild(script);

    // No cleanup — removing the script breaks Tawk permanently in the session
  }, []);

  return null;
};

export default TawkChat;
