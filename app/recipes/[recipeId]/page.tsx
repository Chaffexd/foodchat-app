"use client";
import { useRecipeContext } from "@/app/context/RecipeContext";

const RecipeDetailPage = ({ params }: { params: { recipeId: string } }) => {
  const { savedRecipes } = useRecipeContext();
  // console.log(params.recipeId.toLowerCase().replace(/\s+/g, ""));
  // console.log(savedRecipes[0].title.toLowerCase().replace(/ /g, "-"));

  // this will take the param from the URL and match it to the one in the context
  const recipeDetails = savedRecipes.find(
    (recipe) =>
      recipe.title.toLocaleLowerCase().replace(/ /g, "-") ===
      params.recipeId.toLowerCase().replace(/\s+/g, "")
  );
  console.log("Matching recipe: ", recipeDetails);

  const isList = (text: string) => /\b\d+\./.test(text);

  return (
    <div className="w-full px-20 mt-12">
      <h1 className="text-4xl mb-4">{recipeDetails?.title}</h1>
      {isList(recipeDetails?.recipe || "") ? (
        <div className="flex items-end">
          <ol className="text-md mb-20 font-normal py-2 dark:text-white bg-slate-200 rounded-md text-black p-2">
            {recipeDetails?.recipe.split("\n").map((line, index) => (
              <li key={index} className="mb-1">
                {line.trim()}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <p className="text-xl">{recipeDetails?.recipe}</p>
      )}
    </div>
  );
};

export default RecipeDetailPage;
