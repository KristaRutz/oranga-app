import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import styled from "styled-components";

import Dashboard from "./Dashboard";
import OnboardingController from "./OnboardingController";
import Footer from "./Footer";
import NavBar from "./NavBar";

import "./App.css";

const Body = styled.div`
  min-height: 100vh;
  padding: 2vh 5vw 5vh 5vw;
`;

function App() {
  const user = useContext(UserContext);
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Body>
        {user && <Dashboard />}
        {!user && <OnboardingController />}
      </Body>
      <Footer />
    </div>
  );
}

export default App;
