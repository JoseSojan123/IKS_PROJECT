// src/components/Forts.jsx
import React, { useState, useEffect } from "react";
import fort1 from "../../assets/fort1.png"; // Adjust path if needed
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const LocationSelector = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });
  return null;
};

const Forts = () => {
  const [location, setLocation] = useState(null);
  const [nearbyForts, setNearbyForts] = useState([]);

  useEffect(() => {
    if (location) {
      fetch(`/api/getNearbyForts?lat=${location.lat}&lng=${location.lng}`)
        .then((res) => res.json())
        .then((data) => setNearbyForts(data))
        .catch((err) => console.error("Error fetching forts:", err));
    }
  }, [location]);

  return (
      
   
    
    <div className="min-h-screen bg-[#3b2f2f] text-[#f5e4c3] p-4">
      <h1 className="text-3xl font-bold mb-6 mt-20 text-center">
        Discover Forts Near You
      </h1>

      {location ? (
        <>
          <h2 className="text-2xl font-semibold mb-3">Forts Near You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.isArray(nearbyForts) &&
            nearbyForts.map((fort, i) => (
              <div
                key={i}
                className="bg-[#4b2e1e] border-2 border-[#d4af37] rounded-xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative font-serif"
              >
                <div className="text-4xl text-center mb-2"></div> {/* Optional heritage icon */}
                <h2 className="text-2xl text-[#f5deb3] font-extrabold tracking-wide mb-1 text-center">
                  {fort.name}
                </h2>
                <p className="text-yellow-200 italic text-center text-sm mb-2">
                  Distance: {fort.distance} km
                </p>
                <hr className="border-[#d4af37] mb-3" />
                <p className="text-sm leading-relaxed text-stone-200">{fort.brief}</p>
                <p className="text-xs mt-4 text-stone-300 text-right">
                  <strong>Best time:</strong> {fort.bestTime}
                </p>
              </div>
            ))}

          </div>
        </>
      ) : (
        <p className="text-stone-300 mt-4 mb-8">
          Click on the map to select your location.
        </p>
      )}

      <MapContainer
        center={[19.7515, 75.7139]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-[450px] w-full rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationSelector setLocation={setLocation} />

        {location && (
          <Marker position={[location.lat, location.lng]}>
            <Popup>Your location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Forts;
