import React, { useState } from "react";
import { factors } from "./OnboardingFactors";

function ReflectionTwo({ handleContinueClick, handleBackClick }) {
  console.log(sessionStorage);

  const [burnoutFactorSelection, setBurnoutFactorSelection] = useState("");

  const selectAnswer = (event) => {
    event.preventDefault();
    const val = event.currentTarget.value;
    setBurnoutFactorSelection(val);
    sessionStorage.setItem("burnoutFactor", factors[val].name);
  };

  return (
    <div>
      <div>
        <p>Reflection 2 of 4</p>
      </div>
      <div>
        <div>
          <h2>What is causing me to burn out?</h2>
          <p class="description">Pick the main factor</p>
        </div>
        <div>
          <select
            name="burnout factors"
            id="burnout-factors-select-list"
            onChange={(event) => selectAnswer(event)}
            defaultValue="none"
          >
            <option value="none" disabled hidden>
              --Select one--
            </option>
            <option value={0}>{factors[0].description}</option>
            <option value={1}>{factors[1].description}</option>
            <option value={2}>{factors[2].description}</option>
            <option value={3}>{factors[3].description}</option>
            <option value={4}>{factors[4].description}</option>
            <option value={5}>{factors[5].description}</option>
            <option value={6}>{factors[6].description}</option>
            <option value={7}>{factors[7].description}</option>
          </select>
        </div>
      </div>
      {burnoutFactorSelection != "" && (
        <div>
          <h4>{factors[burnoutFactorSelection].description}</h4>
          <p>{factors[burnoutFactorSelection].data}</p>
        </div>
      )}
      <button onClick={handleBackClick}>Back</button>
      {burnoutFactorSelection !== "" && (
        <button onClick={() => handleContinueClick(burnoutFactorSelection)}>
          {">"}
        </button>
      )}
    </div>
  );
}

export default ReflectionTwo;
