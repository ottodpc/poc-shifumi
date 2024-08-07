import React from "react";

interface ChoicePromptProps {}

const ChoicePrompt: React.FC<ChoicePromptProps> = () => {
  return (
    <h2 className="self-start mt-48 ml-12 text-5xl font-bold text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
      CHOOSE ONE↓
    </h2>
  );
};

export default ChoicePrompt;
