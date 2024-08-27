import React, { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  function onWeightChange(event){
    setWeight(event.target.value)
  }
  function onHeightChange(event){
    setHeight(event.target.value)
  }
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight}</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="20"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height}</p>
        <input className="input-slider" type="range" 
        onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">100</p>
      </div>
    </main>
  );
}
