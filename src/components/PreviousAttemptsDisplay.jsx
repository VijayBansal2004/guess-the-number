import React from "react";

const PreviousAttemptsDisplay = ({ previousGuesses }) => {
  return (
    <>
      {previousGuesses.length > 0 && (
        <p>Previous Guesses: {previousGuesses.join(",")}</p>
      )}
    </>
  );
};

export default PreviousAttemptsDisplay;
