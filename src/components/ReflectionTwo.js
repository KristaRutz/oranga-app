import React, { useState } from "react";

const WORKLOAD = "workload";
const CONTROL = "control";
const REWARD = "reward";
const COMMUNITY = "community";
const FAIRNESS = "fairness";
const VALUES = "values";

const factors = {
  1: {
    name: WORKLOAD,
    description: "I am overwhelmed by my workload",
  },
  2: {
    name: CONTROL,
    description: "I don't have control over my work context",
  },
  3: {
    name: REWARD,
    description: "I am not appropiately rewarded for the work I do",
  },
  4: {
    name: COMMUNITY,
    description: "My workplace culture causes burnout",
  },
  5: {
    name: FAIRNESS,
    description: "I'm not treated fairly at work",
  },
  6: {
    name: VALUES,
    description: "My work doesn't align with my values",
  },
};

function ReflectionTwo({ handleContinueClick, handleBackClick }) {
  console.log(sessionStorage);

  const [burnoutFactorSelection, setBurnoutFactorSelection] = useState("");

  const selectAnswer = (event) => {
    event.preventDefault();
    const val = event.target.value;
    setBurnoutFactorSelection(val);
    sessionStorage.setItem("burnoutFactor", val);
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
          >
            <option value="" disabled>
              --Select one--
            </option>
            <option value={factors[1].name}>{factors[1].description}</option>
            <option value={factors[2].name}>{factors[2].description}</option>
            <option value={factors[3].name}>{factors[3].description}</option>
            <option value={factors[4].name}>{factors[4].description}</option>
            <option value={factors[5].name}>{factors[5].description}</option>
            <option value={factors[6].name}>{factors[6].description}</option>
          </select>
        </div>
      </div>
      {burnoutFactorSelection != "" && (
        <div>
          <h4>{burnoutFactorSelection}</h4>
        </div>
      )}
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionTwo;
