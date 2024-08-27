import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FlightCalculator from "./pages/FlightCalculator";
import About from "./pages/About";
import Tips from "./pages/Tips";
import Contact from "./pages/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow bg-primary text-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/calculator"
              element={<FlightCalculator isDarkMode={isDarkMode} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//42cfd63046bc7f883e0614d5//
