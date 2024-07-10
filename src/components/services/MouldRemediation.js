import React from "react";
import BlackLine from "../shared/BlackLine";

const mouldRemediationSections = [
  {
    title: "Assessment and Inspection",
    description:
      "Our team conducts a thorough assessment and inspection to identify the source and extent of mould infestation. This allows us to develop a comprehensive remediation plan tailored to your specific needs.",
  },
  {
    title: "Containment and Ventilation",
    description:
      "To prevent the spread of mould spores, we use advanced containment and ventilation techniques. This ensures that the affected areas are isolated, minimizing cross-contamination.",
  },
  {
    title: "Mould Removal",
    description:
      "Using specialized equipment and eco-friendly cleaning solutions, we safely remove mould from your property. Our methods are effective and safe, ensuring that your environment is restored to a healthy state.",
  },
  {
    title: "Cleaning and Disinfection",
    description:
      "We clean and disinfect all affected surfaces to remove any remaining mould spores. Our process includes HEPA vacuuming and the application of antimicrobial treatments to prevent future mould growth.",
  },
  {
    title: "Restoration and Repairs",
    description:
      "Our team is equipped to handle any necessary repairs and restoration work following mould remediation. We ensure that your property is returned to its original condition, or better.",
  },
  {
    title: "Preventative Measures",
    description:
      "To help prevent future mould issues, we offer advice and solutions for moisture control and ventilation improvements. Our goal is to provide long-term protection for your property.",
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
          Our Mould Remediation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mouldRemediationSections.map((section, index) => (
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
          Protect your property and health with our expert mould remediation
          services. Contact Seynar today to learn more about how we can help you
          maintain a safe and healthy environment.
        </p>
      </div>
    </div>
  );
};

export default MouldRemediation;
