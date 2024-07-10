import React from "react";
import BlackLine from "../shared/BlackLine";

const steamCleaningSections = [
  {
    title: "Carpet Steam Cleaning",
    description:
      "Deeply penetrates carpet fibers to remove stubborn stains and allergens.",
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Cleans and refreshes sofas, chairs, and drapes using high-temperature steam.",
  },
  {
    title: "Tile and Grout Steam Cleaning",
    description:
      "Effectively removes grime and mold from tile surfaces and grout lines.",
  },
  {
    title: "Hard Floor Steam Cleaning",
    description:
      "Safely cleans hardwood, vinyl, and laminate floors without harsh chemicals.",
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "Utilizes environmentally safe products to dissolve graffiti without damaging surfaces.",
  },
  {
    title: "Surface Restoration",
    description:
      "Expertly restores all types of surfaces to their original condition.",
  },
  {
    title: "Preventative Coatings",
    description:
      "Applies protective coatings to deter future graffiti and facilitate easier cleaning.",
  },
  {
    title: "Building Exteriors",
    description:
      "Removes dirt, mildew, and pollutants from building facades using high-pressure water jets.",
  },
  {
    title: "Driveways and Parking Lots",
    description:
      "Cleans oil stains, dirt, and debris from concrete and asphalt surfaces, enhancing curb appeal.",
  },
  {
    title: "Patios and Decks",
    description:
      "Revitalizes outdoor living areas by removing built-up grime and weather stains.",
  },
];

const SteamCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/office/office.jpg"
          alt="Steam Cleaning"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">STEAM CLEANING</h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>

      <div className="container text-black mx-auto p-4 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Steam Cleaning, Graffiti Removal, and High-Pressure Cleaning at Seynar
        </h2>
        <p className="text-center">
          At Seynar, we specialize in delivering exceptional steam cleaning,
          graffiti removal, and high-pressure cleaning services. Each service is
          designed to tackle tough cleaning challenges using eco-friendly
          methods that ensure your property not only looks its best but is also
          maintained in an environmentally responsible manner.
        </p>
      </div>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-12">
          Our Cleaning Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {steamCleaningSections.map((section, index) => (
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
          Enhance the appearance and longevity of your property with Seynar's
          professional steam cleaning, graffiti removal, and high-pressure
          cleaning services. Contact us today to schedule a service or learn
          more about how we can assist in maintaining a clean, healthy, and
          sustainable environment.
        </p>
      </div>
    </div>
  );
};

export default SteamCleaning;
