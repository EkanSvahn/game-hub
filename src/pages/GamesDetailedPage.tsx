import { useParams } from "react-router-dom";
import { Game } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GamesDetailedPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GamesDetailedPage;
