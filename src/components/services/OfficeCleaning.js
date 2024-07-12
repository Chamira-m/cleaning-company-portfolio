import React from "react";
import {
  FaShieldAlt,
  FaHandshake,
  FaUserShield,
  FaLightbulb,
  FaBuilding,
} from "react-icons/fa";
import BlackLine from "../shared/BlackLine";

const expertiseSections = [
  {
    icon: <FaShieldAlt />,
    title: "Proven track record",
    description:
      "Seynar, an Australian-owned company, is swiftly establishing a reputation for quality and sustainable cleaning services. Our dedicated Transition Team ensures a seamless transition for clients, minimizing disruptions. We prioritize eco-friendly practices and offer tailored solutions to meet unique client needs. Choose Seynar for proactive, customized cleaning solutions and exceptional customer service. Contact us to learn how we can enhance your property's value and efficiency.",
  },
  {
    icon: <FaHandshake />,
    title: "Ethical & compliant provider",
    description:
      "Seynar is an ethical and compliant cleaning and maintenance provider, adhering to all legal and regulatory standards. We exceed industry requirements through transparent business practices, fair labor, and environmental sustainability. Regular audits and training ensure our team delivers responsible, integrity-driven services. Trust Seynar for a clean, safe, and ethically managed environment.",
  },
  {
    icon: <FaUserShield />,
    title: "Our people & safety program",
    description:
      "At Seynar, our People & Safety program prioritizes staff well-being and development while maintaining top safety standards. We invest in ongoing training to ensure our team is skilled and effective. Strict adherence to safety regulations fosters a culture minimizing risks, ensuring a capable, motivated, and secure workforce, contributing to our service excellence and reliability.",
  },
  {
    icon: <FaLightbulb />,
    title: "Premium Eco-Friendly Office Cleaning",
    description:
      "Seynar's premium office cleaning service offers exceptional, eco-friendly cleaning tailored for businesses prioritizing cleanliness and sustainability. Using advanced, sustainable techniques, it ensures comprehensive coverage and meticulous detail. Clients enjoy enhanced well-being and productivity in high-traffic, high-stakes environments, with dedicated customer support and a commitment to environmental goals.",
  },
  {
    icon: <FaBuilding />,
    title: "Servicing high profile tenancies",
    description:
      "At Seynar, we excel in servicing high-profile tenancies, providing impeccable cleaning and maintenance that meet the exacting standards of prestigious clients. Our trained team handles unique challenges with discretion, precision, and exceptional care. Utilizing state-of-the-art equipment, we maintain pristine conditions while ensuring confidentiality and professionalism. We tailor our services to uphold the stature of luxury commercial spaces, high-end residential properties, and corporate headquarters.",
  },
];

const OfficeCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/office2.jpg"
          alt="Office Cleaning"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">OFFICE CLEANING</h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>
      <div className="container text-black mx-auto p-4 mb-16 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Premium Office Cleaning matched with our Expert Specialised
          Maintenance Plan.
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 text-center">
          {" "}
          {/* Ensure text alignment is left */}
          <div className="flex-1 lg:p-8 md:p-6 p-2">
            <p>
              At Seynar, we provide high-quality commercial cleaning services
              for high-profile clients. As we expand into Melbourne, our wealth
              of experience and proven track record of excellence and
              sustainability ensure that new and existing clients receive top
              standards of cleanliness and service.
            </p>
          </div>
          <div className="flex-1 lg:p-8 md:p-6 p-2 lg:border-l-2 lg:border-r-2 border-black">
            <p>
              At Seynar, we provide top-tier cleaning services for premium and
              A-Grade buildings, including new developments, mixed-use
              precincts, end-of-trip facilities, and activity-based work
              environments. Our skilled team ensures these sophisticated spaces
              maintain the highest standards of cleanliness and presentation.
            </p>
          </div>
          <div className="flex-1 lg:p-8 md:p-6 p-2">
            <p>
              We work in partnership with our clients to achieve building
              accreditations and targets such as CAF 3 Star Certification,
              NABERS, WELLS and Greenstar ratings.
            </p>
          </div>
        </div>
      </div>

      <BlackLine />

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-12">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {expertiseSections.map((section, index) => (
            <div
              key={index}
              className="bg-white text-center p-6 rounded-lg shadow-lg"
            >
              <div className="text-black text-4xl mb-4 flex justify-center">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 poppins-bold text-black">
                {section.title}
              </h3>
              <p className="text-sm poppins-regular text-black">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeCleaning;
