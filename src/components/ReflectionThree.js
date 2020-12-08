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

const strategies = {
  0: {
    name: REFLECTING,
    isUsing: false,
    isEffective: null,
  },
  1: {
    name: TALKING_TO_MANAGER,
    isUsing: false,
    isEffective: null,
  },
  2: {
    name: DAILY_PLANNING,
    isUsing: false,
    isEffective: null,
  },
  3: {
    name: UNPLUGGING_DIGITALLY,
    isUsing: false,
    isEffective: null,
  },
  4: {
    name: SET_INTENTIONAL_TIME,
    isUsing: false,
    isEffective: null,
  },
  5: {
    name: JOURNALING,
    isUsing: false,
    isEffective: null,
  },
  6: {
    name: MEDITATION,
    isUsing: false,
    isEffective: null,
  },
  7: {
    name: EXERCISE,
    isUsing: false,
    isEffective: null,
  },
};

const PillGallery = styled.div`
  display: block;
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
    Object.assign({}, strategies)
  );

  const handleSelect = (val) => {
    // convert this to use the setSelectedStrategies function
    if (selectedStrategies[val].isUsing === true) {
      selectedStrategies[val].isUsing = false;
      //setSelectedStrategies({ ...selectedStrategies, [val]: false });
      console.log("deselect ", val);
    } else {
      selectedStrategies[val].isUsing = true;
      //setSelectedStrategies({ ...selectedStrategies, [val]: true });
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
          <label htmlFor="strat-0" onChange={() => handleSelect(0)}>
            <Input id="strat-0" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[0].name}</Pill>
          </label>
          <label htmlFor="strat-1" onChange={() => handleSelect(1)}>
            <Input id="strat-1" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[1].name}</Pill>
          </label>
          <label htmlFor="strat-2" onChange={() => handleSelect(2)}>
            <Input id="strat-2" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[2].name}</Pill>
          </label>
          <label htmlFor="strat-3" onChange={() => handleSelect(3)}>
            <Input id="strat-3" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[3].name}</Pill>
          </label>
          <label htmlFor="strat-4" onChange={() => handleSelect(4)}>
            <Input id="strat-4" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[4].name}</Pill>
          </label>
          <label htmlFor="strat-5" onChange={() => handleSelect(5)}>
            <Input id="strat-5" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[5].name}</Pill>
          </label>
          <label htmlFor="strat-6" onChange={() => handleSelect(6)}>
            <Input id="strat-6" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[6].name}</Pill>
          </label>
          <label htmlFor="strat-7" onChange={() => handleSelect(7)}>
            <Input id="strat-7" type="checkbox" className="checkbox-input" />
            <Pill className="pill-input">{strategies[7].name}</Pill>
          </label>
        </PillGallery>
      </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionThree;
