// FloatingButtons.tsx
import WhatsAppButton from "./WhatsAppButton";
import TawkChat from "./TawkChat";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      <TawkChat />
      <WhatsAppButton />
    </div>
  );
};

export default FloatingButtons;
