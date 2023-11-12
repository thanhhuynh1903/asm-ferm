import React from "react";
import Home from "../components/pages/home/index.jsx";
import AboutUs from "../components/pages/about-us/index.jsx";
import UserManagement from "../components/pages/user-management/index.jsx";
import Articles from "../components/pages/articles/index.jsx";
import Shopping from "../components/pages/shopping/index.jsx";
import NotFound from "../components/pages/errors/not-found/index.jsx";
import Landing from "../components/pages/landing/index.jsx";

export const routes = [
  { id: 1, path: "/", element: <Home />, name: "Home" },
  { id: 2, path: "/about", element: <AboutUs />, name: "About" },
  { id: 3, path: "/articles", element: <Articles />, name: "Articles" },
  { id: 4, path: "/shopping", element: <Shopping />, name: "Shopping" },
  {
    id: 5,
    path: "/users",
    element: <UserManagement />,
    name: "UserManagement",
  },

  {
    id: 6,
    path: "/*",
    element: <NotFound />,
    name: "NotFound",
  },
];

export const navigationLinks = [
  { id: 1, path: "/landing", element: <Landing />, name: "Landing" },
  { id: 2, path: "/", element: <Home />, name: "Home" },
  { id: 3, path: "/about-us", element: <AboutUs />, name: "About" },
  { id: 4, path: "/articles", element: <Articles />, name: "Articles" },
  { id: 5, path: "/shopping", element: <Shopping />, name: "Shopping" },
];
