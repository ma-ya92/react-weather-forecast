import React, { useState } from "react";
import "./Weather.css";

import InfoBlock from "./InfoBlock";
import SearchForm from "./SearchForm";

export default function Parent() {
  const [city, setCity] = useState("Lviv");

  function updateCity(city) {
    setCity(city);
  }

  return (
    <div class="container">
      <SearchForm onChange={updateCity} />
      <InfoBlock city={city} />
    </div>
  );
}
