import React from "react";
import BlackLine from "../shared/BlackLine";

const commercialCleaningSections = [
  {
    title: "Office Cleaning",
    description:
      "Our office cleaning services ensure that your workspace is clean, organized, and welcoming. We handle everything from dusting and vacuuming to sanitizing high-touch areas, creating a healthy environment for your employees and visitors.",
  },
  {
    title: "Restroom Cleaning",
    description:
      "We provide thorough restroom cleaning services, including disinfection and restocking of supplies, to maintain hygiene and comfort for your staff and guests.",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Our carpet cleaning services include regular maintenance and deep cleaning to remove dirt, stains, and allergens, extending the life of your carpets and improving indoor air quality.",
  },
  {
    title: "Window Cleaning",
    description:
      "Clean windows enhance the appearance of your building and allow more natural light into your workspace. Our professional window cleaning services ensure streak-free, spotless results.",
  },
  {
    title: "Floor Cleaning and Maintenance",
    description:
      "We offer specialized cleaning and maintenance for various types of flooring, including vinyl, tile, and hardwood. Our services include floor stripping and sealing, tile and grout cleaning, and regular maintenance to keep your floors looking their best.",
  },
  {
    title: "High-Pressure Cleaning",
    description:
      "For exterior surfaces and high-traffic areas, our high-pressure cleaning services effectively remove dirt, grime, and stains, ensuring a clean and professional appearance.",
  },
  {
    title: "Waste Management and Recycling",
    description:
      "Seynar is committed to sustainability. We provide waste management and recycling services to help your business reduce its environmental footprint and comply with relevant regulations.",
  },
  {
    title: "Eco-Friendly Cleaning Solutions",
    description:
      "For our premium subscription customers, Seynar exclusively uses eco-friendly products and sustainable cleaning methods. This approach not only ensures a safe and healthy environment for your employees but also supports your company’s commitment to sustainability.",
  },
  {
    title: "Customized Cleaning Plans",
    description:
      "We understand that every business has unique cleaning needs. Our team works closely with you to develop customized cleaning plans that address your specific requirements and schedule. Whether you need daily, weekly, or monthly cleaning services, we provide flexible solutions that fit your business operations.",
  },
  {
    title: "Meeting Australian Standards",
    description:
      "Seynar is dedicated to helping our customers achieve and maintain relevant Australian cleaning standards. Our services comply with the following certifications:\n\n• ISO 14001: Environmental Management Systems\n• AS/NZS 4801: Occupational Health and Safety Management Systems\n• ISO 9001: Quality Management Systems\n• GECA (Good Environmental Choice Australia): Certification for environmentally preferable products and services\n• NSW Health Cleaning Service Standards: Compliance with state health and hygiene standards\n\nBy adhering to these standards, we ensure that our cleaning practices not only meet but exceed industry expectations, providing our clients with the highest level of service and quality assurance.",
  },
  {
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
          src="/office/office.jpg"
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

      <div className="container text-black mx-auto p-4 mb-16 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-8">
          Commercial Cleaning at Seynar
        </h2>
        <p className="text-center mb-8">
          At Seynar, we offer top-tier commercial cleaning services designed to
          create clean, healthy, and productive environments for businesses of
          all sizes. Our team of experienced professionals utilizes advanced
          techniques and eco-friendly products to ensure that your commercial
          space is immaculate and conducive to productivity.
        </p>
      </div>

      <BlackLine />

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl poppins-bold mb-12">
          Our Commercial Cleaning Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {commercialCleaningSections.map((section, index) => (
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

      <div className="container text-black mx-auto p-4 mb-16 poppins-regular">
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
