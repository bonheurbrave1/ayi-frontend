import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
    <div className='min-h-screen bg-gray-200 '>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Login Form Container */}
      <img src= {logo} alt="no internet connection" width={200}/>
      <h1 className='text-4xl font-bold py-2'>Continue to Ayi - Community</h1>
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className=" text-sm animate-bounce text-red-500 font-semibold text-center mb-6">Login using your normal credential</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="absolute left-3 top-2 text-gray-500">
              <FaEnvelope />
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="absolute left-3 top-2 text-gray-500">
              <FaLock />
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          {/* real login functionalities */}
          <Link to={"/ayi-sphere"}>
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            >
            Login
          </motion.button>
              </Link>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </motion.div>
    </div>
    </div>
    </>
  );
};

export default LoginForm;
