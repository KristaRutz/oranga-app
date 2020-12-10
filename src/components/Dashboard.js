import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

import NavBar from "./NavBar";

function Dashboard() {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <div>
      <NavBar signIn></NavBar>
      <h1>Welcome, {displayName}</h1>
      <div>
        <div>
          <div
            style={{
              background: `url(${
                photoURL ||
                "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
              })  no-repeat center center`,
              //backgroundSize: "cover",
              height: "100px",
              width: "100px",
            }}
          ></div>
          <div>
            <h2>{displayName}</h2>
            <h3>{email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
