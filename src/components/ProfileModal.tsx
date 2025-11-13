import { useState } from "react";
import { X, Heart, HelpCircle, Trophy, LogIn, ChevronRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("8857477400");
  const [firstName, setFirstName] = useState("Saurav");
  const [lastName, setLastName] = useState("Sharma");
  const [address, setAddress] = useState("Rohini, Sector - 7");
  const [notifyOffers, setNotifyOffers] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-6xl h-[600px] flex rounded-lg overflow-hidden shadow-2xl">
        {/* Left Side - Dark Section */}
        <div className="w-1/2 p-12 flex flex-col" style={{ backgroundColor: '#2a2a2a' }}>
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/uploads/957a38a6-31ae-4f52-8f91-4db69e92b127.png" 
              alt="Zana Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Welcome Text */}
          <h2 className="text-white text-3xl font-bold mb-12">
            Hey Rider! Welcome to Zana.
          </h2>

          {/* Menu Items */}
          <div className="space-y-4 flex-grow">
            <button className="w-full bg-white rounded-lg px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 text-black" />
                <span className="text-black text-xl font-medium">Wishlist</span>
              </div>
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            <button className="w-full bg-white rounded-lg px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <HelpCircle className="w-6 h-6 text-black" />
                <span className="text-black text-xl font-medium">FAQ's</span>
              </div>
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            <button className="w-full bg-white rounded-lg px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <Trophy className="w-6 h-6 text-black" />
                <span className="text-black text-xl font-medium">Rewards</span>
              </div>
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            <button className="w-full bg-white rounded-lg px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <LogIn className="w-6 h-6 text-black" />
                <span className="text-black text-xl font-medium">Login</span>
              </div>
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Right Side - White Section */}
        <div className="w-1/2 bg-white p-12 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-black hover:text-gray-600 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <User className="w-7 h-7 text-black" />
            </div>
            <h2 className="text-3xl font-bold text-black">My Profile</h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Phone Number */}
            <div>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-6 text-lg border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-4 py-6 text-lg border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0"
              />
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-4 py-6 text-lg border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0"
              />
            </div>

            {/* Address */}
            <div>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-6 text-lg border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-3 mt-4">
              <Checkbox
                id="notify"
                checked={notifyOffers}
                onCheckedChange={(checked) => setNotifyOffers(checked as boolean)}
                className="border-2 border-gray-400 w-5 h-5"
              />
              <label htmlFor="notify" className="text-base text-black cursor-pointer">
                Notify me with offers and updates
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

