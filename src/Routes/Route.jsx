import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import GameOver from "../components/GameOver";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
  },
  {
    path: 'play',
    element: <Layout />
  },
  {
    path: 'game-over',
    element: <GameOver />
  }
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
