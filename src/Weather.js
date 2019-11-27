import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: response.data.main.temp,
      timestamp: "MON 12:00",
      city: response.data.name
    });
    setReady(true);
  }

  if (ready) {
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
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
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
          <a
            href={"https://github.com/Gretelchen/react-weather-app"}
            target={`blanc`}
          >
            this app is opened sourced
          </a>
          <span> by Tanja Klawitter</span>
        </small>
      </div>
    );
  } else {
    const apiKey = `2fed1584ca3221a55333f6e6fcb1d723`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
