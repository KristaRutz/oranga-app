import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn";

const Layout = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
const Col = styled.div`
  width: 50%;
`;
const CenteredCol = styled(Col)`
  text-align: center;
`;

function OnboardingFinish({ handleBackClick }) {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>You've already made progress in your mental wellness journey!</h2>
          <p className="lead">
            Within seconds, you will gain insights into your current wellbeing
            and recieve personalized options for dealing with burnout.
          </p>
        </Col>
        <CenteredCol>
          <SignIn />
        </CenteredCol>
      </Row>
    </Layout>
  );
}

export default OnboardingFinish;
