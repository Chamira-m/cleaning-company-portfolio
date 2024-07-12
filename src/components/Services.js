import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Office Cleaning",
    description:
      "Follow safety protocols, use PPE and eco-friendly products, perform detailed cleaning tasks, maintain professionalism, seek client feedback, and engage in ongoing training.",
    image: "/services/office1.jpeg",
    nav: "/office",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional commercial cleaning services with eco-friendly products, detailed attention, safety adherence, customized plans, and ongoing training for superior cleanliness.",
    image: "/services/commercial1.jpeg",
    nav: "/CommrcialCleaning",
  },
  {
    title: "High-Pressure Cleaning",
    description:
      "Deliver thorough, efficient cleaning using high-pressure techniques, adhere to safety protocols, use eco-friendly products, and maintain professionalism",
    image: "/services/steam1.jpeg",
    nav: "/SteamCleaning",
  },

  {
    title: "Restoration, Water Damage Remediation, and Carpet Restoration",
    description:
      "Restore properties efficiently, using advanced techniques and eco-friendly products. Address water damage, mold, and more with professionalism and expertise.",
    image: "/services/mould1.jpg",
    nav: "/MouldRemediation",
  },

  {
    title: "Floor Strip and Sealing, Hard Floors, Tile and Grout Cleaning",
    description:
      "Restore surfaces with thorough strip and seal, eco-friendly products, and advanced techniques. Ensure spotless hard floors and pristine tiles.",
    image: "/services/resealing1.jpeg",
    nav: "/Resealing",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 2xl:mt-16 lg:mt-10 md:mt-8 mt-8 mb-28">
      <h1 className="2xl:text-4xl text-xl poppins-bold text-center my-8 text-black">
        Our Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-slate-100 text-black rounded-lg shadow-lg flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="2xl:text-xl text-lg mb-4 poppins-semibold">
              {service.title}
            </h2>
            <p className="2xl:text-base text-sm poppins-regular mb-4">
              {service.description}
            </p>
            <div className="flex-grow flex items-end">
              <motion.button
                onClick={() => navigate(service.nav)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="2xl:px-6 2xl:py-2 px-2 py-1 2xl:text-xl text-sm bg-white text-black rounded-full shadow-md hover:bg-opacity-100 transition duration-300 poppins-bold ml-auto"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
