import React from "react";

const InputNumber = ({ number, setNumber, handleSubmit }) => {
  return (
    <form className="row g-3">
      <div className="col-12">
        <input
          type="number"
          className="user-input-number"
          placeholder="Enter your guess"
          min={1}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          type="submit"
          className={`btn btn-success mx-2 enter-button ${
            number == null && "disabled"
          }`}
          onClick={(e) => handleSubmit(e)}>
          Enter
        </button>
      </div>
    </form>
  );
};

export default InputNumber;
