import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  const greeting = "Winc Recipe Checker";

  return (
    <Center minHeight="100vh" flexDir="column" bgColor="blue.400">
      {userRecipe ? (
        <RecipeItemPage recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" m={8} color="white">
            {greeting}
          </Heading>
          <RecipeListPage onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
