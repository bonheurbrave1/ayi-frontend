import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // React Icons
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../assets/logo.png";
import business from "../assets/login/increase.png";
import axios from "axios";

// Set base URL for Axios
axios.defaults.baseURL = "http://localhost:5000";

const RegistrationPage = () => {
  // State variables for all form inputs
  const [fullnames, setFullnames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [bd, setBD] = useState(""); // birthdate
  const [nationalId, setNationalId] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic form validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Send registration data to backend
      const response = await axios.post('/api/user/register', {
        names: fullnames,
        email,
        phone,
        password,
        confirmPassword,
        location,
        bd,
        nationalId,
      });

      // Show success message and reset form
      alert(response.data.message);
      setFullnames("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setLocation("");
      setBD("");
      setNationalId("");
    } catch (err) {
      // Handle error
      console.error("Registration error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  // Google login callback
  const handleGoogleLogin = (response) => {
    console.log("Google login response:", response);
    // Implement your Google login logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left side: Registration Form */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-6 bg-white text-black rounded-l-xl shadow-2xl relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <a href="/">
            <img src={logo} alt="AYI Group Logo" className="w-20 h-auto" />
          </a>
        </div>

        <motion.div
          className="w-full max-w-md p-6 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl font-medium mb-6">AYI Group</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Join AYI Group to start managing your savings.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Fullname */}
            <div className="mb-4">
              <label htmlFor="fullnames" className="block text-sm text-gray-700 font-semibold">
                Fullnames
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  id="fullnames"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                  placeholder="Enter your fullnames"
                  value={fullnames}
                  onChange={(e) => setFullnames(e.target.value)}
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-700 font-semibold">
                Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm text-gray-700 font-semibold">
                Phone Number
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm text-gray-700 font-semibold">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label htmlFor="bd" className="block text-sm text-gray-700 font-semibold">
                Date of Birth
              </label>
              <input
                type="date"
                id="bd"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={bd}
                onChange={(e) => setBD(e.target.value)}
              />
            </div>

            {/* National ID */}
            <div className="mb-4">
              <label htmlFor="nationalId" className="block text-sm text-gray-700 font-semibold">
                National ID
              </label>
              <input
                type="text"
                id="nationalId"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your national ID"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm text-gray-700 font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              {loading ? "Registering..." : "Register"}
            </motion.button>
          </form>

          {/* Google Login Button */}
          <div className="flex justify-center my-6">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log("Login Failed")}
              useOneTap
              className="w-full py-2 bg-black text-white font-medium rounded-full shadow-xl border-2 border-gray-300 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-4"
              theme="filled_black"
              text="signup_with"
              shape="rectangular"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
              <span className="text-sm">Sign up with Google</span>
            </GoogleLogin>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right side: Business Image and Slogan */}
      <div className="hidden sm:block sm:w-1/2 bg-black text-white flex flex-col items-center justify-center p-8 rounded-r-xl shadow-2xl">
        <img
          src={business}
          alt="Business Launch"
          className="w-full h-auto rounded-lg mb-6"
        />
        <h3 className="text-2xl font-semibold mb-4">
          Launch Your Future with Us
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Join us in the revolution of financial empowerment, where your savings
          grow with you.
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Together, we achieve financial independence and success.
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
