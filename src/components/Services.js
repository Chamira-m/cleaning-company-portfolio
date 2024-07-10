import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Office Cleaning",
    description:
      "Keep your workplace clean and hygienic with our office cleaning services. We work around your schedule for minimal disruption.",
    image: "/services/office.jpg",
    nav: "/office",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning services for your home. Our team ensures a spotless living space with eco-friendly products.",
    image: "/services/commercial.jpg",
    nav: "/CommrcialCleaning",
  },
  {
    title: "Steam Cleaning",
    description:
      "Crystal clear windows with our professional window cleaning services. We handle all types of windows safely and efficiently.",
    image: "/services/service1.jpg",
    nav: "/SteamCleaning",
  },
  {
    title: "High Pressure Cleaning",
    description:
      "Keep your workplace clean and hygienic with our office cleaning services. We work around your schedule for minimal disruption.",
    image: "/services/service1.jpg",
    nav: "/HighPressureCleaning",
  },
  {
    title: "Mould Remediation",
    description:
      "Our deep cleaning services cover every nook and cranny, providing a thorough clean that leaves your space immaculate.",
    image: "/services/service1.jpg",
    nav: "/MouldRemediation",
  },
  {
    title: "Water Damagde Remediation",
    description:
      "Revitalize your carpets with our specialized carpet cleaning services. We remove stains, dirt, and allergens effectively.",
    image: "/services/service1.jpg",
    nav: "/WaterDamagdeRemediation",
  },
  {
    title: "Slate, Stone & Vinyl floor Resealing",
    description:
      "Revitalize your carpets with our specialized carpet cleaning services. We remove stains, dirt, and allergens effectively.",
    image: "/services/service1.jpg",
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
