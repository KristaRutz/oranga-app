import React from "react";
import App from "./components/App";
import UserProvider from "./providers/UserProvider";
function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default AppWrapper;
