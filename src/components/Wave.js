import React from "react";
import styled from "styled-components";
import { orng } from "./Branding";
import wave from "../assets/images/wave.svg";

const Canvas = styled.div`
  position: absolute;
  transform: ${(props) => (props.up ? "none" : "rotate(-180deg)")};
  width: 100vw;
  height: 154px;
  margin: 0 0 0 -5vw;
  background-image: url(${wave});
  background-size: 654px 154px;
  background-repeat: no-repeat;
  sizing: border-box;
`;

function Wave({ color = orng, up = true, children }) {
  return (
    <div>
      <Canvas up={up}></Canvas>
      {/* <svg
        //width={"100vw"}
        width="654px"
        height={"154"}
        //viewBox={"0 0 654 154"}
        viewBox="0 0 654 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0C0 0 66.634 95.9237 271.472 73.7373C476.309 51.5508 654 154 654 154H0V0Z"
          fill={color}
        />
      </svg> */}
      {children}
    </div>
  );
}

export default Wave;
