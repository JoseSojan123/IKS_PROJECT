import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Images
import img1 from "../../assets/main.jpg";
import img2 from "../../assets/main2.jpg";
import img3 from "../../assets/main3.webp";

const Hero = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full bg-black/60 text-white z-50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-10 z-0"></div>

      <div className="h-full flex justify-center items-center px-6 py-12 relative z-10">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Text Side */}
          <div className="space-y-6 lg:pr-24">
            <h1
              data-aos="fade-up"
              className="text-5xl md:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 font-serif drop-shadow-xl"
            >
              Explore the Forts of Maharashtra
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg text-stone-200 leading-relaxed font-light"
            >
              Journey through time and walk the ramparts of Maharashtra’s
              majestic forts. From the royal throne of Raigad to the rugged cliffs of Sinhagad,
              witness the legacy of the Maratha empire etched in stone and glory.
            </p>
            <Link to="/forts">
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="mt-4 px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-semibold hover:brightness-110 transition shadow-lg"
              >
                Begin Your Journey
              </button>
            </Link>
          </div>

          {/* Slideshow Side */}
          <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-xl border-4 border-amber-700 shadow-xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Fort"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
