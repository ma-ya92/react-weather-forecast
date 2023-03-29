import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { useEffect } from "react";

export default function InfoBlock(props) {
  let weatherData = {
    date: "Friday 21:02",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemp(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
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
              {weatherData.date}
              <li>
                <strong> {temp} </strong>
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
            <img src={icon} alt="" width="85px" />
          </div>
          <div className="col-4">
            <ul className="list-unstyled">
              <br />
              <li className="font-italic pt-2">Humidity: {humidity}%</li>
              <li className="font-italic pb-2">Wind:{wind} m/h</li>
              <br />
              <li />
            </ul>
          </div>
        </div>
      </div>
      <p>
        <a
          href="https://github.com/ma-ya92/react-weather-forecast"
          target="_blank"
        >
          Open-source code
        </a>
        &nbsp;by Mariia Yaroshenko
      </p>
    </div>
  );
}
