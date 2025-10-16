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
            About Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            We are committed to delivering cutting-edge drone solutions that
            empower industries with advanced technology, precise data, and
            sustainable operations.
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
              Our mission is to harness the power of drone technology to
              transform industries, improve operational efficiency, and drive
              sustainable growth. We deliver solutions tailored to agriculture,
              surveying, security, and more.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Advanced AI-powered drones</li>
              <li>✅ Extended battery life and flight time</li>
              <li>✅ High-resolution sensors for accurate data</li>
              <li>✅ Dedicated customer support team</li>
            </ul>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* <Image
                src={'aboutImg1'}
                alt="Drone operation"
                className="object-cover"
                width={500}
                height={350}
              /> */}
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* <Image
                src={'aboutImg2'}
                alt="Drone in field"
                className="object-cover"
                width={500}
                height={350}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
