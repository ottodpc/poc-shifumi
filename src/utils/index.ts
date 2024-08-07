import { Choice } from "../interfaces";

export const getRandomChoice = (): Choice => {
  const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const getResult = (
  playerChoice: Choice,
  computerChoice: Choice
): string => {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }
  if (
    (playerChoice === Choice.Rock && computerChoice === Choice.Scissors) ||
    (playerChoice === Choice.Paper && computerChoice === Choice.Rock) ||
    (playerChoice === Choice.Scissors && computerChoice === Choice.Paper)
  ) {
    return "You win!";
  }
  return "You lose!";
};
