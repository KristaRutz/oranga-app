import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import firebase from "../firebase";

import SignIn from "./SignIn";
import Wave from "./Wave";

const Layout = styled.div`
  background: #ffffff00;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 0vw 5vw;
`;
const Logo = styled.h1`
  //color: rgb(162, 211, 195);
  background: linear-gradient(
    278deg,
    rgba(162, 211, 195, 1) 0%,
    rgba(240, 227, 223, 1) 65%,
    rgba(255, 204, 153, 1) 100%
  );
  //background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function NavBar({ signIn = false }) {
  const user = useContext(UserContext);
  return (
    <>
      <Layout>
        <Logo>
          <em>oranga</em>
        </Logo>
        {signIn && <SignIn></SignIn>}
      </Layout>
    </>
  );
}

export default NavBar;
