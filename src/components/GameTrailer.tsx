import React from "react";
import { Game } from "../entities/Game";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);
  console.log(trailers);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !trailers) {
    return null;
  }

  const firstTrailer = trailers?.results[0];
  if (!firstTrailer) return null;

  return (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  );
};

export default GameTrailer;
