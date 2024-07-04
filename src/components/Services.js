import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Professional cleaning services for your home. Our team ensures a spotless living space with eco-friendly products.",
    image: "/services/service1.jpg",
  },
  {
    title: "Office Cleaning",
    description:
      "Keep your workplace clean and hygienic with our office cleaning services. We work around your schedule for minimal disruption.",
    image: "/services/service1.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "Our deep cleaning services cover every nook and cranny, providing a thorough clean that leaves your space immaculate.",
    image: "/services/service1.jpg",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Revitalize your carpets with our specialized carpet cleaning services. We remove stains, dirt, and allergens effectively.",
    image: "/services/service1.jpg",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal clear windows with our professional window cleaning services. We handle all types of windows safely and efficiently.",
    image: "/services/service1.jpg",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
