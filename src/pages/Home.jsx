import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center mt-20">
      <h1 className="text-4xl lg:text-5xl font-bold mb-20">
        Welcome to EcoTravel
      </h1>
      <p className="text-lg lg:text-2xl mb-20">
        Discover how to travel sustainably and reduce your carbon footprint.
      </p>
      <Link
        to="/calculator"
        className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"
      >
        Calculate Your Flight Footprint
      </Link>
    </div>
  );
};

export default Home;
