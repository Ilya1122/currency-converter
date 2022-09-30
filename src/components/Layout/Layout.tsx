import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import Header from "components/Header";

import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Header />

      <Outlet />
    </Box>
  );
};

export default Layout;
