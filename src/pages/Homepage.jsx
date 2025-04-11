import React, { useState } from "react";
import { FaUsers, FaRocket, FaRegHandPointUp } from "react-icons/fa"; // Icons
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../assets/logo.png";
import business from "../assets/login/increase.png";
import Navbar from "../components/Navbar";
import About from "../components/About";
import OurTeam from "../components/OurTeam";
import Insights from "../components/Insights";
import Objectives from "../components/Objectives";
import ContactUs from "../components/ContactUs";

const Homepage = () => {
  // const value = localStorage.getItem("logged")
  // const [logged , setlogged ] = useState("")
  // if (value) setloge

  return (
    <div className="font-sans bg-gray-900 text-white">
      <Navbar />
      <section className="h-screen bg-cover bg-center relative hero">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Empowering Africa's Youth Through Investment
          </h1>
          <p className="text-lg mb-6">
            Join us in creating a future where youth thrive through saving and
            investment.
          </p>

          {/* Button with hover effect */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
          >
            Get Started
          </motion.button>
        </div>
      </section>
      <Objectives />
      <OurTeam />

      <Insights />
      <ContactUs />
    </div>
  );
};

export default Homepage;
