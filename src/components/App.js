import React, { useContext } from "react";
import "./App.css";
import { UserContext } from "../providers/UserProvider";

import SignIn from "./SignIn";
import OnboardingController from "./OnboardingController";
import Footer from "./Footer";

function App() {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <SignIn></SignIn>
      {!user && <OnboardingController />}
      <Footer></Footer>
    </div>
  );
}

export default App;
