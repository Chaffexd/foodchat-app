import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.NEXT_PUBLIC_ORG,
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  dangerouslyAllowBrowser: true,
});

export async function chatBot(userInput: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content:
          "You are an assistant helping users discover what they would like to eat. Suggest recipes they might like and provide a recipe, please explicitly define the recipe title when sharing a recipe like this, Recipe: BBQ Ribs. Then proceed to share the ingredients and recipe. On the initial page load, please prompt the user to provide more information about themself so you can tailor a recipe. For example: I am Shane and I like to eat meat based dishes. Do not speak about any other topic than food, if asked, reply by saying `All I know is food.`.",
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
