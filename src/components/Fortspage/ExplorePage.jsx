import React, { useEffect, useState } from "react";
import QuizModal from "../Quizmodal/QuizModal.jsx";
const API_KEY = 'AIzaSyC0JoP0OPIUabzoQIeRgScp1tyHax0G9gI';

import axios from "axios";

// Imported images (same as your previous list)
import Aguada from "../../assets/aguada.jpeg";
import Ajinkyatara from "../../assets/ajinkyatara.jpg";
import Alangad from "../../assets/alangad.jpg";
import Ankai from "../../assets/ankai.jpg";
import Antur from "../../assets/antur.jpg";
import Arnala from "../../assets/arnala.jpg";
import Avchitgad from "../../assets/avchitgad.jpg";
import Bahadurgad from "../../assets/bahadurgad.jpg";
import Ballaleshwar from "../../assets/ballaleshwar.jpg";
import Bassein from "../../assets/bassein.jpg";
import Belapur from "../../assets/belapur.jpg";
import Chandan from "../../assets/chandan.jpg";
import Chavand from "../../assets/chavand.jpg";
import Dategad from "../../assets/dategad.jpg";
import DaulatabadFort from "../../assets/Daulatabad Fort.jpg";
import Daulatabad from "../../assets/daulatabad.png";
import Gadad from "../../assets/gadad.jpg";
import Ghangad from "../../assets/ghangad.jpg";
import Ghargad from "../../assets/ghargad.jpg";
import Hanumantgad from "../../assets/hanumantgad.jpg";
import HarishchandragadFort from "../../assets/HarishchandragadFort.jpg";
import Janjira from "../../assets/jinja.jpg";
import KorigadFort from "../../assets/Korigad Fort.jpg";
import Lohagad from "../../assets/lohagad.png";
import LohagadFort from "../../assets/Lohagad Fort.jpg";
import Madangad from "../../assets/madangad.png";
import Mahim from "../../assets/mahim.png";
import Mahuli from "../../assets/Mahuli.png";
import Manikgad from "../../assets/Manikgad.png";
import Morgiri from "../../assets/Morgiri.png";
import MurudJanjiraFort from "../../assets/Murud-Janjira Fort.jpg";
import Naldurg from "../../assets/Naldurg.png";
import PanhalaFort from "../../assets/Panhala Fort.jpg";
import Prabalgad from "../../assets/Prabalgad.png";
import Pratapfort from "../../assets/pratapfort.jpg";
import Pratapgad from "../../assets/Pratapgad Fort.jpg";
import PurandarFort from "../../assets/Purandar Fort.jpg";
import Purandar from "../../assets/Purandar.png";
import Raigad from "../../assets/Raigad.png";
import RaigadFort from "../../assets/raigadfort.avif";
import RajgadFort from "../../assets/Rajgad Fort.png";
import Ratangad from "../../assets/Ratangad Fort.jpg";
import ShivneriFort from "../../assets/Shivneri Fort.jpg";
import SindhudurgFort from "../../assets/Sindhudurg Fort.jpg";
import SinhagadFort from "../../assets/Sinhagad Fort.jpeg";
import Sinhagadfort from "../../assets/sinhagadfort.png";
import SionFort from "../../assets/sion-fort.jpg";
import Sudhagad from "../../assets/Sudhagad.jpg";
import TornaFort from "../../assets/Torna Fort.jpg";
import VijaydurgFort from "../../assets/Vijaydurg Fort.jpg";
import VisapurFort from "../../assets/Visapur Fort.jpg";

const FALLBACK_IMAGE = "https://www.maharashtratourism.gov.in/images/forts-default.jpg";

const fortImages = {
  "Aguada": Aguada,
  "Ajinkyatara": Ajinkyatara,
  "Alangad": Alangad,
  "Ankai": Ankai,
  "Antur": Antur,
  "Arnala": Arnala,
  "Avchitgad": Avchitgad,
  "Bahadurgad": Bahadurgad,
  "Ballaleshwar": Ballaleshwar,
  "Bassein": Bassein,
  "Belapur": Belapur,
  "Chandan": Chandan,
  "Chavand": Chavand,
  "Dategad": Dategad,
  "Daulatabad Fort": DaulatabadFort,
  "Daulatabad": Daulatabad,
  "Gadad": Gadad,
  "Ghangad": Ghangad,
  "Ghargad": Ghargad,
  "Hanumantgad": Hanumantgad,
  "Harishchandragad Fort": HarishchandragadFort,
  "Janjira": Janjira,
  "Korigad Fort": KorigadFort,
  "Lohagad": Lohagad,
  "Lohagad Fort": LohagadFort,
  "Madangad": Madangad,
  "Mahim": Mahim,
  "Mahuli": Mahuli,
  "Manikgad": Manikgad,
  "Morgiri": Morgiri,
  "Murud-Janjira Fort": MurudJanjiraFort,
  "Naldurg": Naldurg,
  "Panhala Fort": PanhalaFort,
  "Prabalgad": Prabalgad,
  "Pratapfort": Pratapfort,
  "Pratapgad": Pratapgad,
  "Purandar Fort": PurandarFort,
  "Purandar": Purandar,
  "Raigad": Raigad,
  "Raigad Fort": RaigadFort,
  "Rajgad Fort": RajgadFort,
  "Ratangad": Ratangad,
  "Shivneri Fort": ShivneriFort,
  "Sindhudurg Fort": SindhudurgFort,
  "Sinhagad Fort": SinhagadFort,
  "Sinhagadfort": Sinhagadfort,
  "Sion Fort": SionFort,
  "Sudhagad": Sudhagad,
  "Torna Fort": TornaFort,
  "Vijaydurg Fort": VijaydurgFort,
  "Visapur Fort": VisapurFort,
};

