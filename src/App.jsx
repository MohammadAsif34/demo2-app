import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Weather from "./pages/weather/Weather";
import Calculator from "./pages/calculator/calculator";
import Sidebar from "./components/sidebar/Sidebar";
import Todos from "./pages/todos/Todos";
import AppLayout from "./pages/applayout/AppLayout";

const layout1 = () => {};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/calculator",
          element: <Calculator />,
        },
        {
          path: "/weather",
          element: <Weather />,
        },
        {
          path: "/todos",
          element: <Todos />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
