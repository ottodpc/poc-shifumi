import React, { useState } from "react";
import { Choice } from "../interfaces";
import { getRandomChoice, getResult } from "../utils";

const ShifumiGame: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const handlePlayerChoice = (choice: Choice) => {
    const computer = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(getResult(choice, computer));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shifumi</h1>
      <div>
        {[Choice.Rock, Choice.Paper, Choice.Scissors].map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <h2>My choice: {playerChoice}</h2>
          <h2>Adversaire's choice: {computerChoice}</h2>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default ShifumiGame;
