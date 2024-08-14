import { useState, useEffect } from "react";
import "./App.css";

import Heading from "./components/Heading";
import HardnessLevel from "./components/HardnessLevel";
import StartButton from "./components/StartButton";
import GameContainer from "./components/GameContainer";
import ResetButton from "./components/ResetButton";

function App() {
  const [levels, setLevels] = useState(); // Hardness levels
  const [range, setRange] = useState(20); // Range of numbers

  const [number, setNumber] = useState(); // user Guess number
  const [startGame, setStartGame] = useState(false); //
  const [randomNumber, setRandomNumber] = useState(); // Random number
  const [previousGuesses, setPreviousGuesses] = useState([]); // Previous user guesses Array
  const [attemptsLeft, setAttemptsLeft] = useState(10); // Attempts limit

  useEffect(() => {
    // Hardness levels
    if (levels === "easy") {
      setRange(20);
      setRandomNumber(Math.floor(Math.random() * range + 1));
    } else if (levels === "medium") {
      setRange(50);
      setRandomNumber(Math.floor(Math.random() * range + 1));
    } else if (levels === "hard") {
      setRange(100);
      setRandomNumber(Math.floor(Math.random() * range + 1));
    }
  }, [startGame, levels]);

  const handleStart = (e) => {
    e.preventDefault();
    setStartGame(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(randomNumber);
    console.log(previousGuesses);
    validate(number);
    setNumber("");
  };

  const handleRestart = (e) => {
    e.preventDefault();
    endGame();
  };

  const validate = (number) => {
    // validation of input number
    setStartGame(true);
    if (!number) {
      alert("Plese enter a number");
    } else if (number < 1) {
      alert("Plese enter a number more than 0");
    } else if (number > range) {
      alert("Plese enter a number more than 0");
    } else {
      setPreviousGuesses([...previousGuesses, number]);
      checkInput(number);
      setAttemptsLeft(attemptsLeft - 1);
    }
  };

  const checkInput = (number) => {
    // Checking input number
    if (number == randomNumber) {
      alert("You guessed it correct!");
      endGame();
    } else if (number < randomNumber) {
      alert("Your guess is TOO low!");
    } else if (number > randomNumber) {
      alert("Your guess is TOO high!");
    }
  };

  const endGame = () => {
    // EndGame code
    setStartGame(false);
    setPreviousGuesses([]);
    setAttemptsLeft(10);
  };
  return (
    <>
      <div className="container align-content-center col-12 col-lg-6 vh-100">
        <Heading />
        <HardnessLevel startGame={startGame} setLevels={setLevels} />
        <StartButton
          levels={levels}
          startGame={startGame}
          handleStart={handleStart}
        />

        {attemptsLeft === 0 ? (
          <div>
            <p style={{ color: "red", fontSize: "2rem" }}>Game Over!</p>
            <ResetButton handleRestart={handleRestart} />
          </div>
        ) : (
          <GameContainer
            range={range}
            levels={levels}
            number={number}
            setNumber={setNumber}
            startGame={startGame}
            handleSubmit={handleSubmit}
            previousGuesses={previousGuesses}
            attemptsLeft={attemptsLeft}
            handleRestart={handleRestart}
          />
        )}
      </div>
    </>
  );
}

export default App;
