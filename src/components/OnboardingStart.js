import React from "react";
import styled from "styled-components";
import { beige } from "./Branding";
import wave from "../assets/images/wave.svg";
import Wave from "./Wave";

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 100%;
  background: #fffcfa;
  text-align: center;
`;
const Title = styled.h1`
  font-weight: 500;
  font-style: normal;
  font-size: 32px;
  line-height: 1.17em;
  text-align: center;
`;
const SubTitle = styled.p`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.17em;
`;
const ItalicSubTitle = styled(SubTitle)`
  font-style: italic;
  text-align: center;
  padding: 0% 24%;
`;
const H2 = styled.h2`
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  line-height: 1.17em;
`;
const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
const Col = styled.div`
  width: 50%;
  overflow: visible;
`;
const Button = styled.button`
  outline: none;
  background: #ffcc99;
  border-radius: 100px;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 1.17em;
  padding: 0.7em 5em;
`;
const Circle = styled.div`
  margin-top: 10vw;
  border-radius: 50%;
  width: 55vw;
  height: 55vw;
  background-color: ${beige};
  margin-bottom: -30vw;
`;

function OnboardingStart({ handleContinueClick }) {
  return (
    <div>
      <Hero>
        <div>
          <Title>Welcome to Oranga</Title>
          <ItalicSubTitle className="lead">
            A digital therapy experience designed to optimize your mental
            wellbeing through self-guided actions.
          </ItalicSubTitle>
          {/* <Wave></Wave> */}
        </div>
      </Hero>
      <Row>
        <Col>
          <H2>
            Let's get you to start reflecting on how you're doing right now.
          </H2>
          <SubTitle>
            By knowing yourself, you will be the best version of yourself. It’s
            time for you to break free from burnout.
          </SubTitle>
          <Button onClick={handleContinueClick}>Continue</Button>
        </Col>
        <Col>
          <Circle />
        </Col>
      </Row>
    </div>
  );
}

export default OnboardingStart;
