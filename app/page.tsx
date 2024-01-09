"use client";

import InitiatorBubble from "./components/ChatBubble/InitiatorBubble";
import ResponseBubble from "./components/ChatBubble/ResponseBubble";
import Prompt from "./components/Input/Prompt";
import Title from "./components/Title/Title";
import { useState } from "react";

type MessageType = {
  text: string;
  isUser: boolean;
};

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: MessageType = {
      text,
      isUser,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleUserMessage = (userInput: string) => {
    console.log("User Input from root ==", userInput);
    addMessage(userInput, true);

    // gather AI response
    const aiResponse = 'AI response goes here';
    addMessage(aiResponse, false);
  };

  return (
    <main className="">
      <nav>
        <Title />
      </nav>
      <section className="w-full flex justify-center mt-14 flex-col items-center">
        <div className="w-96 bg-slate-100 min-h-96 p-2">
          {messages.map((message, index) => (
            <div key={index}>
              {message.isUser ? (
                <InitiatorBubble text={message.text} />
              ) : (
                <ResponseBubble text={message.text} />
              )}
            </div>
          ))}
        </div>
        <div className="w-96 mt-4">
          <Prompt onUserMessage={handleUserMessage} />
        </div>
      </section>
    </main>
  );
}
