import AboutCards from "../components/aboutCard";
import AboutUs from "../components/aboutUs";
import ContactDetails from "../components/contactDetails";
import CarouselComp from "../../src/components/carousel";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import NewProductCards from "../components/newProductCard";
import SolutionCard from "../components/solutionCard";
import BankDetails from "../components/BankDetails";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const services = [
    {
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React, and Node.js for scalable and robust solutions. We provide perfect server setup and scalable code for both frontend and backend.",
      iconUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bgUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Next.js Applications",
      description: "Server-side rendered React apps with TypeScript for fast, SEO-friendly, and modern web experiences. Scalable architecture with optimized performance.",
      iconUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Blockchain Solutions",
      description: "EVM-based blockchain development including wallet creation, token transfers, and balance management. Secure and decentralized applications.",
      iconUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bgUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "TypeScript Integration",
      description: "Type-safe development for better code quality, maintainability, and developer experience. Robust and error-free applications.",
      iconUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      bgUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Custom Web Development",
      description: "Tailored web solutions using modern frameworks and best practices for your unique business needs. Perfect server configuration and scalable code.",
      iconUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      bgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs with secure authentication and efficient data handling. Scalable backend solutions with perfect server setup.",
      iconUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const technologies = [
    "MERN Stack", "Next.js", "TypeScript", "Blockchain (EVM)", "React", "Node.js", "MongoDB", "Express.js"
  ];

  const aboutcard = ['asdf', 'asdf', 'asdf'];
  const contactDetails = [
    {
      image: '',
      title: "Phone",
      value: "+91 80559 95541" // Update with Lunar Sys contact
    },
    {
      image: '',
      title: "Email",
      value: "info@lunarsys.com"
    },
    {
      image: '',
      title: "Office Hours",
      value: "Mon-Fri 10AM to 6PM"
    },
  ];

  return (
    <main className="w-full items-center">
      <CarouselComp />
      <div className="flex justify-center w-full">
        <div className="container w-full">
          {/* Services Section */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 my-12">
            <div className="mt-10">
              <div id="services" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold transition-transform duration-300 hover:scale-105">
                Our IT Services
              </div>
              <div className="text-sm sm:text-base mt-6 md:mt-10 text-center max-w-4xl mx-auto transition-opacity duration-300 hover:opacity-90">
                We specialize in modern web technologies and blockchain solutions. From full-stack development to decentralized applications, we deliver innovative IT services tailored to your business needs.
              </div>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="py-2 mx-1">
                  <SolutionCard
                    title={service.title}
                    description={service.description}
                    iconUrl={service.iconUrl}
                    bgUrl={service.bgUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-gray-50">
            <div className="mt-10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold transition-transform duration-300 hover:scale-105">
                Technologies We Use
              </div>
              <div className="text-sm sm:text-base mt-6 md:mt-10 text-center max-w-4xl mx-auto transition-opacity duration-300 hover:opacity-90">
                Our expertise spans across cutting-edge technologies to build robust, scalable, and secure applications.
              </div>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* About Us Section */}
          <div id="aboutUs">
            <AboutUs />
          </div>

          {/* Contact Form Section */}
          <div id="contactForm">
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 mt-16 mb-8">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactDetails.map((i, index) => (
                <div key={index} className="py-2 mx-1">
                  <ContactDetails item={i} />
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </main>
  );
}
