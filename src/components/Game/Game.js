import React from "react";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(tentativeGuess) {
    const nextTentativeGuess = [...guesses, tentativeGuess];
    setGuesses(nextTentativeGuess);
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} />
    </>
  );
}

export default Game;
