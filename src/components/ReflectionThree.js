import React, { useState } from "react";

const REFLECTING = "Reflecting";
const TALKING_TO_MANAGER = "Talking to manager";
const DAILY_PLANNING = "Daily planning";
const UNPLUGGING_DIGITALLY = "Unplugging digitally";
const SET_INTENTIONAL_TIME = "Set intentional time";
const JOURNALING = "Journaling";
const MEDITATION = "Meditation";
const EXERCISE = "EXERCISING";

function ReflectionThree({ handleContinueClick, handleBackClick }) {
  const [strategies, setStrategies] = useState([]);

  return (
    <div>
      <div>
        <p>Reflection 3 of 4</p>
      </div>
      <div>
        <div>
          <h2>How are you currently dealing with this?</h2>
          <p class="description">Select all that apply</p>
        </div>
        <div>
          <button>I am overwhelmed by my workload</button>
          <button>I don't have control over my work context</button>
          <button>I am not appropiately rewarded for the work I do</button>
          <button>My workplace culture causes burnout</button>
          <button>I'm not treated fairly at work</button>
          <button>My work doesn't align with my values</button>
          <button>Other</button>
        </div>
      </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionThree;
