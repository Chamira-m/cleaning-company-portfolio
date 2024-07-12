import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlackLine = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white py-10 px-4 md:px-10 lg:px-20 flex flex-col items-center 2xl:mt-20 lg:mt-16 mt-10">
      <h2 className="text-xl md:text-3xl lg:text-4xl poppins-bold text-center">
        Need assistance anytime?
      </h2>
      <p className="mt-4 text-center text-xs md:text-base lg:text-lg poppins-regular">
        Our team is available 24/7 to respond to your needs and ensure your
        space stays pristine and professional.
        <br />
        Don’t worry, our services are 100% guaranteed.
      </p>
      <motion.button
        onClick={() => navigate("/contact")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 2xl:px-6 2xl:py-2 px-2 py-1 2xl:text-3xl text-base bg-white text-black rounded-full shadow-md hover:bg-opacity-100 transition duration-300 poppins-bold"
      >
        Book Now
      </motion.button>
    </div>
  );
};

export default BlackLine;
