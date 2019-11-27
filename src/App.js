import React from "react";
import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Weather defaultCity="Berlin" />
        </div>
      </header>
    </div>
  );
}

export default App;
