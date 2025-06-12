const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
GEMINI_API_KEY = 'AIzaSyC0JoP0OPIUabzoQIeRgScp1tyHax0G9gI'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/api/getNearbyForts", async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Latitude and longitude required" });
  }

  try {
    const prompt = `Give me a JSON array of 6 historical forts in Maharashtra that are nearest to the coordinates: lat=${lat}, lng=${lng}. Each object should include name, lat, lng, brief, image (URL), and bestTime. Keep it short and informative. Reply ONLY with a JSON array.`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    console.log("Raw Gemini response:", text);

    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]");
    const jsonText = text.slice(jsonStart, jsonEnd + 1);

    let forts;

    try {
      forts = JSON.parse(jsonText);
    } catch (jsonErr) {
      console.error("JSON parse error:", jsonErr.message);
      return res.status(500).json({ error: "Failed to parse Gemini response" });
    }

    res.json(forts);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message || err);
    res.status(500).json({ error: "Failed to fetch forts from Gemini API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
