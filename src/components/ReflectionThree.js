import React, { useState } from "react";
import styled from "styled-components";

const REFLECTING = "Reflecting";
const TALKING_TO_MANAGER = "Talking to manager";
const DAILY_PLANNING = "Daily planning";
const UNPLUGGING_DIGITALLY = "Unplugging digitally";
const SET_INTENTIONAL_TIME = "Set intentional time";
const JOURNALING = "Journaling";
const MEDITATION = "Meditation";
const EXERCISE = "Exercising";

const strategies = [
  REFLECTING,
  TALKING_TO_MANAGER,
  DAILY_PLANNING,
  UNPLUGGING_DIGITALLY,
  SET_INTENTIONAL_TIME,
  JOURNALING,
  MEDITATION,
  EXERCISE,
];

const Button = styled.button`
  background: ${(props) => (props.selected ? "#FFE5CC" : "#fff")};
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 5px 15px;
  margin: 0px 12px 25px 0px;
`;

function ReflectionThree({ handleContinueClick, handleBackClick }) {
  const [selectedStrategies, setSelectedStrategies] = useState(
    new Array(strategies.length)
  );

  const handleSelect = (val) => {
    if (selectedStrategies[val] === true) {
      selectedStrategies[val] = false;
      console.log("deselect ", val);
    } else {
      selectedStrategies[val] = true;
      console.log("select ", val);
    }
    console.log(selectedStrategies);
  };

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
          <Button
            selected={selectedStrategies[0]}
            onClick={() => handleSelect(0)}
          >
            {strategies[0]}
          </Button>
          <Button
            selected={selectedStrategies[1]}
            onClick={() => handleSelect(1)}
          >
            {strategies[1]}
          </Button>
          <Button
            selected={selectedStrategies[2]}
            onClick={() => handleSelect(2)}
          >
            {strategies[2]}
          </Button>
          <Button
            selected={selectedStrategies[3]}
            onClick={() => handleSelect(3)}
          >
            {strategies[3]}
          </Button>
          <Button
            selected={selectedStrategies[4]}
            onClick={() => handleSelect(4)}
          >
            {strategies[4]}
          </Button>
          <Button
            selected={selectedStrategies[5]}
            onClick={() => handleSelect(5)}
          >
            {strategies[5]}
          </Button>
          <Button
            selected={selectedStrategies[6]}
            onClick={() => handleSelect(6)}
          >
            {strategies[6]}
          </Button>
          <Button
            selected={selectedStrategies[7]}
            onClick={() => handleSelect(7)}
          >
            {strategies[7]}
          </Button>
        </div>
      </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionThree;
