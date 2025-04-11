import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaUserFriends, FaTools, FaDollarSign } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Objectives = () => {
  return (
    <div className="bg-black text-white py-20 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white"
        >
          Our Objectives
        </motion.h1>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-8 bg-gray-900 shadow-lg rounded-lg hover:scale-105 transform transition"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Mission</h2>
          <p className="text-lg text-gray-300">
            To support youth in development through saving and investment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-8 bg-gray-900 shadow-lg rounded-lg hover:scale-105 transform transition"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Vision</h2>
          <p className="text-lg text-gray-300">
            To become the best development and investment company working with youth in the world.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="my-20">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.5}
            className="p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:scale-105 transform transition"
          >
            <FaHandshake className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Integrity</h3>
            <p className="text-gray-300">We act with honesty and adhere to strong moral principles.</p>
          </Tilt>
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.5}
            className="p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:scale-105 transform transition"
          >
            <FaLightbulb className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Ambitious</h3>
            <p className="text-gray-300">We are driven to achieve excellence and go beyond expectations.</p>
          </Tilt>
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.5}
            className="p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:scale-105 transform transition"
          >
            <FaUserFriends className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Accountability</h3>
            <p className="text-gray-300">We take responsibility for our actions and commitments.</p>
          </Tilt>
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.5}
            className="p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:scale-105 transform transition"
          >
            <FaTools className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Creative Collaboration</h3>
            <p className="text-gray-300">We encourage innovation and value teamwork in all our endeavors.</p>
          </Tilt>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="my-20">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">Our Key Objectives</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Profit Objective */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <FaDollarSign className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Profit Objective</h3>
            <p className="text-lg text-gray-300">
              To achieve sufficient profit to finance our company growth and provide investment resources for future development.
            </p>
          </motion.div>

          {/* Customer Objective */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <FaUserFriends className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Customer Objective</h3>
            <p className="text-lg text-gray-300">
              To provide services and products of the highest quality and greatest possible value to our customers, thereby gaining and holding their respect and loyalty.
            </p>
          </motion.div>

          {/* Technology Objective */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <FaTools className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Technology Objective</h3>
            <p className="text-lg text-gray-300">
              To participate in fields of interest that build up on our technology and customer base, enabling continuous growth and profitable contributions.
            </p>
          </motion.div>

          {/* Society Objective */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <FaHandshake className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Society Objective</h3>
            <p className="text-lg text-gray-300">
              To honor our obligations to society by being an economic, intellectual, and social asset to each nation and community in which we operate.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
