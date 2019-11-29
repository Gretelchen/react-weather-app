import React from "react";
import "./App.css";
import "./FormatDate";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Weather defaultCity="Tokyo" />
        </div>
      </header>
    </div>
  );
}

export default App;
