import React from "react";
import { FaBroom, FaTint, FaFillDrip } from "react-icons/fa";
import BlackLine from "../shared/BlackLine";

const resealingSections = [
  {
    icon: <FaBroom />,
    title: "Floor Strip and Sealing",
    description: `
      Our Floor Strip and Sealing service is perfect for maintaining and restoring the beauty of your vinyl, linoleum, and other resilient flooring. Over time, floors can accumulate layers of old sealant, wax, and dirt, leading to a dull and worn appearance. Our process involves:
      \n• Thorough Cleaning: We start by thoroughly cleaning the floor to remove surface dirt and debris.
      \n• Stripping: Next, we apply a professional-grade stripping solution to remove old layers of wax and sealant, exposing the bare floor.
      \n• Scrubbing: We then scrub the floor to ensure all residues are removed.
      \n• Sealing: Finally, we apply high-quality sealants to protect the floor and restore its shine and durability.
      \nWith our premium subscription, we exclusively use eco-friendly products, ensuring that your floors are not only clean and beautiful but also safe for the environment.
    `,
  },
  {
    icon: <FaTint />,
    title: "Hard Floor Cleaning",
    description: `
      Our Hard Floor Cleaning service is ideal for a variety of surfaces, including footpaths, car parks, and other high-traffic areas. These areas often require more intensive cleaning due to their exposure to the elements and heavy use. Our process includes:
      \n• Assessment: We assess the condition of the hard floor to determine the best cleaning approach.
      \n• High-Pressure Cleaning: Using advanced high-pressure cleaning equipment, we remove dirt, grime, oil stains, and other contaminants.
      \n• Eco-Friendly Products: For our premium subscription customers, we use environmentally friendly cleaning solutions to ensure the safety of your surfaces and the surrounding environment.
      \n• Finishing Touches: After cleaning, we can apply protective coatings to enhance the durability and appearance of your hard floors.
      \nThis service is perfect for maintaining the cleanliness and safety of exterior surfaces, making them look new.
    `,
  },
  {
    icon: <FaFillDrip />,
    title: "Tile and Grout Cleaning",
    description: `
      Tiles and grout can become stained and discolored over time, detracting from the overall appearance of your space. Our Tile and Grout Cleaning service is designed to rejuvenate these surfaces and restore their original beauty. Our process includes:
      \n• Inspection: We begin by inspecting the tiles and grout to identify any problem areas.
      \n• Deep Cleaning: Using specialized equipment and cleaning solutions, we deep clean the tiles and grout to remove embedded dirt, stains, and mold.
      \n• Grout Sealing: After cleaning, we can apply a grout sealant to protect against future staining and make maintenance easier.
      \n• Finishing: We ensure that all residues are removed and that the tiles are left sparkling clean.
      \nOur premium subscription customers benefit from the use of eco-friendly products, ensuring a safe and environmentally responsible cleaning process.
    `,
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
              <div className="text-black text-4xl mb-4 flex justify-center">
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
      <div className="container text-black mx-auto p-4 mt-16 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Eco-Friendly Cleaning Solutions
        </h2>
        <p className="text-center mb-8">
          For our premium subscription customers, Seynar exclusively uses
          eco-friendly products and sustainable cleaning methods. This approach
          not only ensures a safe and healthy environment for your employees but
          also supports your company’s commitment to sustainability.
        </p>
      </div>

      <div className="container text-black mx-auto p-4 mb-16 mt-4 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Why Choose Seynar?
        </h2>
        <p className="text-center mb-8">
          Expertise and Experience: Our team comprises highly skilled
          professionals with extensive experience in commercial cleaning
          services. Environmental Stewardship: We prioritize environmental
          protection and integrate sustainable practices into every aspect of
          our services. Diverse Service Offerings: From office cleaning to
          high-pressure cleaning, we provide a comprehensive range of services
          tailored to your specific needs. Innovative Solutions: We are
          committed to continuous improvement, constantly seeking out new and
          innovative methods to enhance our services and promote sustainability.
        </p>
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
