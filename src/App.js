import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import OurWork from "./components/OurWork";
import OfficeCleaning from "./components/services/OfficeCleaning";
import CommrcialCleaning from "./components/services/CommercialCleaning";
import MouldRemediation from "./components/services/MouldRemediation";
import SteamCleaning from "./components/services/SteamCleaning";
import Resealing from "./components/services/Resealing";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import ScrollToTop from "./components/Scroll";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/office" element={<OfficeCleaning />} />
            <Route path="/ourwork" element={<OurWork />} />

            <Route path="/CommrcialCleaning" element={<CommrcialCleaning />} />

            <Route path="/MouldRemediation" element={<MouldRemediation />} />
            <Route path="/SteamCleaning" element={<SteamCleaning />} />

            <Route path="/Resealing" element={<Resealing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
