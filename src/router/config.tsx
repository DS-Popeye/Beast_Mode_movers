import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServicePage from "../pages/service/page";
import AboutPage from "../pages/about/page";
import LocationPage from "../pages/location/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/locations",
    element: <LocationPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;