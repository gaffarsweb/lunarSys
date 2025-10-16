import React from 'react';

const LunarSysLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Moon/Lunar Symbol */}
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mr-2">
          <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
        </div>
        {/* Text */}
        <span className="text-xl font-bold text-gray-800">Lunar Sys</span>
      </div>
    </div>
  );
};

export default LunarSysLogo;
