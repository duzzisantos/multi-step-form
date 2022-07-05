import React from "react";
import "./first";
import "./second";
import "./third";
const Score = (props) => {
  let totalScore =
    props.often +
    props.rarely +
    props.option1 +
    props.option1 +
    props.option2 +
    props.option2 + props.germany + props.sweden + props.italy + props.spain

  if (props.currentPage !== 6) {
    return null;
  }
  return (
    <>
      <h6>RESULT</h6>
      <h2>Your Score</h2>
      <h4>{props.name}</h4>
      <span className="score-number">{totalScore / 0.16}</span>
      <span className="points">POINTS</span>
      <progress
        className="progress"
        max="100"
        min="0"
        value={totalScore / 0.16}
      ></progress>
    </>
  );
};

export default Score;
