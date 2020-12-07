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

const PillGallery = styled.div`
  display: block;
`;
const Label = styled.label`
  //display: inline;
`;
const Input = styled.input`
  display: none;
  & ~ .pill-input {
    background: #fff;
  }
  &:checked {
    & ~ .pill-input {
      background: #ffe5cc;
    }
  }
`;
const Pill = styled.div`
  border: 1px solid #666666;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 5px 15px;
  margin: 0px 12px 25px 0px;
  :hover {
    cursor: pointer;
  }
`;

function ReflectionThree({ handleContinueClick, handleBackClick }) {
  const [selectedStrategies, setSelectedStrategies] = useState(
    new Array(strategies.length)
  );

  const handleSelect = (val) => {
    // convert this to use the setSelectedStrategies function
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
        <PillGallery>
          <Label for="strat-0" onChange={() => handleSelect(0)}>
            <Input id="strat-0" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[0]}</Pill>
          </Label>
          <Label for="strat-1" onChange={() => handleSelect(1)}>
            <Input id="strat-1" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[1]}</Pill>
          </Label>
          <Label for="strat-2" onChange={() => handleSelect(2)}>
            <Input id="strat-2" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[2]}</Pill>
          </Label>
          <Label for="strat-3" onChange={() => handleSelect(3)}>
            <Input id="strat-3" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[3]}</Pill>
          </Label>
          <Label for="strat-4" onChange={() => handleSelect(4)}>
            <Input id="strat-4" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[4]}</Pill>
          </Label>
          <Label for="strat-5" onChange={() => handleSelect(5)}>
            <Input id="strat-5" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[5]}</Pill>
          </Label>
          <Label for="strat-6" onChange={() => handleSelect(6)}>
            <Input id="strat-6" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[6]}</Pill>
          </Label>
          <Label for="strat-7" onChange={() => handleSelect(7)}>
            <Input id="strat-7" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[7]}</Pill>
          </Label>
        </PillGallery>
      </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionThree;