const ExplorePage = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFort, setSelectedFort] = useState(null);
  const [showBot, setShowBot] = useState(false);
const [userInput, setUserInput] = useState("");
const [chat, setChat] = useState([
  { sender: "bot", text: "Hi! Ask me anything about Maharashtra's forts." }
]);

const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";

const sendMessage = async () => {
  if (!userInput.trim()) return;

  const newChat = [...chat, { sender: "user", text: userInput }];
  setChat(newChat);
  setUserInput("");

  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: userInput }] }]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const botText = res.data.candidates[0]?.content?.parts[0]?.text || "Sorry, I didn't get that.";
    setChat([...newChat, { sender: "bot", text: botText }]);
  } catch (error) {
    setChat([...newChat, { sender: "bot", text: "Something went wrong. Try again later." }]);
  }
};


  useEffect(() => {
    const fetchForts = async () => {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: 'List 42 major forts in Maharashtra. For each fort, provide: Fort Name, Location (district and nearest town), Brief History (2-3 sentences), and Elevation (in meters). Format each forts information with clear labels. Do not use any asterisks or special characters. Put sion fort first. Include Aguada, Ajinkyatara, Alangad, Ankai, Antur, Arnala, Avchitgad, Bahadurgad, Ballaleshwar, Bassein, Belapur, Chandan, Chavand, Dategad, Daulatabad Fort, Gadad, Ghangad, Ghargad, Hanumantgad, Harishchandragad Fort, Janjira, Korigad Fort, Lohagad Fort, Madangad, Mahim, Mahuli, Manikgad, Morgiri, Murud-Janjira Fort, Naldurg, Panhala Fort, Prabalgad, Pratapfort, Pratapgad, Purandar Fort, Raigad Fort, Rajgad Fort, Ratangad, Shivneri Fort, Sindhudurg Fort, Sinhagad Fort, Sion Fort, Sudhagad, Torna Fort, Vijaydurg Fort, and Visapur Fort.'
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textResponse) throw new Error("No response from API");

        const fortEntries = textResponse.split(/(?=Fort Name:)/);

        const parsedForts = fortEntries.map((entry) => {
          const nameMatch = entry.match(/Fort Name:\s*([^\n]*)/);
          const locationMatch = entry.match(/Location:\s*([^\n]*)/);
          const historyMatch = entry.match(/History:\s*([^\n]*)/);
          const elevationMatch = entry.match(/Elevation:\s*([^\n]*)/);

          if (!nameMatch) return null;

          const name = nameMatch[1]?.trim();
          return {
            name,
            location: locationMatch?.[1]?.trim() || "Location not available",
            history: historyMatch?.[1]?.trim() || "History not available",
            elevation: elevationMatch?.[1]?.trim() || "Elevation not available",
            image: fortImages[name] || FALLBACK_IMAGE
          };
        });

        setForts(parsedForts.filter(Boolean));
      } catch (error) {
        console.error("Error fetching forts:", error);
        setForts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchForts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#5C3A21] to-[#2E1C0B] text-[#F5EBD0] min-h-screen p-6 font-serif">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#D2A679] to-[#E4C89D] drop-shadow-lg tracking-wide mt-40">
          Forts of Maharashtra
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D2A679]"></div>
          </div>
        ) : forts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forts.map((fort, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#6C4C2C]/90 to-[#3E2C1C]/90 rounded-xl overflow-hidden shadow-xl border border-[#BFA382] hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedFort(fort)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={fort.image}
                    alt={fort.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = FALLBACK_IMAGE;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C1C]/80 to-transparent"></div>
                  <h2 className="absolute bottom-4 left-4 text-2xl font-extrabold text-[#F5EBD0] drop-shadow-md tracking-wider">
                    {fort.name}
                  </h2>
                </div>
                <div className="p-6 space-y-3 text-[#F5EBD0]">
                  <div>
                    <h3 className="text-sm font-semibold text-[#D2A679] uppercase tracking-wide">Location</h3>
                    <p>{fort.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#D2A679] uppercase tracking-wide">History</h3>
                    <p>{fort.history}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#D2A679] uppercase tracking-wide">Elevation</h3>
                    <p>{fort.elevation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl mt-8">No forts found.</p>
        )}
      </div>

      <div className="fixed bottom-4 right-4 z-50">
  <button
    onClick={() => setShowBot(!showBot)}
    className="bg-[#D2A679] text-[#3E2C1C] px-4 py-2 rounded-full shadow-lg hover:bg-[#E4C89D] font-bold"
  >
    {showBot ? "Close Chat" : "Chat with FortBot"}
  </button>

  {showBot && (
    <div className="mt-4 w-80 bg-white text-black rounded-lg p-4 shadow-2xl max-h-96 overflow-y-auto space-y-2">
      {chat.map((msg, index) => (
        <div key={index} className={`text-sm ${msg.sender === "bot" ? "text-left" : "text-right"}`}>
          <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "bot" ? "bg-gray-200" : "bg-[#D2A679] text-white"}`}>
            {msg.text}
          </span>
        </div>
      ))}
      <div className="flex mt-2">
        <input
          className="flex-1 border border-gray-300 rounded-l px-2 py-1 text-sm"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-[#D2A679] text-white px-3 rounded-r text-sm"
        >
          Send
        </button>
      </div>
    </div>
  )}
</div>


      {selectedFort && (
        <QuizModal
          isOpen={!!selectedFort}
          onClose={() => setSelectedFort(null)}
          fort={selectedFort}
        />
      )}
    </div>
  );
};

export default ExplorePage;
