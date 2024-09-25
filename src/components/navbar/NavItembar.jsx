import React from "react";
import "./NavItembar.css";

const NavItembar = () => {
  return (
    <div className="bg-teal-600">
      <div className="container h-10 m-auto   flex items-center">
        <ul className=" h-full   flex">
          <li className="h-full px-5 hover:bg-teal-500 flex items-center justify-center">
            <i className="bi bi-list"></i>
          </li>
          <li className="h-full px-5 hover:bg-teal-500 flex items-center justify-center">
            digital
          </li>
          <li className="h-full px-5 hover:bg-teal-500 flex items-center justify-center">
            portfolio
          </li>
          <li className="h-full px-5 hover:bg-teal-500 flex items-center justify-center">
            contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavItembar;
