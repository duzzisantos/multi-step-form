import React from "react";

const Score = (props) => {
  let totalValue = () => {
    return (
      props.often +
      props.rarely +
      props.never +
      props.option1 +
      props.option2 +
      props.option3 +
      props.select
    );
  };
  if (props.currentPage !== 6) {
    return null;
  }
  return (
    <>
      <h6>RESULT</h6>
      <h2>Your Score</h2>
      <h4>{props.name}</h4>
      <span className="score-number" value={totalValue}/>
      <span className="points">POINTS</span>
      <progress
        className="progress"
        max="100"
        min="0"
        value={(totalValue / 100) * 100}
      ></progress>
    </>
  );
};

export default Score;
