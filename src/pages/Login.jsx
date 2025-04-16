import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../assets/logo.png";
import business from "../assets/login/increase.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        // Save token to localStorage
        localStorage.setItem("token", data.token);
        // Redirect to profile or dashboard after successful login
        navigate("/profile"); // Redirect to the profile page or any page you want
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleGoogleLogin = (response) => {
    console.log("Google login response:", response);
    // Implement your Google login logic here (e.g., Firebase)
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left side: Login Form */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-6 bg-white text-black rounded-l-xl shadow-2xl relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <a href={"/"}>
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
            Empowering Your Financial Future. Login to manage your savings.
          </p>

          {/* Error message for login issues */}
          {errorMessage && (
            <p className="text-center text-red-600 mb-6">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-700">
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
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-gray-700">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-600"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <motion.button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Login
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
              text="signin_with"
              shape="rectangular"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
              <span className="text-sm">Sign in with Google</span>
            </GoogleLogin>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600">
              New to AYI Group?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign Up
              </a>
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

export default Login;
