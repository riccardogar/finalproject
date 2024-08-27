import React from "react";

const TipCard = ({ title, tips }) => (
  <div className="bg-white dark:bg-gray-700 flex flex-col p-5 lg:p-6 rounded-lg shadow-md">
    <h2 className="text-xl lg:text-xl flex justify-center text-center font-semibold mb-4 lg:mb-5">
      {title}
    </h2>
    <ul className="list-disc pl-5 space-y-2 lg:space-y-3 text-base lg:text-base">
      {tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>
  </div>
);

export default TipCard;
