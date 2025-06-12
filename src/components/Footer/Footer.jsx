import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import CollegeLogo from "../../assets/logo.jpg"; // Adjust the path as necessary

const Footer = () => {
  return (
    <div className="bg-[#2f1b0c] text-[#f5f0e6] px-5 font-serif relative z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          {/* First Column */}
          <div className="py-8 px-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 text-[#f5d7b9]">
              Explore Maharashtra's Forts
            </h1>
            <p className="text-justify leading-6">
              Get the latest updates on the history, stories, and hidden gems of
              Maharashtra’s legendary forts.
            </p>
            <div className="flex items-center h-10 mt-5">
              <input
                type="text"
                className="py-2 px-3 w-full h-full focus:outline-none border-2 border-[#9c7b53] focus:ring-2 focus:ring-[#d9a76c] bg-[#3d2613] placeholder:text-[#e6d4bb] text-white"
                placeholder="Enter your email"
              />
              <button className="ml-2 bg-[#d9a76c] text-[#2f1b0c] px-4 py-2 font-semibold rounded-md hover:bg-[#c8904f]">
                Subscribe
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-[#f5d7b9]">Quick Links</h1>
              <ul className="flex flex-col gap-2 text-[#fcecd9]">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">Forts </Link></li>
                <li><Link to="/forts" className="hover:underline">Timeline</Link></li>
                <li><Link to="/contact" className="hover:underline">Gallery</Link></li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-[#f5d7b9]">Explore</h1>
              <ul className="flex flex-col gap-2 text-[#fcecd9]">
                <li><Link to="/explore" className="hover:underline">Raigad Fort</Link></li>
                <li><Link to="/explore" className="hover:underline">Sinhagad Fort</Link></li>
                <li><Link to="/explore" className="hover:underline">Pratapgad Fort</Link></li>
                <li><Link to="/explore" className="hover:underline">Rajgad Fort</Link></li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-[#f5d7b9]">Contact Us</h1>
              <div className="space-y-3 text-[#fcecd9]">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Maharashtra, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdMessage />
                  <p>fortsmaha@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <p>+91 9820136967</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
                  {/* Bottom Section */}
          <div className="hidden sm:block border-t border-[#8c6846] pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <img src={CollegeLogo} alt="College Logo" className="w-12 h-12" />
                <div className="text-sm text-[#d4bfa8] leading-snug">
                  <p className="font-semibold text-base">Fr. Conceicao Rodrigues College of Engineering, Bandra</p>
                  <p>Under Guidance of: Dr. Surendra Singh Rathod</p>
                </div>
              </div>

              {/* Center Section */}
              <span className="text-sm text-[#d4bfa8] text-center">
                © 2024 Forts of Maharashtra. All rights reserved.
              </span>

              {/* Right Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex gap-4">
                  <a href="#"><FaInstagram className="text-2xl hover:text-[#e1c6a4]" /></a>
                  <a href="#"><FaFacebook className="text-2xl hover:text-[#e1c6a4]" /></a>
                  <a href="#"><FaLinkedin className="text-2xl hover:text-[#e1c6a4]" /></a>
                </div>
                <ul className="flex gap-4 text-sm text-[#d4bfa8]">
                  <li className="hover:underline cursor-pointer">Privacy Policy</li>
                  <li className="hover:underline cursor-pointer">Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>

      </section>
    </div>
  );
};

export default Footer;
