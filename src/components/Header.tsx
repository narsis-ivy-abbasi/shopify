import { Menu, Slack, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useBasket } from "./BasketContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/products", label: "Products" },
    { to: "/", label: "Home" },
  ];
  const { totalQuantity } = useBasket();
  return (
    <header className="bg-gray-100 p-4 mb-10 flex justify-between items-center relative">
      <div className="flex items-center">
        <Slack /> <label className="font-mono font-bold px-2">IVY</label>
      </div>
      <div className="flex gap-2">
        <div className="relative flex text-gray-950  ">
          <span className="absolute -top-1 -right-2 bg-green-500 rounded-full px-1 text-[8px]">{totalQuantity>9? "9+" : totalQuantity}</span>
          <div>🛒</div>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        {/* desktop menu  */}
        <nav className="hidden md:block">
          <ul className="flex md:flex-row m-0 p-0 items-center">
            {navLinks.map((nav) => (
              <li className="mx-2 md:my-0">
                <NavLink
                  to={nav.to}
                  className={({ isActive }) =>
                    `font-normal text-black  ${
                      isActive ? "font-black underline" : ""
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* mobile menu  */}
        <div
          className={`fixed top-24 right-8 rounded-lg h-54 w-40 border shadow-sm bg-white z-50 transform transition-transform duration-300 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col justify-center items-center ">
            <ul className="flex flex-col  items-center w-full  ">
              {navLinks.reverse().map((nav) => (
                <li className="text-xl my-2 hover:bg-gray-300 flex rounded-lg py-1 w-full">
                  <NavLink
                    to={nav.to}
                    className={({ isActive }) =>
                      `font-normal text-black w-full  ${
                        isActive ? "font-black underline" : ""
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
