import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <nav className="space-x-4 hidden md:block">
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
        <div className="md:hidden">
          <img
            src="/Hamburger.png"
            alt="Hamburger Menu"
            width={35}
            height={35}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 mt-2">
          <Link
            to="/"
            className="block py-2 hover:text-dark-accent"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block py-2 hover:text-dark-accent"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-dark-accent"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-dark-accent"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
