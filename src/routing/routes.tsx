import { createBrowserRouter } from "react-router-dom";

import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";
import Layout from "../pages/layout";
import HomePage from "../pages/HomePage";
import GamesDetailedPage from "../pages/GamesDetailedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/games/:id", element: <GamesDetailedPage /> },

      //   { index: true, element: <PlatformSelector /> },
      // {path: "", element:},
      // {path: "", element:},
    ],
  },
]);

export default router;
