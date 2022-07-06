import React from "react";

const EnterName = (props) => {
  if(props.currentPage !== 2){
    return null
  }
  return (
    <>
      <h3>WHO ARE YOU?</h3>
      <h4>Please enter your name.</h4>
      <input
        className="name"
        value={props.name}
        placeholder="John Doe"
        name="name"
        type="text"
        title="Enter your name"
        onChange={props.handleChange}
      />
    </>
  );
};

export default EnterName;
