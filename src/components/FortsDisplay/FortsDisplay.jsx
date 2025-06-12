import React from "react";

const FortsDisplay = ({ forts, loading }) => {
  return (
    <div>
      {loading ? (
        <p className="text-center mt-4">Loading forts...</p>
      ) : forts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {forts.map((fort, index) => (
            <div key={index} className="bg-sky-900/60 p-4 rounded-lg text-center">
              <h2 className="text-2xl mt-2">{fort.name}</h2>
              <p className="text-sm">📍 {fort.location}</p>
              <p className="text-sm">{fort.history}</p>
              <p className="text-sm">🏔 Elevation: {fort.elevation}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No forts data available.</p>
      )}
    </div>
  );
};

export default FortsDisplay;
