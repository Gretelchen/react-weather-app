import React from "react";

export default function Weather() {
  let weatherData = {
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: "20",
    timestamp: "MON 12:00",
    city: "Santorini"
  };

  return (
    <div>
      <div className="container">
        <header>
          <div className="logo">
            Orange<div>Weather</div>
          </div>

          <div className="row search-engine">
            <div className="col-4">
              <button
                className="location-button"
                type="button"
                class="btn btn-outline-light"
              >
                your location
              </button>
            </div>
            <div className="col-8">
              <form inline>
                <input
                  type="text"
                  placeholder="type your city"
                  className="search-bar"
                />
                <button
                  className="search-button"
                  type="button"
                  class="btn btn-outline-light"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </header>
        <section>
          <div className="row">
            <div className="col-6">
              {" "}
              <img
                className="float-right icon"
                src={weatherData.iconUrl}
                alt="sund and cloudy"
                width="130"
              />
            </div>
            <div className="col-6">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">
                <a href="/">°C</a> | <a href="/"> °F</a>
              </span>
            </div>
          </div>
        </section>
        <footer>
          <div className="row">
            <div className="col-6 timestamp">{weatherData.timestamp}</div>
            <div className="col-6 city">{weatherData.city}</div>
          </div>
        </footer>
      </div>
      <small>
        <a href={"https://github.com/Gretelchen/Weather-App"} target={`blanc`}>
          this app is opened sourced
        </a>
        <span> by Tanja Klawitter</span>
      </small>
    </div>
  );
}
