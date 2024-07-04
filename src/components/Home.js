import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/slides/slide3.jpg",
    "/slides/slide3.jpg",
    "/slides/slide3.jpg",
  ];

  return (
    <div className="w-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center my-8 w-full"
      >
        <div className="w-full">
          {/* <Slider {...settings}> */}
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-screen h-[600px] rounded-lg shadow-lg"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-opacity-50 p-4 rounded-lg">
                <h1>Providing Professional</h1>
                <h1>Cleaning Services</h1>
              </div> */}
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </motion.h1>
    </div>
  );
};

export default Home;
