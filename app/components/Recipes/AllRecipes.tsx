import { useRecipeContext } from "@/app/context/RecipeContext";
import Link from "next/link";

const AllRecipes = () => {
  const { savedRecipes } = useRecipeContext();
  console.log("All Recipes page: ", savedRecipes);
  return (
    <div className="pl-24 mt-8">
      <ul>
        {savedRecipes.map((recipe) => (
          <li className="list-disc mb-2" key={recipe.id}>
            <Link
            className="hover:underline hover:text-blue-400 text-blue-600"
              href={`/recipes/${recipe.title
                .toLocaleLowerCase()
                .replace(/ /g, "-")}`}
            >
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRecipes;
