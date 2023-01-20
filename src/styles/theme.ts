import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      color: "red",
    },
  },
});

export default lightTheme;
