import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import lightTheme from "@/styles/theme";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );
};

export default MyApp;
