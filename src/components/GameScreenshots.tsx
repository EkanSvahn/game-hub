import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);
  console.log(screenshots);

  if (isLoading) {
    return null;
  }
  if (error) {
    throw error;
  }

  return (
    <Box marginTop={4}>
      <SimpleGrid columns={2} spacing={4} minChildWidth="lg">
        {screenshots?.results.map((screenshot) => (
          <Image
            key={screenshot.id}
            src={screenshot.image}
            alt={screenshot.id.toString()}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshots;
