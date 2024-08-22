import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Validate required fields
    const formData = new FormData(form.current);
    let isValid = true;

    formData.forEach((value, key) => {
      if (!value.trim()) {
        isValid = false;
        const input = form.current.querySelector(`[name=${key}]`);
        input.classList.add("border-red-500"); // Add red border for visual feedback
      }
    });
    // If all fields are filled, send the email

    if (!isValid) {
      console.log("Please fill out all required fields.");
      return;
    }
    emailjs
      .sendForm("service_ncbrlaw", "template_jwdyb89", form.current, {
        publicKey: "_aUKreTu2MM8i_071",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Refresh the page after successful submission
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container mx-auto p-4 2xl:mt-16 lg:mt-10 md:mt-8 mt-8 mb-28 text-black">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="2xl:text-4xl text-xl poppins-bold text-center my-8"
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-100 p-6 rounded-lg shadow-lg"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm poppins-regular">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="mt-1 block w-full p-2 bg-white text-black border rounded-md "
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm poppins-regular">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="mt-1 block w-full p-2 bg-white text-black border rounded-md "
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm poppins-regular">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                className="mt-1 block w-full p-2 bg-white text-black border rounded-md "
              />
            </div>
            <div>
              <label
                htmlFor="property"
                className="block text-sm poppins-regular"
              >
                Property Address
              </label>
              <input
                type="text"
                id="property"
                name="user_address"
                className="mt-1 block w-full p-2 bg-white text-black border rounded-md "
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm poppins-regular"
              >
                Tell Us More
              </label>
              <textarea
                id="message"
                rows="4"
                name="user_message"
                className="mt-1 block w-full p-2 bg-white text-black border rounded-md "
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 2xl:px-6 2xl:py-2 px-2 py-1 2xl:text-xl text-base bg-white text-black rounded-full shadow-md hover:bg-opacity-100 transition duration-300 poppins-bold"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Right Section: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-slate-100 text-black rounded-lg shadow-lg "
        >
          <p className="mb-4 2xl:text-xl lg:text-lg md:text-base text-sm poppins-regular">
            For any inquiries, please feel free to contact us.
          </p>
          <p className="mb-4 2xl:text-xl lg:text-lg md:text-base text-sm poppins-regular">
            Your time is valuable, and we will make sure to get back to you as
            soon as we can.
          </p>
          <p className="mb-4 2xl:text-2xl lg:text-xl md:text-lg text-base poppins-bold">
            Seynar
          </p>
          <p className="mb-4 2xl:text-xl lg:text-lg md:text-base text-sm poppins-regular">
            Suite 540, Waterman Caribbean Park, 44 Lakeview Drive, Scoresby,
            Victoria 3179
          </p>
          <p className="mb-4 2xl:text-xl lg:text-lg md:text-base text-sm poppins-regular">
            Email: admin@seynar.com.au
            <br />
            Telephone: 03 8753 4707
            {/* <br />
            Mobile: 04 0923 4022  */}
          </p>
          <p className="mb-4 2xl:text-2xl lg:text-xl md:text-lg text-base poppins-bold">
            Office Hours:
          </p>
          <p className="mb-4 2xl:text-xl lg:text-lg md:text-base text-sm poppins-regular">
            Open today
            <br />
            07:00 am – 05:00 pm
          </p>
          <p className="mb-4 2xl:text-xl lg:text-lg md:text-base text-sm poppins-regular">
            These are just our office hours but we are functional 24/7 for your
            convenience.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" bg-gray-800 rounded-lg shadow-lg text-white mt-8"
      >
        <div className="aspect-w-16 aspect-h-9 2xl:mt-10 lg-mt-8 md:mt-5 mt-4">
          <iframe
            title="Google Map"
            className="w-full h-96"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.6994636464465!2d145.21687267673235!3d-37.91408683977967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63f28682c4277%3A0x2055308d07e99449!2sWaterman%20Caribbean%20Park!5e0!3m2!1sen!2slk!4v1720688425537!5m2!1sen!2slk`}
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
