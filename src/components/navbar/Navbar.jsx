import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import ProjectDropDown from "../drop-down/ProjectDropDown";
import Weather from "../../pages/weather/Weather";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const navItem = [
    { name: "Home", link: "/", dropdown: <Weather /> },
    { name: "About", link: "/about", dropdown: "" },
    { name: "Project", link: "/project", dropdown: <ProjectDropDown /> },
    { name: "Blogs", link: "/blogs", dropdown: "" },
    { name: "Contact", link: "/contact", dropdown: "" },
    { name: "Weather", link: "/weather", dropdown: "" },
    { name: "Calculator", link: "/calculator", dropdown: "" },
  ];

  console.log(isVisible);
  return (
    <nav className="bg-teal-500 p-3">
      <div className="container m-auto w-full h-full p-3 flex bg-teal-600 rounded-2xl">
        <div className="w-64 h-full flex items-center pl-2">
          <Link to="/">
            <p className="text-2xl text-white uppercase font-semibold font-serif ">
              mohammad asif
            </p>
          </Link>
        </div>
        <div className="h-full  flex-1 flex justify-center">
          <ul className="flex">
            {navItem.map((item, index) => (
              <Link to={item.link} key={index}>
                <li
                  className="w-28 py-2 px-5 text-xl text-white hover:bg-teal-500 cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                  {/* {isVisible && item.dropdown} */}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
