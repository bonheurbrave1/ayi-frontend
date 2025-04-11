import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-4"
        >
          African Youth Investment Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl max-w-3xl mx-auto text-gray-400"
        >
          Our mission is to support youth in development through saving and investment. We are committed to building a brighter future with and for the youth.
        </motion.p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16 flex flex-col lg:flex-row gap-8 justify-center">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-gray-800 p-6 rounded-xl w-full lg:w-1/3 text-center"
        >
          <h3 className="text-3xl font-semibold text-primary mb-4">Mission</h3>
          <p className="text-lg text-gray-300">
            To support youth in development through saving and investment.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-gray-800 p-6 rounded-xl w-full lg:w-1/3 text-center"
        >
          <h3 className="text-3xl font-semibold text-primary mb-4">Vision</h3>
          <p className="text-lg text-gray-300">
            To become the best development and investment company working with youth in the world.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-extrabold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Integrity', 'Ambitious', 'Accountability', 'Creative Collaboration'].map((value, index) => (
            <Tilt
              glareEnable
              tiltEnable
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareColor="#888"
              key={index}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: index * 0.5 }}
                className="bg-primary text-white p-6 rounded-lg text-center shadow-lg"
              >
                <h3 className="text-xl font-semibold">{value}</h3>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Objectives Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-extrabold text-center mb-8">Our Objectives</h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Profit Objectives</h3>
            <p className="text-lg text-gray-300">
              To achieve sufficient profit to finance our company growth and provide investment resources we need to achieve our corporate objectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Customer Objectives</h3>
            <p className="text-lg text-gray-300">
              To provide service and products of the highest quality and greatest possible value to our customers, thereby gaining and holding their respect and loyalty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Technology Objectives</h3>
            <p className="text-lg text-gray-300">
              To participate in those fields of interest that build up our technology and customer base, offering opportunities for continued growth and profitable contributions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Society Objectives</h3>
            <p className="text-lg text-gray-300">
              To honor our obligations to society by being an economic, intellectual, and social asset to each nation and community in which we operate.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-8">Contact Us</h2>

        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-4 text-gray-300">
            <FaPhoneAlt className="text-2xl" />
            <span className="text-lg">0788967462</span>
          </div>
          <div className="flex justify-center items-center space-x-4 text-gray-300">
            <FaEnvelope className="text-2xl" />
            <span className="text-lg">afriyouthinvest@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
