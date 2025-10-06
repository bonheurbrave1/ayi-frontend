import React, { useState } from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import business from "../assets/login/increase.png";

const Login = () => {
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Forgot password state
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetStatus, setResetStatus] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        navigate("/profile");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset request
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResetStatus({ message: "", isError: false });

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setResetStatus({ 
          message: "If this email exists, a reset link has been sent", 
          isError: false 
        });
      } else {
        setResetStatus({ 
          message: data.message || "Failed to send reset link", 
          isError: true 
        });
      }
    } catch (error) {
      setResetStatus({ 
        message: "Network error. Please try again.", 
        isError: true 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = (credentialResponse) => {
    console.log("Google login response:", credentialResponse);
    // Implement your Google auth logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Panel - Form Container */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-6 bg-white text-black rounded-l-xl shadow-2xl relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <Link to="/">
            <img src={logo} alt="AYI Group Logo" className="w-20 h-auto" />
          </Link>
        </div>

        <motion.div
          className="w-full max-w-md p-6 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <h2 className="text-center text-3xl font-medium mb-6">AYI Group</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            {showForgotPassword 
              ? "Reset your password to access your account" 
              : "Empowering Your Financial Future. Login to manage your savings."}
          </p>

          {/* Status Messages */}
          {errorMessage && (
            <p className="text-center text-red-600 mb-6">{errorMessage}</p>
          )}
          {resetStatus.message && (
            <p className={`text-center mb-6 ${resetStatus.isError ? "text-red-600" : "text-green-600"}`}>
              {resetStatus.message}
            </p>
          )}

          {/* Conditional Form Rendering */}
          {showForgotPassword ? (
            <ForgotPasswordForm 
              resetEmail={resetEmail}
              setResetEmail={setResetEmail}
              isLoading={isLoading}
              handleSubmit={handlePasswordReset}
              goBack={() => {
                setShowForgotPassword(false);
                setResetStatus({ message: "", isError: false });
              }}
            />
          ) : (
            <LoginForm 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
              isLoading={isLoading}
              handleSubmit={handleLogin}
              showForgotPassword={() => setShowForgotPassword(true)}
            />
          )}

          {/* Social Login */}
          {!showForgotPassword && (
            <div className="flex justify-center my-6">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => console.log("Google login failed")}
                useOneTap
              />
            </div>
          )}

          {/* Footer Links */}
          {!showForgotPassword && (
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600">
                New to AYI Group?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Right Panel - Visual Content */}
      <div className="hidden sm:block sm:w-1/2 bg-black text-white flex flex-col items-center justify-center p-8 rounded-r-xl shadow-2xl">
        <img
          src={business}
          alt="Business Growth"
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

// Sub-component for Login Form
const LoginForm = ({ 
  email, setEmail, 
  password, setPassword, 
  rememberMe, setRememberMe,
  isLoading,
  handleSubmit,
  showForgotPassword
}) => (
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm text-gray-700">
        Email
      </label>
      <div className="relative mt-2">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          required
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          required
        />
        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-600"
        />
        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
          Remember Me
        </label>
      </div>
      <button
        type="button"
        onClick={showForgotPassword}
        className="text-xs text-blue-600 hover:underline"
      >
        Forgot Password?
      </button>
    </div>

    <motion.button
      type="submit"
      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Logging in...
        </>
      ) : (
        'Login'
      )}
    </motion.button>
  </form>
);

// Sub-component for Forgot Password Form
const ForgotPasswordForm = ({ 
  resetEmail, setResetEmail, 
  isLoading, 
  handleSubmit, 
  goBack 
}) => (
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="resetEmail" className="block text-sm text-gray-700">
        Email Address
      </label>
      <div className="relative mt-2">
        <input
          type="email"
          id="resetEmail"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          placeholder="Enter your registered email"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          required
        />
        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    <motion.button
      type="submit"
      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200 mb-4 flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </>
      ) : (
        'Send Reset Link'
      )}
    </motion.button>

    <button
      type="button"
      onClick={goBack}
      className="w-full py-2 bg-gray-200 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-300 transition duration-200 flex items-center justify-center"
    >
      <FaArrowLeft className="mr-2" />
      Back to Login
    </button>
  </form>
);

export default Login;