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

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setIsOpen(false);
      }
    };

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
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="text-black text-2xl font-semibold">
            <Link to="/" className="flex">
              <img
                src={logo}
                alt="logo"
                className="w-1/5 sm:w-1/6 md:w-1/6 lg:w-1/12"
              />
              <h1
                className="text-sm mt-3 font-bold"
                style={{ fontFamily: "bahnschrift light" }}
              >
                AYI Group
              </h1>
              <h1 className="px-5 pt-3 font-normal offer space-x-2">
                <span className="text-red-500">{23}% offers</span>
                <span className="text-green-500"> 10% interest</span>
              </h1>
            </Link>
          </div>

          {/* User and Cart Icons */}
          <div className="space-x-5 w-full text-xl text-black">
            {isLoggedIn ? (
              <>
                <div className="relative float-right space-x-6 flex items-center">
                  <Link to="/account-page">
                    <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition ease-in-out duration-300">
                      Enter AYI Systems
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="float-right space-x-6">
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
                </div>
              </>
            )}
          </div>
        </div>
      </motion.nav>

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
