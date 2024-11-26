import { Box, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import ClickableImage from "./ClickableImage";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading) {
    return null;
  }
  if (error) {
    throw error;
  }

  return (
    <Box marginTop={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={4}>
        {screenshots?.results.map((screenshot) => (
          <ClickableImage
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
