import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Link to={`games/${game.slug}`}>
            <Heading fontSize="xl">
              {game.name}
              <Emoji rating={game.rating_top} />
            </Heading>

            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} fontSize="14px" />
          </Link>
        </HStack>
      </CardBody>
    </Card>
  );
};
