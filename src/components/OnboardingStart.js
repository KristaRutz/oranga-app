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
        <Col background="#DADADA">
          <img alt="blank" height="150px" width="150px" background="#DADADA" />
        </Col>
      </Row>
    </div>
  );
}

export default OnboardingStart;
