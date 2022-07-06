import React from "react";

const Second = (props) => {
  if (props.currentPage !== 4) {
    return null;
  }
  return (
    <>
      <h2 className="name-display">SURVEY FOR: {props.name} </h2>
      <h3 style={{ paddingTop: "140px" }}>QUESTION 2</h3>
      <h4>Please select at least one option</h4>
      <div className="checkboxes">
        <input
          type="checkbox"
          className="option1"
          name="option1"
          value={props.option1}
          onChange={props.handleOption1}
          title="Option 1"
        />
        <label htmlFor="Option1">Option1</label>
        <input
          type="checkbox"
          className="option2"
          name="option2"
          value={props.option2}
          onChange={props.handleOption2}
          title="Option 2"
        />
        <label htmlFor="option2">Option2</label>
        <input
          type="checkbox"
          className="option3"
          name="option3"
          value={props.option3}
          onChange={props.handleOption3}
          title="Option 3"
        />
        <label htmlFor="option3">Option3</label>
      </div>
   <div>{props.pageNumber}</div>
    </>
  );
};

export default Second;
