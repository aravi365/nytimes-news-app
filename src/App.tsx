import React from "react";
import "./App.css";
import Home from "./pages";
import Header from "./components/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
