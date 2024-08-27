import React, { useState } from "react";
import axios from "axios";
import { airports } from "../dataflights";

const FlightFootprintCalculator = ({ isDarkMode }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cabinClass, setCabinClass] = useState("economy");
  const [passengers, setPassengers] = useState(1);
  const [footprint, setFootprint] = useState(null);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const handleInputChange = (setter, setSuggestions) => (e) => {
    const value = e.target.value;
    setter(value);

    if (value.length > 1) {
      const suggestions = airports.filter(
        (airport) =>
          airport.name.toLowerCase().includes(value.toLowerCase()) ||
          airport.city.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(suggestions.slice(0, 5)); // Mostra solo i primi 5 suggerimenti
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (setter, setSuggestions) => (airport) => {
    setter(
      `${airport.code} - ${airport.name} (${airport.city}, ${airport.country})`
    );
    setSuggestions([]);
  };

  const calculateFootprint = async () => {
    try {
      const response = await axios.get(
        "https://api.goclimate.com/v1/flight_footprint",
        {
          auth: {
            username: "42cfd63046bc7f883e0614d5",
            password: "",
          },
          params: {
            "segments[0][origin]": origin.split(" - ")[0],
            "segments[0][destination]": destination.split(" - ")[0],
            cabin_class: cabinClass,
            "currencies[]": "USD",
          },
        }
      );
      setFootprint(response.data.footprint);
    } catch (error) {
      console.error("Error calculating footprint", error);
    }
  };

  const handleCabinClassChange = (e) => {
    setCabinClass(e.target.value);
    setFootprint(null);
  };

  const handlePassengersChange = (e) => {
    let value = parseInt(e.target.value);

    if (isNaN(value) || value < 1) {
      value = 1; // Imposta il valore minimo a 1
    } else if (value > 10) {
      value = 10; // Limita il valore massimo a 10
    }

    setPassengers(value);
    setFootprint(null);
  };

  const getPassengerEmojis = () => {
    return "🧍".repeat(passengers);
  };

  // Verifica se i campi origin e destination sono compilati
  const canCalculate = origin.trim() !== "" && destination.trim() !== "";

  return (
    <div
      className={`p-4 border ${
        isDarkMode ? "border-gray-600" : "border-gray-300"
      } max-w-3xl mx-auto`}
    >
      <div className="mb-4">
        <label
          className={`block text-sm md:text-base font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Origin
        </label>
        <div className="relative mx-auto w-4/5 md:w-3/4">
          <input
            type="text"
            value={origin}
            onChange={handleInputChange(setOrigin, setOriginSuggestions)}
            className={`mt-1 p-2 border ${
              isDarkMode
                ? "border-gray-600 bg-gray-800 text-gray-200"
                : "border-gray-300 bg-white text-black"
            } rounded w-full`}
          />
          {originSuggestions.length > 0 && (
            <ul
              className={`absolute left-0 border ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700 text-gray-200"
                  : "border-gray-300 bg-white text-black"
              } rounded mt-1 w-full z-10`}
            >
              {originSuggestions.map((airport) => (
                <li
                  key={airport.code}
                  onClick={() =>
                    handleSelectSuggestion(
                      setOrigin,
                      setOriginSuggestions
                    )(airport)
                  }
                  className="p-2 cursor-pointer hover:bg-gray-400"
                >
                  {airport.code} - {airport.name} ({airport.city},{" "}
                  {airport.country})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className={`block text-sm md:text-base font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Destination
        </label>
        <div className="relative mx-auto w-4/5 md:w-3/4">
          <input
            type="text"
            value={destination}
            onChange={handleInputChange(
              setDestination,
              setDestinationSuggestions
            )}
            className={`mt-1 p-2 border ${
              isDarkMode
                ? "border-gray-600 bg-gray-800 text-gray-200"
                : "border-gray-300 bg-white text-black"
            } rounded w-full`}
          />
          {destinationSuggestions.length > 0 && (
            <ul
              className={`absolute left-0 border ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700 text-gray-200"
                  : "border-gray-300 bg-white text-black"
              } rounded mt-1 w-full z-10`}
            >
              {destinationSuggestions.map((airport) => (
                <li
                  key={airport.code}
                  onClick={() =>
                    handleSelectSuggestion(
                      setDestination,
                      setDestinationSuggestions
                    )(airport)
                  }
                  className="p-2 cursor-pointer hover:bg-gray-400"
                >
                  {airport.code} - {airport.name} ({airport.city},{" "}
                  {airport.country})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className={`block text-sm md:text-base font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Cabin Class
        </label>
        <select
          value={cabinClass}
          onChange={handleCabinClassChange}
          className={`mt-1 p-2 border ${
            isDarkMode
              ? "border-gray-600 bg-gray-800 text-gray-200"
              : "border-gray-300 bg-white text-black"
          } rounded w-4/5 md:w-3/4 mx-auto`}
        >
          <option value="economy">Economy 💺</option>
          <option value="premium_economy">Premium Economy 🌟</option>
          <option value="business">Business 💼</option>
          <option value="first">First ✨</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className={`block text-sm md:text-base font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Passengers {getPassengerEmojis()}
        </label>
        <input
          type="number"
          value={passengers}
          onChange={handlePassengersChange}
          className={`mt-1 p-2 border ${
            isDarkMode
              ? "border-gray-600 bg-gray-800 text-gray-200"
              : "border-gray-300 bg-white text-black"
          } rounded w-4/5 md:w-3/4 mx-auto`}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={calculateFootprint}
          disabled={!canCalculate} // Disabilita il pulsante se i campi non sono compilati
          className={`p-2 rounded w-32 md:w-48 ${
            canCalculate
              ? "bg-blue-500 text-white cursor-pointer"
              : "bg-gray-400 text-gray-300 cursor-not-allowed"
          }`}
        >
          Calculate Footprint
        </button>
      </div>
      {footprint && (
        <div className="mt-4">
          <h2
            className={`text-xl md:text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Results:
          </h2>
          <p className={isDarkMode ? "text-gray-200" : "text-gray-700"}>
            Total CO2 for {passengers} passenger{passengers > 1 ? "s" : ""}:{" "}
            {((footprint * passengers) / 1000).toFixed(1)} tonnes
          </p>
          {passengers > 1 && (
            <p className={isDarkMode ? "text-gray-200" : "text-gray-700"}>
              CO2 per passenger: {(footprint / 1000).toFixed(1)} tonnes
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FlightFootprintCalculator;
