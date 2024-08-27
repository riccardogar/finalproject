import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-primary text-2xl font-bold">
            EcoTravel
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLinks />
          </div>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="text-primary mr-4">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary md:hidden"
            >
              <FaBars />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <NavLinks vertical />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ vertical }) => (
  <ul
    className={`${
      vertical ? "flex flex-col items-center space-y-2" : "flex space-x-4"
    }`}
  >
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/calculator">Flight Calculator</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/tips">Eco Tips</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
);

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-primary hover:text-accent">
    {children}
  </Link>
);

export default Navbar;
