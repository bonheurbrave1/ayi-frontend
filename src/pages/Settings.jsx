import React, { useState } from "react";
import {
  FaUserCog,
  FaLock,
  FaEnvelope,
  FaLanguage,
  FaRegHandPointUp,
} from "react-icons/fa"; // Icons
import { FaExchangeAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Assuming Navbar component exists
import { Link, useNavigate } from "react-router-dom"; // For navigation if needed


const Settings = () => {
  const goto = useNavigate();
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle (default is false)

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`font-sans ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10">Settings</h2>

        {/* Account Settings Section */}
        <div
          className={`bg-white ${
            darkMode ? "dark:bg-gray-700" : "bg-white"
          } shadow-lg rounded-lg p-6 mb-8`}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaUserCog className="mr-3 text-blue-600" /> Account Settings
          </h3>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg">Change Email</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Update Email
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg">Change Password</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Update Password
              </button>
            </div>
          </motion.div>
        </div>

        {/* Security Settings Section */}
        <div
          className={`bg-white ${
            darkMode ? "dark:bg-gray-700" : "bg-white"
          } shadow-lg rounded-lg p-6 mb-8`}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaLock className="mr-3 text-red-600" /> Security Settings
          </h3>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg">Two-Factor Authentication</p>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                Enable 2FA
              </button>
            </div>
          </motion.div>
        </div>

        {/* Language Settings Section */}
        <div
          className={`bg-white ${
            darkMode ? "dark:bg-gray-700" : "bg-white"
          } shadow-lg rounded-lg p-6 mb-8`}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaLanguage className="mr-3 text-yellow-600" /> Language Settings
          </h3>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg">Select Language</p>
              <select className="py-2 px-4 rounded-lg text-black">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </motion.div>
        </div>

        {/* Dark Mode Toggle Section */}
        <div
          className={`bg-white ${
            darkMode ? "dark:bg-gray-700" : "bg-white"
          } shadow-lg rounded-lg p-6 mb-8`}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaRegHandPointUp className="mr-3 text-green-600" /> Appearance
          </h3>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg">Dark Mode</p>
              <button
                onClick={toggleDarkMode}
                className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
              >
                {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
              </button>
            </div>
            {/* Logout section */}
            <div className="flex justify-between items-center">
              <p className="text-lg">Logout</p>
              <button
                onClick={() => {
                  goto("/account-page")
                }}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
