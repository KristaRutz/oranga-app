import React from "react";
import SignIn from "./SignIn";

function OnboardingFinish({ handleBackClick }) {
  return (
    <div>
      <div>
        <h2>You've already made progress in your mental wellness journey!</h2>
        <p className="lead">
          Within seconds, you will gain insights into your current wellbeing and
          recieve personalized options for dealing with burnout.
        </p>
        <button onClick={handleBackClick}>Back</button>
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  );
}

export default OnboardingFinish;
