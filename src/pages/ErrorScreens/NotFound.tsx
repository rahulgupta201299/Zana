import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BikeErrorImg from '@/Assets/Images/BikeErrorImg.png'
import { ROUTES } from "@/Constants/Routes";

const NotFound = () => {

  const navigate = useNavigate()

  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
      <div className="mb-8">
        <img
          src={BikeErrorImg}
          alt="Not Found"
          className="w-60 opacity-80"
        />
      </div>

      <h1 className="text-7xl font-extrabold text-gray-900">404</h1>

      <p className="mt-3 text-xl text-gray-700">
        Oops! The page you're looking for doesn’t exist.
      </p>

      <button
        onClick={() => navigate(ROUTES.BASE_URL)}
        className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
