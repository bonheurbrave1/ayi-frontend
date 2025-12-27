import React, { useState, useEffect } from "react";
import { FaUsers, FaRocket, FaRegHandPointUp, FaBars, FaTimes } from "react-icons/fa"; // Icons
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import business from "../assets/login/increase.png";
import About from "../components/About";
import OurTeam from "../components/OurTeam";
import Insights from "../components/Insights";
import Objectives from "../components/Objectives";
import ContactUs from "../components/ContactUs";
import Footer from "../chat/components/Footer";

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-3">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-white">
            <div className="font-bold text-sm sm:text-lg">AYI Group</div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-white">
          <a href="#home" className="hover:text-blue-300 transition-colors text-sm lg:text-base">Home</a>
          <a href="#about" className="hover:text-blue-300 transition-colors text-sm lg:text-base">About Us</a>
          <a href="/account-page" className="hover:text-blue-300 transition-colors text-sm lg:text-base">Services</a>
          <a href="#ourteam" className="hover:text-blue-300 transition-colors text-sm lg:text-base">FAQs</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors text-sm lg:text-base">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-gray-900/95 backdrop-blur-sm`}>
        <div className="px-4 py-4 space-y-2">
          <a 
            href="#home" 
            className="block text-white hover:text-blue-300 transition-colors py-3 px-2 rounded hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block text-white hover:text-blue-300 transition-colors py-3 px-2 rounded hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
          <a 
            href="/account-page" 
            className="block text-white hover:text-blue-300 transition-colors py-3 px-2 rounded hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            Services
          </a>
          <a 
            href="#ourteam" 
            className="block text-white hover:text-blue-300 transition-colors py-3 px-2 rounded hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            FAQs
          </a>
          <a 
            href="#contact" 
            className="block text-white hover:text-blue-300 transition-colors py-3 px-2 rounded hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate zoom effect based on scroll position
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const scrollProgress = Math.min(scrollY / heroHeight, 1);
  const scale = 1 + scrollProgress * 0.2; // Reduced zoom for better mobile performance
  const opacity = Math.max(1 - scrollProgress * 0.3, 0.7); // Prevent complete fade

  return (
    <>  
      <div className="font-sans bg-gray-900 text-white">
        <Navbar isScrolled={isScrolled} />
        
        {/* Home anchor point */}
        <div id="home"></div>
        
        <section className="min-h-screen relative overflow-hidden">
          
          {/* Zoom container */}
          <div 
            className="absolute inset-0 transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${scale})`,
              opacity: opacity
            }}
          >
            
            {/* Mobile-first background design */}
            <div className="absolute inset-0">
              {/* Mobile: Simple gradient background */}
              <div className="block md:hidden w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"></div>
              
              {/* Desktop: Light background with diagonal */}
              <div className="hidden md:block w-full h-full bg-gradient-to-br from-gray-50 to-gray-100"></div>
            </div>

            {/* Desktop diagonal cut - Hidden on mobile */}
            <div className="hidden md:block absolute inset-0">
              <div 
                className="backgroundSection absolute right-0 top-0 w-3/5 lg:w-3/5 h-full bg-gradient-to-br from-blue-600 via-black to-black "
                style={{
                  clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              />
            </div>

            {/* Business people silhouettes - Desktop only */}
            <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-96 opacity-80">
              <div className="relative w-full h-full">
              </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
                  
                  {/* Content Column */}
                  <div className="space-y-6 lg:space-y-8 pt-20 pb-12 lg:pt-0 lg:pb-0">
                    {/* Mobile: White text on blue background, Desktop: Dark text on light background */}
                    <div className="space-y-4 lg:space-y-6 text-center md:text-left">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white md:text-gray-900">
                        Empowering Africa's Youth Through Investment
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 md:text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Join us in creating a future where youth thrive through saving and investment.
                      </p>
                      
                      {/* Button with hover effect */}
                      <div className="pt-4 lg:pt-6">
                      <Link to={"/login"}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white md:bg-blue-600 text-blue-600 md:text-white hover:bg-blue-50 md:hover:bg-blue-700 py-3 px-8 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs mx-auto md:mx-0"
                          >
                          Get Started
                        </motion.button>
                          </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Visual space for desktop diagonal design */}
                  <div className="hidden lg:block relative">
                    {/* This space allows the diagonal blue section to show through */}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots - Responsive positioning */}
            <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-12 flex space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
            </div>

          </div>
        </section>
      </div>

      <div id="about">
        <Objectives />
      </div>
      <div id="ourteam">
        <OurTeam />
      </div>
      <div>
        <Insights />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    <Footer />
    </>
  );
};

export default Homepage;