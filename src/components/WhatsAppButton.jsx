"use client"
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [blink, setBlink] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Start blinking after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setBlink(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Click animation handler
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // Reset after 0.5s
  };

  return (
    <a
      href="https://wa.me/918055995541"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`fixed bottom-5 right-5 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 
        ${clicked ? "scale-125 rotate-12" : ""} 
        ${blink ? "animate-pulse" : ""} 
        bg-green-500 hover:bg-green-600 hover:scale-110`}
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
