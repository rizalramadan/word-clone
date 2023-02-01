import React from "react";

function GuessInput({ handleGuesses }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    handleGuesses(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
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
