import React from "react";

const Third = (props) => {
  if (props.currentPage !== 5) {
    return null;
  }
  return (
    <>
      <h6 className="name-display">SURVEY FOR: {props.name}</h6>
      <h6 style={{ paddingTop: "140px" }}>QUESTION 3</h6>
      <h2>Where are you from?</h2>
      <select name="select" id="select" onChange={props.handleGermany}>
        <option>Please choose your country?</option>
        <option value={props.germany}>Germany</option>
        <option value={props.sweden}>Sweden</option>
        <option value={props.italy}>Italy</option>
        <option value={props.spain}>Spain</option>
      </select>
      {/* <div className="current-page">
        <span className="page-number">Question {props.currentPage - 2}/3</span>
      </div> */}
    </>
  );
};

export default Third;
