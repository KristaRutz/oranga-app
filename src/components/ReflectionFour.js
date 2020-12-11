import React, { useState } from "react";
import styled from "styled-components";
import { beige } from "./Branding";

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
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
  box-sizing: border-box;
`;
const BarButton = styled.button`
  background: #ffffff;
  box-sizing: border-box;
  margin: 1%;
  width: 100%;
  height: 100%;
  :hover {
    background: ${beige};
  }
`;
const Line = styled.div`
  background: #666666;
  width: 1px;
  height: 37px;
`;
const OtherSelection = styled.button`
  text-align: center;
  background: inherit;
  size: 14px;
  line-height: 16px;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ReflectionFour({ handleContinueClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStrategies, setSessionStrategies] = useState(
    JSON.parse(sessionStorage.strategies)
  );
  const [userStrategies, setUserStrategies] = useState(
    JSON.parse(sessionStorage.strategies).filter((s) => s.isUsing)
  );

  const handleClick = (bool) => {
    userStrategies[currentIndex].isEffective = bool;
    sessionStrategies[userStrategies[currentIndex].id].isEffective = bool;
    sessionStorage.setItem("strategies", JSON.stringify(sessionStrategies));

    if (currentIndex < userStrategies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleContinueClick();
    }
  };

  return (
    <div>
      <div>
        <p>Reflection 4 of 4</p>
      </div>
      <div>
        <div>
          <h2>Has this worked for me?</h2>
          <p class="description">Pick the most accurate answer</p>
        </div>
        <MainLayout>
          <div>
            <p>
              {currentIndex + 1} of {userStrategies.length}
            </p>
            <DescriptionCard>
              <p>{userStrategies[currentIndex].name}</p>
            </DescriptionCard>
            <ButtonBar>
              <BarButton onClick={() => handleClick(true)}>Yes</BarButton>
              <Line />
              <BarButton onClick={() => handleClick(false)}>No</BarButton>
            </ButtonBar>
            <Center>
              <OtherSelection onClick={() => handleClick(null)}>
                Not sure
              </OtherSelection>
            </Center>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default ReflectionFour;
