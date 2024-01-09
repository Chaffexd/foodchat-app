"use client";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type PromptProps = {
  onUserMessage: (input: string) => void;
};

const Prompt = ({ onUserMessage }: PromptProps) => {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmision = () => {
    if (prompt.trim() !== "") {
      setPrompt("");

      if (onUserMessage) {
        onUserMessage(prompt);
      }
    }
  };

  const handleEnterPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmision();
    }
  };

  return (
    <>
      <div className="p-2 border-2 border-solid border-slate-200 rounded-md flex">
        <label htmlFor="input"></label>
        <textarea
          id="input"
          name="input"
          placeholder="Describe what you like to eat"
          className="w-full resize-none"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={handleEnterPress}
        />
        <button onClick={handleSubmision}>
          <PaperAirplaneIcon className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default Prompt;
