import React from 'react';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import adrien from '../../assets/team/adrien.jpg'
import devotha from '../../assets/team/devotha.jpg'
import logo from '../../assets/team/gilbert.jpg'
const FeedPage = () => {
  const posts = [
    {
      id: 1,
      userName: "John Doe",
      userHandle: "@johndoe",
      content: "Just joined the community! Excited to connect with everyone!",
      timestamp: "2h ago",
      likes: 10,
      comments: 5,
      shares: 3,
      image: adrien
    },
    {
      id: 2,
      userName: "Jane Smith",
      userHandle: "@janesmith",
      content: "What are the best ways to get involved in the community? Would love some tips!",
      timestamp: "4h ago",
      likes: 20,
      comments: 10,
      shares: 7,
      image: devotha
    },
    {
      id: 3,
      userName: "Alex Brown",
      userHandle: "@alexbrown",
      content: "Looking forward to our upcoming event. Hope to meet many new members!",
      timestamp: "6h ago",
      likes: 25,
      comments: 12,
      shares: 8,
      image: logo
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <motion.div
        className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Community Feed</h2>
         <h1 className=' font-bold border-b-4 border-b-blue-700 py-2'>For you</h1>
        {/* Loop through posts */}
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-5 mb-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* User Information */}
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {post.userName.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{post.userName}</h3>
                <p className="text-sm text-gray-500">{post.userHandle} · {post.timestamp}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 text-lg">{post.content}</p>

            {/* Image */}
            {post.image && (
              <div className="mt-4">
                <img
                  src={post.image}
                  alt="Post Media"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            {/* Interaction Buttons */}
            <div className="flex space-x-6 mt-4 text-gray-600">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                <FaThumbsUp size={20} />
                <span className="text-sm">{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                <FaComment size={20} />
                <span className="text-sm">{post.comments}</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                <FaShare size={20} />
                <span className="text-sm">{post.shares}</span>
              </div>
            </div>
            <div className=' w-1/2 py-4 space-x-3'>
              <input type="text" className=' border-2 border-slate-200 rounded-md outline-none py-1 px-3' placeholder='Add comment..'/>
              <button className='bg-blue-500 py-1 px-3 text-white font-semibold'>Comment</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeedPage;
