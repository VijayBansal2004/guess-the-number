import React from "react";

const InputNumber = ({ number, setNumber, handleSubmit }) => {
  return (
    <form className="row g-3">
      <div className="col-12">
        <input
          type="number"
          className={`w-50`}
          placeholder="Enter your guess"
          min={1}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          type="submit"
          className={`btn btn-success mx-2 w-25 ${
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
