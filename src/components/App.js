import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import OnboardingController from "./OnboardingController";
import Footer from "./Footer";

import "./App.css";

function App() {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <SignIn></SignIn>
      {user && <Dashboard />}
      {!user && <OnboardingController />}
      <Footer></Footer>
    </div>
  );
}

export default App;
