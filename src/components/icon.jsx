import React from "react";

const Icon = (props) => {
  return (
    <div className="icon" id="i3">
      <div className="tube">
        <img className="tube" src={props.img} alt="icon" />
        <span className="tube1">{props.name}</span>
      </div>
    </div>
  );
};

export default Icon;