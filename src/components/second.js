import React from "react";

const Second = (props) => {
  if (props.currentPage !== 4) {
    return null;
  }
  return (
    <>
      <h6 className="name-display">SURVEY FOR: {props.name} </h6>
      <h6 style={{ paddingTop: "140px" }}>QUESTION 2</h6>
      <h2>Please select least one option</h2>
      <div className="checkboxes">
        <input
          type="checkbox"
          className="option1"
          name="option1"
          value={props.option1}
          onChange={props.handleOption1}
        />
        <label htmlFor="Option1">Option1</label>
        <input
          type="checkbox"
          className="option2"
          name="option2"
          value={props.option2}
          onChange={props.handleOption2}
        />
        <label htmlFor="option2">Option2</label>
        <input
          type="checkbox"
          className="option3"
          name="option3"
          value={props.option3}
          onChange={props.handleOption3}
        />
        <label htmlFor="option3">Option3</label>
      </div>
      {/* <div className="current-page">
        <p className="page-number">Question {props.currentPage - 2}/3</p>
      </div> */}
    </>
  );
};

export default Second;
