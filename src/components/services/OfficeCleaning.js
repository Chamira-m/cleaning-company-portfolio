import React from "react";
import BlackLine from "../shared/BlackLine";

const OfficeCleaning = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/office/office.jpg"
          alt="Office Cleaning"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">OFFICE CLEANING</h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>
      <div className="container text-black mx-auto p-4 mb-16 poppins-regular">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl  poppins-bold mb-8">
          Premium Office Cleaning matched with our Expert Specialised
          Maintenance Plan.
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 md:p-8 p-4 ">
            <p>
              We at SEYNAR are proud of our 5 years providing high quality
              commercial cleaning services to many high profile tenants,
              managing agents and property owners across the Eastern Seaboard.
            </p>
          </div>
          <div className="flex-1 md:p-8 p-4 lg:border-l-2 lg:border-r-2  border-black">
            <p>
              We are experts in servicing a wide range of premium and A-Grade
              buildings, including brand new developments, mixed use precincts,
              end of trip facilities and activity based working environments.
            </p>
          </div>
          <div className="flex-1 md:p-8 p-4  ">
            <p>
              We work in partnership with our clients to achieve building
              accreditations and targets such as CAF 3 Star Certification,
              NABERS, WELLS and Greenstar ratings.
            </p>
          </div>
        </div>
      </div>

      <BlackLine />
    </div>
  );
};

export default OfficeCleaning;
