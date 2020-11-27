import React from "react";

function ReflectionTwo({ handleContinueClick, handleBackClick }) {
  return (
    <div>
      <div>
        <p>Reflection 2 of 3</p>
      </div>
      <div>
        <div>
          <h2>What do you think is causing you to feel this way?</h2>
          <p class="description">Pick the main factor</p>
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

export default ReflectionTwo;
