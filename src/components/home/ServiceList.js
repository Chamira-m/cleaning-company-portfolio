import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServicesList = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Office Cleaning", path: "/office" },
    { name: "Commercial Cleaning", path: "/commercial-cleaning" },
    { name: "Steam Cleaning", path: "/Steamcleaning" },
    { name: "High Pressure Cleaning", path: "/HighPressurecleaning" },
    { name: "Mould Remediation", path: "/MouldRemediation" },
    { name: "Water Damagde Remediation", path: "/WaterDamagdeRemediation" },
  ];

  return (
    <div className="absolute right-0 mt-5 mr-4 text-right text-black lg:pb-16">
      <h2 className="mb-2 text-sm 2xl:text-2xl lg:text-base poppins-bold">
        OUR SERVICES
      </h2>
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => navigate(service.path)}
        >
          <p className="mb-1 text-xs 2xl:text-lg lg:text-sm poppins-regular">
            {service.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;
