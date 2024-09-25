import React, { useState } from "react";
import "./Calculator.css";

const Calc = () => {
  const [number, setNumber] = useState("");
  console.log(number);

  const handleInput = (val) => {
    // e.preventDefault();
    setNumber(val);
  };
  return (
    <div className="mainCalc flex justify-center items-center ">
      <div className="calc border p-4 rounded-xl shadow-xl z-0">
        {/* output  */}
        <div className="output w-full h-fit p-3 border rounded-lg">
          <p className="h-10 text-2xl bg-orange-700 text-right">value</p>
          <input
            type="number"
            className="w-full h-10 text-3xl bg-orange-500 outline-none text-right "
            onChange={(e) => handleInput(e.target.value)}
          />
          {/* <p className="h-10 text-2xl bg-orange-600 text-right ">value</p> */}
        </div>
        <div className=" w-full pt-5 flex">
          {/* int*/}
          <div className=" grid grid-cols-3">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>0</button>
            <button>.</button>
            <button>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
          {/* operator  */}
          <div className=" text-orange-500 font-semibold grid  grid-cols-2">
            {/* <button>a</button> */}
            <button>ac</button>
            <button>%</button>
            <button>&times;</button>
            <button>/</button>
            <button>&minus;</button>
            <button className="row-span-1">+</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
