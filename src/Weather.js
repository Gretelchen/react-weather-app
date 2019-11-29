import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      timestamp: new Date(response.data.dt * 1000),
      city: response.data.name
    });
    setReady(true);
  }

  function handleSumbmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `2fed1584ca3221a55333f6e6fcb1d723`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div>
        <div className="container">
          <header>
            <div className="logo">
              Orange<div>Weather</div>
            </div>
            <form onSubmit={handleSumbmit}>
              <div className="row search-engine">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="type your city"
                    className="form-control"
                    onChange={handleChangeCity}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-outline-light search-button"
                  />
                </div>
              </div>
            </form>
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
              <div className="col-6 timestamp">
                <FormatDate date={weatherData.timestamp} />
              </div>
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
    search();

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
