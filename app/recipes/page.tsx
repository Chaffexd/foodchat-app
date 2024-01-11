"use client"
import AllRecipes from "../components/Recipes/AllRecipes"

const RecipesPage = () => {
  return (
    <div className="w-full h-screen">
        <h1 className="text-2xl pl-24 pt-12">My Saved Recipes </h1>
        <AllRecipes />
    </div>
  )
}

export default RecipesPage
