"use client";
import InitiatorBubble from "./components/ChatBubble/InitiatorBubble";
import ResponseBubble from "./components/ChatBubble/ResponseBubble";
import Prompt from "./components/Input/Prompt";
import Title from "./components/Title/Title";
import { useEffect, useState } from "react";
import { chatBot } from "./helpers/api";

type MessageType = {
  text: string;
  isUser: boolean;
};

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(false);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: MessageType = {
      text,
      isUser,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleUserMessage = async (userInput: string) => {
    console.log("User Input from root ==", userInput);
    addMessage(userInput, true);

    setLoading(true);
    try {
      // gather AI response
      const aiResponse = await chatBot(userInput);
      addMessage(aiResponse, false);
    } catch (error) {
      console.error("Error getting response from GPT", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(!initialLoad) {
      handleUserMessage("Hello Foodchat Assistant! 👋🏻");
      setInitialLoad(true);
    }
  }, []);

  return (
    <main>
      <section className="w-full flex justify-center mt-6 flex-col items-center">
        <Title />
        <div className="w-2/5 min-h-96 max-h-96 p-2 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index}>
              {message.isUser ? (
                <InitiatorBubble text={message.text} />
              ) : (
                <ResponseBubble text={message.text} />
              )}
            </div>
          ))}
          {loading && <p className="loader ml-6"></p>}
        </div>
        <div className="w-2/5 mt-4">
          <Prompt onUserMessage={handleUserMessage} />
        </div>
      </section>
    </main>
  );
}
