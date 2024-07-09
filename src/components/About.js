// import React from "react";
// import { motion } from "framer-motion";

// const categories = [
//   {
//     title: "Residential Cleaning",
//     description:
//       "We provide comprehensive residential cleaning services to ensure your home is spotless. Our team uses eco-friendly products to clean every nook and cranny of your home.",
//   },
//   {
//     title: "Commercial Cleaning",
//     description:
//       "Our commercial cleaning services are tailored to meet the needs of your business. We work around your schedule to ensure a clean and hygienic workplace.",
//   },
//   {
//     title: "Specialized Cleaning",
//     description:
//       "We offer specialized cleaning services including carpet cleaning, window cleaning, and deep cleaning. Our team is equipped to handle all your specific cleaning needs.",
//   },
// ];

// const About = () => {
//   return (
//     <div className="container mx-auto p-4 flex flex-col lg:flex-row 2xl:mt-16 lg:mt-10 md:mt-8 mt-2 mb-28">
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="lg:w-1/2 p-6"
//       >
//         <h1 className="2xl:text-4xl text-xl text-center text-black lg:text-left my-8 poppins-bold">
//           About Us
//         </h1>
//         <div className="space-y-6">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-slate-100 text-black p-6 rounded-lg shadow-lg "
//             >
//               <h2 className="2xl:text-xl text-lg font-semibold mb-4 poppins-semibold">
//                 {category.title}
//               </h2>
//               <p className="2xl:text-base text-sm poppins-regular">
//                 {category.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="lg:w-1/2 flex items-center justify-center"
//       >
//         <img
//           src="/about/about.jpg"
//           alt="About Us"
//           className="w-full h-full object-cover rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="mt-10 lg:grid-cols-4 gap-8 pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="2xl:p-6 md:mx-1 bg-gray-50 text-black flex flex-col items-center z-10 p-8 md:p-16 lg:p-24 rounded-xl shadow-lg max-w-2xl mx-4"
        >
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6 poppins-bold">
            OUR GOAL
          </h1>
          <p className="text-center text-gray-700 text-base md:text-lg mb-6 poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
          <p className="text-center text-gray-700 text-base md:text-lg poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="flex justify-center mt-8">
            <img
              src="/about/leaves.jpg"
              alt="Plant"
              className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48"
            />
          </div>
          <p className="text-center text-green-700 text-base md:text-lg mt-8 poppins-bold">
            SEYNAR
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
