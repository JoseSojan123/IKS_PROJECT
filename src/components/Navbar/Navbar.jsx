import React from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[99] bg-gradient-to-b from-[#e0a96d]/50 via-[#a86b32]/40 to-[#4b2e1e]/0 py-4 shadow-md font-serif"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-10 text-white font-bold text-2xl">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <span className="tracking-wider">TheFortChronicles</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 text-lg text-yellow-100">
              <li className="hover:scale-110 transition-transform duration-300 hover:text-yellow-300">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:scale-110 transition-transform duration-300 hover:text-yellow-300">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=forts+in+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forts
                </a>
              </li>
              <li className="hover:scale-110 transition-transform duration-300 hover:text-yellow-300">
                <Link to="/timeline">Timeline</Link>
              </li>
              <li className="hover:scale-110 transition-transform duration-300 hover:text-yellow-300">
                <Link to="/sionvisit">Our Visit</Link>
              </li>
            </ul>
          </div>

          {/* Explore Button */}
          <div className="ml-10">
            <button className="text-yellow-100 border-2 border-yellow-400 px-5 py-2 rounded-lg hover:scale-110 transition-transform duration-300 hover:bg-yellow-500 hover:text-black font-semibold">
              <Link to="/explore">Explore</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
