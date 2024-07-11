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
      "At Seynar, we pride ourselves on being an ethical and compliant provider in the cleaning and maintenance industry. We strictly adhere to all legal and regulatory requirements, ensuring our practices not only meet but exceed industry standards. Our commitment to ethics is reflected in our transparent business dealings, fair labor practices, and dedication to environmental sustainability. We conduct regular audits and training sessions to ensure our team is well-versed in compliance and ethics, guaranteeing that our services are delivered responsibly and with integrity. Trust Seynar to be your partner in maintaining a clean, safe, and ethically managed environment.",
  },
  {
    icon: <FaUserShield />,
    title: "Our people & safety program",
    description:
      "At Seynar, our People & Safety program is at the heart of our operations, emphasizing the well-being and development of our staff while maintaining the highest safety standards. We invest in continuous training and development programs to ensure our team is skilled, knowledgeable, and equipped to handle any situation safely and effectively. We adhere strictly to workplace safety regulations, promoting a culture of safety that minimizes risks for both our employees and clients. This comprehensive approach ensures that our workforce is not only highly capable but also motivated and secure in their roles, contributing to the overall excellence and reliability of our services.",
  },
  {
    icon: <FaLightbulb />,
    title: "Premium Eco-Friendly Office Cleaning",
    description:
      "Seynar's premium subscription for office cleaning delivers an exceptional service tailored for businesses that prioritize both impeccable cleanliness and environmental responsibility. This subscription exclusively utilizes eco-friendly cleaning products and advanced, sustainable techniques, ensuring that every cleaning session contributes positively to your company’s environmental goals. Clients benefit from comprehensive cleaning coverage, meticulous attention to detail, and dedicated customer support. Designed for high-traffic areas and high-stakes business environments, our premium office cleaning service maintains your workspace in pristine condition, enhancing the well-being and productivity of your team while upholding your commitment to sustainability.",
  },
  {
    icon: <FaBuilding />,
    title: "Servicing high profile tenancies",
    description:
      "At Seynar, we specialize in servicing high-profile tenancies, delivering impeccable cleaning and maintenance services that meet the exacting standards required by prestigious clients. Our team is trained to handle the unique challenges and demands of high-profile environments, ensuring discretion, precision, and exceptional care in every task. We use state-of-the-art equipment and techniques to maintain the pristine condition of these properties, while our commitment to confidentiality and professionalism makes us a trusted partner for clients with high visibility and specific needs. Whether it’s luxury commercial spaces, high-end residential properties, or corporate headquarters, Seynar provides a tailored service that upholds the stature and image of every high-profile tenancy.",
  },
];

const OfficeCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/services/office3.jpg"
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
              At Seynar, we take pride in delivering high-quality commercial
              cleaning services to high-profile tenants, managing agents, and
              property owners. As we expand into Melbourne, we bring with us a
              wealth of experience and a proven track record of excellence and
              sustainability. This expertise ensures that both new and existing
              clients in the region can trust us to maintain the highest
              standards of cleanliness and service.
            </p>
          </div>
          <div className="flex-1 lg:p-8 md:p-6 p-2 lg:border-l-2 lg:border-r-2 border-black">
            <p>
              At Seynar, we specialize in providing top-tier cleaning services
              for a diverse array of premium and A-Grade buildings. Our
              expertise encompasses brand new developments, mixed-use precincts,
              end-of-trip facilities, and activity-based working environments.
              Our skilled team is well-equipped to meet the unique demands of
              these sophisticated spaces, ensuring that every facility we
              service maintains the highest standards of cleanliness
              and presentation.
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
