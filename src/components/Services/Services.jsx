import React from "react";
import { Link } from "react-router-dom";
import sion from "../../assets/sion-fort.jpg";
import fortVideo from "../../assets/video.mp4";
import fortPdf from "../../assets/iks.pdf";
import bgvideo from "../../assets/bg.mp4";

const Services = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen text-white p-8 gap-10">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Fort Image Section */}
      <div className="relative w-full max-w-lg h-[450px] rounded-2xl overflow-hidden z-10 shadow-2xl border-2 border-yellow-800">
        <img
          src={sion}
          alt="Sion Fort"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>

      {/* Historical Info Section */}
    <div
      className="relative z-10 bg-gradient-to-b from-[#3B2F2F] to-[#1E1A1A] p-8 rounded-[1.5rem] max-w-lg text-center shadow-2xl border-4 border-yellow-800 backdrop-blur-sm font-serif tracking-wide"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400 drop-shadow-md">
        Sion Fort
      </h1>
      <p className="text-md text-yellow-300 italic mb-2 tracking-wider">
        “A silent sentinel from the 17th century, still watching over Mumbai.”
      </p>
      <p className="text-lg font-medium text-yellow-100 mb-2">Elevation: 46 meters</p>

      <p className="text-sm text-stone-200 mb-4 leading-relaxed">
        Constructed by the British East India Company in the late 1600s, the Sion Fort was a vital lookout post guarding the northern gateway to Bombay Island. Surrounded by verdant growth, its crumbling bastions whisper tales of colonial conflicts and maritime vigilance.
      </p>

      <p className="text-sm text-stone-200 mb-4 leading-relaxed">
        Today, the fort remains a symbol of endurance, with ancient cannons, moss-clad stones, and panoramic views stretching across the modern metropolis—a must-visit for heritage lovers and history enthusiasts.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <a
          href={fortPdf}
          download
          className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 px-5 py-2 rounded-lg text-black font-serif font-semibold hover:brightness-110 transition duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] border border-yellow-900"
        >
           Download PDF
        </a>
        <a
          href={fortVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#7B2E2E] to-[#A94438] px-5 py-2 rounded-lg text-white font-serif font-semibold hover:brightness-110 transition duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-red-900"
        >
           Watch Video
        </a>
        <Link
          to="/360-view"
          className="bg-gradient-to-r from-[#3C5F44] to-[#4A7D50] px-5 py-2 rounded-lg text-white font-serif font-semibold hover:brightness-110 transition duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-green-900"
        >
           360° View
        </Link>
      </div>
    </div>

    </div>
  );
};

export default Services;
