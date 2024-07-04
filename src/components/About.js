import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Residential Cleaning",
    description:
      "We provide comprehensive residential cleaning services to ensure your home is spotless. Our team uses eco-friendly products to clean every nook and cranny of your home.",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Our commercial cleaning services are tailored to meet the needs of your business. We work around your schedule to ensure a clean and hygienic workplace.",
  },
  {
    title: "Specialized Cleaning",
    description:
      "We offer specialized cleaning services including carpet cleaning, window cleaning, and deep cleaning. Our team is equipped to handle all your specific cleaning needs.",
  },
];

const About = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row 2xl:mt-16 lg:mt-10 md:mt-8 mt-8 mb-28">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 p-6"
      >
        <h1 className="text-4xl font-bold text-center lg:text-left my-8">
          About Us
        </h1>
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 flex items-center justify-center"
      >
        <img
          src="/about/about.png"
          alt="About Us"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default About;
