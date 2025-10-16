import React from "react";
import Image from "next/image";
// import aboutImg1 from "@/assets/images/about1.jpg";
// import aboutImg2 from "@/assets/images/about2.jpg";

const AboutUs = () => {
  return (
    <section className=" py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Lunar Sys
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            We are a service-based IT company specializing in modern technologies like MERN Stack, Next.js, TypeScript, and Blockchain (EVM-based systems). Starting from scratch, we aim to build a dedicated team and reach 1000 employees. We provide perfect server setups in web development and deliver scalable code for both frontend and backend.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to deliver innovative IT solutions that empower businesses with cutting-edge technology. From web development to blockchain integrations, we create scalable, secure, and efficient systems. Currently a one-man army, we're building towards a team of 1000 dedicated professionals.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Expertise in MERN Stack, Next.js, TypeScript</li>
              <li>✅ Blockchain knowledge: Wallet creation, transfers, balances on EVM</li>
              <li>✅ Hourly rates: $8 - $15 depending on work complexity</li>
              <li>✅ Dedicated and growing team</li>
            </ul>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Coding and development"
                className="object-cover w-full h-48"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Blockchain technology"
                className="object-cover w-full h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
