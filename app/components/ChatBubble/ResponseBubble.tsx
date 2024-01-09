"use client"
import Image from "next/image";
import { formattedTimestamp } from "@/app/helpers/Date";
import { useEffect, useRef } from "react";

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
  const isList = /\b\d+\./.test(text); // Check if text contains a number followed by a dot
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [text])

  return (
    <div className="flex items-start gap-2.5 mb-6" ref={bubbleRef}>
      <Image
        className="w-8 h-8 rounded-full"
        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Jese image"
        width={20}
        height={20}
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {sender}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formattedTimestamp()}
          </span>
        </div>
        {isList ? (
          <ol className="text-sm font-normal py-2 dark:text-white bg-slate-200 rounded-md text-black p-2">
            {text.split("\n").map((line, index) => (
              <li key={index} className="mb-1">
                {line.trim()}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm font-normal py-2 dark:text-white bg-slate-200 rounded-md text-black p-2">
            {text}
          </p>
        )}
        {isDelivered && (
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        )}
      </div>
    </div>
  );
};

export default ResponseBubble;