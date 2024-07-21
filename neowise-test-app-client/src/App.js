import logo from "./logo.svg";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Router from "./router/router";
import SnackbarComponent from "./components/SnackbarComponent";
function App() {
  let p1 = "#ff9900";
  let p2 = "#fa9e14";
  let p3 = "#fac505";
  let p4 = "#242105";

  const theme = createTheme({
    typography: {
      fontFamily: `"Hind", "Helvetica", "Arial", sans-serif`,
      fontSize: 20,
    },

    palette: {
      background: {
        paper: "#fff",
      },
      text: {
        primary: p4,
        // secondary: '#46505A',
      },

      primaryPallete: {
        main: p1,
        light: p2,
        dark: p3,
        contrastText: p4,
      },

      darkPallete: {
        main: "#121212",
        light: "#121212",
        dark: "#121212",
        contrastText: "#121212",
      },
    },

    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: p1, // Change the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: p1, // Change the border color on focus
              },
            },
          },
        },
      },
    },
  });

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <Router />
        <SnackbarComponent />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
