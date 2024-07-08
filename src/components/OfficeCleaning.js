import React from "react";

const OfficeCleaning = () => {
  return (
    <div className="relative">
      <img
        src="/office/office.jpg"
        alt=""
        className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold bg-opacity-50 p-4 rounded-lg">
        <h1 className="2xl:text-5xl md:text-3xl text-2xl">OFFICE CLEANING</h1>

        <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
      </div>
    </div>
  );
};

export default OfficeCleaning;
