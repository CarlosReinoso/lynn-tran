import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const secondaryColor = "#897171";
export const imageShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

export const centerItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const fontSizes = { xs: "0.875rem", sm: "1rem", md: "1rem" };

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
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: `1px solid ${secondaryColor}`,
          color: `${secondaryColor}`,
          borderRadius: "50px",
          "&:hover": {
            border: `1px solid ${secondaryColor}`,
            color: `${secondaryColor}`,
            opacity: 0.6,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
