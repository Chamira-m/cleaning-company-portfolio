import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center my-8"
      >
        About Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <p className="mb-4">
          Welcome to our cleaning company! We are dedicated to providing
          top-notch cleaning services for both residential and commercial
          spaces. Our team of experienced professionals is committed to
          delivering exceptional results and ensuring customer satisfaction.
        </p>
        <p className="mb-4">
          Our mission is to create clean and healthy environments for our
          clients. We use eco-friendly products and advanced cleaning techniques
          to achieve the best possible outcomes. Trust us to take care of all
          your cleaning needs with precision and care.
        </p>
        <p>
          Thank you for choosing us. We look forward to serving you and making
          your spaces sparkle!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
