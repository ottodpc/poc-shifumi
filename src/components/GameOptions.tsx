import React from "react";
import { ChoicesProps } from "../interfaces";
import { choices } from "../utils";

interface GameOptionsProps {
  getChoice: (choice: ChoicesProps) => void;
}

const GameOptions: React.FC<GameOptionsProps> = ({ getChoice }) => {
  return (
    <nav className="flex flex-wrap gap-10 items-center self-center mt-1 text-8xl font-bold text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl">
      {choices.map((option) => (
        <button
          key={option.name}
          onClick={() => getChoice(option)}
          className="self-stretch my-auto max-md:text-4xl"
        >
          {option.name.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default GameOptions;
