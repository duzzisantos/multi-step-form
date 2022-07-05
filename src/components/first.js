import React from "react";

const First = (props) => {
  if(props.currentPage !== 3){
    return null
  }
  return (
    <>
      <h6 className="name-display">SURVEY FOR </h6>
      <h6 style={{ paddingTop: "140px" }}>QUESTION 1</h6>
      <h2>How often do you visit this website?</h2>
      <div className="checkboxes">
        <input type="checkbox" className="often" name="often" title="Often" value={props.often} onChange={props.handleOften} />
        <label htmlFor="often">Often</label>
        <input type="checkbox" className="rarely" name="rarely" title="Rarely" value={props.rarely} onChange={props.handleRarely}/>
        <label htmlFor="rarely">Rarely</label>
        <input type="checkbox" className="never" name="never" title="Never" value={props.never} onChange={props.handleNever}/>
        <label htmlFor="never">Never</label>
      </div>
      {/* <div className="current-page">
        <p className="page-number">Question 1/3</p>
      </div> */}
    </>
  );
};

export default First;
