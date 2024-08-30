import React from "react";
import RangeDisplay from "./RangeDisplay";
import HardnessDisplay from "./HardnessDisplay";
import InputNumber from "./InputNumber";
import PreviousAttemptsDisplay from "./PreviousAttemptsDisplay";
import AttemptsLeftDisplay from "./AttemptsLeftDisplay";
import ResetButton from "./ResetButton";

const GameContainer = ({
  range,
  levels,
  number,
  setNumber,
  startGame,
  handleSubmit,
  previousGuesses,
  attemptsLeft,
  handleRestart,
}) => {
  return (
    <>
      {startGame === true && (
        <div className="container align-content-center ">
          <HardnessDisplay levels={levels} />
          <RangeDisplay range={range} />
          <InputNumber
            number={number}
            setNumber={setNumber}
            handleSubmit={handleSubmit}
          />
          <PreviousAttemptsDisplay previousGuesses={previousGuesses} />
          <AttemptsLeftDisplay attemptsLeft={attemptsLeft} />
          <ResetButton handleRestart={handleRestart} />
          {/* {errorMassage?<p>{errorMassage}</p>:''}
        {massage?<p>{massage}</p>:''}
        {number==randomNumber?<p>You guessed it correct! It was {randomNumber}!</p>:""} */}

          {/* <p>Hint: You should </p> */}
        </div>
      )}
    </>
  );
};

export default GameContainer;
