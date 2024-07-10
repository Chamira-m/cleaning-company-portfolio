import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white text-black p-4 fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center poppins-regular ">
        {/* Logo with Link to Home */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo2.png"
            alt="Company Logo"
            className="2xl:w-36 2xl:h-10 lg:w-32 lg:h-8 md:w-32 md:h-8 w-28 h-8 "
          />
        </Link>

        {/* Desktop Navigation */}
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
          <Link to="/ourwork" className="hover:text-dark-accent">
            Our Work
          </Link>
          <Link to="/contact" className="hover:text-dark-accent">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black p-4 mt-2 poppins-regular">
          <Link
            to="/"
            className="block py-2 hover:text-dark-accent"
            onClick={() => {
              toggleMenu();
              navigate("/");
            }}
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
            to="/ourwork"
            className="block py-2 hover:text-dark-accent"
            onClick={toggleMenu}
          >
            Our Work
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
