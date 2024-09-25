import React, { useState } from "react";
import "./Weather.css";
import icon from "../../assets/react.svg";
const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    icon: icon,
    day: "",
    date: "",
    temprature: "",
    condition: "",
    windSpeed: "",
    chanceOfRain: "",
    pressure: "",
    humidity: "",
  });
  const apiURL = `http://api.weatherapi.com/v1/current.json?key=1a8e28697433417eb2c182933242209&q=${cityName}`;
  const fetchdata = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) =>
        setWeather({
          name: data.location.name + ", " + data.location.region,
          icon: data.current.condition.icon,
          day: "day",
          date: "date",
          temprature: data.current.temp_c,
          condition: data.current.condition.text,
          windSpeed: data.current.wind_kph,
          chanceOfRain: "null",
          pressure: data.current.pressure_in,
          humidity: data.current.humidity,
        })
      );
  };

  // some extra data
  const weatherData = [
    {
      icon: "bi bi-arrow-up-left-circle",
      name: "wind speed",
      data: weather.windSpeed + "  kph",
    },
    {
      icon: "bi bi-cloud-drizzle",
      name: "chance of rain",
      data: weather.chanceOfRain + " %",
    },
    {
      icon: "bi bi-thermometer-half",
      name: "pressure",
      data: weather.pressure + " psi",
    },
    { icon: "bi bi-droplet", name: "humidity", data: weather.humidity + " %" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    fetchdata();
    setCityName(" ");
  };
  // fetchdata();

  return (
    <>
      <div className="main ">
        <div className=" searchBox w-2/5 h-14 m-auto mt-16 p-1 rounded-xl backdrop:blur-lg  ">
          <form
            action=""
            className="h-full w-full flex text-2xl"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="region..."
              className="h-full px-4 flex-1 outline-none bg-transparent"
              onChange={(e) => setCityName(e.target.value)}
            />
            <button
              type="sub,it"
              className="h-full px-6 text-white rounded-lg capitalize bg-teal-600"
            >
              search
            </button>
          </form>
        </div>

        <div className="flex justify-center my-6">
          <div className="box   rounded-xl shadow-lg  z-0  ">
            <div className="p-2 flex justify-center items-center z-10 rounded-xl ">
              <div className=" h-fit min-w-60 p-4  flex-1 flex flex-col items-center ">
                <h2 className="text-2xl  capitalize">
                  {!weather == "" ? weather.name : "----"}
                </h2>
                <div className="w-28 h-28 mt-4 flex justify-center items-center ">
                  <img
                    src={!weather == "" ? weather.icon : icon}
                    className="w-full h-full"
                  />
                </div>
                <p className="my-4 text-xl capitalize ">{weather.name}</p>
                <h1 className="text-6xl font-semibold">
                  {!weather == "" ? weather.temprature : "--"} &deg;
                  <span>c</span>
                </h1>
                <p className="mt-4 text-md text-wrap text-center font-semibold capitalize">
                  {!weather == "" ? weather.condition : "----"}
                </p>
              </div>
              {/* sec-2  */}
              <div className="box2 p-4 flex flex-col">
                {weatherData.map((item) => (
                  <div className="childBox p-2 my-1 shadow-xl rounded-xl flex">
                    <div className="px-4 text-3xl flex justify-center items-center">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <p className="text-lg">
                        {!weather == "" ? item.data : " -- "}
                      </p>
                      <p className="text-xl capitalize font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
