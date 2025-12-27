import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import devotha from '../assets/team/devotha.jpg'
import gilbert from '../assets/team/gilbert.jpg'
import immaculee from '../assets/team/immaculee.jpg'
import paul from '../assets/team/paul.jpg'
import rukundo from '../assets/team/rukundo.jpg'
import mugema from '../assets/team/mugema.jpg'
import adrien from '../assets/team/adrien.jpg'
import murara from '../assets/team/murara.jpg'
import tuyizere from '../assets/team/tuyizere.jpg'
import xavier from '../assets/team/xavier.jpg'
// Team member data

const teamMembers = [
  {
    name: 'Paul HAKUZIMANA',
    role: 'Chief Executive Officer:',
    bio: 'Passionate about empowering youth and driving positive change through development.',
    email: 'hakuzapaul@gmail.com',
    phone: ' +250782029528',
    image: paul, // Replace with actual image path
  },
  {
    role: 'Chief Operations Officer (COO)', 
    name: 'ADRIEN NIYIBIGIRA',
    bio: 'Passionate about empowering youth and driving positive change through development.',
    email: 'adrienniyibigira@gmail.com',
    phone: '+250787524578',
    image: adrien, // Replace with actual image path
  },
  {
    name: 'MURARA Geofrey',
    role: 'Administrative Manager',
    bio: 'Focused on operational excellence and ensuring the smooth execution of our mission.',
    email: 'geofreymurara@gmail.com',
    phone: '+250780763207',
    image: murara, // Replace with actual image path
  },
  {
    name: 'Devotha IKUZWE',
    role: 'Finance Manager',
    bio: 'Technologically inclined, with a drive to innovate and lead in digital transformation.',
    email: 'devothaikuzwe2021@gmail.com',
    phone: '+250789899108',
    image: devotha, // Replace with actual image path
  },
  {
    name: 'HABIMANA Xavier',
    role: 'Director of Customer Experience customer support',
    bio: 'Creative strategist, bringing fresh and innovative ideas to inspire the youth market.',
    email: 'xavierhabimana00@gmail.com',
    phone: ' +250785510884',
    image: xavier, // Replace with actual image path
  },
  {
    name: 'DUSABE IHIRWE Immaculée',
    role: 'Customer Support Officer:',
    bio: 'Creative strategist, bringing fresh and innovative customer services and support.',
    email: 'ihirweimmaculee@gmail.com',
    phone: '+250786074811',
    image: immaculee, // Replace with actual image path
  },
  {
    name: ' Jean Damour TUYIZERE',
    role: 'AYI training and capacity building director',
    bio: 'Creative strategist, bringing fresh and innovative ideas to inspire the youth market.',
    email: 'tuyizerej92@yahoo.com',
    phone: '+250786960424',
    image: tuyizere, // Replace with actual image path
  },
  {
    name: 'Mugisha Gilbert',
    role: 'Director of AYI Capital',
    bio: 'Creative strategist, bringing fresh and innovative ideas to inspire the youth market.',
    email: 'mugishagilbert41@gmail.com',
    phone: '+250786459304',
    image: gilbert, // Replace with actual image path
  },
  {
    name: 'Rukundo Dieudonne',
    role: 'AYI Group director',
    bio: 'Creative strategist, bringing fresh and innovative ideas to inspire the youth market.',
    email: 'rukudieu12@gmail.com',
    phone: '+250785063133',
    image: rukundo, // Replace with actual image path
  },
  {
    name: 'Mugemana Ndayishimiye Aime',
    role: 'Tourism and Hospitality Investment officer',
    bio: 'Creative strategist, bringing fresh and innovative ideas to inspire the youth market.',
    email: 'mugemandayishimiyeaime@gmail.com',
    phone: '+250787228096',
    image: mugema, // Replace with actual image path
  },
];

const MemberCard = ({ member, index }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    glareColor="#ddd"
    key={member.name}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: index * 0.3 }}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-gradient-to-r from-red-500 via-violet-500 to-orange-500 mb-4"
        />
        <h3 className="text-sm py-2 font-bold text-gradient bg-clip-text text-green-500">{member.name}</h3>
        <p className="text-xl text-blue-400">{member.role}</p>
        <p className="text-md text-gray-400 mt-2">{member.bio}</p>
        <div className="mt-4 space-x-4">
          <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-red-500">
            <FaEnvelope className="text-xl" />
          </a>
          <a href={`tel:${member.phone}`} className="text-gray-300 hover:text-orange-500">
            <FaPhoneAlt className="text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const OurTeam = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8" id='ourteam'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-white text-gradient bg-clip-text mb-8 text-center"
      >
        Meet Our Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        Our team is dedicated to driving impactful change in youth development through innovation, integrity, and collaboration.
      </motion.p>

      {/* Grid Container: Responsively adjusts the number of columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <MemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;


 
