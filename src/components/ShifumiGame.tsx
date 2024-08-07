import React, { useState } from "react";
import { ChoicesProps, ResultMessage } from "../interfaces";
import { getRandomChoice, getResult } from "../utils";
import ScoreDisplay from "./ScoreDisplay";
import ChoicePrompt from "./ChoicePrompt";
import GameOptions from "./GameOptions";

interface RockPaperScissorsProps {}

const ShifumiGame: React.FC<RockPaperScissorsProps> = () => {
  const [playerChoice, setPlayerChoice] = useState<ChoicesProps | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoicesProps | null>(
    null
  );
  const [result, setResult] = useState<ResultMessage>(
    ResultMessage.StartTheGame
  );
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const handlePlayerChoice = async (choice: ChoicesProps) => {
    const computer = getRandomChoice();
    const {
      message,
      playerScore: newPlayerScore,
      computerScore: newComputerScore,
    } = await getResult(choice.name, computer.name, playerScore, computerScore);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(message);
    setPlayerScore(newPlayerScore);
    setComputerScore(newComputerScore);
  };

  return (
    <main className="flex overflow-hidden flex-col py-20 pl-6 bg-white max-md:pl-5">
      <section className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {playerChoice && computerChoice ? (
            <>
              <ScoreDisplay
                choice={playerChoice?.name}
                player="Me"
                score={playerScore}
                imageSrc={playerChoice?.MeImg}
              />
              <ScoreDisplay
                choice={computerChoice?.name}
                player="AI"
                score={computerScore}
                imageSrc={computerChoice?.AIImg}
              />
            </>
          ) : null}
        </div>
        <p className="text-4xl text-center mt-10">{result}</p>
      </section>
      <ChoicePrompt />
      <GameOptions getChoice={handlePlayerChoice} />
    </main>
  );
};

export default ShifumiGame;
