import React from "react";
import { Choice } from "../interfaces";

interface ScoreDisplayProps {
  player: "Me" | "AI";
  score: number;
  imageSrc?: string;
  choice?: Choice;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  player,
  score,
  imageSrc,
  choice,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div
        className={`flex flex-col grow items-${
          player === "Me" ? "end" : "start"
        } font-bold text-black whitespace-nowrap h-[456px] max-md:mt-7 max-md:max-w-full`}
      >
        <p
          className={`text-8xl max-md:text-4xl ${
            player === "Me" ? "text-right" : "text-left"
          } `}
        >
          {player}
        </p>
        <p
          className={`text-3xl ${
            player === "Me" ? "text-right" : "text-left"
          } max-md:text-1xl`}
        >
          {choice}
        </p>
        <p
          className={`text-3xl ${
            player === "Me" ? "text-right" : "text-left"
          } max-md:text-1xl`}
        >
          {score}
        </p>
        <img
          loading="lazy"
          src={imageSrc}
          alt={"score representation"}
          className="object-contain max-w-full aspect-[2.43] w-[682px]"
        />
      </div>
    </div>
  );
};

export default ScoreDisplay;
