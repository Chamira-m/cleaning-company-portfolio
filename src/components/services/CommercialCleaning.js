import React from "react";
import {
  FaBuilding,
  FaWindowMaximize,
  FaSplotch,
  FaRecycle,
  FaLeaf,
  FaFileAlt,
  FaCog,
  FaCheckCircle,
  FaWarehouse,
  FaSchool,
} from "react-icons/fa";
import BlackLine from "../shared/BlackLine";

const commercialCleaningSections = [
  {
    icon: <FaBuilding />,
    title: "Office Cleaning",
    description:
      "Our office cleaning services ensure that your workspace is clean, organized, and welcoming. We handle everything from dusting and vacuuming to sanitizing high-touch areas, creating a healthy environment for your employees and visitors.",
  },
  {
    icon: <FaSchool />,
    title: "Builders Cleaning",
    description:
      "At Seynar, our builders cleaning services are designed to transform construction sites into pristine, ready-to-use spaces. We understand the unique challenges posed by post-construction environments and utilize specialized techniques to remove dust, debris, and residue left behind by builders. Our team is equipped with advanced cleaning tools and eco-friendly products to ensure thorough cleaning of all surfaces, including floors, windows, and fixtures. We adhere to st",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouse Cleaning",
    description:
      "Seynar offers comprehensive warehouse cleaning services to maintain a clean, safe, and efficient workspace. Our services include deep cleaning, high-pressure cleaning, equipment and machinery cleaning, racking and shelving cleaning, and restroom and break area cleaning. We prioritize safety, productivity, and regulatory compliance while using eco-friendly products. Customized plans and premium subscriptions ensure tailored, sustainable solutions. Choose Seynar for expert, reliable warehouse cleaning.",
  },

  {
    icon: <FaSchool />,
    title: "School Cleaning",
    description:
      "Seynar provides comprehensive school cleaning services to maintain a safe, clean, and conducive learning environment. Our services include regular classroom cleaning, restroom sanitation, cafeteria maintenance, and cleaning of hallways, common areas, playgrounds, and gyms. We prioritize safety, hygiene, and regulatory compliance, using eco-friendly products and sustainable practices. Customized cleaning plans ensure minimal disruption. Choose Seynar for reliable, high-quality school cleaning services.",
  },
  {
    icon: <FaWindowMaximize />,
    title: "Window Cleaning",
    description:
      "Clean windows enhance the appearance of your building and allow more natural light into your workspace. Our professional window cleaning services ensure streak-free, spotless results.",
  },
  {
    icon: <FaSplotch />,
    title: "High-Pressure Cleaning",
    description:
      "For exterior surfaces and high-traffic areas, our high-pressure cleaning services effectively remove dirt, grime, and stains, ensuring a clean and professional appearance.",
  },
  {
    icon: <FaRecycle />,
    title: "Waste Management and Recycling",
    description:
      "Seynar is committed to sustainability. We provide waste management and recycling services to help your business reduce its environmental footprint and comply with relevant regulations.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Cleaning Solutions",
    description:
      "For our premium subscription customers, Seynar exclusively uses eco-friendly products and sustainable cleaning methods. This approach not only ensures a safe and healthy environment for your employees but also supports your company’s commitment to sustainability.",
  },
  {
    icon: <FaFileAlt />,
    title: "Customized Cleaning Plans",
    description:
      "We understand that every business has unique cleaning needs. Our team works closely with you to develop customized cleaning plans that address your specific requirements and schedule. Whether you need daily, weekly, or monthly cleaning services, we provide flexible solutions that fit your business operations.",
  },
  {
    icon: <FaCog />,
    title: "Meeting Australian Standards",
    description:
      "Commitment to Australian Cleaning StandardsAt Seynar, we are committed to upholding the highest Australian cleaning standards to ensure exceptional service and quality assurance for our clients. By strictly adhering to industry regulations, we guarantee that our cleaning practices are not only effective but also environmentally responsible and safe. This dedication to compliance reflects our ongoing commitment to excellence, allowing us to provide services that meet and exceed our clients' expe",
  },
  {
    icon: <FaCheckCircle />,
    title: "Why Choose Seynar for Commercial Cleaning?",
    description:
      "• Expertise and Experience: Our team comprises highly skilled professionals with extensive experience in commercial cleaning services.\n• Environmental Stewardship: We prioritize environmental protection and integrate sustainable practices into every aspect of our services.\n• Diverse Service Offerings: From office cleaning to high-pressure cleaning, we provide a comprehensive range of services tailored to your specific needs.\n• Innovative Solutions: We are committed to continuous improvement, constantly seeking out new and innovative methods to enhance our services and promote sustainability.",
  },
];

const CommercialCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/commercial2.jpeg"
          alt="Commercial Cleaning"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">
            COMMERCIAL CLEANING
          </h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>

      <div className="container text-black mx-auto p-4 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Commercial Cleaning
        </h2>
        <p className="text-center">
          At Seynar, we offer top-tier commercial cleaning services designed to
          create clean, healthy, and productive environments for businesses of
          all sizes. Our team of experienced professionals utilizes advanced
          techniques and eco-friendly products to ensure that your commercial
          space is immaculate and conducive to productivity.
        </p>
      </div>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-12">
          Our Commercial Cleaning Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {commercialCleaningSections.map((section, index) => (
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
      <BlackLine />

      <div className="container text-black mx-auto p-4 mb-16 mt-16 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Contact Us
        </h2>
        <p className="text-center mb-8">
          Join us in our mission to create a cleaner, greener Australia. Contact
          Seynar today to learn more about our commercial cleaning services and
          how we can help you maintain a pristine and sustainable business
          environment.
        </p>
      </div>
    </div>
  );
};

export default CommercialCleaning;
