import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div сlassName="WeatherTemperature">
      <span className="weatherIndex"> {props.celsius} </span>
      <span className="units">
        <button href="#" className="link-button">
          {" "}
          °C
        </button>
        |<button className="link-button"> °F</button>
      </span>
    </div>
  );
}
