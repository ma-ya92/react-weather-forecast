import React, { useState } from "react";
import "./Weather.css";

export default function SearchForm({ onChange }) {
  const [city, setCity] = useState("");

  function updateCity(event) {
    event.preventDefault();
    onChange(city);
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="mt-3">
      <nav
        className="navbar p-0 justify-content-center"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div>
          <form role="search" className="d-flex" onSubmit={updateCity}>
            <div className="p-2 m-2">
              <input
                className="form-control me-2 p-2 font-weight-light"
                type="search"
                placeholder="Type a city"
                aria-label="search"
                onChange={handleCityChange}
              />
            </div>

            <div className="p-2 m-2">
              <button
                className="btn btn-info"
                type="search"
                style={{ color: "white" }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
