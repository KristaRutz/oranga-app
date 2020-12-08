import React, { useState } from "react";
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DescriptionCard = styled.div`
  background: #ffcc99;
  border-radius: 8px;
  width: 300px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonBar = styled.div`
  border: 1px solid #666666;
  border-radius: 3px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const BarButton = styled.button`
  background: #ffffff;
  width: 100%;
`;
const Line = styled.div`
  background: #666666;
  width: 1px;
  height: 38px;
`;

function ReflectionFour({ handleContinueClick, handleBackClick }) {
  const handleSelect = (val) => {};

  return (
    <div>
      <div>
        <p>Reflection 4 of 4</p>
      </div>
      <div>
        <div>
          <h2>Has this worked for you?</h2>
          <p class="description">Pick the most accurate answer</p>
        </div>
        <MainLayout>
          <div>
            <p>1 of 6</p>
            <DescriptionCard>
              <p>Talking to manager</p>
            </DescriptionCard>
            <ButtonBar>
              <BarButton>Yes</BarButton>
              <Line />
              <BarButton>No</BarButton>
            </ButtonBar>
            <button>Not sure</button>
          </div>
        </MainLayout>
      </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleContinueClick}>{">"}</button>
    </div>
  );
}

export default ReflectionFour;
