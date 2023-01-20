import { createTheme } from "@mui/material/styles";

//#363a16
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#363a16",
    },
    text: {
      primary: "white",
    },
  },

  typography: {
    h1: {
      color: "white",
    },
  },
});

export default lightTheme;
