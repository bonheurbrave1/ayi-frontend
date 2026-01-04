import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaLightbulb,
  FaUserFriends,
  FaTools,
  FaDollarSign,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import parallaxHeader from "../assets/parallax2.jpg";
import parallaxMission from "../assets/parallax1.jpg";
import parallaxValues from "../assets/parallax1.jpg";
import parallaxObjectives from "../assets/parallax2.jpg";

const Objectives = () => {
  return (
    <div className="text-white" id="about">
      {/* Header with Parallax Background */}
      <div
        className="h-[20vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxHeader})` }}
      >
        <h1 className=" text-white text-3xl font-bold">Objectives</h1>
      </div>

      {/* Mission and Vision with Parallax Background */}
      <div
        className="bg-fixed bg-center bg-cover py-24 px-6"
        style={{ backgroundImage: `url(${parallaxMission})` }}
      >
        <div className="grid md:grid-cols-2 gap-12 bg-black/70 p-10 rounded-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Mission</h2>
            <p className="text-lg text-gray-300">
              We are committed to equipping young people with financial tools,
              investment opportunities and entrepreneurial support they need to
              build wealth and achieve financial independence. By fostering a
              culture of smart saving and investment, we empower the next
              generation to shape Africa’s economic future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Vision</h2>
            <p className="text-lg text-gray-300">
              We envision of a future where African youth lead the way in
              financial empowerment, turning their dreams into sustainable
              investment and thriving business through smart investment, capital
              ventures, we aimed to drive economic growth and creating
              opportunity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values with Parallax Background */}
      <div
        className="bg-fixed bg-center bg-cover py-24 px-6"
        style={{ backgroundImage: `url(${parallaxValues})` }}
      >
        <div className="bg-black/70 p-10 rounded-lg">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHandshake className="text-5xl text-green-500 mb-4" />,
                title: "Integrity",
                desc: "We act with honesty and adhere to strong moral principles.",
              },
              {
                icon: <FaLightbulb className="text-5xl text-green-500 mb-4" />,
                title: "Ambitious",
                desc: "We are driven to achieve excellence and go beyond expectations.",
              },
              {
                icon: (
                  <FaUserFriends className="text-5xl text-green-500 mb-4" />
                ),
                title: "Accountability",
                desc: "We take responsibility for our actions and commitments.",
              },
              {
                icon: <FaTools className="text-5xl text-green-500 mb-4" />,
                title: "Creative Collaboration",
                desc: "We encourage innovation and value teamwork in all our endeavors.",
              },
            ].map((value, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.5}
                className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg text-center hover:scale-105 transform transition"
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.desc}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      {/* Objectives with Parallax Background */}
      <div
        className="bg-fixed bg-center bg-cover py-24 px-6"
        style={{ backgroundImage: `url(${parallaxObjectives})` }}
      >
        <div className="bg-black/70 p-10 rounded-lg">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Our Key Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaDollarSign className="text-4xl text-green-500 mb-4" />,
                title: "Profit Objective",
                desc: "To achieve sufficient profit to finance our company growth and provide investment resources for future development.",
              },
              {
                icon: (
                  <FaUserFriends className="text-4xl text-green-500 mb-4" />
                ),
                title: "Customer Objective",
                desc: "To provide services and products of the highest quality and greatest possible value to our customers, thereby gaining and holding their respect and loyalty.",
              },
              {
                icon: <FaTools className="text-4xl text-green-500 mb-4" />,
                title: "Technology Objective",
                desc: "To participate in fields of interest that build up on our technology and customer base, enabling continuous growth and profitable contributions.",
              },
              {
                icon: <FaHandshake className="text-4xl text-green-500 mb-4" />,
                title: "Society Objective",
                desc: "To honor our obligations to society by being an economic, intellectual, and social asset to each nation and community in which we operate.",
              },
            ].map((obj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transform transition"
              >
                {obj.icon}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {obj.title}
                </h3>
                <p className="text-lg text-gray-300">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
