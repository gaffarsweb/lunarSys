import React from "react";
import s1 from "../assets/img/s1.jpg";

const NewProductCards = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col">
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt="Survey Master Pro - Survey Drone"
          src="https://raw.githubusercontent.com/gaffars712/my-imgs/refs/heads/main/newProductImg.png"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-gray-800 text-xl font-semibold font-['Montserrat'] leading-tight mb-4 text-center">
          Survey Master Pro - Survey Drone
        </h3>
        <p className="text-gray-600 text-base font-light font-['Montserrat'] leading-relaxed text-center mb-6 flex-grow">
          Professional-grade mapping drone with LiDAR sensors. Extended 45-minute flight time for large-scale projects.
        </p>
        <div className="mt-auto">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium font-['Montserrat'] py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            GET NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProductCards;
