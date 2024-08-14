import React from "react";

const ResetButton = ({ handleRestart }) => {
  return (
    <button
      type="submit"
      className="btn btn-primary mb-3 w-100"
      onClick={(e) => handleRestart(e)}>
      Reset Game
    </button>
  );
};

export default ResetButton;
