"use client"
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../app/globals.css'; // Example of other styles
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = () => {
   const [imgData, setImgData]=useState([
    {
        url:'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80', // Tech background
        alt:'Lunar Sys Hero Banner 1'
    },
    {
        url:'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Coding background
        alt:'Lunar Sys Hero Banner 2'
    },
    {
        url:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Blockchain background
        alt:'Lunar Sys Hero Banner 3'
    },
   ])
    return (
        <div className='relative text-black'>
            <Carousel
                className={'w-full'}
                autoPlay
                interval={5000}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                stopOnHover={true}
                dynamicHeight={true}
            >
                {
                    imgData.map((item, i) => {
                        return (
                            <div key={i} className="relative">
                                <img className='w-full h-96 md:h-[500px] lg:h-[600px] object-cover' src={item?.url}  alt={item?.alt}/>
                                {/* Overlay for text */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="text-center text-white px-4">
                                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Lunar Sys</h1>
                                        <p className="text-xl md:text-2xl mb-6">Innovative IT Solutions in MERN Stack, Next.js, TypeScript & Blockchain</p>
                                        <p className="text-lg md:text-xl">Starting from scratch, aiming for 1000 employees. Join us on our journey!</p>
                                        <a href="#contactUs" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Start Your Project</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>

        </div>);
};

export default CarouselComp;
