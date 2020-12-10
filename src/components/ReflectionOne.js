import React, { useState } from "react";
import "./ReflectionOne.css";
import styled from "styled-components";

const CardGallery = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
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
          <p className="description">Pick the one that most applies to you</p>
        </div>
        <CardGallery>
          <label onClick={() => selectAnswer(OKAY)}>
            <input
              type="radio"
              name="mood"
              className="radio-input"
              value={OKAY}
            />
            <div className="card-input">
              <Face color="#FFCC99" />
              <LabelDescription>Okay</LabelDescription>
            </div>
          </label>
          <label onClick={() => selectAnswer(NOT_WELL)}>
            <input
              type="radio"
              name="mood"
              className="radio-input"
              value={NOT_WELL}
            />
            <div className="card-input">
              <Face color="#FFC0CB" />
              <LabelDescription>Not Well</LabelDescription>
            </div>
          </label>
          <label onClick={() => selectAnswer(NOT_SURE)}>
            <input
              type="radio"
              name="mood"
              className="radio-input"
              value={NOT_SURE}
            />
            <div className="card-input">
              <Face color="#A2D3C3" />
              <LabelDescription>Not Sure</LabelDescription>
            </div>
          </label>
          <label onClick={() => selectAnswer(DOING_WELL)}>
            <input
              type="radio"
              name="mood"
              className="radio-input"
              value={DOING_WELL}
            />
            <div className="card-input">
              <Face />
              <LabelDescription>Doing Well</LabelDescription>
            </div>
          </label>
        </CardGallery>
      </div>
      {moodSelection !== "" && (
        <div>
          <h4>I'm {moodSelection}</h4>
          {moodSelection === OKAY && (
            <p>
              Feeling just okay isn’t the worst place to be, but things could be
              better. Have I thought through the factors in my environment and
              in my week that could be causing this feeling?
            </p>
          )}
          {moodSelection === NOT_WELL && (
            <p>
              Feeling unwell has taken a toll on my mental wellbeing and is
              leading to burnout. Have I thought through the factors in my
              environment and in my week that could be causing this feeling?
            </p>
          )}
          {moodSelection === NOT_SURE && (
            <p>
              Feeling unsure of my current emotions is natural, but ambiguity
              and uncertainty may be uncomfortable. Have I thought about how an
              awareness of my emotions might lead to better emotional health?
            </p>
          )}
          {moodSelection === DOING_WELL && (
            <p>
              By being aware of my current positive feelings, I can understand
              where I stand. Have I thought through the best ways to address or
              act on this awareness?”
            </p>
          )}
        </div>
      )}
      <button type="button" onClick={handleBackClick}>
        Back
      </button>
      {moodSelection !== "" && (
        <button type="button" onClick={handleContinueClick}>
          {">"}
        </button>
      )}
    </div>
  );
}

export default ReflectionOne;
