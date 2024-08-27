import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col px-4 py-8 lg:px-8 lg:py-12">
      <h1 className="text-3xl flex justify-center lg:text-5xl font-bold mb-4 md:mb-10">
        About EcoTravel
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-6">
            Our Mission
          </h2>
          <p className="text-base lg:text-lg mb-4 lg:mb-6">
            EcoTravel is dedicated to promoting sustainable travel practices and
            helping travelers understand their environmental impact. Our mission
            is to make it easy for everyone to calculate and reduce their carbon
            footprint while exploring the world.
          </p>
          <p className="text-base lg:text-lg">
            We believe that responsible tourism can be a powerful force for
            positive change, contributing to the preservation of natural
            habitats, supporting local communities, and raising awareness about
            global environmental challenges.
          </p>
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-6">
            What We Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 lg:space-y-4 text-base lg:text-lg">
            <li>Provide accurate carbon footprint calculations for flights</li>
            <li>Offer eco-friendly travel tips and alternatives</li>
            <li>Partner with sustainable tourism initiatives</li>
            <li>
              Educate travelers about the importance of responsible tourism
            </li>
            <li>
              Continuously research and update our methods to ensure accuracy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
