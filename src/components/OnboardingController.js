import React, { useState } from "react";

import OnboardingStart from "./OnboardingStart";
import ReflectionOne from "./ReflectionOne";
import ReflectionTwo from "./ReflectionTwo";
import ReflectionThree from "./ReflectionThree";
import ReflectionFour from "./ReflectionFour";
import OnboardingFinish from "./OnboardingFinish";

function OnboardingController() {
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
  const goBackScreen = () => {
    console.log(screen);
    if (screen <= 0) {
      // do something
    } else {
      setScreen(screen - 1);
    }
  };
  const completeReflectionOne = (emotion) => {
    userInputs.question1 = emotion;
    advanceScreen();
  };
  const completeReflectionTwo = (burnoutSource) => {
    userInputs.question2 = burnoutSource;
    // determine the questions to show in screen 3
    advanceScreen();
  };
  const completeReflectionThree = (currentPractices) => {
    userInputs.question3 = currentPractices;
    advanceScreen();
  };

  return (
    <>
      {screen === 0 && <OnboardingStart handleContinueClick={advanceScreen} />}
      {screen === 1 && (
        <ReflectionOne
          handleContinueClick={completeReflectionOne}
          handleBackClick={goBackScreen}
        />
      )}
      {screen === 2 && (
        <ReflectionTwo
          handleContinueClick={completeReflectionTwo}
          handleBackClick={goBackScreen}
        />
      )}
      {screen === 3 && (
        <ReflectionThree
          handleContinueClick={completeReflectionThree}
          handleBackClick={goBackScreen}
        />
      )}
      {screen === 4 && (
        <ReflectionFour
          handleBackClick={goBackScreen}
          handleContinueClick={advanceScreen}
        />
      )}
      {screen === 5 && <OnboardingFinish handleBackClick={goBackScreen} />}
    </>
  );
}

export default OnboardingController;
