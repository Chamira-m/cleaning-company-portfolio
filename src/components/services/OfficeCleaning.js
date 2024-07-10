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
      "Australian owned and operated, Consolidated has over 5 years experience and over 3,000 directly employed staff servicing more than 350 contracts throughout Australia. Our experienced Transition Team enables a seamless change to better meet your property needs.",
  },
  {
    icon: <FaHandshake />,
    title: "Ethical & compliant provider",
    description:
      "We are a multi-site, multi-state CAF 3 Star Prequalified Contractor, compliant with Fair Work Australia pricing. We do not engage labour hire or labour sub-contracting and have completed the Property Council of Australia's Modern Slavery survey.",
  },
  {
    icon: <FaUserShield />,
    title: "Our people & safety program",
    description:
      "Consolidated is the industry's 'Employer of Choice', offering comprehensive training, development and recognition programs including BE SAFE learning foundation. We operate a Certified Quality Management System including Safety & Environment.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & sustainability leaders",
    description:
      "Our dedicated Sustainability Team are Green Star Associates and we are experts across Green Star Performance & WELL International V2.0 in the field. Our investment in technology and data capture is extensive, including new lectures and machinery in trial phase.",
  },
  {
    icon: <FaBuilding />,
    title: "Servicing high profile tenancies",
    description:
      "We specialise in servicing a wide range of tenancies across multi-state & portfolio contracts within a range of sectors including banking, finance, high profile government departments, legal, insurance & advisory companies and can tailor our services to suit the tenancies needs.",
  },
];

const OfficeCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/office2.jpeg"
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
              We at SEYNAR are proud of our 5 years providing high quality
              commercial cleaning services to many high profile tenants,
              managing agents and property owners across the Eastern Seaboard.
            </p>
          </div>
          <div className="flex-1 lg:p-8 md:p-6 p-2 lg:border-l-2 lg:border-r-2 border-black">
            <p>
              We are experts in servicing a wide range of premium and A-Grade
              buildings, including brand new developments, mixed use precincts,
              end of trip facilities and activity based working environments.
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
              <div className="text-green-500 text-4xl mb-4 flex justify-center">
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
