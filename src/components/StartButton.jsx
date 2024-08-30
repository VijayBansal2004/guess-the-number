import React from "react";

const StartButton = ({ levels, startGame, handleStart }) => {
  return (
    <>
      {startGame === false && (
        <button
          type="button"
          className={`btn btn-primary ${levels == null && "disabled"}`}
          onClick={(e) => handleStart(e)}>
          Start Game
        </button>
      )}
    </>
  );
};

export default StartButton;
