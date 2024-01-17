"use client";
import Image from "next/image";
import { formattedTimestamp } from "@/app/helpers/Date";
import { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { useRecipeContext } from "@/app/context/RecipeContext";

type ResponseBubbleProps = {
  text?: string;
  sender?: string;
  isDelivered?: boolean;
};

const ResponseBubble = ({
  text = "Welcome to the world of finally knowing what to eat. Let's plan our meal.",
  sender = "Foodchat Assistant",
  isDelivered = false,
}: ResponseBubbleProps) => {
  const { saveRecipe } = useRecipeContext();
  const isList = /\b\d+\./.test(text); // Check if text contains a number followed by a dot
  const bubbleRef = useRef<HTMLDivElement | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [lastRecipeId, setLastRecipeId] = useState<number>(0);
  const [copyStatus, setCopyStatus] = useState<string>("Copy");

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEmail = () => {
    const subject = "Your Dinner!";
    const body = text;
    const mailTo = `mailto:?subject=${subject}&body=${body}`;

    window.location.href = mailTo;
  };

  const handleCopyRecipe = () => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied!")
    setTimeout(() => {
      setCopyStatus("Copy")
    }, 2000);
    setShowDropdown(!showDropdown);
  };

  const handleSaveRecipe = () => {
    // increment the ID
    const recipeId = lastRecipeId + 1;
    // regex to find the title
    const titleMatch = text.match(/Recipe: (.+)/);
    const recipeTitle = titleMatch ? titleMatch[1] : "Untitled Recipe";

    const recipe = {
      id: recipeId,
      title: recipeTitle,
      recipe: text
    };

    setLastRecipeId(recipeId);
    saveRecipe(recipe);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [text]);

  return (
    <div className="flex items-start gap-2.5 mb-6" ref={bubbleRef}>
      <Image
        className="w-8 h-8 rounded-full"
        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Jese image"
        width={20}
        height={20}
      />
      <div className="flex flex-col w-auto max-w-[400px] leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {sender}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formattedTimestamp()}
          </span>
        </div>
        {isList ? (
          <>
            <div className="flex items-end">
              <ol className="text-sm font-normal py-2 dark:text-white bg-slate-200 rounded-md text-black p-2">
                {text.split("\n").map((line, index) => (
                  <li key={index} className="mb-1">
                    {line.trim()}
                  </li>
                ))}
              </ol>
              <EllipsisVerticalIcon
                className="h-16 w-16 text-gray-400 hover:cursor-pointer"
                onClick={handleDropdownClick}
              />
            </div>
            {showDropdown && (
              <div className="absolute right-52 top-96 w-24 bg-white border border-gray-300 rounded-md mt-1 shadow-lg">
                <button
                  className="block w-full rounded-md text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleSaveRecipe}
                >
                  Save
                </button>
                <button
                  className="block rounded-md w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleEmail}
                >
                  Email
                </button>
                <button
                  className="block rounded-md w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleCopyRecipe}
                >
                  {copyStatus}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-end w-full">
            <p className="text-sm font-normal py-2 dark:text-white bg-slate-200 rounded-md text-black p-2">
              {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseBubble;
