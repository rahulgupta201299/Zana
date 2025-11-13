const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + sign)
    const phoneNumber = "1234567890";
    const message = "Hello! I'm interested in your motorcycle products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ 
        position: 'fixed',
        pointerEvents: 'auto'
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="w-7 h-7 md:w-9 md:h-9"
        fill="currentColor"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.049-13.483 13.483-13.483s13.483 6.049 13.483 13.483c0 7.435-6.049 13.483-13.483 13.483zM21.863 18.504c-0.286-0.143-1.691-0.835-1.953-0.929s-0.453-0.143-0.644 0.143c-0.191 0.286-0.739 0.929-0.906 1.122s-0.334 0.215-0.62 0.072c-0.286-0.143-1.209-0.446-2.302-1.42-0.851-0.758-1.425-1.694-1.592-1.980s-0.018-0.441 0.125-0.584c0.129-0.129 0.286-0.334 0.429-0.501s0.191-0.286 0.286-0.477c0.095-0.191 0.048-0.358-0.024-0.501s-0.644-1.554-0.883-2.127c-0.233-0.558-0.469-0.482-0.644-0.491-0.167-0.008-0.358-0.010-0.549-0.010s-0.501 0.072-0.763 0.358c-0.262 0.286-1.001 0.979-1.001 2.388s1.025 2.768 1.167 2.959c0.143 0.191 2.012 3.075 4.876 4.308 0.681 0.292 1.213 0.467 1.627 0.598 0.684 0.217 1.307 0.187 1.799 0.113 0.549-0.082 1.691-0.691 1.929-1.359s0.238-1.239 0.167-1.359c-0.072-0.12-0.262-0.191-0.549-0.334z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;