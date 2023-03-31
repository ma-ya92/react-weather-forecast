import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { useEffect } from "react";
import FormattedDate from "./FormattedDate";

export default function InfoBlock(props) {
  const [weatherData, setWeatherData] = useState({});

  function showTemperature(response) {
    console.log(response.data.main.temp);

    setWeatherData({
      temp: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
    });
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  useEffect(() => {
    if (props.city) {
      axios.get(apiUrl).then(showTemperature);
    }
  }, [props.city]);

  return (
    <div className="Weather">
      <div className="d-flex main_block">
        <div className="col-4">
          <ul className="list-unstyled pt-3 m-0">
            <li className="card-text" /> <strong> {props.city}</strong>
            <FormattedDate className="fst-italic" date={new Date()} />
            <li>
              <span className="weatherIndex"> {weatherData.temp} </span>
              <span className="units">
                <button href="#" className="link-button">
                  {" "}
                  °C
                </button>
                |<button className="link-button"> °F</button>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <img src={weatherData.icon} alt="" width="130px" height="130px" />
        </div>
        <div className="col-4 pt-5">
          <ul className="list-unstyled">
            <li> </li>
            <li className="font-italic pt-2">
              Humidity: {weatherData.humidity}%
            </li>
            <li className="font-italic pb-2">Wind: {weatherData.wind}m/h</li>
            <li />
          </ul>
        </div>
      </div>
      <p>
        <button
          className="link-button"
          href="https://github.com/ma-ya92/react-weather-forecast"
          target="_blank"
        >
          Open-source code
        </button>
        &nbsp;by Mariia Yaroshenko
      </p>
    </div>
  );
}
