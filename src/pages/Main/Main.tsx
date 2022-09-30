import React from "react";
import { Typography, Box } from "@mui/material";

import Input from "components/UI/Input";

import styles from "./Main.module.scss";

const Main: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title} variant="h1">
        Convert
      </Typography>

      <Box className={styles.block}>
        <Input label="Amount" />
      </Box>
    </Box>
  );
};

export default Main;
