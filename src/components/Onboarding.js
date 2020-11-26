import React, { useState } from "react";
import QuestionScreen from "./QuestionScreen";
import OnboardingStart from "./OnboardingStart";
import ReflectionOne from "./ReflectionOne";
import ReflectionTwo from "./ReflectionTwo";
import ReflectionThree from "./ReflectionThree";

function Onboarding() {
  let userInputs = {
    question1: 1,
    question2: [],
    question3: [],
  };

  const [screen, setScreen] = useState(0);

  const advanceScreen = () => {
    console.log(screen);
    if (screen >= 5) {
      // do something
    } else {
      setScreen(screen + 1);
    }
  };

  return (
    <>
      {screen === 0 && <OnboardingStart />}
      {screen === 1 && <ReflectionOne />}
      {screen === 2 && <ReflectionTwo />}
      {screen === 3 && <ReflectionThree />}
      <button onClick={advanceScreen}>Next</button>
    </>
  );
}

export default Onboarding;
