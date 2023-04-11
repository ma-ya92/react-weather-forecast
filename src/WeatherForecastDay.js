import React from "react";

export default function WeatherForecastDay(props) {
  function tempMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function tempMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast-day">
      <div>{day()}</div>
      <div>
        {" "}
        <img src={props.icon} alt="" width="85px" />
      </div>
      <span> {tempMax()}</span>
      <span>{tempMin()}</span>
    </div>
  );
}
