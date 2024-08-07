export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export enum ResultMessage {
  Win = "You win!",
  Lose = "You lose!",
  Draw = "It's a draw!",
  StartTheGame = "Start the game!",
}

export interface ChoicesProps {
  name: Choice;
  MeImg: string;
  AIImg: string;
}
