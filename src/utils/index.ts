import { Choice, ChoicesProps, ResultMessage } from "../interfaces";
import AIPaper from "../assets/img/AIPaper.png";
import AIRock from "../assets/img/AIRock.png";
import AIScissors from "../assets/img/AIScissors.png";
import MePaper from "../assets/img/MePaper.png";
import MeRock from "../assets/img/MeRock.png";
import MeScissors from "../assets/img/MeScissors.png";

export const choices: ChoicesProps[] = [
  { name: Choice.Rock, MeImg: MeRock, AIImg: AIRock },
  { name: Choice.Paper, MeImg: MePaper, AIImg: AIPaper },
  { name: Choice.Scissors, MeImg: MeScissors, AIImg: AIScissors },
];

export const getRandomChoice = (): ChoicesProps => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const getResult = (
  playerChoice: Choice,
  computerChoice: Choice,
  playerScore: number,
  computerScore: number
): { message: ResultMessage; playerScore: number; computerScore: number } => {
  if (playerChoice === computerChoice) {
    return {
      message: ResultMessage.Draw,
      playerScore,
      computerScore,
    };
  }
  if (
    (playerChoice === Choice.Rock && computerChoice === Choice.Scissors) ||
    (playerChoice === Choice.Paper && computerChoice === Choice.Rock) ||
    (playerChoice === Choice.Scissors && computerChoice === Choice.Paper)
  ) {
    return {
      message: ResultMessage.Win,
      playerScore: playerScore + 1,
      computerScore,
    };
  }
  return {
    message: ResultMessage.Lose,
    playerScore,
    computerScore: computerScore + 1,
  };
};
