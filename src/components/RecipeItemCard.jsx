import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";

export const RecipeItemCard = ({ recipe, onClick }) => {
  const healthLabel = recipe.healthLabels.filter((label) =>
    ["Vegan", "Vegetarian"].includes(label)
  );

  return (
    <Card
      borderRadius="xl"
      maxW="xs"
      h="30rem"
      onClick={() => onClick(recipe)}
      cursor="pointer"
      backgroundColor="white"
      _hover={{ transform: "scale(1.01)" }}
    >
      <Image
        h={60}
        w="sm"
        borderRadius="10px 10px 0 0"
        src={recipe.image}
        alt={recipe.label}
      />
      <CardBody>
        <Flex flexDir="column">
          <Stack spacing="1.5" align="center">
            <Text
              fontSize={"xs"}
              color={"gray.400"}
              as={"b"}
              textTransform={"uppercase"}
            >
              {recipe.mealType}
            </Text>
            <Heading size="md" align="center">
              {recipe.label}
            </Heading>
            <Flex gap={2}>
              {healthLabel.map((health) => (
                <Badge colorScheme="purple" key={health}>
                  {health}
                </Badge>
              ))}
            </Flex>
            <Flex gap={2}>
              {recipe.dietLabels.map((diet) => (
                <Badge colorScheme="green" key={diet}>
                  {diet}
                </Badge>
              ))}
            </Flex>
            <Text>
              Dish:{" "}
              {recipe.dishType.map((dish) => (
                <Text as={"b"} textTransform={"capitalize"} key={dish}>
                  {dish}
                </Text>
              ))}
            </Text>
            <Text>Cautions:</Text>
            <Flex gap={2}>
              {recipe.cautions.map((caution) => (
                <Badge colorScheme="red" key={caution}>
                  {caution}
                </Badge>
              ))}
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};
