import React, { useState } from "react";
import QuestionScreen from "./QuestionScreen";

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

  let title;
  let number;

  switch (screen) {
    case 0:
      title = "How am I feeling right now?";
      number = 1;
    case 1:
      title = "What do you think is causing you to feel this way?";
      number = 2;
    case 2:
      title = "How are you currently dealing with this?";
      number = 3;
    default:
      title = "Welcome";
      number = NaN;
  }

  return (
    <QuestionScreen
      title={title}
      number={number}
      handleAdvanceScreenClick={advanceScreen}
    />
  );
}

export default Onboarding;
