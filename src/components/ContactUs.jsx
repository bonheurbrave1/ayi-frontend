import React, { useState } from "react";


import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast , Toaster} from "sonner"
axios.defaults.baseURL = "http://localhost:5000";
const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    await axios
      .post("/sendemail", { username: name, email: email, message: message })
      .then((res) => console.log(res.data));
      setname("");
      setemail("");
      setmessage("");
      toast.success("your message sent successfully");
  };

  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Contact Us
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4">
          Get in touch with us for any queries, support, or feedback. We're here
          to help!
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-wrap justify-between mb-16">
        {/* Company Info */}
        <div className="w-full md:w-1/2 lg:w-2/5 p-8 bg-gray-800 rounded-lg shadow-lg mb-12 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Company Info</h2>
          <p className="text-lg text-gray-300 mb-4">
            We are a development and investment company focused on supporting
            youth initiatives.
          </p>
          <ul className="text-lg text-gray-300">
            <li className="flex items-center mb-2">
              <FaPhoneAlt className="mr-4 text-green-500" />
              <div className="block ">
                <span className=" block">+250 782 029 528</span>
                <span className=" block">+250 788 967 462</span>
              </div>
            </li>
            <Link to={"mailto:afriyouthinvest@gmail.com"} target="_blank">
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-4 text-green-500" />
                afriyouthinvest@gmail.com
              </li>
            </Link>
            {/* <li className="flex items-center mb-2">
              <FaFacebookF className="mr-4 text-blue-500" />
              facebook.com/ayigroup
            </li> */}
            <Link to={"https://x.com/Afriyouthinvest"} target="_blank">
              <li className="flex items-center mb-2">
                <FaTwitter className="mr-4 text-blue-400" />
                https://x.com/Afriyouthinvest
              </li>
            </Link>
            <li className="flex items-center mb-2">
              <FaLinkedinIn className="mr-4 text-blue-700" />
              <Link
                to={
                  "https://www.linkedin.com/in/afriyouthinvest?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                target="_blank"
              >
                https://www.linkedin.com/in/afriyouthinvest
              </Link>
            </li>
            {/* <li className="flex items-center mb-2">
              <FaInstagram className="mr-4 text-pink-600" />
              <Link to={'/asdf'}>instagram.com/ayigroup</Link>
            </li> */}
          </ul>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/3 lg:w-2/5 p-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
          <div className="h-96">
            {/* Embed Google Map */}
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14962.982749209987!2d30.0599758!3d-1.9472776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcb0b42e3c8f41%3A0xb42d2b431933e2fc!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1692071629575!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Send Us a Message
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label htmlFor="name" className="text-lg text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              className="w-full p-4 mt-2 bg-gray-700 text-white rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              className="w-full p-4 mt-2 bg-gray-700 text-white rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="text-lg text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            value={message}
            className="w-full p-4 mt-2 bg-gray-700 text-white rounded-lg"
            rows="6"
            required
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </div>
      <Toaster richColors/>
    </div>
  );
};

export default ContactUs;
