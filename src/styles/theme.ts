import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#363a16",
    },
    text: {
      primary: "#fff",
    },
  },

  typography: {
    h1: {
      color: "white",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
