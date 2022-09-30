import React from "react";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";

import styles from "./Input.module.scss";

const Input: React.FC<OutlinedInputProps> = ({ label, ...rest }) => {
  return (
    <FormControl className={styles.container} fullWidth>
      <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>

      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label={label}
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
