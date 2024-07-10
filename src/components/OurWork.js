import React from "react";
import { motion } from "framer-motion";

const OurWork = () => {
  const images = [
    { src: "gallery/gallery1.jpg", alt: "Work 1" },
    { src: "gallery/gallery2.jpg", alt: "Work 2" },
    { src: "gallery/gallery3.jpg", alt: "Work 3" },
    { src: "gallery/gallery4.jpg", alt: "Work 4" },
    { src: "gallery/gallery5.jpg", alt: "Work 5" },
    { src: "gallery/gallery6.jpg", alt: "Work 6" },
    { src: "gallery/gallery7.jpg", alt: "Work 7" },
    { src: "gallery/gallery8.jpg", alt: "Work 8" },
    { src: "gallery/gallery9.jpg", alt: "Work 9" },
    { src: "gallery/gallery10.jpg", alt: "Work 10" },
    { src: "gallery/gallery11.jpg", alt: "Work 11" },
    { src: "gallery/gallery12.jpg", alt: "Work 12" },
    { src: "gallery/gallery13.jpg", alt: "Work 13" },
    { src: "gallery/gallery14.jpg", alt: "Work 14" },
    { src: "gallery/gallery15.jpg", alt: "Work 15" },
    { src: "gallery/gallery16.jpg", alt: "Work 16" },
  ];

  return (
    <div className="container mx-auto p-4 2xl:mt-16 lg:mt-10 md:mt-8 mt-8 mb-28 text-black">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="2xl:text-4xl text-xl poppins-bold text-center my-8"
      >
        Our Work
      </motion.h1>
      <h2 className="md:mt-4 mt-4 poppins-regular text-center md:text-sm 2xl:text-lg text-[8px]">
        We aim to capture the essence of your relationship, including the way
        your faces and hands join together. We want to capture the joyous
        moments, the heartfelt laughs, and everything in between.
      </h2>
      <div className="">
        <div className="grid md:gap-4 gap-2 mt-8 ">
          {/* First Row */}
          <div className="grid grid-cols-3 md:gap-4 gap-2">
            <div className="grid grid-cols-2 md:gap-4 gap-2 col-span-1 2xl:h-64 lg:h-44 md:h-36">
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[0].src}
                  alt={images[0].alt}
                />
              </div>
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[1].src}
                  alt={images[1].alt}
                />
              </div>
            </div>
            <div className="col-span-1 overflow-hidden 2xl:h-64 lg:h-44 md:h-36 rounded-lg">
              <img
                className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                src={images[4].src}
                alt={images[4].alt}
              />
            </div>
            <div className="grid grid-cols-2 md:gap-4 gap-2 col-span-1 2xl:h-64 lg:h-44 md:h-36">
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[2].src}
                  alt={images[2].alt}
                />
              </div>
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[3].src}
                  alt={images[3].alt}
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 md:gap-4 gap-2 md:mt-4 mt-1">
            <div className="col-span-1 overflow-hidden 2xl:h-64 lg:h-44 md:h-36 rounded-lg">
              <img
                className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                src={images[7].src}
                alt={images[7].alt}
              />
            </div>
            <div className="grid grid-cols-2 md:gap-4 gap-2 col-span-1 2xl:h-64 lg:h-44 md:h-36">
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[5].src}
                  alt={images[5].alt}
                />
              </div>
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[6].src}
                  alt={images[6].alt}
                />
              </div>
            </div>
            <div className="col-span-1 overflow-hidden 2xl:h-64 lg:h-44 md:h-36 rounded-lg">
              <img
                className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                src={images[8].src}
                alt={images[8].alt}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-3 md:gap-4 gap-2 md:mt-4 mt-1">
            <div className="grid grid-cols-2 md:gap-4 gap-2 col-span-1 2xl:h-64 lg:h-44 md:h-36">
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[9].src}
                  alt={images[9].alt}
                />
              </div>
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[10].src}
                  alt={images[10].alt}
                />
              </div>
            </div>
            <div className="col-span-1 overflow-hidden 2xl:h-64 lg:h-44 md:h-36 rounded-lg">
              <img
                className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                src={images[15].src}
                alt={images[15].alt}
              />
            </div>
            <div className="grid grid-cols-2 md:gap-4 gap-2 col-span-1 2xl:h-64 lg:h-44 md:h-36">
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[11].src}
                  alt={images[11].alt}
                />
              </div>
              <div className="overflow-hidden h-full rounded-lg">
                <img
                  className="bg-blend-screen block w-full transition-transform transform hover:scale-105 h-full"
                  src={images[12].src}
                  alt={images[12].alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="block md:hidden mt-5">
        <img
          className="bg-blend-screen block w-full"
          src="gallery/galleryMobile.png"
          alt="gallery Mobile"
        />
      </div> */}
    </div>
  );
};

export default OurWork;
