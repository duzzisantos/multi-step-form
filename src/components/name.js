import React from "react";

const EnterName = (props) => {
  if(props.currentPage !== 2){
    return null
  }
  return (
    <>
      <h6>WHO ARE YOU?</h6>
      <h2>Please enter your name.</h2>
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
