import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Left Section - About */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-semibold tracking-wide text-gray-200">AYI-community</h2>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              Empowering communities through seamless connections. Join us today to be part of something great!
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex space-x-10 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-gray-300">Company</h3>
              <ul className="space-y-2 mt-4">
                <li><a href="/" target='_blank' className="text-gray-400 hover:text-gray-200 transition-colors">About Us</a></li>
                <li><a href="/" target='_blank' className="text-gray-400 hover:text-gray-200 transition-colors">Careers</a></li>
                <li><a href="/" target='_blank' className="text-gray-400 hover:text-gray-200 transition-colors">Contact</a></li>
                <li><a href="/" target='_blank' className="text-gray-400 hover:text-gray-200 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300">Support</h3>
              <ul className="space-y-2 mt-4">
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center mt-8 border-t border-gray-600 pt-6">
          <p className="text-sm text-gray-400">© 2025 AYI-Sphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
