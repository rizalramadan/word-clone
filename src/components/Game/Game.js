import React from "react";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(tentativeGuess) {
    const nextTentativeGuess = [...guesses, tentativeGuess];
    setGuesses(nextTentativeGuess);
  }
  return (
    <>
      <GuessResult guesses={guesses} />
      <GuessInput handleGuesses={handleGuesses} />
    </>
  );
}

export default Game;
