import React from "react";
import {
  FaTint,
  FaCouch,
  FaTh,
  FaBroom,
  FaLeaf,
  FaPaintRoller,
  FaBuilding,
  FaRoad,
  FaHome,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import BlackLine from "../shared/BlackLine";

const steamCleaningSections = [
  {
    icon: <FaTint />,
    title: "Carpet Steam Cleaning",
    description:
      "Deeply penetrates carpet fibers to remove stubborn stains and allergens.",
  },
  {
    icon: <FaCouch />,
    title: "Upholstery Cleaning",
    description:
      "Cleans and refreshes sofas, chairs, and drapes using high-temperature steam.",
  },
  {
    icon: <FaTh />,
    title: "Tile and Grout Steam Cleaning",
    description:
      "Effectively removes grime and mold from tile surfaces and grout lines.",
  },
  {
    icon: <FaBroom />,
    title: "Hard Floor Steam Cleaning",
    description:
      "Safely cleans hardwood, vinyl, and laminate floors without harsh chemicals.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Solutions",
    description:
      "Utilizes environmentally safe products to dissolve graffiti without damaging surfaces.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Surface Restoration",
    description:
      "Expertly restores all types of surfaces to their original condition.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Preventative Coatings",
    description:
      "Applies protective coatings to deter future graffiti and facilitate easier cleaning.",
  },
  {
    icon: <FaBuilding />,
    title: "Building Exteriors",
    description:
      "Removes dirt, mildew, and pollutants from building facades using high-pressure water jets.",
  },
  {
    icon: <FaRoad />,
    title: "Driveways and Parking Lots",
    description:
      "Cleans oil stains, dirt, and debris from concrete and asphalt surfaces, enhancing curb appeal.",
  },
  {
    icon: <FaHome />,
    title: "Patios and Decks",
    description:
      "Revitalizes outdoor living areas by removing built-up grime and weather stains.",
  },
  {
    icon: <FaHome />,
    title: "Benefits of Our Cleaning Services",
    description:
      "•	Eco-Friendly: All our services use eco-conscious practices, focusing on minimizing environmental impact while delivering powerful cleaning results.\n •	Allergen Reduction: Steam cleaning improves indoor air quality by removing allergens such as dust mites and pet dander.\n •	Deep and Effective Cleaning: Our methods penetrate deep into surfaces, offering a thorough clean that traditional methods cannot match.\n •	Versatility: Safe and effective across a wide range of surfaces, ensuring comprehensive care for your property.\n • For premium subscription customers, Seynar commits to using only eco-friendly products and sustainable practices. Our advanced equipment and techniques ensure high-efficiency cleaning with minimal environmental impact.\n • Recognizing the diverse needs of our clients, Seynar offers tailored cleaning plans. Whether you require routine maintenance or a one-time deep clean, our team is ready to provide solutions that align with your specific requirements. ",
  },
  {
    icon: <FaCheckCircle />,
    title: "Why Choose Seynar?",
    description:
      "• Expertise and Experience: Our team of cleaning professionals brings years of industry experience to every project.\n •	Sustainability Commitment: We are dedicated to using methods and products that are safe for the environment.\n • Advanced Technology: We employ the latest in cleaning technology to ensure superior cleanliness and preservation of surfaces.\n • •	Certified and Insured: Seynar adheres to the highest standards of quality and safety, providing peace of mind for our clients.",
  },
];

const SteamCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/steam2.jpeg"
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
              <div className="text-green-500 text-4xl mb-4 flex justify-center">
                {section.icon}
              </div>
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
