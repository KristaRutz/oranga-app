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

function OnboardingFinish() {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>
            You just completed your first inner reflection! The true value comes
            from consistency.
          </h2>
          <p className="lead">
          Create an account to gain personalized options and track your progress.
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
