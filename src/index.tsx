import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />

        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
