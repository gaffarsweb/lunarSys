import React from "react";
// import footerImg from "../assets/img/footer.png"; // Replace with your uploaded image path
import logo from "../assets/img/logo.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and description */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold mb-4 text-blue-400">Lunar Sys</div>
            <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
              Innovative IT solutions provider specializing in MERN Stack, Next.js, TypeScript, and Blockchain development. We deliver perfect server setups and scalable code for both frontend and backend.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/lunarsys" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/lunarsys" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/lunarsys" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition">
                <FaXTwitter  />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="#aboutUs" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#contactForm" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1">
                <li>📞 +91 80559 95541</li>
                <li>📧 info@lunarsys.com</li>
                <li>📍 Aurangabad, Maharashtra</li>
                <li>💼 Hourly Rates: $8 - $15</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lunar Sys. All Rights Reserved. | Starting from scratch, aiming for 1000 employees.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
