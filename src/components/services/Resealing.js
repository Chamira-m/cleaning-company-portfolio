import React from "react";
import BlackLine from "../shared/BlackLine";

const Resealing = () => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        <img
          src="/office/office.jpg"
          alt=""
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl bg-opacity-50 p-4 rounded-lg poppins-bold">
          <h1 className="2xl:text-5xl md:text-3xl text-2xl">
            Slate, Stone & Vinyl Floor Resealing
          </h1>
          <div className="2xl:w-[800px] md:w-[600px] w-80 h-1 bg-white mt-4 mb-4" />
        </div>
      </div>
      <BlackLine />
    </div>
  );
};

export default Resealing;
