"use client";
import { formattedTimestamp } from "@/app/helpers/Date";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

type InitiatorProps = {
  text?: string;
  sender?: string;
  isDelivered?: boolean;
};

const InitiatorBubble = ({
  text,
  sender,
  isDelivered = false,
}: InitiatorProps) => {
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  const { user, isAuthenticated, isLoading } = useAuth0();
  
  console.log(
    "The user is: ",
    user,
    "They are authenticated? ",
    isAuthenticated,
    "Is loading?",
    isLoading
  );

  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [text]);
  return (
    <div className="flex justify-end items-start gap-2.5 mb-4" ref={bubbleRef}>
      <div className="flex flex-col w-auto max-w-[400px] leading-1.5">
        <div className="flex justify-end items-center space-x-2 ltr:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {isAuthenticated ? user?.name : "Me"}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formattedTimestamp()}
          </span>
        </div>
        <p className="text-sm w-auto font-normal py-2 dark:text-white bg-sky-500 rounded-md text-white p-2">
          {text}
        </p>
        {isDelivered && (
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        )}
      </div>
      <Image
        className="w-8 h-8 rounded-full"
        src={user?.picture || ""}
        alt="Jese image"
        width={20}
        height={20}
      />
    </div>
  );
};

export default InitiatorBubble;
