import { data } from "../utils/data";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";
import { RecipeItems } from "../components/RecipeItems";

export const RecipeListPage = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const recipes = data.hits.map((item) => item.recipe);

  const matchedRecipes = recipes.filter((item) => {
    return item.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} mb={8} />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
