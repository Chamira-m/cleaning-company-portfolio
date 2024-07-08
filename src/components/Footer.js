import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 fixed bottom-0 left-0 right-0">
      <motion.a
        href="https://wa.me/+61409234022"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed 2xl:bottom-20 2xl:right-36 lg:bottom-16 lg:right-6 md:bottom-16 md:right-3 bottom-28 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={32} />
      </motion.a>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center poppins-regular">
        <div className="text-center md:text-left mb-4 md:mb-0 text-xs">
          <p>&copy; {new Date().getFullYear()} Seynar. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
