import React from "react";

const HardnessLevel = ({ startGame, setLevels }) => {
  return (
    <>
      {startGame === false && (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            value="easy"
            autoComplete="off"
            onClick={(e) => setLevels(e.target.value)}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Easy Level
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            value="medium"
            autoComplete="off"
            onClick={(e) => setLevels(e.target.value)}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Medium Level
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            value="hard"
            autoComplete="off"
            onClick={(e) => setLevels(e.target.value)}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Hard Level
          </label>
        </div>
      )}
    </>
  );
};

export default HardnessLevel;
