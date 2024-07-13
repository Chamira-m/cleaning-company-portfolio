import React from "react";
import {
  FaCog,
  FaFileAlt,
  FaLeaf,
  FaRecycle,
  FaSplotch,
  FaFire,
} from "react-icons/fa";
import BlackLine from "../shared/BlackLine";

const mouldRemediationSections = [
  {
    icon: <FaSplotch />,
    title: "Restoration",
    description:
      "• Identification and Assessment: We begin with a thorough assessment to identify the source and extent of mould growth.\n• Containment and Removal: Our team uses controlled procedures to contain the mould and prevent its spread during removal.\n• Air Filtration and Cleaning: High-efficiency air filtration devices are used to cleanse the air of mould spores and other contaminants.\n• Restoration: Affected areas are restored to their original condition using eco-friendly materials and practices.",
  },
  {
    icon: <FaFire />,
    title: "Disaster Management",
    description:
      "At Seynar, we offer specialized disaster management services to help you recover swiftly and effectively from emergencies such as fires. Our dedicated team is trained to handle the complexities of fire damage restoration, including debris removal, soot and smoke cleanup, and structural repairs. We use advanced equipment and techniques to assess the extent of the damage and develop a comprehensive restoration plan. Our focus on safety and environmental responsibility",
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
      "Commitment to Australian Cleaning Standards Seynar, we are committed to upholding the highest Australian cleaning standards to ensure exceptional service and quality assurance for our clients. By strictly adhering to industry regulations, we guarantee that our cleaning practices are not only effective but also environmentally responsible and safe. This dedication to compliance reflects our ongoing commitment to excellence, allowing us to provide services that meet and exceed our clients' expe",
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
          <h1 className="2xl:text-5xl md:text-3xl text-2xl uppercase">
            Restoration
          </h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>

      <div className="container text-black mx-auto p-4 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Restoration, Disaster Management, Water Damage Remediation, and Carpet
          Restoration
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
          Protect your property and health with our expert mould remediation
          services. Contact Seynar today to learn more about how we can help you
          maintain a safe and healthy environment.
        </p>
      </div>
    </div>
  );
};

export default MouldRemediation;
