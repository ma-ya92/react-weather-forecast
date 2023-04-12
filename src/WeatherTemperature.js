import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="weatherIndex"> {props.celsius} </span>
        <span className="units">
          <button href="#" className="link-button">
            {" "}
            °C
          </button>
          |
          <button className="link-button" onClick={showFahrenheit}>
            {" "}
            °F{" "}
          </button>
        </span>
      </div>
    );
  } else
    return (
      <div сlassName="WeatherTemperature">
        <span className="weatherIndex ps-2"> {fahrenheit()} </span>
        <span className="units">
          <button href="#" className="link-button" onClick={showCelsius}>
            {" "}
            °C
          </button>
          |<button className="link-button"> °F </button>
        </span>
      </div>
    );
}
