import { createContext, useContext, useState, ReactNode } from "react";

type Recipe = {
    id: number;
    recipe: string;
    title: string;
}

type MessageType = {
    text: string;
    isUser: boolean;
  };

type RecipeContextType = {
  savedRecipes: Recipe[];
  saveRecipe: (recipe: Recipe) => void;
  initialLoad: boolean;
  setInitialLoad: React.Dispatch<React.SetStateAction<boolean>>;
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

type RecipeProviderProps = {
  children: ReactNode;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeContextProvider: React.FC<RecipeProviderProps> = ({
  children,
}) => {
    
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  console.log("Saved Recipes: ", savedRecipes)

  const saveRecipe = (recipe: Recipe) => {
    setSavedRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const contextValue: RecipeContextType = {
    savedRecipes,
    saveRecipe,
    initialLoad,
    setInitialLoad,
    messages,
    setMessages,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
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
