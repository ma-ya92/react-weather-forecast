import React, { useState } from "react";
import "./Weather.css";

import InfoBlock from "./InfoBlock";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";

export default function Parent() {
  const [city, setCity] = useState("Lviv");

  function updateCity(city) {
    setCity(city);
  }

  return (
    <div class="container">
      <SearchForm onChange={updateCity} />
      <InfoBlock city={city} />
      <Forecast />
    </div>
  );
}
