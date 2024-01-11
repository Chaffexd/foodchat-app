import { createContext, useContext, useState, ReactNode } from "react";

type Recipe = {
    id: number;
    recipe: string;
    title: string;
}

type RecipeContextType = {
  savedRecipes: Recipe[];
  saveRecipe: (recipe: Recipe) => void;
};

type RecipeProviderProps = {
  children: ReactNode;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeContextProvider: React.FC<RecipeProviderProps> = ({
  children,
}) => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  console.log("Saved Recipes: ", savedRecipes)

  const saveRecipe = (recipe: Recipe) => {
    setSavedRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ savedRecipes, saveRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};
