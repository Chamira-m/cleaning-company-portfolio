import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Header = () => {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-900 text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Company Logo" className="mr-2" />
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-dark-accent">
            Home
          </Link>
          <Link to="/services" className="hover:text-dark-accent">
            Services
          </Link>
          <Link to="/about" className="hover:text-dark-accent">
            About
          </Link>
          <Link to="/contact" className="hover:text-dark-accent">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
