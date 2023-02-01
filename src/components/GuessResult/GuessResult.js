import React from "react";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((item, index) => {
        return (
          <p className="guess" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResult;
