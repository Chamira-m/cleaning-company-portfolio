import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="mt-10 lg:grid-cols-4 gap-8 pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="2xl:p-6 md:mx-1 bg-gray-50 text-black flex flex-col items-center z-10 p-8 md:p-16 lg:p-24 rounded-xl shadow-lg max-w-6xl mx-4"
        >
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6 poppins-bold">
            OUR GOAL
          </h1>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
            Welcome to Seynar - Pioneering Sustainable Solutions for a Greener
            Australia
          </h2>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 mb-4 poppins-bold">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            At Seynar, our mission is clear: to lead the charge in making
            Australia a more sustainable and environmentally-friendly nation.
            Founded by a team of Civil and Environmental Engineers, we are
            committed to providing superior cleaning services while championing
            sustainability and ecological responsibility.
          </p>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 mb-4 poppins-bold">
            Our Comprehensive Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Commercial Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Tailored cleaning solutions for businesses of all sizes,
                ensuring a pristine and productive workplace.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001, ISO 14001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Office Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Specialized cleaning services that maintain a clean, safe, and
                welcoming office environment.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001, ISO 14001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Window Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Professional window cleaning for crystal-clear views and
                improved building aesthetics.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                High Pressure Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Powerful cleaning methods that remove stubborn dirt and grime
                from various surfaces, enhancing their appearance and longevity.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001, ISO 14001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Floor Strip and Sealing
              </h3>
              <p className="text-gray-700 mb-2">
                Expert floor maintenance to restore the shine, durability, and
                cleanliness of your floors.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Tile and Grout Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Deep cleaning techniques that rejuvenate tile surfaces and
                restore the original look of grout lines.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Hard Floor Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Effective cleaning services for footpaths, car parks, and other
                hard surfaces, ensuring they remain clean and safe.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Graffiti Removal
              </h3>
              <p className="text-gray-700 mb-2">
                Eco-friendly graffiti removal solutions that restore the beauty
                of your property without harming the environment.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 14001, GECA
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Carpet Restoration
              </h3>
              <p className="text-gray-700 mb-2">
                Comprehensive carpet cleaning and restoration services that
                extend the life of your carpets and enhance indoor air quality.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 9001, NSW Health Cleaning Service Standards
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Mould Remediation
              </h3>
              <p className="text-gray-700 mb-2">
                Safe and thorough mould removal to ensure a healthy, mould-free
                indoor environment.
              </p>
              <p className="text-gray-700 font-semibold">
                Certifications: ISO 14001, NSW Health Cleaning Service Standards
              </p>
            </div>
          </div>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 mb-4 poppins-bold">
            Our Commitment to Sustainability
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            Our approach to cleaning goes beyond providing a mere service. At
            Seynar, we are deeply committed to environmental stewardship and
            sustainability. Our experienced professionals use eco-friendly
            products and adopt sustainable practices to minimize our ecological
            footprint.
          </p>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            We are continually exploring innovative solutions to enhance our
            sustainability efforts. Our vision includes expanding our services
            to incorporate advanced recycling programs and other green
            initiatives, positioning us as a leader in sustainable and
            innovative service provision.
          </p>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 mb-4 poppins-bold">
            Why Choose Seynar?
          </h2>
          <ul className="list-disc list-inside text-left text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            <li>
              Expertise and Experience: Our team comprises highly skilled
              professionals with extensive experience in the cleaning industry,
              ensuring top-notch service delivery.
            </li>
            <li>
              Environmental Stewardship: We prioritize environmental protection
              and integrate sustainable practices into every aspect of our
              services.
            </li>
            <li>
              Diverse Service Offerings: From commercial spaces to hard floors,
              we provide a comprehensive range of cleaning services tailored to
              your specific needs.
            </li>
            <li>
              Innovative Solutions: We are committed to continuous improvement,
              constantly seeking out new and innovative methods to enhance our
              services and promote sustainability.
            </li>
          </ul>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 mb-4 poppins-bold">
            Our Vision for the Future
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            As we look to the future, Seynar envisions a world where sustainable
            practices are the norm. We aim to be at the forefront of this
            movement, not only by providing exceptional cleaning services but
            also by pioneering new approaches to environmental care. Our goal is
            to develop and implement advanced sustainable solutions that go
            beyond conventional cleaning, contributing to a healthier planet for
            future generations.
          </p>
          <div className="flex justify-center mt-8">
            <img
              src="/about/leaves.jpg"
              alt="Plant"
              className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48"
            />
          </div>
          <p className="text-center text-green-700 text-base md:text-lg mt-8 poppins-bold">
            Join us in our mission to create a cleaner, greener Australia.
            Contact us today to learn more about our services and how we can
            help you achieve a more sustainable future.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
