import React from "react";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

const answer = sample(WORDS);
console.log({ answer });

function Game() {
  // Game status 'running' / 'won' / 'lost'
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(tentativeGuess) {
    const nextTentativeGuess = [...guesses, tentativeGuess];
    setGuesses(nextTentativeGuess);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextTentativeGuess.length >= 6) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuess={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
