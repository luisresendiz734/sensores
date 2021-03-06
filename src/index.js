import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { DataProvider } from "./context/DataContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#20232a",
    },
    secondary: {
      main: "#2b303a",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </DataProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
