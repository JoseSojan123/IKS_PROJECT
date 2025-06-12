import React from "react";

const Fort360View = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-6 p-6">
      <h1 className="text-3xl font-bold text-white">360° View of Sion Fort</h1>

      {/* Google Maps Street View Embed */}
      <div className="w-full max-w-4xl h-[500px] border-2 border-gray-700 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1743741604553!6m8!1m7!1sCAoSLEFGMVFpcE5reW5YT3N5VkdtQjNjM0pzSXFvdTRRdmN3VFJvV3hhTFRrNy1B!2m2!1d19.0465922768387!2d72.86768187567176!3f162.9624588079727!4f8.606021658001964!5f0.4000000000000002"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Fort360View;


