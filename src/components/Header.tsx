import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 mb-5">
      <nav>
        <ul className="flex m-0 p-0 justify-end">
          <li className="mx-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-normal text-black   ${
                  isActive ? "font-black underline" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-normal text-black  ${
                  isActive ? "font-black underline" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-normal text-black  ${
                  isActive ? "font-black underline" : ""
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-normal text-black  ${
                  isActive ? "font-black underline" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
