import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { db } from "../firebase";

import { factors } from "./OnboardingFactors";
import NavBar from "./NavBar";
import check from "../assets/images/green_check.svg";
import x_mark from "../assets/images/red_x.svg";
import { CTAButton } from "./Branding";

const Dash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StatusCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  max-width: 500px;
  padding: 10px 30px;
`;
const H2 = styled.h2`
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
const StrategyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
`;
const StrategyIcon = styled.img`
  padding: 4px 8px 4px 0px;
`;
const RoutineButton = styled(CTAButton)`
  margin: 20px;
`;

function Dashboard() {
  const user = useContext(UserContext);

  const { displayName } = user;
  const userRef = db.collection("users").doc(user.uid);
  if (!user.mood && sessionStorage.getItem("mood")) {
    userRef.update({ mood: sessionStorage.getItem("mood") });
  }
  if (!user.burnoutFactor && sessionStorage.getItem("burnoutFactor")) {
    userRef.update({ burnoutFactor: sessionStorage.getItem("burnoutFactor") });
  }
  if (!user.strategies && sessionStorage.getItem("strategies")) {
    userRef.update({
      strategies: JSON.parse(sessionStorage.getItem("strategies")),
    });
  }
  // userRef.update({
  //   mood: sessionStorage.getItem("mood"),
  //   burnoutFactor: sessionStorage.getItem("burnoutFactor"),
  //   strategies: JSON.parse(sessionStorage.getItem("strategies")),
  // });

  console.log(user.strategies.filter((s) => s.isUsing));

  if (user) {
    return (
      <div>
        <NavBar signIn></NavBar>
        <Dash>
          <H2>Welcome, {displayName}! Here is your current status.</H2>
          <div>
            <StatusCard>
              <H2>How I'm feeling</H2>
              {user.mood != null && <p>I'm {user.mood}</p>}
              {user.burnoutFactor != null && (
                <p>{factors[parseInt(user.burnoutFactor)].description}</p>
              )}
              <H2>My strategies</H2>
              {user.strategies != null &&
                user.strategies
                  .filter((s) => s.isUsing)
                  .map((s) => (
                    <StrategyItem key={s.id}>
                      {s.isEffective ? (
                        <StrategyIcon src={check} />
                      ) : (
                        <StrategyIcon src={x_mark} />
                      )}{" "}
                      {s.name}
                    </StrategyItem>
                  ))}
            </StatusCard>
          </div>
          <a
            href={
              "https://becky205891.invisionapp.com/console/Oranga-ckijr0yhm00zf01a67ixe398o/ckijr6qa4006201ap6jpsh84k/play"
            }
          >
            <RoutineButton>Find a routine</RoutineButton>
          </a>
        </Dash>
      </div>
    );
  }
}

export default Dashboard;
