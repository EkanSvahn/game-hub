import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => {
      if (!slug) throw new Error("Slug is undefined");
      return apiClient.get(slug);
    },
  });

export default useGame;
