import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Slider = () => {
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

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold bg-opacity-50 p-4 rounded-lg">
            <h1 className="text-5xl">Providing Professional</h1>
            <h1 className="text-5xl">Cleaning Services</h1>
            <button
              onClick={() => navigate("/contact")}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slider;
