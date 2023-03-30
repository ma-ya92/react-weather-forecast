import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { useEffect } from "react";

export default function InfoBlock(props) {
  const [weatherData, setWeatherData] = useState({});

  function showTemperature(response) {
    setWeatherData({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    });
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  useEffect(() => {
    if (props.city) {
      axios.get(apiUrl).then(showTemperature);
    }
  });

  return (
    <div className="Weather">
      <div>
        <div className="d-flex justify-content-center main_block">
          <div className="col-4">
            <ul className="list-unstyled">
              <br />
              <li className="card-text" />
              {props.city}
              <li className="font-italic" />
              PUT HERE A DATE!
              <li>
                <strong> {weatherData.temp} </strong>
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
          <div className="col-4 mt-1" float-center>
            <img src={weatherData.icon} alt="" width="85px" />
          </div>
          <div className="col-4">
            <ul className="list-unstyled">
              <br />
              <li className="font-italic pt-2">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="font-italic pb-2">Wind:{weatherData.wind} m/h</li>
              <br />
              <li />
            </ul>
          </div>
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
