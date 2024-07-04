import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Slider = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      className="text-dark-accent bg-white"
    >
      {["slide1.jpg", "slide2.jpg", "slide3.jpg"].map((slide, index) => (
        <motion.div
          key={index}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <img src={`/slides/${slide}`} alt={`Slide ${index + 1}`} /> */}
          <p className="legend">
            {index === 0
              ? "Residential Cleaning"
              : index === 1
              ? "Commercial Cleaning"
              : "Move In/Out Cleaning"}
          </p>
        </motion.div>
      ))}
    </Carousel>
  );
};

export default Slider;
