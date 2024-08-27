import React from "react";
import TipCard from "../components/TipCard";

const Tips = () => {
  return (
    <div className="container mx-auto flex flex-col px-4 py-8 lg:px-6 lg:py-10">
      <h1 className="text-3xl lg:text-4xl flex justify-center font-bold mb-6 lg:mb-7">
        Eco-Friendly Travel Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        <TipCard
          title="Choose Eco-Friendly Transportation"
          tips={[
            "Opt for direct flights to reduce emissions",
            "Consider train travel for shorter distances",
            "Use public transportation or rent electric vehicles at your destination",
            "Explore bike-sharing programs for local transportation",
          ]}
        />
        <TipCard
          title="Sustainable Accommodation"
          tips={[
            "Stay in eco-certified hotels or eco-lodges",
            "Look for accommodations with green initiatives",
            "Consider homestays to support local communities",
            "Use energy and water responsibly during your stay",
          ]}
        />
        <TipCard
          title="Responsible Packing"
          tips={[
            "Pack light to decrease the plane's fuel consumption",
            "Bring a reusable water bottle and shopping bag",
            "Pack eco-friendly toiletries and sunscreen",
            "Include a portable solar charger for your devices",
          ]}
        />
        <TipCard
          title="Mindful Consumption"
          tips={[
            "Support local and sustainable businesses",
            "Choose locally-sourced food and beverages",
            "Avoid single-use plastics and disposable items",
            "Purchase ethically-made souvenirs",
          ]}
        />
        <TipCard
          title="Respect Local Environments"
          tips={[
            "Stay on designated trails when hiking",
            "Participate in beach or trail clean-ups",
            "Observe wildlife from a distance",
            "Learn about and respect local customs and traditions",
          ]}
        />
        <TipCard
          title="Offset Your Impact"
          tips={[
            "Calculate your trip's carbon footprint",
            "Invest in verified carbon offset programs",
            "Support local conservation projects",
            "Plant trees or contribute to reforestation efforts",
          ]}
        />
      </div>
    </div>
  );
};

export default Tips;
