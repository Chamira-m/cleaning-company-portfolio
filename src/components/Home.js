import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <ul style={{ margin: "0px", textAlign: "center" }}> {dots} </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "#fff",
          border: "1px white",
          background: "#fff",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const images = [
    "/slides/slide1.jpg",
    "/slides/slide2.jpg",
    "/slides/slide3.jpg",
  ];

  const sections = [
    {
      title: "High Quality Service",
      description:
        "We provide top-quality services at affordable prices to our customers in a wide range of areas.",
    },
    {
      title: "Latest Cleaning Technologies",
      description:
        "We apply advanced cleaning technologies to maintain our high quality service to make our customers more satisfied.",
    },
    {
      title: "Cost Benefits",
      description:
        "We use our own cleaning products and equipment to provide peace of mind for the clients and save money in the long run.",
    },
    {
      title: "Expertise in the Field",
      description:
        "Nuga has a well-trained and experienced team who will assure a job well done and beyond expected.",
    },
  ];

  return (
    <div className="container mx-auto 2xl:mt-28 lg:mt-20 md:mt-10 mt-24 mb-28">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold bg-opacity-50 p-4 rounded-lg">
              <h1 className="2xl:text-5xl md:text-3xl">
                Providing Professional
              </h1>
              <h1 className="2xl:text-5xl md:text-3xl 2xl:mt-10 md:mt-8 mt-5">
                Cleaning Services
              </h1>
              <div className="2xl:w-[800px] md:w-[600px] w-48 h-1 bg-white mt-4 mb-4" />
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 px-6 py-2 bg-blue-500 bg-opacity-80 text-white rounded-full shadow-md hover:bg-opacity-100 transition duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {section.title}
            </h2>
            <p className="text-center">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
