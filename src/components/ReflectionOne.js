import React from "react";

function ReflectionOne() {
  return (
    <div>
      <div>
        <p>Reflection 1 of 3</p>
      </div>
      <div>
        <div>
          <h2>How am I feeling right now?</h2>
          <p class="description">Pick the one that most applies to you</p>
        </div>
        <div>
          <button>:| Okay</button>
          <button>:( Not well</button>
          <button>:? Not sure</button>
          <button>:) Doing well</button>
        </div>
      </div>
      <button>{">"}</button>
    </div>
  );
}

export default ReflectionOne;
