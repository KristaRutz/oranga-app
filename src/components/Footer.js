import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: #2f3d4c;
  opacity: 50%;
  padding: 2vw;
  font-size: 12px;
  font-style: italic;
  min-height: 5vh;
`;

function Footer() {
  return <P>Copyright 2020 Krista Rutz, Sam Wong, Becky Zhang</P>;
}
export default Footer;
