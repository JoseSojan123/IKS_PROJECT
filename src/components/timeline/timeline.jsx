import React, { useState, useRef, useEffect } from "react";
import { MapPin, Clock, Shield, Scroll } from "lucide-react";
import fortsData from "../fortsdata/fortsdata"; // Adjust path if needed
import bgvideo from "../../assets/bg.mp4"; // Adjust path if needed

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll wheel -> horizontal scroll
  useEffect(() => {
    const el = scrollContainerRef.current;
    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // Arrow keys scroll
  useEffect(() => {
    const handleKey = (e) => {
      if (!scrollContainerRef.current) return;
      if (e.key === "ArrowRight") scrollContainerRef.current.scrollLeft += 200;
      if (e.key === "ArrowLeft") scrollContainerRef.current.scrollLeft -= 200;
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative min-h-screen py-12 px-6 overflow-hidden bg-gradient-to-b from-[#3b2f2f] via-[#4b2e1e] to-[#1e140e] text-[#f5e4c3]">

      {/* Heritage Texture Background */}
      <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
    >
      <source src={bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center mb-16 mt-12">
        <span className="text-[#f1d9a7] drop-shadow-md">
          Historical Timeline of Forts
        </span>


        </h1>

        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-yellow-800/40 transform -translate-x-1/2"></div>

        {/* Scrollable cards */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto pb-12 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-16 px-8 min-w-max">
            {fortsData.map((fort, index) => (
              <div
                key={index}
                className={`relative w-96 transform transition-all duration-500 ${
                  hoveredIndex === index
                    ? "scale-105 z-10"
                    : hoveredIndex !== null
                    ? "scale-95 opacity-75"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="bg-gradient-to-b from-[#4b2e1e] to-[#a86b32] rounded-xl shadow-[0_4px_30px_rgba(255,191,0,0.1)] overflow-hidden border border-amber-700/30 hover:border-yellow-500/50 hover:bg-[#4b2e1e]/80 hover:backdrop-blur-md transition duration-300">
                  <div className="relative">
                    <img
                      src={fort.image}
                      alt={fort.name}
                      className="h-48 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-[#ffd369]" />
                      <h2 className="text-2xl font-bold text-[#f1d9a7] drop-shadow">
                        {fort.name}
                      </h2>
                    </div>

                    <p className="text-[#f5e4c3] mb-4">{fort.brief}</p>
                    <h2 className="text-xl font-bold text-[#f1d9a7] drop-shadow mb-2">
                      {fort.year}
                    </h2>

                    <ul className="space-y-2">
                      {fort.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Scroll className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-[#f5e4c3]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector line */}
                <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-yellow-900/40 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini-map buttons */}
        <div className="flex justify-center mt-10 flex-wrap gap-4">
          {fortsData.map((fort, i) => (
            <button
              key={i}
              onClick={() => {
                const scrollAmount =
                  scrollContainerRef.current.scrollWidth / fortsData.length;
                scrollContainerRef.current.scrollLeft = scrollAmount * i;
              }}
              className="text-sm px-3 py-1 rounded bg-yellow-700/30 hover:bg-yellow-600/60 text-[#fdf0ce] transition"
            >
              {fort.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
