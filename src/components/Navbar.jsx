import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = true;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`${
          isFixed
            ? "fixed top-0 left-0 w-full shadow-md z-50"
            : "relative w-full text-white"
        } py-4 px-8 transition-all duration-300 ease-in-out bg-white`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={"/"}>
          {/* Logo */}
          <div className="text-black text-2xl font-semibold flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain mr-2"
            />
            <div>
              <h1 className="text-sm font-bold" style={{ fontFamily: "bahnschrift light" }}>
                AYI Group
              </h1>
              <h1 className="text-xs font-normal offer">
                <span className="text-red-500">{23}% offers</span> &nbsp;
                <span className="text-green-500">10% interest</span>
              </h1>
            </div>
          </div>
        </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-sm font-semibold text-black">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition">
              About
            </button>
            <button onClick={() => scrollToSection("team")} className="hover:text-blue-600 transition">
              OurTeam
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition">
              Contact Us
            </button>

            {isLoggedIn ? (
              <Link to="/account-page">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition ease-in-out duration-300">
                  Enter AYI Systems
                </button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <button className="bg-black text-white border-2 border-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 hover:border-blue-700 transition ease-in-out duration-300">
                    Register Now
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-black text-white border-2 border-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 hover:border-blue-700 transition ease-in-out duration-300">
                    Sign in
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.nav>

      {/* WhatsApp Contact Button */}
      {!isOpen && (
        <motion.div
          className="fixed hover:bg-green-500 top-20 right-4 bg-white text-black py-2 px-5 rounded-full shadow-lg cursor-pointer z-50 flex items-center space-x-3"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.6)",
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: "0px 5px 15px rgba(255, 165, 0, 0.8)",
          }}
          onClick={() => window.open("https://wa.me/+250788967462", "_blank")}
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-sm font-semibold">Get in touch</span>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
