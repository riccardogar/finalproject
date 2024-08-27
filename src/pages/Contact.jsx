import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Semplificazione della funzione handleChange
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Semplificazione della funzione handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xs md:max-w-md lg:max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-sm sm:text-base md:text-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-sm sm:text-base md:text-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 text-sm sm:text-base md:text-lg"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-32 md:w-40 lg:w-48 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
