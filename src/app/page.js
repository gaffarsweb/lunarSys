import AboutCards from "../components/aboutCard";
import AboutUs from "../components/aboutUs";
import ContactDetails from "../components/contactDetails";
import CarouselComp from "../../src/components/carousel";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import NewProductCards from "../components/newProductCard";
import SolutionCard from "../components/solutionCard";
import BankDetails from "../components/BankDetails";


export default function Home() {
  const category = ['asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf']
  const aboutcard = ['asdf', 'asdf', 'asdf']
  const contactDetails = [
    {
      image: '',
      title: "Phone",
      value: "+91 80559 95541"
    },
    {
      image: '',
      title: "Email",
      value: "info@infiniaero.com"
    },
    {
      image: '',
      title: "Office Hours",
      value: "Mon-Fri 10AM to 6PM"
    },
  ]
  return (
    <main className=" w-full   items-center ">
      <CarouselComp />
      <div className="flex justify-center w-full ">
        <div className="container w-full ">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 my-12">
            <div className="mt-10">
              <div id="services" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold transition-transform duration-300 hover:scale-105">
                Drone Solutions Across Industries
              </div>
              <div className="text-sm sm:text-base mt-6 md:mt-10 text-center max-w-4xl mx-auto transition-opacity duration-300 hover:opacity-90">
                Our advanced UAV technologies deliver innovative drone solutions tailored for each industry unique challenges,
                enhancing data collection, operational safety, and decision-making across diverse sectors.
              </div>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.map((i, index) => (
                <div key={index} className="py-2 mx-1">
                  <SolutionCard />
                </div>
              ))}
            </div>

          </div>
          <div  >
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 my-16">
              <div className="mt-10">
                <div id="products" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold transition-transform duration-300 hover:scale-105">
                  New Products
                </div>
                <div className="text-sm sm:text-base mt-6 md:mt-10 text-center max-w-4xl mx-auto transition-opacity duration-300 hover:opacity-90">
                  Our new drone products feature advanced AI, extended flight time, and high-resolution sensors, offering superior performance for surveying, inspection, mapping, and real-time data analysis across industries.
                </div>
              </div>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((i, index) => (
                  <div key={index} className="py-2 mx-1">
                    <NewProductCards />
                  </div>
                ))}
              </div>

            </div>
          </div>
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 my-16">
            <div className="mt-10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold transition-transform duration-300 hover:scale-105">
                Why Choose Our Drones?
              </div>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutcard.map((i, index) => (
                <div key={index} className="py-2 mx-1">
                  <AboutCards />
                </div>
              ))}
            </div>

          </div>
          <div id="aboutUs">
            <AboutUs />
          </div>
          <div id="contactUs">
            <ContactUs />
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
          <div className="mb-5">
            <BankDetails/>
          </div>
        </div>
      </div>
      <Footer />

    </main>
  );
}
