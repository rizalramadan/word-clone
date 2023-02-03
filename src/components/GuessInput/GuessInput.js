import React from "react";

function GuessInput({ handleGuesses, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters. 💖");
      return;
    }
    handleGuesses(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const newTentativeGuess = event.target.value.toUpperCase();
          setTentativeGuess(newTentativeGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
