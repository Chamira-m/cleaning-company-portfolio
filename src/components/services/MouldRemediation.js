import React from "react";
import {
  FaCheckCircle,
  FaCog,
  FaFileAlt,
  FaLeaf,
  FaRecycle,
  FaSplotch,
} from "react-icons/fa";
import BlackLine from "../shared/BlackLine";

const mouldRemediationSections = [
  {
    icon: <FaSplotch />,
    title: "Mould Remediation",
    description:
      "• Identification and Assessment: We begin with a thorough assessment to identify the source and extent of mould growth.\n• Containment and Removal: Our team uses controlled procedures to contain the mould and prevent its spread during removal.\n• Air Filtration and Cleaning: High-efficiency air filtration devices are used to cleanse the air of mould spores and other contaminants.\n• Restoration: Affected areas are restored to their original condition using eco-friendly materials and practices.",
  },
  {
    icon: <FaRecycle />,
    title: "Water Damage Remediation",
    description:
      "• Rapid Response: Quick action is crucial. Seynar offers immediate response services to mitigate water damage and prevent further deterioration.\n• Water Extraction and Drying: State-of-the-art equipment is used for water extraction, followed by strategic drying methods to ensure thorough moisture removal.\n• Dehumidification: We implement dehumidification processes to stabilize the environment and prevent secondary water damage.\n• Damage Repair: Comprehensive repair services are provided to restore areas damaged by water.",
  },
  {
    icon: <FaLeaf />,
    title: "Carpet Restoration",
    description:
      "• Deep Cleaning: Carpets are deep cleaned to remove all traces of dirt, stains, and allergens.\n• Damage Repair: We repair areas of the carpet that are worn or damaged.\n• Deodorization and Sanitization: Carpets are treated with eco-friendly deodorizers and sanitizers to restore freshness and ensure they are free from harmful bacteria.",
  },
  {
    icon: <FaFileAlt />,
    title: "Customized Solutions",
    description:
      "Seynar understands that each situation is unique. We provide customized solutions tailored to the specific needs of your property, whether you require emergency response or routine maintenance.",
  },
  {
    icon: <FaCog />,
    title: "Meeting Australian Standards",
    description:
      "Seynar is dedicated to helping our customers achieve and maintain relevant Australian cleaning standards. Our services comply with the following certifications:\n• ISO 14001: Environmental Management Systems\n• AS/NZS 4801: Occupational Health and Safety Management Systems\n• ISO 9001: Quality Management Systems\n• GECA (Good Environmental Choice Australia): Certification for environmentally preferable products and services\n• NSW Health Cleaning Service Standards: Compliance with state health and hygiene standards.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Why Choose Seynar?",
    description:
      "• Expertise and Experience: Our professionals are highly trained and experienced in dealing with all aspects of mould, water damage, and carpet issues.\n• Commitment to Sustainability: We prioritize the use of safe, sustainable products and practices in all our remediation and restoration services.\n• Comprehensive Service Range: From initial assessment to final restoration, Seynar offers a full spectrum of services to address and resolve environmental damage.\n• Certified and Insured: Seynar holds all necessary certifications and insurances for safe and compliant operations.",
  },
];

const MouldRemediation = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/mould2.jpg"
          alt="Mould Remediation"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">
            MOULD REMEDIATION
          </h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>

      <div className="container text-black mx-auto p-4 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Mould Remediation, Water Damage Remediation, and Carpet Restoration at
          Seynar
        </h2>
        <p className="text-center">
          At Seynar, we provide professional mould remediation services designed
          to protect your property and health. Our experienced team uses
          advanced techniques and eco-friendly products to ensure that your
          space is free from mould and safe for occupancy.
        </p>
      </div>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-12">
          Our Remediation and Restoration Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mouldRemediationSections.map((section, index) => (
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
          Protect your property and health with our expert mould remediation
          services. Contact Seynar today to learn more about how we can help you
          maintain a safe and healthy environment.
        </p>
      </div>
    </div>
  );
};

export default MouldRemediation;
