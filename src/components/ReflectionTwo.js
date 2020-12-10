import React, { useState } from "react";

const WORKLOAD = "workload";
const CONTROL = "control";
const REWARD = "reward";
const COMMUNITY = "community";
const FAIRNESS = "fairness";
const VALUES = "values";
const NOT_SURE = "not sure";
const OTHER = "other";

const factors = {
  0: {
    name: WORKLOAD,
    description: "I feel that my workload is too heavy",
    data:
      "52% of respondents in a Business in the Community (BITC) study suggested that pressure at work (too many priorities/targets) contributed to burnout (Deloitte, 2020) Only 49% of employees felt comfortable talking to their line manager about their mental health (Deloitte, 2020)",
  },
  1: {
    name: CONTROL,
    description: "I feel that I don't have control over my work context",
    data:
      "Young professionals who feel they have a high level of control over their career are 56% happier than those who feel they are not in control (ZenithOptimedia, 2015)",
  },
  2: {
    name: REWARD,
    description: "I feel that am not appropiately rewarded for the work I do",
    data:
      "38% of millennials who are currently working said they were actively looking for a different role and 43% said they were open to offers (PwC, 2019)",
  },
  3: {
    name: COMMUNITY,
    description: "I feel like my workplace culture encourages burnout",
    data:
      "Over 40% of 18 to 24-year-old employees admit to working more than their contracted hours (HR Review, UK Study) 43% of young professionals were classified as “work martyrs” in a survey of 5000 US Millennials, i.e. those overworking to show dedication (HBR, 2016) ",
  },
  4: {
    name: FAIRNESS,
    description: "I feel that I'm not treated fairly at work",
    data:
      "More than 53% of young professionals believe that fairness is “extremely influential or moderately influential” for engagement and motivation (WorldatWork, 2019)",
  },
  5: {
    name: VALUES,
    description: "I feel that my work doesn't align with my values",
    data:
      "38% of millennials who are currently working said they were actively looking for a different role and 43% said they were open to offers (PwC, 2019) Only 49% of employees felt comfortable talking to their line manager about their mental health (Deloitte, 2020)",
  },
  6: {
    name: NOT_SURE,
    description: "I'm not sure",
    data:
      "Only 49% of employees felt comfortable talking to their line manager about their mental health (Deloitte, 2020)",
  },
  7: {
    name: OTHER,
    description: "Other",
    data:
      "Only 49% of employees felt comfortable talking to their line manager about their mental health (Deloitte, 2020)",
  },
};

function ReflectionTwo({ handleContinueClick, handleBackClick }) {
  console.log(sessionStorage);

  const [burnoutFactorSelection, setBurnoutFactorSelection] = useState("");

  const selectAnswer = (event) => {
    event.preventDefault();
    const val = event.currentTarget.value;
    setBurnoutFactorSelection(val);
    sessionStorage.setItem(
      "burnoutFactor",
      factors[burnoutFactorSelection].name
    );
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
            <option value="" disabled selected>
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
        <button onClick={handleContinueClick}>{">"}</button>
      )}
    </div>
  );
}

export default ReflectionTwo;
