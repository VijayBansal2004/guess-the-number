import React from "react";

const HardnessDisplay = ({ levels }) => {
  return <h4 className="hardness-level">{"Hardness: " + levels.toUpperCase()}</h4>;
};

export default HardnessDisplay;
