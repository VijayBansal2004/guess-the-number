import React from "react";

const HardnessDisplay = ({ levels }) => {
  return <h4>{"Hardness: " + levels.toUpperCase()}</h4>;
};

export default HardnessDisplay;
