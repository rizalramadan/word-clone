import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuess }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        {numOfGuess === 1 ? "1 guess." : `${numOfGuess} guesses.`}
      </p>
    </Banner>
  );
}

export default WonBanner;
