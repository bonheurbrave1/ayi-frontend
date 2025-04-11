import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import invest from '../assets/insights/invest.jpeg'
import invest1 from '../assets/insights/invest1.jpeg'
import people from '../assets/insights/people.jpeg'
import tree from '../assets/insights/tree.jpeg'

// Insight article data (you can replace this with real data or connect it to an API)
const insights = [
  {
    title: 'Empowering Youth Through Financial Education',
    description:
      'Financial literacy is key to unlocking the potential of young people in Africa. Discover how we are making a difference in the lives of young individuals.',
    date: 'February 12, 2025',
    link: '/insights/empowering-youth-financial-education',
    image:invest
  },
  {
    title: 'The Future of Youth-Driven Investments',
    description:
      'The youth are not just the leaders of tomorrow; they are the leaders of today. Here’s why youth-driven investments are crucial to Africa’s development.',
    date: 'January 25, 2025',
    link: '/insights/youth-driven-investments',
    image:invest1
  },
  {
    title: 'How Innovation Drives People Empowerment',
    description:
      'Innovation is a powerful tool for youth development. Read about how our approach integrates technology and innovation in all our initiatives.',
    date: 'December 15, 2024',
    link: '/insights/innovation-youth-empowerment',
    image:people
    
  },
  {
    title: 'Creating Sustainable Economic Opportunities for Youth',
    description:
      'Sustainability and economic empowerment go hand-in-hand. Learn about the programs we’ve implemented to ensure lasting economic opportunities for the youth.',
    date: 'November 10, 2024',
    link: '/insights/sustainable-economic-opportunities',
    image:tree
  },
];

const InsightCard = ({ insight, index  , image}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, delay: index * 0.3 }}
    className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  >
    <img src={image} alt="no internet connections" />
    <h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent mb-4">
      {insight.title}
    </h3>
    <p className="text-md text-gray-400 mb-4">{insight.description}</p>
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">{insight.date}</p>
      <a
        href={insight.link}
        target='_blank'
        className="text-green-500 flex items-center hover:underline"
      >
        <span className="mr-2">Read More</span>
        <FaArrowRight />
      </a>
    </div>
  </motion.div>
);

const Insights = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl text-white text-center font-extrabold text-gradient bg-clip-text mb-8"
      >
        Insights
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        Stay informed and updated on the latest news, innovations, and thought leadership in youth empowerment, development, and investment.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {insights.map((insight, index , image) => (
          <InsightCard key={index} insight={insight} index={index} image={insight.image} />
        ))}
      </div>
    </div>
  );
};

export default Insights;
