import React from "react";

const First = (props) => {
  if (props.currentPage !== 3) {
    return null;
  }
  return (
    <>
      <h2 className="name-display">SURVEY FOR: {props.name} </h2>
      <h3 style={{ paddingTop: "140px" }}>QUESTION 1</h3>
      <h4>How often do you visit this website?</h4>
      <div className="checkboxes">
        <input
          type="checkbox"
          className="often"
          name="often"
          title="Often"
          value={props.often}
          onChange={props.handleOften}
        />
        <label htmlFor="often">Often</label>
        <input
          type="checkbox"
          className="rarely"
          name="rarely"
          title="Rarely"
          value={props.rarely}
          onChange={props.handleRarely}
        />
        <label htmlFor="rarely">Rarely</label>
        <input
          type="checkbox"
          className="never"
          name="never"
          title="Never"
          value={props.never}
          onChange={props.handleNever}
        />
        <label htmlFor="never">Never</label>
      </div>
    </>
  );
};

export default First;
