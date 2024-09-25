import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "../weather/Weather";
import Calculator from "../calculator/calculator";
import Todos from "../todos/Todos";

const Home = () => {
  return (
    <div className="mainHome ">
            <div className=" flex">
        <Sidebar />
      </div>
      {/* <h1>this is home</h1> */}
    </div>
  );
};

export default Home;
