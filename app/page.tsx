"use client";
import InitiatorBubble from "./components/ChatBubble/InitiatorBubble";
import ResponseBubble from "./components/ChatBubble/ResponseBubble";
import Prompt from "./components/Input/Prompt";
import Title from "./components/Title/Title";
import { useEffect, useState } from "react";
import { chatBot } from "./helpers/api";
import { useAuth0 } from "@auth0/auth0-react";
import { useRecipeContext } from "./context/RecipeContext";
import Link from "next/link";

type MessageType = {
  text: string;
  isUser: boolean;
};

export default function Home() {
  const { initialLoad, setInitialLoad, messages, setMessages } = useRecipeContext();
  // const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: MessageType = {
      text,
      isUser,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleUserMessage = async (userInput: string | null) => {
    if (userInput !== null) {
      console.log("User Input from root ==", userInput);
      addMessage(userInput, true);

      setLoading(true);
      try {
        // gather AI response
        const aiResponse = await chatBot(userInput);
        addMessage(aiResponse!, false);
      } catch (error) {
        console.error("Error getting response from GPT", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!initialLoad) {
      handleUserMessage("Hello Foodchat Assistant! 👋🏻");
      setInitialLoad(true);
    }
  }, []);

  return (
    <main>
      <title>Foodchat | Discover something new today</title>
      <meta name="description" content="The foodchat app helps you discover what you should eat for your next meal."></meta>
      <section className="w-full flex justify-center mt-6 flex-col items-center">
        <Title />
        {isAuthenticated ? (
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
        ) : (
          <div className="w-2/5 min-h-96 max-h-96 p-2 overflow-y-auto">
            {isLoading ? (
              <div></div>
            ) : (
              <h1 className="bg-red-400 p-4 rounded-md text-white text-center mt-12">
                Please <Link href={"/login"} className="underline hover:text-slate-300">log in</Link> to use the chat assistant!
              </h1>
            )}
          </div>
        )}
        <div className="w-2/5 mt-4">
          {isAuthenticated && <Prompt onUserMessage={handleUserMessage} />}
        </div>
      </section>
    </main>
  );
}
