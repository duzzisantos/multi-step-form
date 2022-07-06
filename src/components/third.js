import React from "react";

const Third = (props) => {
  if (props.currentPage !== 5) {
    return null;
  }
  return (
    <>
      <h2 className="name-display3">SURVEY FOR: {props.name}</h2>
      <h3 style={{ marginTop: "30px" }}>QUESTION 3</h3>
      <h4>Where are you from?</h4>
      <select
        name="select"
        className="select"
        onChange={props.handleGermany}
        title="Germany"
      >
        <option>Please choose your country?</option>
        <option value={props.germany}>Germany</option>
      </select>
      <select className="select" onChange={props.handleSweden} title="Sweden">
        <option>Please choose your country?</option>
        <option value={props.sweden}>Sweden</option>
      </select>

      <select className="select" onChange={props.handleItaly} title="Italy">
        <option>Please choose your country?</option>
        <option value={props.italy}>Italy</option>
      </select>
      <select className="select" onChange={props.handleSpain} title="Spain">
        <option>Please choose your country?</option>
        <option value={props.spain}>Spain</option>
      </select>
    </>
  );
};

export default Third;
