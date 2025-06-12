import React from "react";
import sion1 from "../../assets/sion1.jpg";
import sion2 from "../../assets/sion2.jpg";
import sion3 from "../../assets/sion3.jpg";
import fortBg from "../../assets/bg.mp4"; // Your background video

const SionFortVisit = () => {
  const galleryImages = [sion1, sion2, sion3];

  return (
    <div className="relative min-h-screen font-serif text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.4]"
      >
        <source src={fortBg} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="bg-[#fdf6e3] text-[#3e2c1c] rounded-xl p-10 shadow-2xl border border-yellow-600">
          <h1 className="text-5xl font-bold mb-6 leading-tight border-b border-yellow-600 pb-4">
            Sion Fort Visit
          </h1>

          <p className="text-lg leading-relaxed mb-4">
            Our group recently visited <strong>Sion Fort</strong>, a historically
            significant structure in Mumbai. Built in the 17th century, it served
            as a watchtower and has witnessed numerous events in the city's
            colonial history.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            The atmosphere was serene, with local flora reclaiming the fort’s
            stone pathways. The view from the top provided a panoramic look at
            Mumbai’s northern stretch — blending modernity with heritage.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-yellow-600">
            Photo Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#5c2e1c] to-[#a35d27] text-[#fce7c1]"
              >
                <img
                  src={img}
                  alt={`Sion Fort ${i + 1}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Sion Fort View {i + 1}</h3>
                  <p className="text-sm opacity-80">
                    Glimpses from our visit to the historical fort.
                  </p>
                </div>
              </div>
            ))}
          </div>


          <p className="text-sm text-right mt-6 italic text-gray-700">
            Report prepared by: Group 3 IKS
          </p>
        </div>
      </div>
    </div>
  );
};

export default SionFortVisit;
