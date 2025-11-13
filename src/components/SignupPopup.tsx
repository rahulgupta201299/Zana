import { useState, useEffect } from "react";
import { X, Eye, EyeOff } from "lucide-react";

const SignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-[#2a2a2a] rounded-lg p-4 md:p-8 w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6">Sign up</h2>

        {/* Form */}
        <form className="space-y-3 md:space-y-4">
          {/* Email/Name Input */}
          <input
            type="text"
            placeholder="Name or email"
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-white text-black text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#AF7603]"
          />

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-white text-black text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#AF7603] pr-10 md:pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={18} className="md:w-5 md:h-5" /> : <Eye size={18} className="md:w-5 md:h-5" />}
            </button>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 md:py-3 rounded-lg text-sm md:text-base hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="text-center text-white text-xs md:text-sm">
            Already have an account?{" "}
            <button type="button" className="text-white underline hover:text-gray-300">
              Sign in
            </button>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 md:gap-4 my-3 md:my-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-white text-xs md:text-sm">or</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="w-full bg-white text-black font-semibold py-2 md:py-3 rounded-lg text-sm md:text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 md:gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="md:w-5 md:h-5">
              <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
              <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
              <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
              <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;

