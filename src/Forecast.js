import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast mt-2 pb-2">
        <div className="main_block d-flex">
          <WeatherForecastDay data={forecast[0]} />
          <WeatherForecastDay data={forecast[1]} />
          <WeatherForecastDay data={forecast[2]} />
          <WeatherForecastDay data={forecast[3]} />
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "An API problem";
  }
}
