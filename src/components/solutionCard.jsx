import React from "react";

const SolutionCard = ({ title, description, iconUrl, bgUrl }) => {
  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-64 sm:h-72 lg:h-80 xl:h-96 group touch-manipulation">
      {/* Background Image */}
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        src={bgUrl}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-between p-3 sm:p-4 lg:p-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
            <img
              alt={`${title} icon`}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain filter brightness-0 invert transition-transform duration-300"
              loading="lazy"
              src={iconUrl}
            />
          </div>
        </div>

        <div className="w-full text-white text-center sm:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 transition-all duration-300 group-hover:text-blue-200 leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-200 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow icon (on hover) */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
