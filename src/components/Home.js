import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaLeaf,
  FaMoneyBillWave,
  FaHandsHelping,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesList from "./home/ServiceList";

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
    "/slides/slide3.JPG",
  ];

  const sections = [
    {
      icon: <FaStar />,
      title: "High Quality Service",
      description:
        "We provide top-quality services at affordable prices to our customers in a wide range of areas.",
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Sustainable Service",
      description:
        "We apply green, eco-friendly cleaning technologies to maintain our high quality service to make our customers more satisfied.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cost Benefits",
      description:
        "We use our own cleaning products and equipment to provide peace of mind for the clients and save money in the long run.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Expertise in the Field",
      description:
        "Seynar has a well-trained and experienced team who will assure a job well done and beyond expected.",
    },
  ];

  return (
    <div className="bg-white h-auto 2xl:mb-64 mb-64">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold ">
              <h1 className="2xl:text-5xl md:text-3xl text-2xl">
                Providing Professional
              </h1>
              <h1 className="2xl:text-5xl md:text-3xl text-2xl 2xl:mt-10 md:mt-8 mt-4">
                Cleaning Services
              </h1>
              <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 2xl:px-6 2xl:py-2 px-2 py-1 2xl:text-3xl text-lg bg-slate-300 bg-opacity-80 text-white rounded-full shadow-md hover:bg-opacity-100 transition duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24 px-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="2xl:p-6 p-4 md:mx-1 mx-5 bg-slate-100 text-black rounded-2xl shadow-lg flex flex-col items-center "
          >
            <div className="text-black text-4xl mb-4">{section.icon}</div>
            <h2 className="2xl:text-2xl text-lg font-semibold mb-4 text-center poppins-semibold">
              {section.title}
            </h2>
            <p className="text-center poppins-regular">{section.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-black text-white py-10 px-4 md:px-10 lg:px-20 flex flex-col items-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl poppins-bold text-center">
          READY TO GET STARTED?
        </h2>
        <p className="mt-4 text-center text-xs md:text-base lg:text-lg poppins-regular">
          Enter your details below and we’ll get straight back to you.
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
      <ServicesList />
    </div>
  );
};

export default Home;
