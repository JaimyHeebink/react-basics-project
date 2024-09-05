import { Flex } from "@chakra-ui/react";
import { RecipeItemCard } from "./RecipeItemCard";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex
      gap={8}
      width="100%"
      flexWrap="wrap"
      flexDir={["column", "row"]}
      justify="center"
      alignItems="center"
    >
      {recipes.map((recipe) => (
        <RecipeItemCard
          onClick={onClick}
          recipe={recipe}
          key={recipes.recipe}
        />
      ))}
    </Flex>
  );
};
