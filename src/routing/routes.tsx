import { createBrowserRouter } from "react-router-dom";
import GamesDetailedPage from "../pages/GamesDetailedPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/games/:id", element: <GamesDetailedPage /> },
    ],
  },
]);

export default router;
