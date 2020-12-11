import React, { useState } from "react";
import styled from "styled-components";
import { factors, strategies } from "./OnboardingFactors";

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

function ReflectionThree({ handleContinueClick }) {
  // const [selectedStrategies, setSelectedStrategies] = useState(
  //   Object.assign({}, strategies)
  // );
  sessionStorage.setItem("strategies", JSON.stringify(strategies));
  const [selectedStrategies, setSelectedStrategies] = useState(strategies);

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
    sessionStorage.setItem("strategies", JSON.stringify(selectedStrategies));
    console.log(JSON.parse(sessionStorage.strategies));
  };

  return (
    <div>
      <div>
        <p>Reflection 3 of 4</p>
      </div>
      <div>
        <div>
          <h2>
            What strategies have I recently tried to deal with my burnout?
          </h2>
          <p class="description">Select all that apply</p>
        </div>
        <PillGallery>
          {strategies
            .filter((s) =>
              factors[
                sessionStorage.getItem("burnoutFactor")
              ].strategies.includes(s.id)
            )
            .map((s) => (
              <label
                key={s.id}
                htmlFor={`strat-${s.id}`}
                onChange={() => handleSelect(s.id)}
              >
                <Input
                  id={`strat-${s.id}`}
                  type="checkbox"
                  className="checkbox-input"
                />
                <Pill className="pill-input">{s.name}</Pill>
              </label>
            ))}
        </PillGallery>
      </div>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionThree;
