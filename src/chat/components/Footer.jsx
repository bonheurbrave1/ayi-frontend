import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/logo.png"
const Footer = () => { 
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3">
                <img src={logo} alt="AYI Investments Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-lg">AYI Group</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Africa's youth through strategic investments and financial education. 
              Building a future where young people thrive through saving and investment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="/account-page" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#ourteam" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Youth Investment Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Financial Education</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Savings Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Wealth Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Consultation</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 mr-3 text-blue-400" />
                <p className="text-gray-400 text-sm">Rwanda - Kigali, Kibagabaga</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 mr-3 text-blue-400" />
                <div>

                <p className="text-gray-400 text-sm">+250 782 029 528
                </p>

                <p className="text-gray-400 text-sm">+250 788 967 462
                </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-3 text-blue-400" />
                <p className="text-gray-400 text-sm">afriyouthinvest@gmail.com
                </p>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white text-sm px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AYI Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;