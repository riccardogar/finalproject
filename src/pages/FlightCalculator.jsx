import React from "react";
import FlightFootprintCalculator from "./FlightFootprintCalculator";
const FlightCalculator = ({ isDarkMode }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">
        Flight Carbon Footprint Calculator 🌍
      </h1>
      <FlightFootprintCalculator isDarkMode={isDarkMode} />
    </div>
  );
};

export default FlightCalculator;
