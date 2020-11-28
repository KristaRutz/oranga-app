import React from "react";

function OnboardingStart({ handleContinueClick }) {
  return (
    <div>
      <div>
        <h1>Welcome to ___</h1>
        <p className="lead">
          A self-therapy experience designed to optimize your mental wellbeing
        </p>
      </div>
      <div>
        <div>
          <h2>
            Let's get you to start reflecting on how you're doing right now.
          </h2>
          <p>
            By knowing yourself, you will be the best version of yourself. It’s
            time for you to break free from burnout.
          </p>
          <button onClick={handleContinueClick}>Continue</button>
        </div>
        <img />
      </div>
    </div>
  );
}

export default OnboardingStart;
