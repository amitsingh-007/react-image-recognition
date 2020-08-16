import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
  typography: {
    fontFamily: "courier new",
  },
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
