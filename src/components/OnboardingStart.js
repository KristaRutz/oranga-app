import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 100vw;
  background: #fffcfa;
  text-align: center;
`;
const Title = styled.h1`
  font-weight: 500;
  font-style: normal;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
`;
const SubTitle = styled.p`
  font-weight: 400px;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

function OnboardingStart({ handleContinueClick }) {
  return (
    <div>
      <Hero>
        <div>
          <Title>Welcome to Oranga</Title>
          <SubTitle className="lead">
            A digital therapy experience designed to optimize your mental
            wellbeing through self-guided actions.
          </SubTitle>
        </div>
      </Hero>
      <div>
        <div>
          <h2>
            Let's get you to start reflecting on how you're doing right now.
          </h2>
          <p>
            By knowing yourself, you will be the best version of yourself. It’s
            time for you to break free from burnout.
          </p>
          <button onClick={handleContinueClick}>Continue</button>
        </div>
        <img />
      </div>
    </div>
  );
}

export default OnboardingStart;
