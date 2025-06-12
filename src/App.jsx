import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bgVideo from "./assets/bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import ExplorePage from "./components/Fortspage/ExplorePage";
import Fort360View from "./components/360view/360view";
import Timeline from "./components/timeline/timeline";
import Forts from "./components/Forts/Forts"
import Sion from "./components/Sionvisit/sionvisit";


import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <div className="h-[700px] relative">
                <video
                  autoPlay
                  loop
                  muted
                  className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
                >
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <Hero />
              </div>
              <Services />
              <Banner />
              <Banner2 />
              <Footer />
            </div>
          }
        />

        {/* Explore Page */}
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/forts" element={<Forts />} />
        <Route path="/sionvisit" element={<Sion />} />

        

        {/* 360° View Page */}
        <Route path="/360-view" element={<Fort360View />} />
      </Routes>
    </Router>
  );
};

export default App;
