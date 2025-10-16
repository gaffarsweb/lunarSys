import React from "react";
import s1 from "../assets/img/s1.jpg"; // Not used yet, but you can use it later if needed

const AboutCards = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      {/* Icon container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-blue-600 text-lg sm:text-xl font-semibold font-['Montserrat'] mb-2 sm:mb-3">
        Advanced AI Technology
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base font-light font-['Montserrat'] leading-relaxed">
        Cutting-edge artificial intelligence for autonomous flight and intelligent data processing.
      </p>
    </div>
  );
};

export default AboutCards;
