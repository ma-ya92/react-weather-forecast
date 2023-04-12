import React, { useState } from "react";
import "./Weather.css";
import InfoBlock from "./InfoBlock";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

export default function Parent() {
  const [city, setCity] = useState("Lviv");

  function updateCity(city) {
    setCity(city);
  }

  return (
    <div className="container">
      <SearchForm onChange={updateCity} />
      <InfoBlock city={city} />
      <Footer />
    </div>
  );
}
