import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import OnboardingStart from "./OnboardingStart";
import ReflectionOne from "./ReflectionOne";
import ReflectionTwo from "./ReflectionTwo";
import ReflectionThree from "./ReflectionThree";
import ReflectionFour from "./ReflectionFour";
import OnboardingFinish from "./OnboardingFinish";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 70vh;
`;

function OnboardingController() {
  let userInputs = {
    question1: 1,
    question2: [],
    question3: [],
  };

  const [screen, setScreen] = useState(0);

  const advanceScreen = () => {
    console.log(screen);
    console.log(userInputs);
    console.log(sessionStorage);
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
      {screen === 0 && <NavBar signIn />}
      {screen !== 0 && screen !== 5 && <NavBar />}
      <Screen>
        {screen === 0 && (
          <OnboardingStart handleContinueClick={advanceScreen} />
        )}
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
        {screen > 0 && (
          <button type="button" onClick={goBackScreen}>
            Back
          </button>
        )}
      </Screen>
    </>
  );
}

export default OnboardingController;
