import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import { PrimaryLayout } from "../layout/PrimaryLayout";
import DigitalDevelopment from "../pages/digital-development/DigitalDevelopment";
import BrandingAndDesign from "../pages/branding-and-design/BrandingAndDesign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/digital-development", element: <DigitalDevelopment /> },
      { path: "/branding-and-design", element: <BrandingAndDesign /> },
    ],
  },
]);
