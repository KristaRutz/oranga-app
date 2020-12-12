import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { db } from "../firebase";

import { factors } from "./OnboardingFactors";
import NavBar from "./NavBar";

function Dashboard() {
  const user = useContext(UserContext);
  //console.log(user);
  //console.log(user.metadata.lastSignInTime);
  const { displayName } = user;
  const userRef = db.collection("users").doc(user.uid);
  userRef.update({
    mood: sessionStorage.getItem("mood"),
    burnoutSource: sessionStorage.getItem("burnoutFactor"),
    strategies: JSON.parse(sessionStorage.getItem("strategies")),
  });

  return (
    <div>
      <NavBar signIn></NavBar>
      <h1>Welcome, {displayName}! Here is your status.</h1>
      <div>
        <div>
          <h2>How I'm feeling</h2>
          <p>I'm {user.mood}</p>
          <p>{factors[parseInt(user.burnoutSource)].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
