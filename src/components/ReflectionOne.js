import React, { useState } from "react";
import "./ReflectionOne.css";
import styled from "styled-components";

const CardGallery = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Face = styled.div`
  display: block;
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : "white")};
  text-align: center;
`;
const LabelDescription = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #696f78;
  margin: 10px 0px 0px 0px;
`;

const OKAY = "okay";
const NOT_WELL = "not well";
const NOT_SURE = "not sure";
const DOING_WELL = "doing well";

function ReflectionOne({ handleContinueClick, handleBackClick }) {
  console.log(sessionStorage);

  const [moodSelection, setMoodSelection] = useState("");

  const selectAnswer = (val) => {
    setMoodSelection(val);
    sessionStorage.setItem("mood", val);
  };

  return (
    <div>
      <div>
        <p>Reflection 1 of 4</p>
      </div>
      <div>
        <div>
          <h2>How am I feeling right now?</h2>
          <p class="description">Pick the one that most applies to you</p>
        </div>
        <CardGallery>
          <label onClick={() => selectAnswer(OKAY)}>
            <input type="radio" name="mood" class="radio-input" value={OKAY} />
            <div class="card-input">
              <Face color="#FFCC99" />
              <LabelDescription>Okay</LabelDescription>
            </div>
          </label>
          <label onClick={() => selectAnswer(NOT_WELL)}>
            <input
              type="radio"
              name="mood"
              class="radio-input"
              value={NOT_WELL}
            />
            <div class="card-input">
              <Face color="#FFC0CB" />
              <LabelDescription>Not Well</LabelDescription>
            </div>
          </label>
          <label onClick={() => selectAnswer(NOT_SURE)}>
            <input
              type="radio"
              name="mood"
              class="radio-input"
              value={NOT_SURE}
            />
            <div class="card-input">
              <Face color="#A2D3C3" />
              <LabelDescription>Not Sure</LabelDescription>
            </div>
          </label>
          <label onClick={() => selectAnswer(DOING_WELL)}>
            <input
              type="radio"
              name="mood"
              class="radio-input"
              value={DOING_WELL}
            />
            <div class="card-input">
              <Face />
              <LabelDescription>Doing Well</LabelDescription>
            </div>
          </label>
        </CardGallery>
      </div>
      {moodSelection != "" && (
        <div>
          <h4>I'm {moodSelection}</h4>
          {moodSelection === OKAY && (
            <p>
              By being aware of my current feelings, I can understand where I
              stand.
            </p>
          )}
          {moodSelection === NOT_WELL && (
            <p>
              By being aware of my current feelings, I can understand where I
              stand.
            </p>
          )}
          {moodSelection === NOT_SURE && (
            <p>
              By being aware of my current feelings, I can understand where I
              stand.
            </p>
          )}
          {moodSelection === DOING_WELL && (
            <p>
              By being aware of my current feelings, I can understand where I
              stand.
            </p>
          )}
        </div>
      )}
      <button type="button" onClick={handleBackClick}>
        Back
      </button>
      <button type="button" onClick={handleContinueClick}>
        {">"}
      </button>
    </div>
  );
}

export default ReflectionOne;
