import React from "react";
import "./assets/styles/app.css"
function App() {
  return (
    <div className="App">
      <div className="form__control container">
        <input type="text" placeholder="Enter the city name"/>
      </div>
      <div className="center__content container">
      <div className="content">
        <div className="city__name">
          <h1>Denver</h1>
        </div>
        <div className="city__degree">
          <span>65 C</span>
        </div>
      </div>
      <div className="bottom__content">
        <div className="">

        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
