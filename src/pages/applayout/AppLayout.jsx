import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import NavItembar from "../../components/navbar/NavItembar";

const AppLayout = () => {
  return (
    <> 
      <Navbar />
      <NavItembar />
      <div className="flex">
        <Sidebar />
        <div className="overflow-auto w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
