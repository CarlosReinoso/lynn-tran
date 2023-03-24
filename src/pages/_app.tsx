import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "@/styles/theme";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );
};

export default MyApp;
