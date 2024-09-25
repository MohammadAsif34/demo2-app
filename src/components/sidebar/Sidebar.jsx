import React, { useState } from "react";
import "./Sidebar.css";
import ProjectDropDown from "../drop-down/ProjectDropDown";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleDropDown = (data) => {
    if (isVisible === false) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div className="mainSidebar bg-teal-800 ">
      <div className=" capitalize">
        <ul>
          <li className=" px-8 py-3 text-xl text-white cursor-pointer">
            <span onClick={handleDropDown}>project</span>
            <span className="float-right" onClick={handleDropDown}>
              {isVisible ? (
                <i className="bi bi-caret-up"></i>
              ) : (
                <i className="bi bi-caret-down"></i>
              )}
            </span>
            {isVisible && (
              <ul className="px-4 text-lg bg-teal-700 text-gray-800">
                <Link to="/weather">
                  <li className="hover:text-white">weather</li>
                </Link>
                <Link to="/calculator">
                  <li className="hover:text-white">calculator</li>
                </Link>
                <Link to="/todos">
                  <li className="hover:text-white">todos</li>
                </Link>
              </ul>
            )}
          </li>
          <li className=" px-8 py-3 text-xl text-white cursor-pointer">
            <span onClick={handleDropDown}>project</span>
            <span className="float-right" onClick={handleDropDown}>
              {isVisible ? (
                <i className="bi bi-caret-up"></i>
              ) : (
                <i className="bi bi-caret-down"></i>
              )}
            </span>
            {isVisible && (
              <ul className="px-4 text-lg bg-teal-700 text-gray-800">
                <Link to="/weather">
                  <li className="hover:text-white">weather</li>
                </Link>
                <Link to="/calculator">
                  <li className="hover:text-white">calculator</li>
                </Link>
                <Link to="/todos">
                  <li className="hover:text-white">todos</li>
                </Link>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
