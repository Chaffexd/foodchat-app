import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.NEXT_PUBLIC_ORG,
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  dangerouslyAllowBrowser: true
});

export async function chatBot(userInput: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content:
          "You are an assistant helping users discover what they would like to eat. Suggest recipes they might like and provide a guide if needed.",
      },
      {
        role: "user",
        content: userInput,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
