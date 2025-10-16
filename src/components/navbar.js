"use client"
import { useState } from 'react';
import logo from "../assets/img/logo.png";
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    return (
        <div className='mb-[3.5rem]'>
            <nav className="bg-white shadow-xl  w-full  z-50 fixed top-0 border-b-[1px] border-black flex items-center">
                <div className="container mx-auto px-4 my-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <a href="#" className="text-white text-lg font-semibold w-full">
                                <Image
                                    // width={160}
                                    // height={30}
                                    className="h-[65px] py-2 w-[150px] lg:h-[90px] lg:w-[180px]"
                                    src={logo}
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <div className="hidden gap-4 md:flex md:items-center">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="text-black hover:text-gray-600 font-semibold">Home</Link>
                                <Link href="#aboutUs" className="text-black hover:text-gray-600 font-semibold">About</Link>
                                <Link href="#services" className="text-black hover:text-gray-600 font-semibold">Services</Link>
                                <Link href="#products" className="text-black hover:text-gray-600 font-semibold">Products</Link>
                                <Link href="#contactUs" className="text-black hover:text-gray-600 font-semibold">Contact</Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex border-black items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-white focus:outline-none transition duration-150"
                                aria-label="Main menu"
                            >
                                {/* Hamburger Icon */}
                                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1z" />
                                </svg>
                                {/* Close Icon */}
                                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M13.414 10l3.293 3.293a1 1 0 01-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414L12 8.586l3.293-3.293a1 1 0 011.414 1.414L13.414 10z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`overflow-hidden shadow-xl transition-all duration-600 ease-in-out absolute bg-white top-[60px] w-full border-b border-black md:hidden z-40 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col px-4 py-3 space-y-2">
                        <Link onClick={() => setIsOpen(!isOpen)} href="/" className="group flex justify-between items-center text-base font-medium text-black hover:text-blue-600 transition duration-150">
                            <span>Home</span>
                            <span className="transform group-hover:translate-x-1 transition">→</span>
                        </Link>
                        <Link onClick={() => setIsOpen(!isOpen)} href="#aboutUs" className="group flex justify-between items-center text-base font-medium text-black hover:text-blue-600 transition duration-150">
                            <span>About</span>
                            <span className="transform group-hover:translate-x-1 transition">→</span>
                        </Link>
                        <Link onClick={() => setIsOpen(!isOpen)} href="#services" className="group flex justify-between items-center text-base font-medium text-black hover:text-blue-600 transition duration-150">
                            <span>Services</span>
                            <span className="transform group-hover:translate-x-1 transition">→</span>
                        </Link>
                        <Link onClick={() => setIsOpen(!isOpen)} href="#products" className="group flex justify-between items-center text-base font-medium text-black hover:text-blue-600 transition duration-150">
                            <span>Products</span>
                            <span className="transform group-hover:translate-x-1 transition">→</span>
                        </Link>
                        <Link onClick={() => setIsOpen(!isOpen)} href="#contactUs" className="group flex justify-between items-center text-base font-medium text-black hover:text-blue-600 transition duration-150">
                            <span>Contact</span>
                            <span className="transform group-hover:translate-x-1 transition">→</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
