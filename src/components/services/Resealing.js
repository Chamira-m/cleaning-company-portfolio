import React from "react";
import BlackLine from "../shared/BlackLine";

const resealingSections = [
  {
    title: "Floor Strip and Sealing",
    description:
      "Perfect for maintaining and restoring the beauty of your vinyl, linoleum, and other resilient flooring. Our process involves thorough cleaning, stripping, scrubbing, and sealing with high-quality sealants.",
  },
  {
    title: "Hard Floor Cleaning",
    description:
      "Ideal for a variety of surfaces, including footpaths, car parks, and other high-traffic areas. Our process includes assessment, high-pressure cleaning, eco-friendly products, and finishing touches.",
  },
  {
    title: "Tile and Grout Cleaning",
    description:
      "Designed to rejuvenate tiles and grout, restoring their original beauty. Our process includes inspection, deep cleaning, grout sealing, and finishing.",
  },
];

const Resealing = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/resealing2.jpeg"
          alt="Slate, Stone & Vinyl Floor Resealing"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">
            Slate, Stone & Vinyl Floor Resealing
          </h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>

      <div className="container text-black mx-auto p-4 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Floor Strip and Sealing / Hard Floors / Tile and Grout Cleaning
        </h2>
        <p className="text-center">
          At Seynar, we pride ourselves on providing top-quality floor care
          services designed to meet and exceed your expectations. Our
          comprehensive offerings include Floor Strip and Sealing, Hard Floor
          Cleaning, and Tile and Grout Cleaning. Below, we outline the details
          of each service to help you understand how we can keep your floors
          looking their best.
        </p>
      </div>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-12">
          Our Floor Care Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {resealingSections.map((section, index) => (
            <div
              key={index}
              className="bg-white text-left p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 poppins-bold text-black">
                {section.title}
              </h3>
              <p className="text-sm poppins-regular text-black whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BlackLine />

      <div className="container text-black mx-auto p-4 mb-16 mt-16 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Contact Us
        </h2>
        <p className="text-center mb-8">
          By choosing Seynar, you can trust that your floors are in capable
          hands. Contact us today to learn more about our services and how we
          can help you maintain beautiful, clean, and sustainable floors.
        </p>
      </div>
    </div>
  );
};

export default Resealing;
