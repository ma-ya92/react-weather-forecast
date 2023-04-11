import axios from "axios";
import React, { useState } from "react";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast mt-2 pb-2">
        <div className="main_block d-flex">
          <div className="col">
            <div> {forecast[0].dt} </div>
            <div> {forecast[0].weather[0].icon}</div>
            <span> {forecast[0].temp.max}°</span>
            <span> {forecast[0].temp.min} °</span>
          </div>
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
