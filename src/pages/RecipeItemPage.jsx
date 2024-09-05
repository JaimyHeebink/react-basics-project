import {
  Center,
  Image,
  Heading,
  Text,
  Flex,
  Button,
  Badge,
  Grid,
  Box,
  Wrap,
  SimpleGrid,
} from "@chakra-ui/react";

export const RecipeItemPage = ({ recipe, onClick }) => {
  const kcal = recipe.totalNutrients.ENERC_KCAL.quantity;
  const kcalRound = kcal.toFixed();

  const carb = recipe.totalNutrients.CHOCDF.quantity;
  const carbRound = carb.toFixed();

  const pro = recipe.totalNutrients.PROCNT.quantity;
  const proRound = pro.toFixed();

  const fat = recipe.totalNutrients.FAT.quantity;
  const fatRound = fat.toFixed();

  const chol = recipe.totalNutrients.CHOLE.quantity;
  const cholRound = chol.toFixed();

  const sodi = recipe.totalNutrients.NA.quantity;
  const sodiRound = sodi.toFixed();

  return (
    <Center bgColor="white" maxW="100vh">
      <Grid>
        <Button w="fit-content" m={1} onClick={() => onClick()}>
          Back to overview
        </Button>
        <Image h="sm" w="100%" src={recipe.image} alt={recipe.label} />
        <SimpleGrid columns={2} m={6}>
          <Box w={"100%"}>
            <Text
              fontSize={"xs"}
              color={"gray.400"}
              as={"b"}
              textTransform={"uppercase"}
            >
              {recipe.mealType}
            </Text>
            <Heading size="md">{recipe.label}</Heading>
            <Text>
              Total cooking time:{" "}
              <Text as={"b"}>{recipe.totalTime} Minutes</Text>
            </Text>
            <Text>
              Servings: <Text as={"b"}>{recipe.yield}</Text>
            </Text>
            <Text as={"b"}>Ingredients:</Text>

            {recipe.ingredientLines.map((ingredients) => (
              <Text key={ingredients}>{ingredients}</Text>
            ))}
          </Box>
          <Box w={"100%"}>
            <Text>Health labels:</Text>
            <Wrap>
              {recipe.healthLabels.map((health) => (
                <Badge colorScheme="purple" key={health}>
                  {health}
                </Badge>
              ))}
            </Wrap>
            <Text>Diet:</Text>
            <Flex gap={2}>
              {recipe.dietLabels.map((diet) => (
                <Badge colorScheme="green" key={diet}>
                  {diet}
                </Badge>
              ))}
            </Flex>
            <Text>Cautions:</Text>
            <Flex gap={2}>
              {recipe.cautions.map((caution) => (
                <Badge colorScheme="red" key={caution}>
                  {caution}
                </Badge>
              ))}
            </Flex>
            <Text as={"b"}>Total nutrients:</Text>
            <Wrap spacing={3}>
              <Text as={"b"}>CALORIES: {kcalRound}</Text>
              <Text as={"b"}>CARBS: {carbRound}g</Text>
              <Text as={"b"}>PROTEIN: {proRound}g</Text>
              <Text as={"b"}>FAT: {fatRound}g</Text>
              <Text as={"b"}>CHOLESTEROL: {cholRound}mg</Text>
              <Text as={"b"}>SODIUM: {sodiRound}mg</Text>
            </Wrap>
          </Box>
        </SimpleGrid>
      </Grid>
    </Center>
  );
};
