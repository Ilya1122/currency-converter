import React from "react";
import { RouteObject, Navigate } from "react-router-dom";

import Main from "pages/Main";
import Details from "pages/Details";
import Layout from "components/Layout";

import { ROUTE_PATH } from "./route-path";

export const routes: RouteObject = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: ROUTE_PATH.MAIN,
      element: <Main />,
    },
    {
      path: ROUTE_PATH.DETAILS,
      element: <Details />,
    },
    {
      path: "*",
      element: <Navigate to={ROUTE_PATH.MAIN} />,
    },
  ],
};
