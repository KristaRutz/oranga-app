import React from "react";
import PropTypes from "prop-types";

function QuestionScreen({ title, number, handleAdvanceScreenClick }) {
  return (
    <div>
      <p>Question {number} of 3</p>
      <h1>{title}</h1>
      <button onClick={handleAdvanceScreenClick}>Next</button>
    </div>
  );
}

export default QuestionScreen;
