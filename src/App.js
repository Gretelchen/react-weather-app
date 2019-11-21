import React from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Weather />
        </div>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </header>
    </div>
  );
}

export default App;
