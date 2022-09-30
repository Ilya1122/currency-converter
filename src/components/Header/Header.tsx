import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { IconButton } from "@mui/material/";

import { useRoutes } from "hooks/useRoutes";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { redirectToMainPage } = useRoutes();

  return (
    <header className={styles.header}>
      <IconButton onClick={redirectToMainPage}>
        <MonetizationOnIcon className={styles.logo} />
      </IconButton>
    </header>
  );
};

export default Header;
