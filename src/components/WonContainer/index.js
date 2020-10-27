import React from "react";

export default function WonContainer({ steps, handlePlayAgain }) {
  return (
    <>
      <h1 className="you-won">You Won ! </h1>
      <h2>TOTAL STEPS: {steps}</h2>
      <button onClick={() => handlePlayAgain()}>Play Again</button>
    </>
  );
}
