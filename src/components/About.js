import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 mt-8">
      <div className="mt-10 lg:grid-cols-4 gap-8 pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="2xl:p-6 md:mx-1 bg-gray-50 text-black flex flex-col items-center z-10 p-8 md:p-16 lg:p-24 rounded-xl shadow-lg max-w-6xl mx-4"
        >
          <h1 className="text-center 2xl:text-4xl text-xl font-bold text-black mb-6 poppins-bold">
            OUR GOAL
          </h1>
          <h2 className="text-center text-base md:text-xl lg:text-2xl poppins-bold mb-8">
            Welcome to Seynar - Pioneering Sustainable Solutions for a Greener
            Australia
          </h2>
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 poppins-bold">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            At Seynar, our mission is clear: to lead the charge in making
            Australia a more sustainable and environmentally-friendly nation.
            Founded by a team of Civil and Environmental Engineers, we are
            committed to providing superior cleaning services while championing
            sustainability and ecological responsibility.
          </p>
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 poppins-bold">
            Honoring First Nations Culture
          </h2>
          <div className="flex justify-center space-x-8 mb-3">
            <img
              src="/about/aboriginal.png"
              alt="image1"
              className="w-20 h-14 md:w-24 md:h-16 lg:w-24 lg:h-16 xl:w-24 xl:h-16 2xl:w-28 2xl:h-20"
            />
            <img
              src="/about/Torres_Strait_Islanders.png"
              alt="image2"
              className="w-20 h-14 md:w-24 md:h-16 lg:w-24 lg:h-16 xl:w-24 xl:h-16 2xl:w-28 2xl:h-20"
            />
          </div>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            At Seynar, we honor and respect the rich cultural heritage of
            Australia's First Nations peoples. We acknowledge the traditional
            custodians of the lands where we operate and pay our respects to
            their Elders, past, present, and emerging. We are committed to
            fostering a deep understanding and appreciation of First Nations
            cultures through our practices and interactions. Our dedication to
            cultural respect is reflected in our inclusive approach, ensuring
            that the voices and traditions of Aboriginal and Torres Strait
            Islander communities are recognized and valued. By embracing
            cultural awareness, we strive to contribute positively to the
            well-being and prosperity of Indigenous Australians, fostering an
            environment of mutual respect and understanding.
          </p>
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 poppins-bold">
            Our Comprehensive Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Commercial Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Tailored cleaning solutions for businesses of all sizes,
                ensuring a pristine and productive workplace.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Office Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Specialized cleaning services that maintain a clean, safe, and
                welcoming office environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Window Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Professional window cleaning for crystal-clear views and
                improved building aesthetics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                High Pressure Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Powerful cleaning methods that remove stubborn dirt and grime
                from various surfaces, enhancing their appearance and longevity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Floor Strip and Sealing
              </h3>
              <p className="text-gray-700 mb-2">
                Expert floor maintenance to restore the shine, durability, and
                cleanliness of your floors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Tile and Grout Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Deep cleaning techniques that rejuvenate tile surfaces and
                restore the original look of grout lines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Hard Floor Cleaning
              </h3>
              <p className="text-gray-700 mb-2">
                Effective cleaning services for footpaths, car parks, and other
                hard surfaces, ensuring they remain clean and safe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Graffiti Removal
              </h3>
              <p className="text-gray-700 mb-2">
                Eco-friendly graffiti removal solutions that restore the beauty
                of your property without harming the environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Carpet Restoration
              </h3>
              <p className="text-gray-700 mb-2">
                Comprehensive carpet cleaning and restoration services that
                extend the life of your carpets and enhance indoor air quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">Restoration</h3>
              <p className="text-gray-700 mb-2">
                At Seynar, we provide professional mould remediation services
                designed to protect your property and health. Our experienced
                team uses advanced techniques and eco-friendly products to
                ensure that your space is free from mould and safe for
                occupancy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">
                Waste Management
              </h3>
              <p className="text-gray-700 mb-2">
                Implement efficient waste management with eco-friendly
                practices, recycling, proper disposal, safety adherence, and
                sustainability focus, ensuring clean and responsible operations.
              </p>
            </div>
          </div>
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 poppins-bold">
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
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 poppins-bold">
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
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 poppins-bold">
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
              src="/about/about.jpg"
              alt="Plant"
              className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48"
            />
          </div>
          <div className="flex justify-center mt-8">
            <img
              src="/logo2.png"
              alt="Plant"
              className="w-16 h-6 md:w-32 md:h-10 lg:w-30 lg:h-12 2xl:w-32 2xl:h-10"
            />
          </div>
          <p className="text-center text-black text-base md:text-lg mt-8 poppins-bold">
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
