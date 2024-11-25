import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";
import { Trailer } from "./Trailer";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  publishers: Publisher[];
  trailer: Trailer[];
}
