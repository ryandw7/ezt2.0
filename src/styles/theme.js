import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673AB7", // Deep purple
      light: "#9575CD", // Softer purple
      dark: "#512DA8", // Darker purple for contrast
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#424242", // Neutral gray for balance
      light: "#6D6D6D",
      dark: "#1B1B1B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5", // Off-white background
      paper: "#FFFFFF", // Pure white for cards and dialogs
    },
    text: {
      primary: "#212121", // Dark gray for readability
      secondary: "#757575", // Muted gray for less important text
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: "2.5em", fontWeight: 600 },
    h2: { fontSize: "1.75em", fontWeight: 600, color: 'white', backgroundColor: "#673AB7", padding: "16px", boxSizing:"border-box"},
    h3: { fontSize: "1.5em", fontWeight: 500, color: "#673AB7"},
    h4: { fontSize: "1.5em", fontWeight: 500 },
    h5: { fontSize: "1.25em", fontWeight: 400 },
    h6: { fontSize: "1rem", fontWeight: 400 },
    body1: { fontSize: "1em", fontWeight: 400 },
    body2: { fontSize: "0.7em", fontWeight: 400 },
    button: { fontSize: "1em", textTransform: "none", fontWeight: 500 },
  },
  shape: {
    borderRadius: 8, // Soft rounding for a modern feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          boxShadow: "none",
          ":hover": {
            boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          padding: "16px"
        },
      },
    },
    MuiTextField:{
     
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#673AB7",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
;