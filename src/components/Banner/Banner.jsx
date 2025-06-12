import React from "react";
import FortImg from "../../assets/sion-fort.jpg";
import bgvideo from "../../assets/bg.mp4";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative text-white pb-12 z-10 min-h-screen flex items-center">
      {/* Background Video */}
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

      {/* Foreground Content */}
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Fort Image */}
          <div>
            <img
              data-aos="zoom-in"
              src={FortImg}
              alt="Historic Fort"
              className="w-full sm:w-[80%] mx-auto max-h-[400px] object-cover rounded-2xl border-4 border-yellow-700 shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 xl:pr-24 p-6 border-r-2 border-b-2 border-yellow-800 rounded-br-3xl">
            <p
              data-aos="fade-up"
              className="text-yellow-500 uppercase tracking-widest font-semibold text-sm"
            >
              Legacy of the Marathas
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="uppercase text-4xl md:text-5xl font-serif font-bold text-amber-400 drop-shadow-sm"
            >
              Forts of Maharashtra
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-stone-200 leading-relaxed font-light"
            >
              Traverse the mighty walls and ancient gateways of Maharashtra's
              forts — from Raigad's royal echoes to Pratapgad’s heroic tales.
              These timeless structures bear witness to the indomitable spirit
              and strategic brilliance of the Maratha Empire.
            </p>
            <Link to="/explore">
              <button
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-4 px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold hover:brightness-110 transition shadow-md"
              >
                Learn More
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
