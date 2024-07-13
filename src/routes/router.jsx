import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import { PrimaryLayout } from "../layout/PrimaryLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
